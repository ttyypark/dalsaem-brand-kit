# 02_android-app-plan — 달샘 안드로이드 앱화 작업계획서

> 작성일: 2026-06-29
> 대상 사이트: https://dalsaem-brand-kit.vercel.app (이미 PWA 적용 완료)

---

## 0. 한 줄 결론

달샘은 **이미 PWA**(manifest.json · sw.js · 아이콘 · 오프라인 캐시)라서, 안드로이드 앱으로 만드는 가장 빠른 길은
**기존 PWA를 그대로 감싸는 TWA(Trusted Web Activity)** 방식이다. 새로 코드를 다시 짤 필요가 없다.

---

## 1. 안드로이드 앱화 3가지 경로 비교

| 경로 | 방식 | 장점 | 단점 | 추천도 |
|------|------|------|------|--------|
| **A. PWA 직접 설치** | 안드로이드 Chrome에서 "홈 화면에 추가" | 비용 0, 지금 당장 가능, 스토어 불필요 | Play 스토어에 안 올라감, 검색 노출 X | ★★☆ (지금 즉시) |
| **B. TWA (추천)** | PWABuilder/Bubblewrap로 PWA를 APK·AAB로 감싸 Play 스토어 등록 | 기존 PWA 재사용, 자동 업데이트(웹만 고치면 됨), 진짜 앱 | Play 개발자 등록($25), 서명키·assetlinks 설정 필요 | ★★★ |
| **C. Capacitor 네이티브 래핑** | 웹 자산을 네이티브 WebView 컨테이너에 번들 | 푸시·카메라 등 네이티브 기능 확장 용이, 완전 오프라인 번들 | 빌드 환경(Android Studio) 필요, 유지보수 복잡 | ★☆☆ (기능 확장 시) |

→ **선택: 경로 B (TWA via PWABuilder)** — 지금 단계(브랜드 쇼케이스)에 가장 적합. 향후 네이티브 기능이 필요해지면 C로 전환.

---

## 2. 현재 상태 점검 (이미 갖춰진 것)

- [x] `manifest.json` — name, short_name, display:standalone, theme_color, 아이콘 정의
- [x] `sw.js` — 핵심 페이지 캐싱(네트워크 우선 → 캐시 폴백), 오프라인 동작
- [x] `icons/icon-192.svg`, `icon-512.svg` (maskable 포함)
- [x] HTTPS 도메인 (Vercel 제공)
- [x] 설치 버튼(beforeinstallprompt) + SW 등록

## 3. 보완해야 할 것 (TWA 전제조건)

| # | 항목 | 이유 | 담당 |
|---|------|------|------|
| 1 | **PNG 아이콘 생성** (192·512·maskable 512) | Play 스토어와 일부 안드로이드는 SVG 미지원, PNG 필요 | Claude |
| 2 | **`/.well-known/assetlinks.json`** 추가·배포 | TWA가 주소창 없이 전체화면으로 뜨려면 Digital Asset Links 검증 필요 | Claude(파일) + 사용자(SHA256 지문 제공) |
| 3 | **manifest 보강** (`id`, `scope`, 선택: `screenshots`, `categories`) | Play 스토어 등록 품질·리치 리스팅 | Claude |
| 4 | **서명 키스토어(.jks) 생성** | APK/AAB 서명 필수, 분실 시 업데이트 불가 → 안전 보관 | 사용자(또는 Play 앱 서명 위임) |
| 5 | **Google Play Console 계정** ($25 1회) | 스토어 배포 필수 | 사용자 |

---

## 4. 작업 단계 (Phase)

### Phase 1 — 웹/PWA 마감 (Claude, ~0.5일)
1. PNG 아이콘 생성 (SVG → 192/512/maskable PNG) 후 `icons/`에 추가
2. `manifest.json`에 `id`, `scope`, PNG 아이콘 항목 추가
3. (선택) 스토어용 스크린샷 2~3장 생성
4. 변경 커밋 + Vercel 배포

### Phase 2 — TWA 패키지 생성 (사용자 주도, Claude 안내)
1. **PWABuilder**(웹 UI, 가장 쉬움) 접속 → `https://dalsaem-brand-kit.vercel.app` 입력
2. Android 패키지 옵션 설정(앱 이름 "달샘", 패키지명 예: `kr.dalsaem.app`)
3. 패키지 다운로드 → 안에 포함된 `assetlinks.json`(SHA256 지문) 확인
   - *대안: Bubblewrap CLI* — `npx @bubblewrap/cli init --manifest .../manifest.json`

### Phase 3 — Digital Asset Links 연결 (Claude + 사용자)
1. 사용자가 PWABuilder에서 받은 SHA256 지문 전달
2. Claude가 `public/.well-known/assetlinks.json` 작성 → Vercel 배포
3. https://dalsaem-brand-kit.vercel.app/.well-known/assetlinks.json 접근 확인

### Phase 4 — 테스트 (사용자)
1. 생성된 APK를 안드로이드 기기에 설치(개발자 모드/직접 설치)
2. 주소창 없이 전체화면으로 뜨는지, 오프라인 동작, 아이콘/스플래시 확인

### Phase 5 — Play 스토어 출시 (사용자)
1. Play Console에서 앱 생성, AAB 업로드
2. 스토어 등록정보(설명·아이콘·스크린샷·개인정보처리방침 URL) 작성
3. 내부 테스트 → 프로덕션 단계적 출시

---

## 5. 공수·비용 요약

| 구분 | 추정 |
|------|------|
| Phase 1 (웹 마감) | 반나절, Claude가 대부분 처리 |
| Phase 2~3 (패키지+링크) | 1~2시간 |
| Phase 4 (테스트) | 1~2시간 |
| Phase 5 (스토어 심사) | 신규 계정 기준 검토 수일 소요 가능 |
| **비용** | Google Play 개발자 등록 **$25(1회)**, 그 외 도구 무료 |

---

## 6. 리스크 / 주의

- **서명 키스토어 분실 = 앱 업데이트 영구 불가** → Play 앱 서명(Google 보관) 사용 권장.
- **개인정보처리방침 URL** 없으면 Play 심사 반려 가능 → 간단한 정책 페이지 1장 필요.
- iOS는 별도(TWA 불가, PWA 설치 또는 Capacitor 필요) — 이번 계획은 **안드로이드 한정**.
- 콘텐츠가 정적(브랜드 소개)이라 스토어 정책상 "단순 웹 래핑" 지적 가능성 낮으나, 설명을 충실히 작성할 것.

---

## 7. 다음 액션 (선택)

- [ ] **A안**: 지금 당장 비용 없이 → 안드로이드 Chrome "홈 화면에 추가"로 PWA 설치 (스토어 X)
- [ ] **B안(추천)**: Phase 1(아이콘 PNG화 + manifest 보강)부터 Claude가 바로 시작
- [ ] Google Play 출시까지 진행 결정 시 → 개발자 계정 등록 + 키 서명 위임 안내

> 진행하려면 "Phase 1 시작해줘"라고 말하면 PNG 아이콘 생성과 manifest 보강부터 처리한다.
