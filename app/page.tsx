import { byCategory, videos } from "@/lib/videos";
import VideoCard from "@/components/VideoCard";
import Link from "next/link";

export default function Home() {
  const featured = videos[0];
  const rows = byCategory();

  return (
    <>
      <section className="hero" style={{ background: `linear-gradient(90deg, #000 30%, ${featured.color})` }}>
        <h1>{featured.title}</h1>
        <p>{featured.description}</p>
        <Link href={`/watch/${featured.id}`} className="play-btn">
          ▶ 재생
        </Link>
      </section>

      {Object.entries(rows).map(([category, list]) => (
        <section key={category} className="row">
          <h2>{category}</h2>
          <div className="rail">
            {list.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
