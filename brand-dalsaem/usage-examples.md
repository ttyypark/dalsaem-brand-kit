# 달샘 — 적용 예시

> 이 파일의 코드를 그대로 복붙하면 웹·카드·명함이 달샘 옷을 입는다.

---

## 웹 — 히어로 섹션

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css">
  <style>
    :root {
      --ds-primary: #2D3A5F; --ds-bg: #F9F7F2; --ds-surface: #F0EDE5;
      --ds-text: #1C1C1C;   --ds-text-sub: #6E6B65; --ds-accent: #B8924A;
      --ds-line: #DDD9D0;
      --ds-font-heading: 'Noto Serif KR', Georgia, serif;
      --ds-font-body: 'Pretendard', sans-serif;
    }
    body { margin:0; background: var(--ds-bg); color: var(--ds-text); font-family: var(--ds-font-body); }
    .hero { max-width: 720px; margin: 0 auto; padding: 80px 24px; text-align: center; }
    .hero h1 { font-family: var(--ds-font-heading); font-size: 2.4rem; color: var(--ds-primary); margin-bottom: 12px; }
    .hero p  { font-size: 1.05rem; color: var(--ds-text-sub); line-height: 1.8; }
    .hero .sub { font-family: var(--ds-font-heading); color: var(--ds-accent); font-size: 0.95rem; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="hero">
    <h1>달샘</h1>
    <p class="sub">조용한 샘에 비추는 달처럼</p>
    <p>복잡한 머릿속을 고요하게 정리하는 나만의 지식 아카이브</p>
  </div>
</body>
</html>
```

---

## 카드뉴스 — SNS 정방형 (1080×1080 기준)

```html
<div style="
  width:1080px; height:1080px;
  background:#F9F7F2;
  display:flex; flex-direction:column;
  justify-content:center; align-items:center;
  padding:80px; box-sizing:border-box;
  font-family:'Noto Serif KR', Georgia, serif;
">
  <p style="color:#B8924A; font-size:28px; letter-spacing:3px; margin-bottom:20px;">달샘</p>
  <h2 style="color:#2D3A5F; font-size:56px; font-weight:700; text-align:center; line-height:1.4; margin:0 0 32px;">
    흩어진 정보를<br>달빛으로 모으다
  </h2>
  <p style="color:#6E6B65; font-size:28px; text-align:center; line-height:1.7; font-family:'Pretendard', sans-serif;">
    조용한 샘에 비추는 달처럼<br>차분하게, 모든 것을
  </p>
  <div style="width:60px; height:2px; background:#DDD9D0; margin-top:48px;"></div>
</div>
```

---

## 명함 (85×55mm 기준 비율)

```html
<div style="
  width:340px; height:220px;
  background:#F9F7F2;
  border:1px solid #DDD9D0;
  border-radius:8px;
  padding:28px 32px;
  box-sizing:border-box;
  font-family:'Pretendard', sans-serif;
  position:relative;
">
  <!-- 이름/직함 -->
  <p style="font-family:'Noto Serif KR',serif; color:#2D3A5F; font-size:18px; font-weight:700; margin:0 0 4px;">홍길동</p>
  <p style="color:#6E6B65; font-size:12px; margin:0 0 20px;">지식 아카이버 · 달샘</p>

  <!-- 연락처 -->
  <p style="color:#1C1C1C; font-size:11px; line-height:1.8; margin:0;">
    ttyypark@gmail.com
  </p>

  <!-- 브랜드 워드마크 (우하단) -->
  <div style="position:absolute; bottom:20px; right:24px; text-align:right;">
    <span style="font-family:'Noto Serif KR',serif; color:#2D3A5F; font-size:14px; font-weight:700; letter-spacing:1px;">달샘</span>
    <p style="color:#B8924A; font-size:9px; margin:2px 0 0; letter-spacing:0.5px;">조용한 샘에 비추는 달처럼</p>
  </div>
</div>
```

---

## 메일 서명

```html
<table style="border-top:2px solid #2D3A5F; padding-top:12px; font-family:'Pretendard',sans-serif;">
  <tr>
    <td style="padding-right:16px; border-right:1px solid #DDD9D0; vertical-align:middle;">
      <span style="font-family:'Noto Serif KR',serif; color:#2D3A5F; font-size:16px; font-weight:700;">달샘</span>
    </td>
    <td style="padding-left:16px;">
      <p style="margin:0; color:#1C1C1C; font-size:13px; font-weight:500;">홍길동</p>
      <p style="margin:2px 0 0; color:#6E6B65; font-size:11px;">ttyypark@gmail.com</p>
      <p style="margin:4px 0 0; color:#B8924A; font-size:10px; font-style:italic;">조용한 샘에 비추는 달처럼</p>
    </td>
  </tr>
</table>
```
