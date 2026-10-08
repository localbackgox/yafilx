// 샘플 카탈로그. 나중에 DB(PostgreSQL)로 옮길 자리입니다.
// 지금 들어 있는 영상은 모두 Mux가 공개한 테스트 스트림이며,
// Blender 재단의 오픈 무비(크리에이티브 커먼즈 라이선스)입니다.

export type Video = {
  id: string;
  title: string;
  description: string;
  year: number;
  duration: string;
  category: string;
  hlsUrl: string;
  color: string; // 포스터 이미지가 생기기 전까지 카드 배경색
  license: string;
};

export const videos: Video[] = [
  {
    id: "big-buck-bunny",
    title: "Big Buck Bunny",
    description: "덩치 큰 토끼가 숲속 친구들을 괴롭히는 설치류 셋에게 복수하는 이야기입니다.",
    year: 2008,
    duration: "10분",
    category: "애니메이션",
    hlsUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    color: "#3d6b2f",
    license: "CC BY 3.0 · Blender Foundation",
  },
  {
    id: "tears-of-steel",
    title: "Tears of Steel",
    description: "미래의 암스테르담, 과학자들이 거대한 로봇으로부터 세상을 지키려 합니다.",
    year: 2012,
    duration: "12분",
    category: "SF",
    hlsUrl: "https://test-streams.mux.dev/tos_ismc/main.m3u8",
    color: "#2b3f66",
    license: "CC BY 3.0 · Blender Foundation",
  },
];

export function getVideo(id: string): Video | undefined {
  return videos.find((v) => v.id === id);
}

export function byCategory(): Record<string, Video[]> {
  return videos.reduce<Record<string, Video[]>>((acc, v) => {
    (acc[v.category] ??= []).push(v);
    return acc;
  }, {});
}
