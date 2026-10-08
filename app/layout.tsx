import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "야플릭스",
  description: "영상 스트리밍",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header className="topbar">
          <Link href="/" className="logo">
            야플릭스
          </Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
