// Phần V — Đồ họa Web (Chương 23–25, Learning Web Design 5th Ed.)
export default [
  {
    id: 26,
    title: 'Ảnh cho web: định dạng, tối ưu, quy trình sản xuất asset',
    chapters: 'Chương 23 & 24',
    goals: [
      'Chọn đúng định dạng ảnh theo nội dung: JPEG/PNG/GIF/WebP/AVIF',
      'Hiểu bitmap vs vector, độ phân giải, nén lossy/lossless',
      'Thiết lập quy trình tối ưu ảnh chuẩn 2026 cho một dự án thật',
    ],
    theory: [
      'Bitmap (raster) lưu theo lưới pixel — phóng to là vỡ; vector lưu theo công thức toán — sắc nét mọi cỡ. Ảnh chụp = bitmap; logo/icon/biểu đồ = vector (SVG).',
      'Web dùng 72–96ppi hiển thị; điều quyết định là KÍCH THƯỚC PIXEL, không phải dpi in ấn. Màn Retina cần ảnh 2x kích thước hiển thị.',
      'Nén lossy (JPEG, WebP, AVIF) bỏ bớt dữ liệu mắt khó nhận ra — file nhỏ; lossless (PNG, GIF, WebP lossless) giữ nguyên từng pixel — file to hơn.',
      'Chọn định dạng 2026: AVIF (nhỏ nhất, hỗ trợ rộng) > WebP > JPEG cho ảnh chụp; PNG khi cần trong suốt chất lượng cao và không dùng được WebP; SVG cho đồ họa vector; GIF gần như chỉ còn cho meme — thay bằng video ngắn.',
      'Trong suốt: PNG-24 alpha 256 mức mượt mà; WebP/AVIF cũng hỗ trợ alpha với dung lượng nhỏ hơn nhiều.',
      'Quy trình sản xuất asset: xuất từ Figma/Photoshop đúng kích thước sử dụng → nén qua Squoosh/TinyPNG → tạo các biến thể responsive (480/960/1600w) → đặt tên có hệ thống.',
      'Ngân sách hiệu năng: tổng ảnh một trang nên < 1MB; ảnh hero < 200KB; luôn đo lại bằng Lighthouse sau khi tối ưu.',
      'Tự động hóa 2026: build tool/CDN (Cloudinary, Vercel Image) tự sinh AVIF/WebP và cỡ ảnh — hiểu nguyên lý để cấu hình đúng.',
    ],
    lab: {
      title: 'Lab 26: Chiến dịch "giảm cân" cho ảnh của Mini Project 2',
      steps: [
        'Kiểm kê: liệt kê mọi ảnh của landing page, ghi kích thước file và kích thước hiển thị thật.',
        'Dùng squoosh.app xuất mỗi ảnh sang WebP và AVIF ở 3 cỡ; so sánh dung lượng với bản gốc (lập bảng).',
        'Thay <img> bằng <picture> AVIF → WebP → JPEG fallback với srcset/sizes.',
        'Ảnh nào là đồ họa phẳng (logo, icon) → chuyển sang SVG.',
        'Chạy Lighthouse trước/sau, chụp lại hai điểm Performance để so sánh trong báo cáo.',
      ],
      code: `<picture>
  <source type="image/avif"
          srcset="hero-480.avif 480w, hero-960.avif 960w, hero-1600.avif 1600w"
          sizes="100vw">
  <source type="image/webp"
          srcset="hero-480.webp 480w, hero-960.webp 960w, hero-1600.webp 1600w"
          sizes="100vw">
  <img src="hero-960.jpg"
       srcset="hero-480.jpg 480w, hero-960.jpg 960w, hero-1600.jpg 1600w"
       sizes="100vw"
       alt="Toàn cảnh hồ Xuân Hương buổi sáng"
       width="1600" height="900" fetchpriority="high">
</picture>`,
    },
    quiz: [
      { q: 'Logo cần hiển thị sắc nét ở mọi kích thước nên dùng:', o: ['JPEG', 'GIF', 'SVG', 'BMP'], a: 2, e: 'Vector không phụ thuộc độ phân giải.' },
      { q: 'Nén lossy khác lossless ở chỗ:', o: ['Lossy giữ nguyên mọi pixel', 'Lossy loại bỏ bớt dữ liệu để giảm dung lượng, không khôi phục được', 'Lossless luôn nhỏ hơn', 'Không khác nhau'], a: 1, e: 'Lossy đánh đổi một phần chất lượng lấy dung lượng nhỏ.' },
      { q: 'Thứ tự source trong <picture> nên xếp:', o: ['JPEG trước', 'Định dạng hiện đại nhất (AVIF) trước, fallback sau', 'Ngẫu nhiên', 'Theo alphabet'], a: 1, e: 'Trình duyệt lấy source ĐẦU TIÊN nó hỗ trợ, nên ưu tiên định dạng tốt nhất lên đầu.' },
      { q: 'Yếu tố nào quyết định độ nét của ảnh trên web?', o: ['DPI ghi trong file', 'Kích thước pixel so với kích thước hiển thị', 'Tên file', 'Định dạng luôn quyết định'], a: 1, e: 'Web quan tâm pixel; dpi chỉ có ý nghĩa khi in.' },
      { q: 'fetchpriority="high" nên đặt cho ảnh nào?', o: ['Mọi ảnh', 'Ảnh hero quyết định LCP', 'Ảnh footer', 'Ảnh ẩn'], a: 1, e: 'Ưu tiên tải tài nguyên ảnh lớn đầu trang giúp cải thiện LCP.' },
    ],
  },
  {
    id: 27,
    title: 'SVG: đồ họa vector cho web hiện đại',
    chapters: 'Chương 25',
    goals: [
      'Viết SVG tay: rect, circle, path, text và viewBox',
      'Nhúng SVG theo 4 cách và style bằng CSS (fill, stroke)',
      'Tạo icon system và animation SVG đơn giản',
    ],
    theory: [
      'SVG là XML mô tả đồ họa vector: <svg viewBox="0 0 100 100"> chứa hình cơ bản <rect>, <circle>, <ellipse>, <line>, <polygon> và vạn năng nhất là <path d="...">.',
      'viewBox="x y w h" định nghĩa hệ tọa độ nội bộ — bí quyết co giãn: SVG vẽ theo tọa độ này rồi scale theo khung ngoài.',
      'Bốn cách nhúng: <img src="icon.svg"> (đơn giản, không style được từng phần), CSS background, inline SVG trong HTML (style/animate được bằng CSS — mạnh nhất), <object>.',
      'Style bằng thuộc tính trình bày hoặc CSS: fill (màu tô), stroke (nét), stroke-width; fill="currentColor" cho icon ăn theo màu chữ — pattern icon chuẩn 2026.',
      'Icon system: gom icon vào <symbol> có id trong một file sprite, dùng lại bằng <use href="#ten-icon"> — một request, tái sử dụng vô hạn.',
      'Tối ưu SVG xuất từ Figma/Illustrator bằng SVGO/SVGOMG: bỏ metadata thừa, giảm 30–70% dung lượng.',
      'Animation SVG bằng CSS: animate được transform, opacity, và đặc sản stroke-dasharray/stroke-dashoffset tạo hiệu ứng "vẽ nét" nổi tiếng.',
      'Accessibility: SVG có nghĩa thì thêm <title> + role="img"; SVG trang trí thì aria-hidden="true".',
    ],
    lab: {
      title: 'Lab 27: Vẽ logo khoa + icon system + hiệu ứng vẽ nét',
      steps: [
        'Viết tay SVG logo đơn giản (chữ cái + hình học) bằng rect/circle/path, hiểu từng tọa độ.',
        'Tạo sprite icons.svg chứa 4 symbol (home, search, user, menu); dùng <use> hiển thị trên navbar với currentColor.',
        'Làm hiệu ứng "vẽ nét" cho logo bằng stroke-dashoffset + @keyframes khi tải trang.',
        'Xuất một icon từ Figma, chạy qua SVGOMG, so sánh code trước/sau tối ưu.',
        'Thêm title + role cho logo, aria-hidden cho icon trang trí; kiểm tra bằng trình đọc màn hình.',
      ],
      code: `<svg viewBox="0 0 120 120" width="120" role="img">
  <title>Logo Khoa CNTT</title>
  <circle cx="60" cy="60" r="50" fill="none"
          stroke="#2547F4" stroke-width="6"
          class="net-ve"/>
  <text x="60" y="72" text-anchor="middle"
        font-size="36" font-weight="bold" fill="#2547F4">IT</text>
</svg>

<style>
.net-ve {
  stroke-dasharray: 314;      /* chu vi ≈ 2πr */
  stroke-dashoffset: 314;
  animation: ve 2s ease forwards;
}
@keyframes ve { to { stroke-dashoffset: 0; } }
</style>

<!-- Icon system -->
<svg style="display:none">
  <symbol id="i-home" viewBox="0 0 24 24">
    <path d="M3 11 12 3l9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"
          fill="currentColor"/>
  </symbol>
</svg>
<a href="/" class="nav-icon">
  <svg width="24" height="24" aria-hidden="true"><use href="#i-home"/></svg>
  Trang chủ
</a>`,
    },
    quiz: [
      { q: 'viewBox trong SVG có vai trò:', o: ['Đặt màu nền', 'Định nghĩa hệ tọa độ nội bộ để SVG co giãn', 'Tạo viền', 'Nén file'], a: 1, e: 'viewBox tách tọa độ vẽ khỏi kích thước hiển thị — cốt lõi của tính scalable.' },
      { q: 'Muốn style từng phần của SVG bằng CSS trang, nên nhúng theo cách:', o: ['<img src="a.svg">', 'CSS background', 'Inline SVG trong HTML', 'iframe'], a: 2, e: 'Chỉ inline SVG mới nằm trong DOM để CSS/JS của trang can thiệp.' },
      { q: 'fill="currentColor" có tác dụng:', o: ['Tô màu đen cố định', 'Icon nhận màu chữ (color) của phần tử chứa nó', 'Tô gradient', 'Bỏ màu'], a: 1, e: 'Icon tự đồng bộ màu với văn bản — đổi theme là icon đổi theo.' },
      { q: 'Cặp thuộc tính tạo hiệu ứng "vẽ nét" là:', o: ['fill + opacity', 'stroke-dasharray + stroke-dashoffset', 'width + height', 'x + y'], a: 1, e: 'Đặt dash bằng độ dài nét rồi animate offset về 0.' },
      { q: 'SVG thuần trang trí nên có:', o: ['<title> chi tiết', 'aria-hidden="true"', 'role="button"', 'tabindex="0"'], a: 1, e: 'Ẩn khỏi công nghệ hỗ trợ để không gây nhiễu; SVG có nghĩa mới cần title + role="img".' },
    ],
  },
]
