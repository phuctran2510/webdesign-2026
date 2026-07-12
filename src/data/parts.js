// 6 phần của khóa học — bám theo cấu trúc Learning Web Design 5th Edition
// và mở rộng cho công nghệ năm 2026
export const PARTS = [
  { id: 1, name: 'Phần I — Nền tảng Web', color: '#2547F4', days: [1, 2], chapters: 'Chương 1–3', desc: 'Web hoạt động thế nào, các vai trò trong nghề, và những khái niệm lớn: responsive, accessibility, hiệu năng.' },
  { id: 2, name: 'Phần II — HTML: Cấu trúc trang', color: '#0E9F6E', days: [3, 4, 5, 6, 7, 8, 9, 10], chapters: 'Chương 4–10', desc: 'Đánh dấu văn bản, liên kết, hình ảnh, bảng, biểu mẫu và media nhúng bằng HTML5 ngữ nghĩa.' },
  { id: 3, name: 'Phần III — CSS: Trình bày & Bố cục', color: '#D9480F', days: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], chapters: 'Chương 11–20', desc: 'Từ selector cơ bản đến Flexbox, Grid, Responsive, animation và công cụ phát triển hiện đại.' },
  { id: 4, name: 'Phần IV — JavaScript & Tương tác', color: '#7E22CE', days: [23, 24, 25], chapters: 'Chương 21–22 + ES2026', desc: 'Nền tảng JavaScript, thao tác DOM, sự kiện, và JavaScript hiện đại: modules, fetch, async/await.' },
  { id: 5, name: 'Phần V — Đồ họa Web', color: '#BE185D', days: [26, 27], chapters: 'Chương 23–25', desc: 'Định dạng ảnh (WebP/AVIF), tối ưu asset, ảnh responsive và đồ họa vector SVG.' },
  { id: 6, name: 'Phần VI — React & Triển khai 2026', color: '#0F766E', days: [28, 29, 30], chapters: 'Mở rộng 2026', desc: 'React + Vite, quy trình deploy GitHub Pages & Vercel, CI/CD, Lighthouse và đồ án tổng kết.' },
]

export function partOfDay(dayId) {
  return PARTS.find((p) => p.days.includes(dayId))
}
