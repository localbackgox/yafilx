# 야플릭스

Next.js로 만든 영상 스트리밍 사이트입니다.

## 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다.

## 구조

- `app/page.tsx`: 홈 화면 (대표 영상, 카테고리별 목록)
- `app/watch/[id]/page.tsx`: 영상 재생 페이지
- `components/Player.tsx`: HLS 재생기 (hls.js)
- `lib/videos.ts`: 영상 목록 (지금은 샘플 데이터)

## 콘텐츠

직접 제작했거나 배포 권리를 가진 영상만 올립니다. 지금 들어 있는 샘플은
Blender 재단의 오픈 무비(CC BY 3.0)이며 Mux의 공개 테스트 스트림으로 재생합니다.

## 다음 단계

1. 회원가입과 로그인, 시청 기록(이어보기)
2. 영상 정보를 PostgreSQL로 옮기기
3. 관리자 업로드 → FFmpeg로 HLS 변환 → 스토리지와 CDN 배포
4. 검색
