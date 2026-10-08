import { notFound } from "next/navigation";
import { getVideo, videos } from "@/lib/videos";
import Player from "@/components/Player";

export function generateStaticParams() {
  return videos.map((v) => ({ id: v.id }));
}

export default async function WatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const video = getVideo(id);
  if (!video) notFound();

  return (
    <article className="watch">
      <Player src={video.hlsUrl} />
      <h1>{video.title}</h1>
      <p className="meta">
        {video.year} · {video.duration} · {video.category}
      </p>
      <p>{video.description}</p>
      <p className="license">{video.license}</p>
    </article>
  );
}
