// Bài giảng chi tiết & lab chi tiết — Phần V: Tối ưu đồ họa (Ngày 26–27)
export default {
  26: {
    theory: [
      {
        h: 'Vì sao ảnh luôn là "thủ phạm" nặng nhất của một trang web',
        p: [
          'Trong hầu hết website, ảnh chiếm 50–70% tổng dung lượng tải — nặng hơn HTML+CSS+JS cộng lại nhiều lần. Đây cũng là lý do LCP (Ngày 2) thường chính là thời điểm ảnh hero hiển thị xong. Tối ưu ảnh vì vậy là đòn bẩy hiệu năng lớn nhất mà một developer có thể tạo ra chỉ bằng thay đổi QUY TRÌNH, không cần code phức tạp.',
          'Ba trục tối ưu độc lập, nên làm CẢ BA: (1) đúng ĐỊNH DẠNG cho từng loại nội dung; (2) đúng KÍCH THƯỚC (không tải ảnh 4000px cho ô hiển thị 400px); (3) đúng THỜI ĐIỂM tải (lazy loading, đã học Ngày 6).',
        ],
      },
      {
        h: 'AVIF, WebP, JPEG, PNG, SVG — bảng chọn định dạng 2026',
        p: [
          'AVIF: định dạng nén tốt nhất hiện có, nhẹ hơn JPEG cùng chất lượng tới 50%, hỗ trợ trong suốt và HDR — ưu tiên hàng đầu cho ảnh chụp năm 2026, trình duyệt hiện đại đều hỗ trợ. WebP: nhẹ hơn JPEG ~25–35%, hỗ trợ RỘNG RÃI hơn AVIF một chút, là lựa chọn "an toàn" làm tầng dự phòng thứ hai. JPEG: vẫn cần làm fallback CUỐI CÙNG cho trình duyệt/công cụ rất cũ.',
          'PNG: chỉ dùng khi cần trong suốt mà không tiện xuất WebP, hoặc ảnh có ít màu/đường nét sắc (screenshot giao diện, logo dạng bitmap) — PNG nén ảnh chụp thật rất kém, đừng dùng cho ảnh phong cảnh. SVG (Ngày 27): vector cho logo, icon, biểu đồ — không áp dụng cho ảnh chụp.',
          'Quy trình <picture> nhiều lớp fallback (đã học Ngày 6) chính là cách triển khai bảng chọn này trong thực tế: AVIF → WebP → JPEG, trình duyệt tự chọn dòng đầu tiên nó hiểu.',
        ],
      },
      {
        h: 'Nén ảnh: lossy vs lossless và công cụ thực chiến',
        p: [
          'Nén lossy (mất dữ liệu — JPEG, WebP, AVIF ở chế độ thường) giảm dung lượng rất mạnh bằng cách bỏ chi tiết mắt người khó nhận ra — chọn "quality" 65–80% thường là điểm cân bằng tốt giữa mắt nhìn và dung lượng. Nén lossless (PNG, WebP lossless) giữ nguyên pixel — dùng khi cần độ chính xác tuyệt đối (ảnh chụp màn hình có chữ nhỏ).',
          'squoosh.app (chạy ngay trong trình duyệt, của đội Chrome) là công cụ thực chiến: kéo ảnh vào, chọn định dạng đích, kéo thanh chất lượng và XEM TRỰC TIẾP cặp đôi trước/sau cùng dung lượng — kỹ năng "đọc" điểm cân bằng chất lượng/dung lượng bằng mắt là kỹ năng luyện được qua thực hành, không có công thức cố định cho mọi ảnh.',
          'Nguyên tắc kích thước: xuất ảnh ĐÚNG kích thước hiển thị lớn nhất có thể xảy ra (thường 1.5–2x cho màn Retina), không xuất ảnh gốc máy ảnh (thường 4000px+) thẳng lên web.',
        ],
        note: 'Quy trình chuẩn trước khi đưa 1 ảnh lên web: chụp/tải ảnh gốc → cắt đúng khung hình cần → resize về kích thước hiển thị thực tế × 1.5–2 → xuất AVIF + WebP qua Squoosh → đặt tên file mô tả, chữ thường, không dấu.',
      },
      {
        h: 'Đo lường: đừng đoán, hãy đo bằng Lighthouse và Network',
        p: [
          'Quay lại công cụ đã học Ngày 2: Lighthouse mục Performance chỉ đích danh "Serve images in next-gen formats" và "Properly size images" kèm ước lượng KB tiết kiệm được cho TỪNG ảnh cụ thể — đây là danh sách việc cần làm chính xác nhất, không cần đoán.',
          'Tab Network lọc theo Img cho thấy dung lượng thật từng ảnh đã tải — cách nhanh nhất để tìm "con voi" (ảnh nặng bất thường) trong một trang nhiều ảnh. So sánh trước/sau tối ưu bằng đúng hai con số này là bằng chứng thuyết phục nhất khi báo cáo cải tiến hiệu năng.',
        ],
      },
    ],
    lab: {
      title: 'Lab 26: Tối ưu toàn bộ ảnh trong site — trước/sau đo bằng số liệu thật',
      objective: 'Mọi ảnh trong site chuyển sang picture AVIF/WebP có fallback; báo cáo giảm ≥ 50% tổng KB ảnh',
      time: '90 phút',
      prep: ['Site hiện có (Mini Project 1/2)', 'squoosh.app'],
      steps: [
        {
          t: 'Đo hiện trạng làm mốc so sánh',
          mota: 'Chạy Lighthouse Mobile trên trang nhiều ảnh nhất, ghi lại điểm Performance và tổng KB ảnh (Network → lọc Img → tổng dòng dưới cùng). Đây là con số "trước" cho báo cáo.',
        },
        {
          t: 'Xuất bộ AVIF + WebP cho từng ảnh',
          mota: 'Với MỖI ảnh JPEG/PNG đang dùng: mở squoosh.app, xuất bản AVIF (quality ~50) và WebP (quality ~75), so sánh mắt bản gốc vs nén ở chế độ xem đôi trước khi tải về. Giữ nguyên tên gốc, chỉ đổi phần mở rộng: hero.jpg → hero.avif, hero.webp.',
        },
        {
          t: 'Chuyển toàn bộ <img> sang <picture>',
          code: `<picture>
  <source type="image/avif" srcset="images/hero.avif">
  <source type="image/webp" srcset="images/hero.webp">
  <img src="images/hero.jpg" alt="..." width="1600" height="900" loading="lazy">
</picture>`,
          mota: 'Áp mẫu này cho mọi ảnh nội dung (ảnh trang trí đơn giản có thể chỉ cần đổi src sang .webp nếu không muốn viết đủ 3 lớp). Giữ đúng alt/width/height/loading đã có từ Ngày 6.',
        },
        {
          t: 'Resize ảnh quá khổ',
          mota: 'Với ảnh nào Lighthouse báo "Properly size images", xuất thêm bản đúng kích thước hiển thị thực tế (dùng squoosh chỉnh Resize trước khi xuất) thay vì chỉ nén ảnh khổ gốc.',
        },
        {
          t: 'Đo lại và viết báo cáo so sánh',
          mota: 'Chạy lại Lighthouse + Network trên đúng trang đã đo ở bước 1. Lập bảng: Chỉ số | Trước | Sau | % giảm cho (a) tổng KB ảnh, (b) điểm Performance, (c) LCP. Việc "before/after" bằng số liệu thật là kỹ năng báo cáo kỹ sư thực thụ.',
        },
      ],
      checklist: [
        'Mọi ảnh nội dung dùng picture AVIF→WebP→gốc, giữ đủ alt/width/height/loading',
        'Đã xuất ảnh đúng kích thước hiển thị, không còn ảnh khổ gốc máy ảnh',
        'Bảng so sánh trước/sau có ≥ 3 chỉ số với số liệu thật từ Lighthouse/Network',
        'Tổng KB ảnh giảm tối thiểu 50% so với bản gốc',
        'Tên file nhất quán, chữ thường, không dấu, không khoảng trắng',
      ],
    },
  },

  27: {
    theory: [
      {
        h: 'SVG: đồ họa mô tả bằng CÔNG THỨC, không phải điểm ảnh',
        p: [
          'Khác ảnh bitmap (JPEG/PNG/AVIF lưu từng điểm ảnh), SVG (Scalable Vector Graphics) là văn bản XML mô tả HÌNH HỌC — đường thẳng, đường cong, hình tròn — bằng tọa độ và công thức toán. Hệ quả: phóng to bao nhiêu cũng KHÔNG BỂ (không như ảnh bitmap vỡ hạt khi phóng to), và với hình đơn giản, dung lượng file thường NHẸ HƠN NHIỀU so với PNG tương đương.',
          'Vì là văn bản (không phải nhị phân như JPEG), SVG NHÚNG THẲNG được vào HTML (inline) — và khi đó mọi phần bên trong trở thành ĐỐI TƯỢNG DOM CSS/JS ĐIỀU KHIỂN ĐƯỢC: đổi màu bằng CSS, animate bằng @keyframes, thậm chí bắt sự kiện click — điều hoàn toàn không thể với ảnh bitmap.',
        ],
      },
      {
        h: 'viewBox và các hình khối cơ bản',
        p: [
          'Mọi tài liệu SVG bắt đầu bằng <svg viewBox="0 0 100 100">: viewBox="minX minY width height" định nghĩa HỆ TỌA ĐỘ NỘI BỘ — không liên quan trực tiếp px thật trên màn hình, đó là điều làm SVG co giãn mượt mà theo kích thước hiển thị CSS đặt ra bên ngoài (width/height trên thẻ svg hoặc qua CSS).',
          'Hình khối cơ bản: <circle cx cy r>, <rect x y width height rx> (rx bo góc), <line x1 y1 x2 y2>, <polygon points="x1,y1 x2,y2..."> nối các điểm thành đa giác kín. Mỗi phần tử nhận thuộc tính tô vẽ: fill (màu tô, "none" nếu không tô), stroke (màu viền), stroke-width.',
        ],
        code: `<svg viewBox="0 0 100 100" width="120" height="120">
  <circle cx="50" cy="50" r="40" fill="#2547f4" />
  <rect x="20" y="20" width="30" height="30" rx="6" fill="#0e9f6e" />
</svg>`,
      },
      {
        h: 'Path — công cụ vẽ mọi hình dạng',
        p: [
          '<path d="..."> là phần tử mạnh nhất: thuộc tính d là chuỗi LỆNH VẼ nối tiếp — M (Move to: nhấc bút tới điểm, không vẽ), L (Line to: vẽ đường thẳng tới điểm), C (Curve: đường cong Bézier bậc ba với 2 điểm điều khiển), Z (đóng đường về điểm bắt đầu). Chữ HOA là tọa độ TUYỆT ĐỐI, chữ thường là tọa độ TƯƠNG ĐỐI so với điểm vừa vẽ.',
          'Trong thực tế công việc, phần lớn path phức tạp (icon, logo, minh họa) được VẼ BẰNG PHẦN MỀM (Figma, Illustrator, Inkscape) rồi xuất ra SVG — hiếm khi viết tay chuỗi d dài. Kỹ năng cần có là ĐỌC HIỂU cấu trúc để: chỉnh sửa nhỏ, tối ưu bằng công cụ như SVGOMG (svgomg.net — loại bỏ metadata thừa, gộp path, giảm dung lượng đáng kể), và biết cách style/animate nó.',
        ],
        code: `<!-- Icon mũi tên đơn giản, thường lấy từ thư viện như Lucide/Heroicons -->
<svg viewBox="0 0 24 24" width="24" height="24" fill="none"
     stroke="currentColor" stroke-width="2">
  <path d="M5 12h14 M13 6l6 6-6 6" />
</svg>`,
      },
      {
        h: 'SVG inline + CSS/JS: icon "sống" và biểu đồ tự vẽ',
        p: [
          'fill="currentColor" trên icon SVG là mẹo kinh điển: màu icon TỰ ĐỘNG theo color CSS của phần tử cha — đổi theme, hover, dark mode đều ăn theo mà không cần sửa file SVG. Đây là lý do các thư viện icon hiện đại (Lucide, Heroicons — chính là bộ dùng trong app khóa học) đều xuất theo mẫu này.',
          'SVG animate được bằng CSS @keyframes y hệt phần tử HTML thường (Ngày 19): xoay spinner, vẽ dần đường viền bằng stroke-dasharray/stroke-dashoffset (hiệu ứng "nét vẽ tự hiện ra" phổ biến trong onboarding/loading). Biểu đồ đơn giản (cột, tròn) vẽ được bằng cách TÍNH TOÁN tọa độ trong JavaScript rồi chèn <rect>/<circle> động — chính là nguyên lý bên dưới các thư viện biểu đồ như Chart.js/Recharts.',
        ],
        note: 'Ba câu hỏi chọn định dạng cuối cùng: ảnh chụp thật (người, phong cảnh) → AVIF/WebP; icon/logo/biểu đồ/minh họa phẳng → SVG; ảnh cần trong suốt phức tạp không tiện SVG → PNG/WebP.',
      },
    ],
    lab: {
      title: 'Lab 27: Bộ icon SVG tự vẽ + logo động cho site',
      objective: 'Tự vẽ 4 icon SVG dùng fill=currentColor, 1 logo SVG có animate CSS, tối ưu bằng SVGOMG',
      time: '75 phút',
      prep: ['Site hiện có', 'svgomg.net'],
      steps: [
        {
          t: 'Vẽ icon đầu tiên bằng hình khối cơ bản',
          mota: 'Tạo icon "email" chỉ bằng rect + path đơn giản trong viewBox 24×24: khung phong bì (rect bo góc nhẹ) + đường chéo hình chữ V nhỏ (path 2 lệnh L) làm nắp phong bì. Test bằng cách đặt vào trang, chỉnh stroke-width tới khi vừa mắt.',
        },
        {
          t: 'Ba icon còn lại theo cùng nguyên tắc',
          mota: 'Vẽ thêm: "điện thoại" (rect bo góc dài + circle nhỏ nút Home), "địa điểm" (path hình giọt nước bằng lệnh C + circle rỗng ở giữa), "mũi tên lên" (path 2 đoạn L hình chữ V lộn ngược + line dọc). Tất cả dùng chung công thức fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24".',
        },
        {
          t: 'Nhúng inline và để CSS điều khiển màu',
          mota: 'Chèn cả 4 icon TRỰC TIẾP (inline, không qua <img>) vào các vị trí tương ứng: icon email cạnh mailto link, icon điện thoại cạnh tel link, icon địa điểm trong footer, icon mũi tên trong nút "Lên đầu trang" (Lab 15) — thay ký tự ↑ bằng SVG. Style chung: .icon { width: 20px; height: 20px; color: var(--muc-mo); } .icon:hover, a:hover .icon { color: var(--brand); }',
        },
        {
          t: 'Logo SVG có animate CSS',
          code: `<svg class="logo-quay" viewBox="0 0 24 24" width="32" height="32"
     fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="12" cy="12" r="9" />
  <path d="M12 3v4 M12 17v4" />
</svg>

<style>
.logo-quay { animation: xoay-cham 8s linear infinite; }
@media (prefers-reduced-motion: reduce) {
  .logo-quay { animation: none; }
}
@keyframes xoay-cham { to { transform: rotate(360deg); } }
</style>`,
          mota: 'Vẽ một logo tối giản (vòng tròn + 2 vạch) và cho xoay chậm liên tục — NHỚ khối reduced-motion đi kèm ngay, đúng kỷ luật Ngày 19.',
        },
        {
          t: 'Tối ưu bằng SVGOMG và so sánh',
          mota: 'Dán từng SVG vào svgomg.net, ghi lại dung lượng trước/sau tối ưu (thường giảm nhờ loại bỏ khoảng trắng, làm tròn số thập phân tọa độ). Thay code đã tối ưu vào site. Kiểm tra hiển thị không đổi sau khi tối ưu.',
        },
      ],
      checklist: [
        '4 icon tự vẽ bằng hình khối/path cơ bản, dùng chung viewBox 24×24',
        'Toàn bộ icon nhúng inline, dùng fill/stroke="currentColor", đổi màu theo CSS cha khi hover',
        'Logo có animate CSS, kèm khối prefers-reduced-motion tắt animation',
        'Đã chạy qua SVGOMG, ghi lại dung lượng trước/sau',
        'Icon giữ rõ nét ở mọi kích thước phóng to (không vỡ như bitmap)',
      ],
    },
  },
}
