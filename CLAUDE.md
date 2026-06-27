# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project: 달샘 브랜드 키트

이 디렉토리는 가상 브랜드 **달샘**의 완성된 브랜드 키트다. 산출물 4종(웹 랜딩·PPT·카드뉴스·명함+메일서명)과 브랜드 스킬 패키지로 구성된다.

## 파일 구조

| 파일 | 역할 |
|------|------|
| `00_interview-transcript.md` | 브랜드 인터뷰 원문 (브랜드 정체성의 근거) |
| `01_brand.md` | 브랜드 정의서 (회사명·슬로건·청중·무드) |
| `index.html` | 웹 랜딩 페이지 |
| `ppt.html` | 회사소개 PPT |
| `cardnews.html` | SNS 카드뉴스 |
| `bizcard-signature.html` | 명함 + 메일서명 |
| `brand-dalsaem/SKILL.md` | 브랜드 스킬 요약 (토큰·톤·체크리스트) |
| `brand-dalsaem/color-typography-specs.md` | 전체 색상·폰트·컴포넌트 CSS |
| `brand-dalsaem/usage-examples.md` | 복붙용 코드 예시 |
| `brand-dalsaem/mark.svg` | 워드마크 로고 |

## 디자인 토큰 (변경 금지)

```css
--ds-primary:  #2D3A5F;  /* 딥 인디고 */
--ds-bg:       #F9F7F2;  /* 크림 화이트 */
--ds-surface:  #F0EDE5;  /* 따뜻한 페이퍼 */
--ds-text:     #1C1C1C;
--ds-text-sub: #6E6B65;
--ds-accent:   #B8924A;  /* 달빛 골드 — 포인트 단 하나 */
--ds-line:     #DDD9D0;
```

- 헤딩: `Noto Serif KR` (Google Fonts)
- 본문: `Pretendard` (CDN)

## 산출물 수정 시 지켜야 할 규칙

- 헤딩은 항상 `Noto Serif KR` + `#2D3A5F`
- 배경은 반드시 `#F9F7F2` (어두운 배경 금지)
- 포인트색은 `#B8924A` 하나만 (골드 계열 혼용 금지)
- 말투: 조용하고 따뜻하게 — 느낌표·대문자 과용 금지
- 워드마크는 `brand-dalsaem/mark.svg` 그대로 사용

## 브랜드 정체성 한 줄 요약

> 조용한 샘에 비추는 달처럼 — 정보가 많아 복잡한 사람의 머릿속을 감성 있게 정리해주는 개인 지식 큐레이션 브랜드.
