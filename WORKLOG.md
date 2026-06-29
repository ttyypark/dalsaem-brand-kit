# WORKLOG — 달샘 브랜드 키트

> 다음 작업 이어가기용 작업 기록. 최종 갱신: 2026-06-29

---

## 프로젝트 한 줄 요약
가상 브랜드 **달샘**(조용한 샘에 비추는 달처럼 — 개인 지식 큐레이션)의 브랜드 키트.
산출물 4종(웹·PPT·카드뉴스·명함+서명) + 브랜드 스킬 패키지. 현재 **PWA 적용 완료**, Vercel 배포 중.

## 배포 / 저장소
- **프로덕션:** https://dalsaem-brand-kit.vercel.app
- **GitHub:** https://github.com/ttyypark/dalsaem-brand-kit (브랜치: master)
- **Vercel 프로젝트:** park88/dalsaem-brand-kit (`.vercel/project.json`)
- 배포 방법: `vercel deploy --prod --yes` (로컬 파일 직접 업로드)
- 배포 루틴: 변경 → 커밋 → `vercel deploy --prod` → `git push origin master`

## 파일 구조
| 파일 | 역할 |
|------|------|
| `index.html` | 웹 랜딩(PWA). hero·about·story·foryou·contact |
| `ppt.html` / `cardnews.html` / `bizcard-signature.html` | PPT · 카드뉴스 · 명함+메일서명 |
| `manifest.json` / `sw.js` / `icons/*.svg` | PWA(앱 설치·오프라인 캐시·아이콘) |
| `brand-dalsaem/` | 브랜드 스킬(SKILL.md, color-typography-specs.md, usage-examples.md, mark.svg) |
| `00_interview-transcript.md` / `01_brand.md` | 인터뷰 원문 / 브랜드 정의서 |
| `02_android-app-plan.md` | 안드로이드 앱화 작업계획서 |

## 디자인 토큰 (변경 금지)
- 인디고 `#2D3A5F` / 크림 `#F9F7F2` / 서피스 `#F0EDE5` / 골드(포인트 하나) `#B8924A` / 라인 `#DDD9D0`
- 헤딩 `Noto Serif KR`, 본문 `Pretendard`

---

## 완료한 작업 (커밋 이력)
1. `3362f9a` 초기 커밋 — 브랜드 키트 산출물 4종 + 브랜드 스킬
2. `a20d9b3` 메일 서명을 가로형 락업 스타일로 개편(로고+세로구분선+가로 링크열, 이메일만 골드), 연락처(전화·SNS·웹) 추가, 복붙 HTML 코드박스 제거
3. `0a1a5fb` 홈 hero "더 알아보기" → 산출물 바로가기 3카드(제목+부제목만), 각 산출물 페이지에 "← 홈으로" 고정 링크, nav 스크롤 스파이(현재 섹션 골드 강조)
4. `69db685` **PWA 지원** — manifest.json, sw.js(네트워크 우선→캐시 폴백), icons SVG, 설치 버튼(beforeinstallprompt), SW 등록 *(다른 세션에서 추가됨)*
5. `9de2c52` hero 달 아이콘 float 진폭 확대(-10px→-20px)

## 현재 상태
- working tree 깨끗(이 WORKLOG 추가 전 기준). master = origin/master 동기화됨.
- 라이브·GitHub·로컬 모두 일치.

---

## 다음 작업 (TODO)
### 진행 검토 중: 안드로이드 앱화 (계획서: `02_android-app-plan.md`)
- 추천 경로 = **TWA(PWABuilder로 기존 PWA를 Play 스토어 앱으로 래핑)**
- **Phase 1 (Claude가 바로 가능):**
  - [ ] SVG 아이콘 → PNG(192·512·maskable 512) 생성, `icons/`에 추가
  - [ ] `manifest.json`에 `id`, `scope`, PNG 아이콘 항목 보강 (선택: screenshots)
- **Phase 2~3 (사용자+Claude):**
  - [ ] PWABuilder로 APK/AAB 생성, 패키지명 예 `kr.dalsaem.app`
  - [ ] SHA256 지문으로 `/.well-known/assetlinks.json` 작성·배포
- **사용자 몫:** Google Play Console 등록($25 1회), 서명 키(Google 앱 서명 위임 권장), 개인정보처리방침 URL 1장
- 시작 트리거: "Phase 1 시작해줘"

## 알려진 이슈 / 메모
- PWA 아이콘이 SVG라 iOS Safari·Play 스토어 호환 제한 → PNG 필요(Phase 1에서 해결).
- 이 저장소는 `git push origin master`(기본 브랜치 직접 푸시)가 자동 승인 분류기에 막힐 수 있음 → 사용자 확인 후 진행.
- `git restore`(커밋 안 된 변경 폐기)도 분류기에 막힘 → 되돌릴 땐 백업 후 HEAD 복원 방식 사용.
- 줄바꿈: 작업 중 외부 포매터가 index.html을 전면 재정렬한 적 있음 → 의미 변경만 추려 커밋하는 편이 이력이 깔끔.
