# Thiết kế Web hiện đại 2026

Khóa học 30 ngày dựa trên giáo trình *Learning Web Design, 5th Edition* (Jennifer Robbins),
cập nhật cho bối cảnh 2026: HTML ngữ nghĩa, CSS hiện đại (Grid, Container Query, `:has()`,
biến CSS, dark mode), JavaScript & React, tối ưu ảnh AVIF/WebP, accessibility (WCAG/POUR),
và triển khai lên các nền tảng hosting miễn phí.

Xây dựng cho giảng viên **Trần Vĩnh Phúc** — Khoa Công nghệ Thông tin, Đại học Đà Lạt.

## Tính năng

- **30 ngày học** chia 6 phần, mỗi ngày gồm: mục tiêu, tóm tắt lý thuyết, **bài giảng chi
  tiết** (nhiều mục, có ví dụ code, ghi chú), **lab thực hành chi tiết** (bước-by-bước, có
  checklist nghiệm thu), và bộ trắc nghiệm 5 câu.
- **150 câu trắc nghiệm** tiếng Việt, chấm điểm tức thì, lưu tiến độ vào `localStorage`.
- **Trang Triển khai demo**: hướng dẫn deploy chi tiết lên 5 nền tảng miễn phí (GitHub Pages,
  Vercel, Netlify, Cloudflare Pages, Surge.sh) kèm bảng so sánh và bảng lỗi thường gặp.
- Giao diện sidebar tối, hero banner, thẻ thống kê — theo phong cách "cổng môn học".
- Responsive, hỗ trợ điều hướng bằng bàn phím, đạt chuẩn accessibility cơ bản.

## Cấu trúc dự án

```
src/
├── components/       # Sidebar, Quiz
├── pages/            # Home, DayPage, DeployPage
├── data/
│   ├── parts.js              # 6 phần học
│   ├── days-part1..6.js      # Dữ liệu 30 ngày (mục tiêu, tóm tắt, quiz)
│   ├── details-part1..6.js   # Bài giảng & lab CHI TIẾT (theory/lab objects)
│   └── index.js              # Gộp dữ liệu, tiến độ localStorage
└── styles.css
```

## Chạy thử local

```bash
npm install
npm run dev
```

Mở http://localhost:5173

## Build production

```bash
npm run build      # tạo thư mục dist/
npm run preview    # xem thử bản production tại local
```

## Triển khai

Xem trang **"Triển khai demo"** ngay trong ứng dụng (`/trien-khai`) để có hướng dẫn đầy đủ.
Tóm tắt nhanh — GitHub Pages qua GitHub Actions (đã cấu hình sẵn `.github/workflows/deploy.yml`):

```bash
git push origin main
# Settings → Pages → Source: GitHub Actions
```

Hoặc Vercel: import repo tại vercel.com — tự nhận cấu hình Vite.

## Công nghệ

React 18 · React Router 6 (HashRouter) · Vite 5 · CSS thuần (biến CSS, Grid, Flexbox)

## Liên hệ

Khoa Công nghệ Thông tin — Đại học Đà Lạt · phuctv@dlu.edu.vn
