// Bài giảng chi tiết & lab chi tiết — Phần I (Ngày 1–2)
export default {
  1: {
    theory: [
      {
        h: 'Nghề web năm 2026: ai làm gì trong một dự án?',
        p: [
          'Robbins mở đầu giáo trình bằng câu hỏi "Where do I start?" và câu trả lời là: tùy bạn muốn đứng ở đâu trong "ngôi làng" làm web. Một dự án web chuyên nghiệp có các vai trò chính: UX designer nghiên cứu người dùng và thiết kế luồng trải nghiệm; UI/Visual designer quyết định giao diện, màu sắc, typography; Frontend developer biến thiết kế thành HTML/CSS/JavaScript chạy trong trình duyệt; Backend developer xây server, cơ sở dữ liệu, API; ngoài ra còn Content strategist, SEO, DevOps, Product manager.',
          'Năm 2026, ranh giới các vai trò mờ hơn thời điểm sách xuất bản: một frontend developer thường phải hiểu cả UX cơ bản, biết deploy (DevOps nhẹ) và dùng thành thạo AI assistant. Nhưng nền tảng không đổi: mọi vai trò đều cần hiểu HTML, CSS, JavaScript hoạt động thế nào — đó chính là nội dung 30 ngày này.',
        ],
        note: 'Sinh viên IT không nhất thiết trở thành designer, nhưng phải "đọc" được thiết kế và giao tiếp được với designer — đây là kỹ năng được nhà tuyển dụng đánh giá cao.',
      },
      {
        h: 'Internet ≠ Web: mô hình client–server và giao thức HTTP',
        p: [
          'Internet là hạ tầng vật lý + logic: cáp quang, router, và bộ giao thức TCP/IP nối hàng tỷ thiết bị. Web chỉ là MỘT dịch vụ chạy trên Internet (bên cạnh email, FTP, VoIP...), hoạt động theo giao thức HTTP/HTTPS. Nói "Internet chết" và "Web chết" là hai chuyện khác nhau.',
          'Mô hình client–server: máy chủ web (server) là máy tính chạy phần mềm phục vụ (Apache, Nginx, hoặc các nền tảng đám mây) luôn trực chờ yêu cầu; trình duyệt (client) gửi HTTP request và nhận HTTP response. Mỗi response kèm mã trạng thái: 200 OK (thành công), 301/302 (chuyển hướng), 404 (không tìm thấy), 500 (lỗi server). Bạn sẽ gặp các mã này hằng ngày trong DevTools.',
          'HTTPS = HTTP + mã hóa TLS. Năm 2026 gần như 100% website dùng HTTPS; trình duyệt gắn nhãn "Not secure" cho trang HTTP thuần và nhiều API chỉ hoạt động trên HTTPS (geolocation, camera, service worker).',
        ],
      },
      {
        h: 'Giải phẫu một URL và hành trình của một trang web',
        p: [
          'URL (Uniform Resource Locator) có cấu trúc: giao-thức://tên-miền/đường-dẫn?truy-vấn#fragment. Ví dụ https://dlu.edu.vn/tuyen-sinh/2026?nganh=cntt#hoc-phi gồm: giao thức https, tên miền dlu.edu.vn (trong đó .vn là top-level domain, dlu là tên đăng ký, edu là cấp hai), đường dẫn /tuyen-sinh/2026, chuỗi truy vấn ?nganh=cntt và fragment #hoc-phi trỏ tới một vị trí trong trang.',
          'Khi bạn gõ URL và nhấn Enter, chuỗi sự kiện xảy ra trong vài trăm mili-giây: (1) trình duyệt hỏi DNS "dlu.edu.vn ở địa chỉ IP nào?"; (2) mở kết nối TCP/TLS tới IP đó; (3) gửi HTTP request; (4) server trả về file HTML; (5) trình duyệt đọc HTML, phát hiện các tài nguyên phụ (CSS, JS, ảnh, font) và gửi tiếp hàng chục request; (6) trình duyệt dựng trang: parse HTML thành cây DOM, áp CSS, chạy JavaScript, vẽ lên màn hình (render).',
          'Hiểu chuỗi này giải thích vì sao trang chậm: quá nhiều request, file quá nặng, hoặc JavaScript chặn quá trình dựng trang — các chủ đề tối ưu ta sẽ quay lại ở Ngày 2 và Ngày 26.',
        ],
        code: `https://  dlu.edu.vn  /tuyen-sinh/2026  ?nganh=cntt  #hoc-phi
└─giao thức─┘└──tên miền──┘└───đường dẫn───┘└──truy vấn──┘└─fragment─┘`,
      },
      {
        h: 'Bộ ba HTML – CSS – JavaScript và môi trường làm việc',
        p: [
          'Một trang web được tách thành ba tầng độc lập: HTML mô tả CẤU TRÚC và ý nghĩa nội dung ("đây là tiêu đề, đây là đoạn văn, đây là ảnh"); CSS mô tả TRÌNH BÀY ("tiêu đề màu xanh, chữ 2rem, canh giữa"); JavaScript mô tả HÀNH VI ("bấm nút này thì mở menu"). Tách ba tầng giúp sửa giao diện không đụng nội dung, đổi hành vi không phá cấu trúc — nguyên tắc này là kim chỉ nam của toàn khóa học.',
          'Bộ công cụ tối thiểu của khóa học: VS Code (miễn phí, kèm extension Live Server để tự tải lại trang, Prettier để format code), trình duyệt Chrome hoặc Firefox với DevTools (F12), và về sau là Node.js + Git. Tất cả đều miễn phí và chạy tốt trên máy cấu hình phổ thông.',
        ],
        note: 'Phím tắt DevTools cần nhớ ngay từ hôm nay: F12 mở DevTools, Ctrl+Shift+C chọn phần tử trên trang, Ctrl+Shift+M giả lập màn hình di động.',
      },
    ],
    lab: {
      title: 'Lab 1: Trang web đầu tiên & quan sát HTTP bằng DevTools',
      objective: 'Một trang index.html tự viết + báo cáo ngắn 5 quan sát từ tab Network',
      time: '60–90 phút',
      prep: ['Cài VS Code', 'Cài extension Live Server', 'Trình duyệt Chrome/Firefox'],
      steps: [
        {
          t: 'Chuẩn bị môi trường làm việc',
          mota: 'Cài VS Code từ code.visualstudio.com. Vào tab Extensions (Ctrl+Shift+X), cài "Live Server" (Ritwick Dey) và "Prettier". Tạo thư mục D:\\ThietKeWeb\\lab01 (đường dẫn không dấu, không khoảng trắng) và mở bằng File → Open Folder.',
        },
        {
          t: 'Viết trang HTML đầu tiên',
          mota: 'Tạo file index.html. Mẹo: gõ dấu chấm than ! rồi nhấn Tab — VS Code (Emmet) tự sinh bộ khung HTML5. Sửa lang thành "vi" và điền nội dung:',
          code: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Trang đầu tiên của tôi</title>
</head>
<body>
  <h1>Xin chào Web 2026!</h1>
  <p>Tôi là [họ tên], sinh viên lớp [lớp].</p>
  <p>Đây là trang web đầu tiên tôi tự viết bằng tay.</p>
</body>
</html>`,
        },
        {
          t: 'Chạy bằng Live Server và thí nghiệm chỉnh sửa',
          mota: 'Chuột phải vào index.html → "Open with Live Server" → trang mở tại http://127.0.0.1:5500. Sửa nội dung h1, nhấn Ctrl+S — trang tự tải lại. Thử cố ý xóa </p> của một đoạn, lưu, quan sát trình duyệt vẫn "đoán" được nhưng cấu trúc có thể sai — rồi sửa lại.',
        },
        {
          t: 'Quan sát HTTP request của chính trang mình',
          mota: 'Nhấn F12 → tab Network → tick "Disable cache" → nhấn Ctrl+R tải lại. Bạn sẽ thấy request đầu tiên là index.html với Status 200. Bấm vào request đó, xem tab Headers: Request URL, Request Method (GET), Status Code, và Response xem đúng nội dung HTML mình viết.',
        },
        {
          t: 'Mổ xẻ một trang web thật',
          mota: 'Mở tab mới vào một trang báo (vd vnexpress.net), F12 → Network → tải lại. Ghi vào báo cáo: (1) tổng số request; (2) tổng dung lượng tải (dòng dưới cùng); (3) thời gian Load; (4) có bao nhiêu loại tài nguyên (lọc theo Doc/CSS/JS/Img/Font); (5) request nào nặng nhất.',
        },
        {
          t: 'Sửa "nóng" trang báo bằng tab Elements',
          mota: 'Trong DevTools tab Elements, nhấn Ctrl+Shift+C rồi bấm vào tiêu đề bài báo, double-click phần chữ và sửa thành tên bạn. Chụp màn hình. Nhấn F5 — nội dung trở lại như cũ. Rút ra kết luận: DevTools chỉ sửa BẢN SAO trong máy bạn, không đụng gì đến server.',
        },
      ],
      checklist: [
        'index.html có đủ doctype, html lang="vi", meta charset, title, và hiển thị đúng tiếng Việt có dấu',
        'Live Server tự tải lại khi lưu file',
        'Chỉ ra được request HTML đầu tiên và mã 200 trong tab Network',
        'Báo cáo đủ 5 quan sát về trang báo + ảnh chụp màn hình sửa "nóng"',
        'Giải thích được vì sao sửa trong DevTools không ảnh hưởng người khác',
      ],
    },
  },

  2: {
    theory: [
      {
        h: 'Web ở khắp mọi nơi: vì sao không thể thiết kế cho "một màn hình"',
        p: [
          'Chương 3 của Robbins nêu sự thật nền tảng: bạn không bao giờ biết trước trang của mình sẽ hiển thị ở đâu — điện thoại 360px hay màn hình 4K, mạng 5G hay 3G chập chờn, chuột hay ngón tay hay trình đọc màn hình. Vì vậy "trang web nhìn giống hệt nhau ở mọi nơi" là mục tiêu sai; mục tiêu đúng là "trải nghiệm phù hợp ở mọi nơi".',
          'Hệ quả thực hành: layout phải linh hoạt (Ngày 16–18), ảnh phải co giãn (Ngày 6, 26), vùng bấm phải đủ lớn cho ngón tay (~44px), và nội dung quan trọng không được phụ thuộc vào một công nghệ duy nhất. Thống kê 2026: hơn 60% lượt truy cập web toàn cầu đến từ thiết bị di động — thiết kế mobile-first không còn là lựa chọn mà là mặc định.',
        ],
      },
      {
        h: 'Progressive Enhancement: xây từ nền vững lên',
        p: [
          'Progressive Enhancement (nâng cao dần) là chiến lược: tầng 1 — HTML ngữ nghĩa chứa toàn bộ nội dung, hoạt động được ở MỌI trình duyệt kể cả cũ kỹ nhất; tầng 2 — CSS làm đẹp cho trình duyệt hiểu nó; tầng 3 — JavaScript thêm tương tác cho môi trường hỗ trợ. Nếu CSS hỏng, nội dung vẫn đọc được; nếu JS bị chặn, form vẫn gửi được.',
          'Chiến lược ngược lại là Graceful Degradation: xây cho trình duyệt xịn trước rồi "vá" cho trình duyệt cũ — dễ bỏ sót. Trong khóa học ta luôn theo Progressive Enhancement: đó là lý do 8 ngày HTML đứng trước CSS và JavaScript.',
        ],
        note: 'Câu thần chú của Jeremy Keith: "HTML là tầng không được phép hỏng." Khi phân vân đặt tính năng ở tầng nào, hãy hỏi: nếu tầng này không tải được thì người dùng còn làm được việc chính không?',
      },
      {
        h: 'Accessibility (a11y): bốn nguyên tắc POUR của WCAG',
        p: [
          'Khoảng 15% dân số thế giới sống với một dạng khuyết tật — thị giác (mù, kém thị lực, mù màu), thính giác, vận động (không dùng được chuột), nhận thức. Web Content Accessibility Guidelines (WCAG) của W3C tổ chức các yêu cầu quanh 4 nguyên tắc viết tắt POUR: Perceivable — nội dung nhận biết được bằng nhiều giác quan (ảnh có alt, video có phụ đề, tương phản đủ); Operable — thao tác được bằng nhiều cách (toàn bộ chức năng dùng được bằng bàn phím); Understandable — dễ hiểu, nhất quán, báo lỗi rõ ràng; Robust — hoạt động bền vững với nhiều công nghệ hỗ trợ (HTML hợp lệ, đúng ngữ nghĩa).',
          'A11y không phải "tính năng thêm cho thiểu số": phụ đề giúp người xem video nơi ồn ào, tương phản tốt giúp người dùng ngoài nắng, điều khiển bàn phím giúp power-user. Và từ 2025, nhiều thị trường (EU với European Accessibility Act) đã BẮT BUỘC accessibility về pháp lý — kỹ sư không biết a11y là kỹ sư thiếu chuẩn nghề.',
          'Trong khóa học, a11y không phải một chương riêng mà cài vào từng ngày: alt (Ngày 6), label form (Ngày 8), scope bảng (Ngày 7), focus-visible (Ngày 12), prefers-reduced-motion (Ngày 19), và là 20% điểm đồ án.',
        ],
      },
      {
        h: 'Hiệu năng và Core Web Vitals',
        p: [
          'Tốc độ là một phần của trải nghiệm: nghiên cứu của Google cho thấy xác suất người dùng rời trang tăng vọt khi thời gian tải vượt 3 giây. Từ nhiều năm nay Google dùng bộ chỉ số Core Web Vitals để đo và XẾP HẠNG tìm kiếm: LCP (Largest Contentful Paint) — thời điểm khối nội dung lớn nhất hiện xong, mục tiêu < 2.5s; INP (Interaction to Next Paint) — độ trễ phản hồi khi người dùng tương tác, mục tiêu < 200ms; CLS (Cumulative Layout Shift) — mức độ "nhảy" bố cục khi tải, mục tiêu < 0.1.',
          'Thủ phạm phổ biến và thuốc chữa: ảnh quá nặng → nén + WebP/AVIF + đúng kích thước; quá nhiều JS chặn render → defer, tách nhỏ; font tải chậm → font-display: swap; ảnh không khai kích thước → width/height để giữ chỗ (chống CLS). Công cụ đo: Lighthouse trong DevTools (đo trong máy) và PageSpeed Insights (đo dữ liệu người dùng thật).',
        ],
        code: `Core Web Vitals — ngưỡng "Tốt" (2026):
LCP  < 2.5s    hiển thị nội dung chính
INP  < 200ms   phản hồi tương tác
CLS  < 0.1     độ ổn định bố cục`,
      },
      {
        h: 'Site map và wireframe: thiết kế trước khi code',
        p: [
          'Trước khi viết dòng HTML nào cho một website nhiều trang, hãy vẽ site map — sơ đồ cây các trang và quan hệ điều hướng (Trang chủ → Giới thiệu, Tin tức, Liên hệ...) — để thống nhất phạm vi. Sau đó vẽ wireframe — bản phác bố cục từng trang bằng khối xám: đâu là logo, menu, nội dung chính, sidebar — chưa cần màu sắc hay font.',
          'Hai tài liệu này rẻ nhất để sửa (vài phút vẽ lại) so với sửa code (vài giờ) hay sửa sản phẩm đã ra mắt (vài tuần). Mini Project 1 (Ngày 10) và đồ án cuối khóa đều yêu cầu nộp site map + wireframe trước khi code.',
        ],
      },
    ],
    lab: {
      title: 'Lab 2: Kiểm toán một website thật bằng Lighthouse',
      objective: 'Báo cáo audit 1 trang (4 điểm số + 5 đề xuất cải tiến có căn cứ)',
      time: '60 phút',
      prep: ['Chrome (Lighthouse có sẵn trong DevTools)', 'Chọn 1 website: dlu.edu.vn hoặc trang tin tức'],
      steps: [
        {
          t: 'Chạy audit Lighthouse chế độ Mobile',
          mota: 'Mở trang cần kiểm toán → F12 → tab Lighthouse → chọn Mode: Navigation, Device: Mobile, tick đủ 4 categories → Analyze page load. Chờ 30–60 giây. Ghi lại 4 điểm: Performance, Accessibility, Best Practices, SEO (chụp màn hình).',
        },
        {
          t: 'Đọc mục Performance',
          mota: 'Cuộn xuống phần Metrics: ghi lại LCP, CLS, TBT. Mở phần Opportunities/Diagnostics: liệt kê 3 khuyến nghị lớn nhất (thường là "Properly size images", "Eliminate render-blocking resources", "Serve images in next-gen formats") và ước lượng tiết kiệm mà Lighthouse hiển thị.',
        },
        {
          t: 'Đọc mục Accessibility và đối chiếu POUR',
          mota: 'Liệt kê các lỗi được báo (thiếu alt, tương phản kém, thiếu label, thiếu lang...). Với mỗi lỗi, ghi rõ nó vi phạm nguyên tắc nào trong POUR và ảnh hưởng nhóm người dùng nào. Bấm vào từng lỗi để xem đúng phần tử vi phạm.',
        },
        {
          t: 'Kiểm tra thủ công bằng bàn phím',
          mota: 'Đặt chuột sang một bên. Dùng phím Tab đi qua toàn trang: có nhìn thấy phần tử nào đang được focus không? Có nhảy tới được menu, form, nút chính không? Ghi nhận xét — đây là bài kiểm tra Operable mà Lighthouse không đo hết được.',
        },
        {
          t: 'Giả lập mạng chậm',
          mota: 'Tab Network → dropdown "No throttling" đổi thành "Slow 4G" → tải lại trang, bấm giờ đến khi đọc được nội dung chính. So sánh với mạng bình thường để cảm nhận trải nghiệm của người dùng mạng yếu.',
        },
        {
          t: 'Viết báo cáo đề xuất',
          mota: 'Tổng hợp thành báo cáo 10–15 dòng: bảng 4 điểm số, 5 đề xuất cải tiến cụ thể xếp theo mức ảnh hưởng (mỗi đề xuất ghi rõ: vấn đề → giải pháp kỹ thuật → chỉ số nào sẽ cải thiện). Đây là dạng tài liệu kỹ sư frontend viết thật trong nghề.',
        },
      ],
      checklist: [
        'Có ảnh chụp 4 điểm Lighthouse chế độ Mobile',
        'Ghi được LCP/CLS thực tế và 3 khuyến nghị Performance',
        'Mỗi lỗi accessibility được gắn đúng nguyên tắc POUR',
        'Có nhận xét kiểm tra bàn phím thủ công',
        'Báo cáo 5 đề xuất theo mẫu: vấn đề → giải pháp → chỉ số cải thiện',
      ],
    },
  },
}
