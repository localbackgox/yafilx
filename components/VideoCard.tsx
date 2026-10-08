import Link from "next/link";
import type { Video } from "@/lib/videos";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <Link href={`/watch/${video.id}`} className="card" style={{ background: video.color }}>
      <span className="card-title">{video.title}</span>
      <span className="card-meta">{video.duration}</span>
    </Link>
  );
}
