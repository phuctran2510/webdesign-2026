// Phần I — Nền tảng Web (Chương 1–3, Learning Web Design 5th Ed.)
export default [
  {
    id: 1,
    title: 'Nhập môn Thiết kế Web & Cách Web hoạt động',
    chapters: 'Chương 1 & 2',
    goals: [
      'Phân biệt các vai trò trong nghề web: UX/UI, frontend, backend, full-stack',
      'Mô tả được chu trình yêu cầu HTTP: URL → DNS → Server → Trình duyệt',
      'Chuẩn bị môi trường làm việc: VS Code, trình duyệt, DevTools',
    ],
    theory: [
      'Nghề web gồm nhiều vai trò: thiết kế UX (trải nghiệm), UI (giao diện), phát triển frontend (HTML/CSS/JS), backend (server, CSDL) và full-stack. Năm 2026, ranh giới các vai trò mờ dần nhờ công cụ AI hỗ trợ.',
      'Web ≠ Internet: Internet là hạ tầng mạng; Web là dịch vụ chạy trên Internet dùng giao thức HTTP/HTTPS.',
      'Máy chủ web (server) lưu trữ và phục vụ tài nguyên; trình duyệt (client) gửi yêu cầu và hiển thị kết quả — mô hình client/server.',
      'URL gồm 3 phần: giao thức (https://), tên miền (www.example.com), đường dẫn (/folder/page.html). DNS dịch tên miền thành địa chỉ IP.',
      'Một trang web hiển thị qua các bước: gõ URL → phân giải DNS → gửi HTTP request → server trả HTML → trình duyệt tải tiếp CSS/JS/ảnh → dựng trang (rendering).',
      'Trang web = HTML (cấu trúc) + CSS (trình bày) + JavaScript (hành vi) — nguyên tắc "tách 3 tầng" xuyên suốt toàn khóa học.',
      'Công cụ 2026: VS Code + Extension (Prettier, Live Server), trình duyệt Chrome/Firefox DevTools, Git để quản lý phiên bản, và trợ lý AI (Copilot/Claude) như "bạn cặp lập trình".',
    ],
    lab: {
      title: 'Lab 1: Trang web đầu tiên & quan sát HTTP bằng DevTools',
      steps: [
        'Cài VS Code và extension Live Server; tạo thư mục du-an-web/ ngày làm việc.',
        'Tạo file index.html với cấu trúc tối thiểu (xem code mẫu), mở bằng Live Server.',
        'Mở DevTools (F12) → tab Network → tải lại trang, quan sát request HTML và mã trạng thái 200.',
        'Vào một trang báo bất kỳ, quan sát số lượng request CSS/JS/ảnh trong tab Network.',
        'Dùng tab Elements sửa "nóng" tiêu đề trang báo — hiểu rằng DevTools chỉ sửa bản sao cục bộ.',
      ],
      code: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Trang đầu tiên của tôi</title>
</head>
<body>
  <h1>Xin chào Web 2026!</h1>
  <p>Đây là trang web đầu tiên của tôi.</p>
</body>
</html>`,
    },
    quiz: [
      { q: 'Thành phần nào KHÔNG thuộc một URL đầy đủ?', o: ['Giao thức (https://)', 'Tên miền', 'Địa chỉ IP của người dùng', 'Đường dẫn tài nguyên'], a: 2, e: 'URL gồm giao thức, tên miền và đường dẫn; IP người dùng không nằm trong URL.' },
      { q: 'DNS có nhiệm vụ gì?', o: ['Mã hóa dữ liệu', 'Dịch tên miền thành địa chỉ IP', 'Nén file HTML', 'Lưu cookie'], a: 1, e: 'DNS là "danh bạ" của Internet, ánh xạ tên miền ↔ IP.' },
      { q: 'Trong mô hình 3 tầng, CSS đảm nhận vai trò nào?', o: ['Cấu trúc nội dung', 'Trình bày/hiển thị', 'Hành vi tương tác', 'Lưu trữ dữ liệu'], a: 1, e: 'HTML = cấu trúc, CSS = trình bày, JavaScript = hành vi.' },
      { q: 'Mã trạng thái HTTP 404 nghĩa là gì?', o: ['Thành công', 'Chuyển hướng', 'Không tìm thấy tài nguyên', 'Lỗi server nội bộ'], a: 2, e: '404 Not Found: server không tìm thấy tài nguyên được yêu cầu.' },
      { q: 'Phát biểu nào đúng về Web và Internet?', o: ['Web và Internet là một', 'Internet chạy trên Web', 'Web là một dịch vụ chạy trên Internet', 'Web ra đời trước Internet'], a: 2, e: 'Internet là hạ tầng; Web (HTTP) chỉ là một trong nhiều dịch vụ chạy trên đó (cùng email, FTP...).' },
    ],
  },
  {
    id: 2,
    title: 'Những khái niệm lớn: Đa thiết bị, Accessibility, Hiệu năng',
    chapters: 'Chương 3',
    goals: [
      'Giải thích vì sao phải thiết kế cho "web ở khắp mọi nơi" (mọi thiết bị, mọi người dùng)',
      'Trình bày 4 nguyên tắc accessibility POUR theo WCAG',
      'Nhận diện các yếu tố ảnh hưởng hiệu năng trang và chỉ số Core Web Vitals',
    ],
    theory: [
      'Web hiện diện trên mọi thiết bị: điện thoại, máy tính, TV, đồng hồ, trợ lý giọng nói. Không thể biết trước kích thước màn hình → thiết kế phải linh hoạt (responsive) ngay từ đầu.',
      'Progressive Enhancement (nâng cao dần): xây nền HTML hoạt động được ở mọi nơi, rồi "đắp" thêm CSS và JS cho trình duyệt hiện đại — ngược với Graceful Degradation.',
      'Accessibility (a11y): thiết kế cho người khuyết tật thị giác, thính giác, vận động, nhận thức. Khung WCAG với 4 nguyên tắc POUR: Perceivable (nhận biết được), Operable (thao tác được), Understandable (hiểu được), Robust (bền vững).',
      'Thực hành a11y cơ bản: dùng thẻ ngữ nghĩa đúng, alt cho ảnh, đủ tương phản màu, điều khiển được bằng bàn phím.',
      'Hiệu năng ảnh hưởng trực tiếp trải nghiệm và SEO. Năm 2026, Google đánh giá qua Core Web Vitals: LCP (tốc độ hiển thị nội dung chính), INP (độ phản hồi tương tác), CLS (độ ổn định bố cục).',
      'Cách tăng tốc trang: giảm kích thước ảnh (WebP/AVIF), gộp/nén file, tải lười (lazy loading), dùng CDN.',
      'Site map và wireframe là công cụ phác thảo cấu trúc site và bố cục trang trước khi viết code.',
    ],
    lab: {
      title: 'Lab 2: Kiểm toán một website thật bằng Lighthouse',
      steps: [
        'Mở Chrome DevTools → tab Lighthouse, chọn chế độ Mobile.',
        'Chạy audit trang chủ dlu.edu.vn (hoặc một trang tin tức): ghi lại 4 điểm Performance, Accessibility, Best Practices, SEO.',
        'Đọc mục Accessibility: liệt kê 3 lỗi phổ biến (thiếu alt, tương phản kém, thiếu label...).',
        'Đọc mục Performance: xác định LCP hiện tại và tài nguyên nào chặn render.',
        'Viết báo cáo ngắn 10 dòng đề xuất 5 cải tiến cho trang vừa kiểm toán.',
      ],
      code: `<!-- Ví dụ cải thiện accessibility -->
<!-- ❌ Kém -->
<img src="logo.png">
<div onclick="submit()">Gửi</div>

<!-- ✅ Tốt -->
<img src="logo.png" alt="Logo Trường Đại học Đà Lạt">
<button type="submit">Gửi</button>`,
    },
    quiz: [
      { q: 'POUR trong WCAG KHÔNG bao gồm nguyên tắc nào?', o: ['Perceivable', 'Operable', 'Optimized', 'Robust'], a: 2, e: 'POUR = Perceivable, Operable, Understandable, Robust. "Optimized" không thuộc bộ này.' },
      { q: 'Progressive Enhancement nghĩa là gì?', o: ['Chỉ hỗ trợ trình duyệt mới nhất', 'Xây nền cơ bản hoạt động mọi nơi rồi nâng cấp dần', 'Giảm dần tính năng khi trình duyệt cũ', 'Tự động nâng cấp trình duyệt'], a: 1, e: 'Bắt đầu từ HTML nền tảng chạy được ở mọi nơi, sau đó thêm CSS/JS nâng cao.' },
      { q: 'Chỉ số LCP đo điều gì?', o: ['Độ ổn định bố cục', 'Thời gian hiển thị phần nội dung lớn nhất', 'Độ trễ phản hồi tương tác', 'Số request HTTP'], a: 1, e: 'Largest Contentful Paint: thời điểm phần tử nội dung lớn nhất hiển thị xong.' },
      { q: 'Thuộc tính alt của ảnh phục vụ chủ yếu cho ai?', o: ['Công cụ tìm kiếm và người dùng trình đọc màn hình', 'Chỉ để trang trí', 'Nhà quảng cáo', 'Chỉ dành cho lập trình viên'], a: 0, e: 'alt giúp trình đọc màn hình mô tả ảnh cho người khiếm thị và hỗ trợ SEO.' },
      { q: 'Cách nào KHÔNG giúp cải thiện hiệu năng trang?', o: ['Dùng ảnh WebP/AVIF', 'Lazy loading ảnh', 'Tăng số lượng file JS chặn render', 'Dùng CDN'], a: 2, e: 'JS chặn render càng nhiều thì trang hiển thị càng chậm.' },
    ],
  },
]
