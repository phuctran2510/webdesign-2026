// Phần II — HTML (Chương 4–10, Learning Web Design 5th Ed.)
export default [
  {
    id: 3,
    title: 'Tạo trang HTML đầu tiên đúng chuẩn',
    chapters: 'Chương 4',
    goals: [
      'Viết được bộ khung tài liệu HTML5 chuẩn với doctype, head, body',
      'Phân biệt phần tử (element), thẻ (tag) và thuộc tính (attribute)',
      'Xử lý đúng ký tự đặc biệt và tiếng Việt với UTF-8',
    ],
    theory: [
      'Quy trình 5 bước của Robbins: tạo file HTML → gõ nội dung → thêm markup → xem bằng trình duyệt → tinh chỉnh lặp lại.',
      'Bộ khung chuẩn: <!DOCTYPE html> khai báo HTML5; <html lang="vi"> gốc tài liệu; <head> chứa metadata; <body> chứa nội dung hiển thị.',
      '<meta charset="UTF-8"> là bắt buộc để hiển thị tiếng Việt có dấu chính xác.',
      'Phần tử = thẻ mở + nội dung + thẻ đóng, ví dụ <p>...</p>. Phần tử rỗng (empty element) không có nội dung: <img>, <br>, <hr>, <meta>.',
      'Thuộc tính bổ sung thông tin cho phần tử, viết trong thẻ mở: <img src="anh.jpg" alt="Mô tả">.',
      'Ký tự đặc biệt dùng character entity: &lt; (<), &gt; (>), &amp; (&), &copy; (©).',
      'Lỗi thường gặp: quên thẻ đóng, lồng thẻ sai thứ tự, quên dấu nháy thuộc tính. Kiểm tra bằng validator.w3.org.',
    ],
    lab: {
      title: 'Lab 3: Trang giới thiệu quán cà phê "Black Goose Bistro"',
      steps: [
        'Tạo bistro/index.html với đầy đủ doctype, html lang="vi", head, body.',
        'Thêm tiêu đề <h1>, hai đoạn <p> giới thiệu quán, và một ảnh có alt.',
        'Cố ý xóa một thẻ đóng </p> rồi quan sát trình duyệt; sửa lại.',
        'Chèn dòng bản quyền dùng entity: &copy; 2026.',
        'Dán code vào validator.w3.org và sửa cho hết lỗi.',
      ],
      code: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Black Goose Bistro</title>
</head>
<body>
  <h1>Black Goose Bistro</h1>
  <p>Quán cà phê &amp; bánh ngọt thủ công tại Đà Lạt.</p>
  <img src="images/quan.jpg" alt="Không gian quán nhìn từ cửa chính">
  <p><small>&copy; 2026 Black Goose Bistro</small></p>
</body>
</html>`,
    },
    quiz: [
      { q: '<!DOCTYPE html> có tác dụng gì?', o: ['Khai báo phiên bản HTML5 cho trình duyệt', 'Import CSS', 'Tạo tiêu đề trang', 'Khai báo ngôn ngữ tiếng Việt'], a: 0, e: 'Doctype báo cho trình duyệt dùng chế độ chuẩn HTML5.' },
      { q: 'Phần tử nào là phần tử rỗng (empty element)?', o: ['<p>', '<img>', '<h1>', '<em>'], a: 1, e: '<img> không có nội dung và không cần thẻ đóng.' },
      { q: 'Muốn hiển thị dấu < trên trang, ta viết:', o: ['\\<', '&lt;', '&gt;', '<<'], a: 1, e: '&lt; là entity của ký tự <.' },
      { q: 'Thẻ nào KHÔNG nằm trong <head>?', o: ['<title>', '<meta>', '<h1>', '<link>'], a: 2, e: '<h1> là nội dung hiển thị, phải nằm trong <body>.' },
      { q: 'Thiếu <meta charset="UTF-8"> thường gây hậu quả gì với trang tiếng Việt?', o: ['Trang không tải được', 'Chữ có dấu bị lỗi hiển thị', 'Ảnh không hiện', 'CSS không áp dụng'], a: 1, e: 'Sai bảng mã khiến ký tự có dấu hiển thị thành ký tự lạ.' },
    ],
  },
  {
    id: 4,
    title: 'Đánh dấu văn bản ngữ nghĩa (Semantic HTML)',
    chapters: 'Chương 5',
    goals: [
      'Dùng đúng heading h1–h6, đoạn văn, danh sách, trích dẫn',
      'Tổ chức trang bằng thẻ ngữ nghĩa: header, nav, main, article, section, aside, footer',
      'Phân biệt em/strong (ngữ nghĩa) với i/b (trình bày) và div/span (trung tính)',
    ],
    theory: [
      'Semantic markup: chọn thẻ theo Ý NGHĨA nội dung, không theo hình thức hiển thị. Trình duyệt, máy tìm kiếm và trình đọc màn hình đều dựa vào ngữ nghĩa.',
      'Heading h1–h6 tạo dàn ý tài liệu; mỗi trang chỉ nên có một h1, không nhảy cóc cấp (h2 → h4).',
      'Ba loại danh sách: <ul> không thứ tự, <ol> có thứ tự, <dl>/<dt>/<dd> danh sách định nghĩa.',
      'Trích dẫn khối <blockquote>, trích dẫn trong dòng <q>; <cite> ghi nguồn; <pre> giữ nguyên định dạng; <code> cho mã nguồn.',
      'Thẻ cấu trúc HTML5: <header>, <nav>, <main> (duy nhất một), <article> (nội dung độc lập), <section> (nhóm theo chủ đề), <aside>, <footer>.',
      '<em> nhấn mạnh ngữ điệu, <strong> tầm quan trọng — có ngữ nghĩa; <i>, <b> chỉ là hình thức. <div> và <span> hoàn toàn trung tính, chỉ dùng khi không có thẻ ngữ nghĩa phù hợp.',
      'Thuộc tính toàn cục quan trọng: id (định danh duy nhất), class (nhóm để CSS bám vào), lang, title.',
    ],
    lab: {
      title: 'Lab 4: Bài báo tin tức có cấu trúc ngữ nghĩa đầy đủ',
      steps: [
        'Tạo trang tin tức về "Tuần lễ Công nghệ DLU 2026" với header/nav/main/footer.',
        'Trong main, dùng <article> chứa h1, đoạn mở, và 2 <section> có h2.',
        'Thêm <blockquote> trích lời phát biểu, kèm <cite>.',
        'Thêm <ul> lịch sự kiện 3 ngày và <ol> các bước đăng ký.',
        'Kiểm tra dàn ý heading bằng extension HTML5 Outliner hoặc DevTools Accessibility Tree.',
      ],
      code: `<body>
  <header>
    <h1>Tin tức DLU</h1>
    <nav>
      <ul>
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#">Sự kiện</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <h2>Tuần lễ Công nghệ DLU 2026</h2>
      <p>Sự kiện thường niên lớn nhất của khoa CNTT...</p>
      <blockquote>
        <p>"Sinh viên là trung tâm của đổi mới."</p>
        <cite>— Trưởng khoa CNTT</cite>
      </blockquote>
      <section>
        <h3>Lịch sự kiện</h3>
        <ul><li>Ngày 1: Khai mạc</li><li>Ngày 2: Hackathon</li></ul>
      </section>
    </article>
  </main>
  <footer><p>&copy; 2026 Khoa CNTT</p></footer>
</body>`,
    },
    quiz: [
      { q: 'Thẻ nào chỉ nên xuất hiện MỘT lần trong body?', o: ['<section>', '<main>', '<article>', '<aside>'], a: 1, e: '<main> đại diện nội dung chính duy nhất của trang.' },
      { q: 'Khác biệt chính giữa <strong> và <b>?', o: ['Không khác gì', '<strong> mang ngữ nghĩa "quan trọng", <b> chỉ là in đậm hình thức', '<b> mới là chuẩn HTML5', '<strong> chỉ dùng trong heading'], a: 1, e: 'Trình đọc màn hình có thể nhấn giọng với <strong>; <b> thuần trình bày.' },
      { q: 'Danh sách định nghĩa dùng bộ thẻ nào?', o: ['<ul>/<li>', '<ol>/<li>', '<dl>/<dt>/<dd>', '<list>/<item>'], a: 2, e: '<dl> chứa cặp thuật ngữ <dt> và mô tả <dd>.' },
      { q: 'Khi nào nên dùng <div>?', o: ['Luôn luôn, thay mọi thẻ khác', 'Khi cần nhóm phần tử mà không thẻ ngữ nghĩa nào phù hợp', 'Thay cho <p>', 'Thay cho <main>'], a: 1, e: '<div> là lựa chọn cuối cùng khi không có thẻ ngữ nghĩa thích hợp.' },
      { q: '<article> phù hợp nhất cho nội dung nào?', o: ['Menu điều hướng', 'Một bài viết độc lập, tự đứng được', 'Chân trang', 'Thanh bên'], a: 1, e: '<article> dành cho nội dung hoàn chỉnh, có thể tách khỏi trang mà vẫn có nghĩa.' },
    ],
  },
  {
    id: 5,
    title: 'Liên kết: xương sống của Web',
    chapters: 'Chương 6',
    goals: [
      'Viết liên kết tuyệt đối và tương đối chính xác trong cây thư mục',
      'Tạo liên kết đến vị trí trong trang (fragment), email và điện thoại',
      'Dùng target và rel đúng cách, an toàn',
    ],
    theory: [
      'Thẻ <a href="...">nhãn</a> — hyperlink là bản chất của "web". Nhãn liên kết nên mô tả đích đến, tránh "bấm vào đây".',
      'URL tuyệt đối chứa đầy đủ giao thức + tên miền, dùng khi trỏ ra site khác: https://dlu.edu.vn.',
      'URL tương đối tính từ vị trí file hiện tại: cùng thư mục (page.html), vào thư mục con (docs/page.html), lùi ra một cấp (../page.html), từ gốc site (/images/logo.png).',
      'Liên kết trong trang: đặt id cho đích (<h2 id="lien-he">) rồi trỏ tới bằng <a href="#lien-he">. Có thể kết hợp: trang.html#muc-3.',
      'target="_blank" mở tab mới — luôn kèm rel="noopener" để bảo mật (chặn trang mới điều khiển trang gốc).',
      'Liên kết đặc biệt: mailto:email@dlu.edu.vn (mở trình gửi mail), tel:+842633822246 (gọi trên di động).',
      'Thư mục gốc của site chứa index.html — file được server phục vụ mặc định khi URL chỉ ghi tên thư mục.',
    ],
    lab: {
      title: 'Lab 5: Website nhiều trang với điều hướng hoàn chỉnh',
      steps: [
        'Tạo cấu trúc: index.html, gioi-thieu.html, thư mục mon-hoc/ chứa html-css.html.',
        'Làm menu <nav> dùng đường dẫn tương đối, xuất hiện ở cả 3 trang.',
        'Từ mon-hoc/html-css.html, tạo link về trang chủ bằng ../index.html.',
        'Trong gioi-thieu.html dài, tạo mục lục đầu trang liên kết tới các id bên dưới và nút "Về đầu trang".',
        'Thêm link email liên hệ và một link ngoài mở tab mới với rel="noopener".',
      ],
      code: `<!-- Trong mon-hoc/html-css.html -->
<nav>
  <a href="../index.html">Trang chủ</a>
  <a href="../gioi-thieu.html">Giới thiệu</a>
  <a href="html-css.html">HTML &amp; CSS</a>
</nav>

<a href="#top">Về đầu trang</a>
<a href="mailto:phuctv@dlu.edu.vn">Liên hệ giảng viên</a>
<a href="https://developer.mozilla.org" target="_blank" rel="noopener">
  Tài liệu MDN
</a>`,
    },
    quiz: [
      { q: 'Từ trang /mon-hoc/bai1.html muốn liên kết về /index.html, đường dẫn tương đối đúng là:', o: ['index.html', './index.html', '../index.html', 'mon-hoc/index.html'], a: 2, e: '../ lùi ra khỏi thư mục mon-hoc để về gốc.' },
      { q: 'Vì sao target="_blank" nên kèm rel="noopener"?', o: ['Để trang mở nhanh hơn', 'Ngăn trang mới truy cập window.opener của trang gốc', 'Bắt buộc bởi HTML5', 'Để SEO tốt hơn'], a: 1, e: 'Không có noopener, trang đích có thể điều khiển trang nguồn (tabnabbing).' },
      { q: 'Liên kết đến mục có id="phan-2" trong cùng trang:', o: ['<a href="phan-2">', '<a href="#phan-2">', '<a href="id:phan-2">', '<a name="phan-2">'], a: 1, e: 'Dấu # trỏ đến fragment identifier trong trang.' },
      { q: 'Server phục vụ file nào mặc định khi URL chỉ ghi tên thư mục?', o: ['home.html', 'default.htm luôn luôn', 'index.html', 'main.html'], a: 2, e: 'index.html là quy ước file mặc định phổ biến nhất.' },
      { q: 'Nhãn liên kết nào tốt nhất cho accessibility?', o: ['Bấm vào đây', 'Link', 'Xem thêm', 'Tải đề cương môn Thiết kế Web (PDF)'], a: 3, e: 'Nhãn mô tả rõ đích đến giúp người dùng trình đọc màn hình hiểu ngay.' },
    ],
  },
  {
    id: 6,
    title: 'Hình ảnh trên trang web',
    chapters: 'Chương 7',
    goals: [
      'Nhúng ảnh với img, viết alt hiệu quả',
      'Dùng ảnh responsive: srcset, sizes, picture',
      'Chọn đúng định dạng và biết lazy loading chuẩn 2026',
    ],
    theory: [
      '<img src="..." alt="..."> — hai thuộc tính bắt buộc. alt mô tả nội dung/chức năng ảnh; ảnh trang trí thuần túy dùng alt="" (rỗng, có chủ đích).',
      'Luôn khai báo width và height (hoặc aspect-ratio trong CSS) để trình duyệt giữ chỗ, tránh nhảy bố cục (CLS).',
      'Định dạng ảnh: JPEG cho ảnh chụp, PNG cho ảnh cần trong suốt, GIF cho hoạt hình đơn giản, SVG cho logo/icon vector; năm 2026 ưu tiên WebP/AVIF vì nhẹ hơn 30–50%.',
      'Ảnh responsive theo mật độ điểm ảnh: srcset="anh.jpg 1x, anh@2x.jpg 2x" cho màn hình Retina.',
      'Ảnh responsive theo bề rộng: srcset + sizes để trình duyệt tự chọn phiên bản vừa khung nhìn — tiết kiệm băng thông di động.',
      '<picture> với nhiều <source> cho art direction (đổi khung hình theo màn hình) hoặc cung cấp AVIF/WebP kèm fallback JPEG.',
      'loading="lazy" trì hoãn tải ảnh ngoài màn hình — chuẩn trình duyệt từ lâu, mặc định nên dùng cho ảnh dưới màn hình đầu.',
      '<figure> + <figcaption> gắn chú thích ngữ nghĩa cho hình.',
    ],
    lab: {
      title: 'Lab 6: Trang album ảnh Đà Lạt responsive',
      steps: [
        'Chuẩn bị 3 ảnh phong cảnh, xuất mỗi ảnh 3 cỡ: 480w, 960w, 1600w (dùng squoosh.app, xuất cả WebP).',
        'Nhúng ảnh hero bằng <picture>: source AVIF/WebP + img JPEG fallback.',
        'Các ảnh còn lại dùng srcset/sizes và loading="lazy".',
        'Bọc mỗi ảnh trong <figure> với <figcaption> địa danh.',
        'Mở DevTools → Network, giả lập màn hình nhỏ, xác nhận trình duyệt tải đúng ảnh cỡ nhỏ.',
      ],
      code: `<picture>
  <source srcset="hodalat.avif" type="image/avif">
  <source srcset="hodalat.webp" type="image/webp">
  <img src="hodalat.jpg" alt="Hồ Xuân Hương lúc bình minh"
       width="1600" height="900">
</picture>

<img src="langbiang-480.jpg"
     srcset="langbiang-480.jpg 480w,
             langbiang-960.jpg 960w,
             langbiang-1600.jpg 1600w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="Đỉnh Langbiang nhìn từ chân núi"
     loading="lazy" width="1600" height="1067">`,
    },
    quiz: [
      { q: 'Ảnh thuần trang trí nên có alt như thế nào?', o: ['Bỏ hẳn thuộc tính alt', 'alt="" (rỗng)', 'alt="ảnh"', 'alt="decoration"'], a: 1, e: 'alt rỗng báo trình đọc màn hình bỏ qua; bỏ hẳn alt là lỗi validation.' },
      { q: 'Khai báo width/height trên img giúp gì?', o: ['Ảnh nét hơn', 'Giữ chỗ, giảm CLS (nhảy bố cục)', 'Tải nhanh hơn', 'SEO tốt hơn'], a: 1, e: 'Trình duyệt biết trước tỷ lệ để dành chỗ, trang không bị giật khi ảnh tải xong.' },
      { q: 'Định dạng nào phù hợp nhất cho logo cần phóng to thu nhỏ không vỡ?', o: ['JPEG', 'PNG', 'SVG', 'GIF'], a: 2, e: 'SVG là vector, sắc nét ở mọi kích thước.' },
      { q: 'Thuộc tính sizes trong img dùng để làm gì?', o: ['Đặt kích thước hiển thị cố định', 'Cho trình duyệt biết ảnh sẽ chiếm bao nhiêu bề rộng khung nhìn để chọn file trong srcset', 'Nén ảnh', 'Đổi định dạng ảnh'], a: 1, e: 'sizes + srcset (đơn vị w) giúp trình duyệt chọn phiên bản tối ưu.' },
      { q: 'loading="lazy" nên áp dụng cho ảnh nào?', o: ['Mọi ảnh kể cả hero đầu trang', 'Ảnh nằm dưới màn hình đầu tiên', 'Chỉ ảnh SVG', 'Chỉ ảnh nền CSS'], a: 1, e: 'Ảnh hero cần hiện ngay (ảnh hưởng LCP); ảnh dưới màn hình mới nên lazy.' },
    ],
  },
  {
    id: 7,
    title: 'Bảng dữ liệu (Tables)',
    chapters: 'Chương 8',
    goals: [
      'Dựng bảng đúng ngữ nghĩa: table, tr, th, td, caption',
      'Gộp ô bằng colspan/rowspan',
      'Làm bảng truy cập được với scope và chỉ dùng bảng cho dữ liệu',
    ],
    theory: [
      'Bảng CHỈ dành cho dữ liệu dạng hàng-cột (thời khóa biểu, bảng điểm, so sánh thông số) — tuyệt đối không dùng bảng để dàn trang như thời 199x.',
      'Cấu trúc tối thiểu: <table> chứa <tr> (hàng), trong hàng có <th> (ô tiêu đề) và <td> (ô dữ liệu).',
      '<caption> đặt ngay sau thẻ mở table, là tiêu đề ngữ nghĩa của bảng — quan trọng cho trình đọc màn hình.',
      'Nhóm hàng: <thead>, <tbody>, <tfoot> giúp cấu trúc rõ và cho phép CSS/in ấn xử lý riêng từng phần.',
      'Gộp ô: colspan gộp theo chiều ngang, rowspan gộp theo chiều dọc — đếm cẩn thận tổng số cột mỗi hàng.',
      'Accessibility: <th scope="col"> cho tiêu đề cột, <th scope="row"> cho tiêu đề hàng, giúp trình đọc màn hình đọc đúng ngữ cảnh từng ô.',
      'Bảng rộng trên di động: bọc trong khối cuộn ngang (overflow-x: auto) — kỹ thuật sẽ học kỹ ở phần CSS.',
    ],
    lab: {
      title: 'Lab 7: Thời khóa biểu học kỳ có gộp ô',
      steps: [
        'Dựng bảng thời khóa biểu 5 cột (Thứ 2 → Thứ 6), 4 hàng tiết học.',
        'Thêm <caption>Thời khóa biểu HK1 2026–2027</caption> và thead/tbody.',
        'Môn học kéo dài 2 tiết liên tiếp: dùng rowspan="2".',
        'Đặt scope="col" cho tiêu đề thứ, scope="row" cho tiêu đề tiết.',
        'Kiểm tra bảng bằng trình đọc màn hình (NVDA) hoặc Accessibility Tree trong DevTools.',
      ],
      code: `<table>
  <caption>Thời khóa biểu HK1 2026–2027</caption>
  <thead>
    <tr>
      <th scope="col">Tiết</th>
      <th scope="col">Thứ 2</th>
      <th scope="col">Thứ 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1–2</th>
      <td rowspan="2">Thiết kế Web<br>(A25.101)</td>
      <td>Toán rời rạc</td>
    </tr>
    <tr>
      <th scope="row">3–4</th>
      <td>Python OOP</td>
    </tr>
  </tbody>
</table>`,
    },
    quiz: [
      { q: 'Khi nào nên dùng <table>?', o: ['Dàn bố cục trang', 'Hiển thị dữ liệu có quan hệ hàng-cột', 'Tạo menu điều hướng', 'Căn giữa nội dung'], a: 1, e: 'Bảng là cho dữ liệu; dàn trang dùng CSS Grid/Flexbox.' },
      { q: '<caption> phải đặt ở đâu?', o: ['Trước <table>', 'Ngay sau thẻ mở <table>', 'Cuối bảng', 'Trong <thead>'], a: 1, e: 'Theo chuẩn, caption là con đầu tiên của table.' },
      { q: 'Muốn một ô chiếm 3 cột, ta dùng:', o: ['rowspan="3"', 'colspan="3"', 'span="3"', 'width="3"'], a: 1, e: 'colspan gộp ô theo chiều ngang (cột).' },
      { q: 'scope="row" trên <th> có ý nghĩa gì?', o: ['Ô là tiêu đề của cả hàng đó', 'Ô là tiêu đề của cột', 'Ô bị ẩn', 'Ô được in đậm'], a: 0, e: 'Giúp công nghệ hỗ trợ biết th này mô tả các ô cùng hàng.' },
      { q: 'Bộ ba thẻ nhóm hàng trong bảng là:', o: ['header/body/footer', 'thead/tbody/tfoot', 'top/middle/bottom', 'th/td/tr'], a: 1, e: 'thead, tbody, tfoot nhóm các hàng theo vai trò.' },
    ],
  },
  {
    id: 8,
    title: 'Biểu mẫu (Forms) — cổng nhập liệu của Web',
    chapters: 'Chương 9',
    goals: [
      'Dựng form với đầy đủ loại điều khiển: text, email, radio, checkbox, select, textarea',
      'Gắn label đúng cách và nhóm bằng fieldset/legend',
      'Dùng kiểu input HTML5 và validation phía client',
    ],
    theory: [
      '<form action="URL-xử-lý" method="get|post">: GET gắn dữ liệu lên URL (tìm kiếm, lọc), POST gửi trong thân request (đăng ký, đăng nhập, dữ liệu nhạy cảm).',
      'Mỗi điều khiển cần thuộc tính name — chính là "tên biến" server nhận được; không có name thì dữ liệu không được gửi.',
      '<label for="id-cua-input"> liên kết nhãn với điều khiển: bấm vào nhãn là focus vào ô nhập, trình đọc màn hình đọc đúng — bắt buộc cho accessibility.',
      'Kiểu input HTML5: email, tel, url, number, date, range, color, search — bàn phím di động tự đổi phù hợp, trình duyệt tự kiểm tra định dạng.',
      'Radio (chọn 1 trong nhóm cùng name), checkbox (chọn nhiều), <select>/<option> (danh sách thả), <textarea> (văn bản dài), <button type="submit">.',
      'Validation phía client: required, minlength/maxlength, min/max, pattern (regex). Lưu ý: chỉ là lớp tiện lợi — server luôn phải kiểm tra lại.',
      '<fieldset> + <legend> nhóm các điều khiển liên quan (vd: nhóm radio giới tính); placeholder chỉ là gợi ý, KHÔNG thay được label.',
      'Thuộc tính hữu ích 2026: autocomplete giúp trình duyệt tự điền, inputmode tinh chỉnh bàn phím ảo.',
    ],
    lab: {
      title: 'Lab 8: Form đăng ký sự kiện "Tuần lễ Công nghệ DLU"',
      steps: [
        'Dựng form gồm: họ tên (text, required), email (type=email), MSSV (pattern 7 số), lớp (select), ngày tham dự (date).',
        'Nhóm radio "Hình thức tham gia" (trực tiếp/online) trong fieldset + legend.',
        'Checkbox các workshop muốn đăng ký (chọn nhiều) và textarea góp ý.',
        'Mọi điều khiển đều có label for đúng id; nút gửi là <button type="submit">.',
        'Thử submit thiếu trường required và sai định dạng email — quan sát thông báo trình duyệt; xem dữ liệu GET trên URL.',
      ],
      code: `<form action="/dang-ky" method="post">
  <p>
    <label for="hoten">Họ và tên</label>
    <input type="text" id="hoten" name="hoten" required>
  </p>
  <p>
    <label for="mssv">MSSV</label>
    <input type="text" id="mssv" name="mssv"
           pattern="[0-9]{7}" title="MSSV gồm 7 chữ số">
  </p>
  <fieldset>
    <legend>Hình thức tham gia</legend>
    <label><input type="radio" name="hinhthuc" value="tt" checked> Trực tiếp</label>
    <label><input type="radio" name="hinhthuc" value="ol"> Online</label>
  </fieldset>
  <p>
    <label for="lop">Lớp</label>
    <select id="lop" name="lop">
      <option value="CTK49A">CTK49A</option>
      <option value="CTK49B">CTK49B</option>
    </select>
  </p>
  <button type="submit">Đăng ký</button>
</form>`,
    },
    quiz: [
      { q: 'Dữ liệu form đăng nhập nên gửi bằng phương thức nào?', o: ['GET', 'POST', 'PUT', 'FETCH'], a: 1, e: 'POST không lộ dữ liệu trên URL, phù hợp thông tin nhạy cảm.' },
      { q: 'Điều khiển thiếu thuộc tính nào thì dữ liệu KHÔNG được gửi lên server?', o: ['id', 'class', 'name', 'placeholder'], a: 2, e: 'Cặp name=value là thứ server nhận; thiếu name coi như không tồn tại.' },
      { q: 'Cách liên kết label với input đúng chuẩn:', o: ['label và input cùng class', '<label for="x"> với <input id="x">', 'label đặt cạnh input là đủ', 'dùng title'], a: 1, e: 'for của label phải khớp id của điều khiển (hoặc bọc input trong label).' },
      { q: 'Nhóm radio hoạt động "chọn 1" khi nào?', o: ['Cùng id', 'Cùng name', 'Cùng value', 'Cùng class'], a: 1, e: 'Các radio cùng name thuộc một nhóm loại trừ lẫn nhau.' },
      { q: 'Phát biểu nào đúng về placeholder?', o: ['Thay thế được label', 'Chỉ là gợi ý tạm, biến mất khi gõ, không thay label', 'Bắt buộc cho mọi input', 'Được gửi lên server'], a: 1, e: 'Placeholder biến mất khi nhập, gây khó cho người dùng — label vẫn bắt buộc.' },
    ],
  },
  {
    id: 9,
    title: 'Media nhúng: audio, video, iframe, canvas',
    chapters: 'Chương 10',
    goals: [
      'Nhúng video/audio HTML5 với nhiều nguồn và phụ đề',
      'Nhúng nội dung ngoài bằng iframe (YouTube, Google Maps) an toàn',
      'Nhận biết vai trò của canvas và các API nhúng hiện đại',
    ],
    theory: [
      '<video controls width="..."> với nhiều <source> (MP4/H.264 phổ biến nhất, WebM nhẹ hơn); nội dung fallback đặt giữa thẻ cho trình duyệt cũ.',
      'Thuộc tính video: controls, autoplay (phải kèm muted mới chạy trên trình duyệt hiện đại), loop, poster (ảnh chờ), preload.',
      '<track kind="captions" srclang="vi"> thêm phụ đề WebVTT — yêu cầu accessibility quan trọng cho video có lời thoại.',
      '<audio controls> tương tự video với source MP3/OGG.',
      '<iframe> nhúng "trang trong trang": video YouTube, bản đồ Google Maps, CodePen. Luôn đặt title mô tả cho iframe (accessibility).',
      'Bảo mật iframe: thuộc tính sandbox giới hạn quyền, allow kiểm soát tính năng (camera, autoplay); chỉ nhúng nguồn tin cậy.',
      '<canvas> là vùng vẽ bitmap điều khiển bằng JavaScript — nền tảng cho game, biểu đồ, xử lý ảnh (sẽ gặp lại ở phần JS).',
      'Hiệu năng 2026: nhúng YouTube bằng loading="lazy" trên iframe, hoặc kỹ thuật "facade" (ảnh giả nút play, bấm mới tải player thật).',
    ],
    lab: {
      title: 'Lab 9: Trang media giới thiệu Đà Lạt',
      steps: [
        'Nhúng một video MP4 địa phương với controls, poster và fallback text.',
        'Tạo file phụ đề .vtt 4 câu và gắn bằng <track>.',
        'Nhúng video YouTube bằng iframe có title và loading="lazy".',
        'Nhúng Google Maps vị trí Trường Đại học Đà Lạt bằng iframe.',
        'Kiểm tra tab Network xem iframe lazy có trì hoãn tải khi chưa cuộn tới không.',
      ],
      code: `<video controls width="720" poster="poster.jpg">
  <source src="dalat.webm" type="video/webm">
  <source src="dalat.mp4" type="video/mp4">
  <track kind="captions" src="phude-vi.vtt"
         srclang="vi" label="Tiếng Việt" default>
  Trình duyệt của bạn không hỗ trợ video HTML5.
</video>

<iframe width="560" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video giới thiệu Đà Lạt"
  loading="lazy"
  allow="accelerometer; encrypted-media; picture-in-picture"
  allowfullscreen></iframe>`,
    },
    quiz: [
      { q: 'Vì sao video thường khai báo nhiều <source>?', o: ['Cho video dài hơn', 'Trình duyệt chọn định dạng đầu tiên nó hỗ trợ', 'Tăng chất lượng', 'Bắt buộc theo chuẩn'], a: 1, e: 'Mỗi trình duyệt hỗ trợ codec khác nhau; nhiều source đảm bảo tương thích.' },
      { q: 'autoplay hoạt động trên trình duyệt hiện đại khi nào?', o: ['Luôn luôn', 'Khi kèm muted', 'Khi video ngắn hơn 10s', 'Khi có controls'], a: 1, e: 'Chính sách autoplay yêu cầu video phải tắt tiếng mới tự phát.' },
      { q: 'Thẻ <track> dùng để làm gì?', o: ['Theo dõi người xem', 'Thêm phụ đề/chú thích WebVTT', 'Đổi tốc độ phát', 'Ghi âm'], a: 1, e: 'track gắn file .vtt phụ đề — quan trọng cho accessibility.' },
      { q: 'Thuộc tính nào KHÔNG nên thiếu trên iframe vì accessibility?', o: ['id', 'title', 'class', 'style'], a: 1, e: 'title mô tả nội dung iframe cho trình đọc màn hình.' },
      { q: 'Thuộc tính poster của video có tác dụng gì?', o: ['Đặt phụ đề', 'Ảnh hiển thị trước khi phát', 'Tự động phát', 'Đặt âm lượng'], a: 1, e: 'poster là ảnh đại diện hiển thị khi video chưa chạy.' },
    ],
  },
  {
    id: 10,
    title: 'Ôn tập HTML + Mini Project 1: Website tĩnh hoàn chỉnh',
    chapters: 'Tổng hợp Chương 4–10',
    goals: [
      'Tổng hợp toàn bộ kiến thức HTML thành một website tĩnh nhiều trang',
      'Tự kiểm tra chất lượng: validation, accessibility, cấu trúc ngữ nghĩa',
      'Đưa dự án lên GitHub bằng Git cơ bản',
    ],
    theory: [
      'Checklist trang HTML chất lượng: doctype + lang="vi" + charset UTF-8 + viewport; một h1/trang; dàn ý heading logic; thẻ ngữ nghĩa đúng vai trò.',
      'Checklist media: mọi ảnh có alt; ảnh có width/height; ảnh dưới màn hình đầu dùng lazy; video có track phụ đề.',
      'Checklist form: mọi điều khiển có label; nhóm liên quan có fieldset/legend; kiểu input HTML5 đúng; có validation cơ bản.',
      'Quy trình Git cơ bản: git init → git add . → git commit -m "..." → tạo repo GitHub → git remote add origin → git push.',
      'Cách tổ chức thư mục dự án chuẩn: index.html ở gốc, thư mục images/, css/, js/ tách riêng; tên file không dấu, không khoảng trắng, chữ thường.',
      'Đọc yêu cầu mini project như đọc đặc tả của khách hàng thật: xác định site map (5 trang), wireframe từng trang trước khi code.',
    ],
    lab: {
      title: 'Mini Project 1: Website "Khoa CNTT — DLU" (5 trang, thuần HTML)',
      steps: [
        'Trang chủ index.html: header + nav + hero + 3 tin nổi bật (article) + footer.',
        'gioi-thieu.html: lịch sử khoa với heading phân cấp, blockquote, figure/figcaption.',
        'chuong-trinh.html: bảng chương trình đào tạo có caption, thead/tbody, scope.',
        'tuyen-sinh.html: form đăng ký tư vấn đầy đủ label, fieldset, validation.',
        'lien-he.html: iframe Google Maps + thông tin mailto/tel; sau đó validate cả 5 trang, chạy Lighthouse Accessibility ≥ 95, và push lên GitHub.',
      ],
      code: `# Đưa project lên GitHub
git init
git add .
git commit -m "Mini project 1: website Khoa CNTT thuần HTML"
git branch -M main
git remote add origin https://github.com/<username>/khoa-cntt-dlu.git
git push -u origin main`,
    },
    quiz: [
      { q: 'Thứ tự lệnh Git đúng khi đưa code lần đầu lên GitHub:', o: ['push → add → commit', 'init → add → commit → remote add → push', 'commit → init → push', 'clone → push → add'], a: 1, e: 'Khởi tạo, đưa vào staging, commit, khai báo remote rồi push.' },
      { q: 'Tên file nào đặt ĐÚNG quy ước web?', o: ['Giới Thiệu.html', 'gioi thieu.html', 'gioi-thieu.html', 'GioiThieu.HTML'], a: 2, e: 'Chữ thường, không dấu, không khoảng trắng, nối bằng gạch ngang.' },
      { q: 'Mỗi trang HTML nên có bao nhiêu thẻ h1?', o: ['Không giới hạn', 'Một', 'Ít nhất ba', 'Không được dùng h1'], a: 1, e: 'Một h1 duy nhất làm tiêu đề chính giúp dàn ý và SEO rõ ràng.' },
      { q: 'Công cụ nào kiểm tra HTML hợp lệ theo chuẩn W3C?', o: ['validator.w3.org', 'caniuse.com', 'npmjs.com', 'fonts.google.com'], a: 0, e: 'W3C Markup Validation Service kiểm tra cú pháp và cấu trúc HTML.' },
      { q: 'Site map trong giai đoạn thiết kế là gì?', o: ['Bản đồ Google', 'Sơ đồ các trang và quan hệ điều hướng của website', 'File sitemap.xml cho SEO', 'Bố cục một trang'], a: 1, e: 'Site map phác thảo cấu trúc thông tin của toàn site trước khi code.' },
    ],
  },
]
