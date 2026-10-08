"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

// HLS(.m3u8) 재생기. Safari는 HLS를 기본 지원하고, 나머지 브라우저는 hls.js로 재생합니다.
export default function Player({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }
    if (!Hls.isSupported()) return;

    const hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(video);
    return () => hls.destroy();
  }, [src]);

  return <video ref={ref} className="player" controls playsInline />;
}
