# 달샘 — Color & Typography Specs

> 레퍼런스: Ness Labs (nesslabs.com) — 학구적·차분·세리프 중심·밝은 바탕·딥 포인트
> 무드: 달빛, 고요함, 깊은 물, 새벽의 차분함, 따뜻한 흰빛

---

## 색상 팔레트

| 역할 | 이름 | HEX | 설명 |
|------|------|-----|------|
| 주색 | 딥 인디고 | `#2D3A5F` | 달이 잠긴 깊은 물빛 |
| 배경 | 크림 화이트 | `#F9F7F2` | 달빛 받은 종이 |
| 표면 | 따뜻한 페이퍼 | `#F0EDE5` | 카드·패널 배경 |
| 본문 | 깊은 먹색 | `#1C1C1C` | 주 텍스트 |
| 보조 | 따뜻한 회색 | `#6E6B65` | 부제·캡션 |
| 포인트 | 달빛 골드 | `#B8924A` | 강조·아이콘·링크 (인디고와 다른 계열) |
| 라인 | 연한 모래색 | `#DDD9D0` | 구분선·테두리 |

## 타이포그래피

| 역할 | 폰트 | 굵기 | 비고 |
|------|------|------|------|
| 헤딩 | Noto Serif KR | 400 · 700 | Google Fonts 무료 |
| 본문 | Pretendard | 400 · 500 | 가독성 최우선 |
| 보조 영문 | Georgia | 400 | 폴백용 |

```html
<!-- Google Fonts 로드 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;700&display=swap" rel="stylesheet">
<!-- Pretendard CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css">
```

---

## 복붙용 CSS 변수 블록

```css
/* ── 달샘 브랜드 토큰 ─────────────────────────── */
:root {
  --ds-primary:   #2D3A5F;   /* 딥 인디고 */
  --ds-bg:        #F9F7F2;   /* 크림 화이트 */
  --ds-surface:   #F0EDE5;   /* 따뜻한 페이퍼 */
  --ds-text:      #1C1C1C;   /* 깊은 먹색 */
  --ds-text-sub:  #6E6B65;   /* 따뜻한 회색 */
  --ds-accent:    #B8924A;   /* 달빛 골드 */
  --ds-line:      #DDD9D0;   /* 연한 모래색 */

  --ds-font-heading: 'Noto Serif KR', Georgia, serif;
  --ds-font-body:    'Pretendard', -apple-system, sans-serif;

  --ds-radius-card:   12px;
  --ds-radius-btn:     6px;
  --ds-radius-badge:   4px;
}

body {
  background: var(--ds-bg);
  color: var(--ds-text);
  font-family: var(--ds-font-body);
}

h1, h2, h3 {
  font-family: var(--ds-font-heading);
  color: var(--ds-primary);
  font-weight: 700;
}
/* ──────────────────────────────────────────────── */
```

---

## 컴포넌트 규칙

### 카드
```css
.ds-card {
  background: var(--ds-surface);
  border: 1px solid var(--ds-line);
  border-radius: var(--ds-radius-card);
  padding: 24px;
}
```

### 버튼 (주)
```css
.ds-btn {
  background: var(--ds-primary);
  color: #fff;
  font-family: var(--ds-font-heading);
  font-size: 0.95rem;
  padding: 10px 24px;
  border: none;
  border-radius: var(--ds-radius-btn);
  cursor: pointer;
}
.ds-btn:hover { opacity: 0.88; }
```

### 배지
```css
.ds-badge {
  background: #F5ECD9;
  color: var(--ds-accent);
  font-family: var(--ds-font-body);
  font-size: 0.78rem;
  font-weight: 500;
  padding: 2px 10px;
  border-radius: var(--ds-radius-badge);
}
```
