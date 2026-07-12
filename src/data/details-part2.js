// Bài giảng chi tiết & lab chi tiết — Phần II: HTML (Ngày 3–10)
export default {
  3: {
    theory: [
      {
        h: 'Bộ khung tài liệu HTML5 — từng dòng có lý do',
        p: [
          '<!DOCTYPE html> là dòng đầu tiên bắt buộc: nó báo trình duyệt dùng "standards mode" — chế độ tuân chuẩn hiện đại. Thiếu doctype, trình duyệt rơi vào "quirks mode" mô phỏng lỗi của thập niên 90 và nhiều CSS sẽ chạy sai một cách khó hiểu.',
          '<html lang="vi"> khai báo ngôn ngữ tài liệu: trình đọc màn hình chọn đúng giọng đọc tiếng Việt, trình duyệt gợi ý dịch chính xác, công cụ tìm kiếm hiểu đúng thị trường. <head> chứa metadata không hiển thị: <meta charset="UTF-8"> phải đứng sớm nhất có thể để tiếng Việt không vỡ; <meta name="viewport"...> để trang hiển thị đúng trên di động (chi tiết Ngày 18); <title> hiện trên tab trình duyệt, kết quả tìm kiếm và bookmark.',
          '<body> chứa toàn bộ nội dung hiển thị. Quy trình làm việc của Robbins: viết nội dung thô trước → thêm markup → xem trình duyệt → chỉnh — lặp vòng nhỏ, đừng viết 200 dòng rồi mới xem lần đầu.',
        ],
        code: `<!DOCTYPE html>                <!-- chuẩn HTML5, tránh quirks mode -->
<html lang="vi">                <!-- ngôn ngữ: a11y + SEO -->
<head>
  <meta charset="UTF-8">        <!-- tiếng Việt có dấu -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hiện trên tab & Google</title>
</head>
<body>
  <!-- nội dung hiển thị -->
</body>
</html>`,
      },
      {
        h: 'Phần tử, thẻ, thuộc tính — bộ từ vựng phải chính xác',
        p: [
          'PHẦN TỬ (element) = thẻ mở + nội dung + thẻ đóng: <p>Xin chào</p>. THẺ (tag) chỉ là phần trong ngoặc nhọn. THUỘC TÍNH (attribute) là cặp tên="giá trị" nằm trong thẻ mở, bổ sung thông tin: <a href="trang.html" title="Gợi ý">. Giá trị luôn bọc trong nháy kép.',
          'Phần tử RỖNG (empty/void element) không có nội dung và không có thẻ đóng: <img>, <br>, <hr>, <meta>, <input>, <link>. Phần tử có thể LỒNG nhau nhưng phải đóng đúng thứ tự "mở sau đóng trước": <p><em>đúng</em></p>, còn <p><em>sai</p></em> là lỗi lồng chéo — trình duyệt cố sửa nhưng kết quả không đoán được.',
          'Khoảng trắng trong HTML bị "gộp": nhiều dấu cách, tab, xuống dòng liên tiếp hiển thị thành MỘT khoảng trắng. Muốn xuống dòng dùng <br> (tiết chế) hoặc chia đoạn <p>; muốn giữ nguyên định dạng dùng <pre>.',
        ],
      },
      {
        h: 'Ký tự đặc biệt, chú thích và kiểm tra hợp lệ',
        p: [
          'Vì < > & là ký tự "ngữ pháp" của HTML, muốn HIỂN THỊ chúng phải dùng character entity: &lt; cho <, &gt; cho >, &amp; cho &, &quot; cho ", &copy; cho ©, &nbsp; cho khoảng trắng không tách dòng. Với UTF-8, các ký tự tiếng Việt và emoji gõ trực tiếp bình thường, không cần entity.',
          'Chú thích <!-- ... --> giúp ghi chú cho chính mình và đồng đội; trình duyệt bỏ qua nhưng NGƯỜI XEM NGUỒN VẪN ĐỌC ĐƯỢC — không bao giờ để mật khẩu, ghi chú nhạy cảm trong comment.',
          'Thói quen chuyên nghiệp: dán URL hoặc code vào validator.w3.org sau mỗi trang hoàn thành. Validator bắt lỗi quên thẻ đóng, thuộc tính sai, lồng sai — những lỗi trình duyệt "im lặng chịu đựng" nhưng gây bug CSS/JS khó lần về sau.',
        ],
        note: 'Trình duyệt KHÔNG BAO GIỜ báo lỗi cú pháp HTML — nó âm thầm đoán và sửa. Vì vậy validator là "người bạn nói thật" duy nhất của bạn ở giai đoạn này.',
      },
    ],
    lab: {
      title: 'Lab 3: Trang giới thiệu quán "Black Goose Bistro" (bài kinh điển của giáo trình)',
      objective: 'Trang bistro/index.html hợp lệ 100% theo W3C validator',
      time: '60 phút',
      prep: ['VS Code + Live Server', 'Một ảnh bất kỳ đặt tên quan.jpg', 'validator.w3.org'],
      steps: [
        {
          t: 'Dựng khung và nội dung thô',
          mota: 'Tạo thư mục bistro/ chứa index.html và thư mục images/ (bỏ ảnh quan.jpg vào). Gõ ! + Tab sinh khung, sửa lang="vi", title "Black Goose Bistro". Trong body, viết nội dung thô CHƯA markup: tên quán, 2 đoạn giới thiệu, dòng giờ mở cửa, dòng bản quyền.',
        },
        {
          t: 'Thêm markup từng bước theo quy trình Robbins',
          mota: 'Bọc tên quán trong <h1>, hai đoạn trong <p>, giờ mở cửa trong <p> có <strong> phần giờ. Lưu và xem sau MỖI thay đổi để thấy tác dụng của từng thẻ.',
          code: `<body>
  <h1>Black Goose Bistro</h1>
  <p>Quán cà phê &amp; bánh ngọt thủ công giữa lòng Đà Lạt,
     phục vụ từ năm 2020.</p>
  <p>Chúng tôi rang xay tại chỗ mỗi sáng và nướng bánh hai lần mỗi ngày.</p>
  <p><strong>Giờ mở cửa:</strong> 7:00 – 22:00 hằng ngày</p>
</body>`,
        },
        {
          t: 'Chèn ảnh và ký tự đặc biệt',
          mota: 'Thêm <img src="images/quan.jpg" alt="Không gian quán nhìn từ cửa chính"> sau h1. Thêm dòng cuối: <p><small>&copy; 2026 Black Goose Bistro &mdash; Đà Lạt</small></p>. Kiểm tra ảnh hiện đúng; thử cố ý sai đường dẫn images/Quan.jpg để thấy ảnh vỡ, rồi sửa lại.',
        },
        {
          t: 'Thí nghiệm phá – sửa',
          mota: 'Lần lượt làm 3 thí nghiệm, mỗi lần quan sát rồi hoàn tác: (1) xóa </p> của đoạn đầu; (2) lồng chéo <p><strong>...</p></strong>; (3) xóa dòng meta charset rồi tải lại (chữ có dấu vỡ như thế nào?). Ghi 3 dòng nhận xét vào comment cuối file.',
        },
        {
          t: 'Validate và sửa đến sạch lỗi',
          mota: 'Vào validator.w3.org → tab "Validate by Direct Input" → dán toàn bộ code → Check. Sửa từng lỗi/cảnh báo từ trên xuống (một lỗi cấu trúc phía trên thường kéo theo nhiều lỗi ảo phía dưới — sửa xong check lại). Mục tiêu: "Document checking completed. No errors or warnings to show."',
        },
      ],
      checklist: [
        'Trang hiển thị đúng tiếng Việt, đúng ảnh, đúng ký tự © và —',
        'Validator W3C: 0 lỗi, 0 cảnh báo',
        'Mọi thuộc tính có nháy kép, mọi phần tử lồng đúng thứ tự',
        'Có comment ghi 3 nhận xét từ thí nghiệm phá–sửa',
        'Tên file/thư mục chữ thường, không dấu, không khoảng trắng',
      ],
    },
  },

  4: {
    theory: [
      {
        h: 'Vì sao "ngữ nghĩa" là từ khóa quan trọng nhất của HTML',
        p: [
          'Semantic markup nghĩa là chọn thẻ theo Ý NGHĨA của nội dung chứ không theo vẻ ngoài mong muốn. <h1> không phải "chữ to" — nó là "tiêu đề cấp cao nhất của trang". Ba "độc giả" hưởng lợi: trình duyệt hiển thị hợp lý kể cả khi không có CSS; máy tìm kiếm hiểu cấu trúc để xếp hạng; trình đọc màn hình cho phép người khiếm thị NHẢY giữa các heading, landmark thay vì nghe tuần tự từ đầu.',
          'Hệ quả thực hành: không bao giờ chọn thẻ vì "trông đẹp" (vd dùng h4 vì cỡ chữ vừa mắt — cỡ chữ là việc của CSS Ngày 12); không dùng <br> nhân đôi để tạo khoảng cách (việc của margin Ngày 14); không bỏ heading chỉ vì "không thích chữ to".',
        ],
      },
      {
        h: 'Heading, đoạn văn, danh sách, trích dẫn',
        p: [
          'Heading h1–h6 tạo DÀN Ý tài liệu như mục lục sách: mỗi trang một h1 duy nhất; các mục lớn h2; mục con h3 — không nhảy cóc từ h2 xuống h4. Người dùng trình đọc màn hình điều hướng chủ yếu bằng dàn ý này.',
          'Ba loại danh sách: <ul> (unordered) khi thứ tự không quan trọng — menu, danh sách tính năng; <ol> (ordered) khi thứ tự CÓ ý nghĩa — các bước hướng dẫn, bảng xếp hạng (tùy biến bằng start, reversed); <dl> với cặp <dt>/<dd> cho danh sách thuật ngữ–định nghĩa, FAQ, thông số kỹ thuật. Danh sách lồng được: đặt <ul> con bên trong <li> cha.',
          'Trích dẫn: <blockquote> cho trích dẫn khối (có thể kèm nguồn trong <cite>), <q> cho trích ngắn trong dòng (trình duyệt tự thêm ngoặc kép đúng chuẩn ngôn ngữ). <pre> giữ nguyên khoảng trắng/xuống dòng — cặp bài với <code> để hiển thị mã nguồn: <pre><code>...</code></pre>.',
        ],
        code: `<h2>Cách pha cà phê phin</h2>
<ol>
  <li>Tráng phin bằng nước sôi</li>
  <li>Cho 25g cà phê, lắc phẳng
    <ul>
      <li>Mẹo: xay cỡ vừa, không quá mịn</li>
    </ul>
  </li>
  <li>Rót 30ml nước ủ 30 giây, rồi rót đầy</li>
</ol>

<blockquote>
  <p>"Không có gì tuyệt hơn ly cà phê Đà Lạt buổi sớm."</p>
  <cite>— Tạp chí Ẩm thực, 3/2026</cite>
</blockquote>`,
      },
      {
        h: 'Bộ thẻ cấu trúc HTML5: bản đồ của trang',
        p: [
          'HTML5 bổ sung các thẻ "landmark" chia trang thành vùng có tên: <header> vùng đầu (logo, tiêu đề, có thể chứa <nav>); <nav> khối liên kết điều hướng chính; <main> nội dung chính — DUY NHẤT một mỗi trang; <article> đơn vị nội dung độc lập, tự đứng được nếu tách khỏi trang (bài báo, bài blog, bình luận, card sản phẩm); <section> nhóm nội dung theo chủ đề, thường có heading riêng; <aside> nội dung bên lề (sidebar, quảng cáo, "bài liên quan"); <footer> chân trang/chân bài.',
          'Cách chọn nhanh: nội dung có thể đăng lại nơi khác mà vẫn trọn nghĩa → article; chỉ là một "chương" của trang → section; không có ý nghĩa gì, chỉ cần cái hộp để CSS → div. <div> và <span> là phần tử TRUNG TÍNH — hợp lệ và cần thiết cho layout, nhưng là lựa chọn cuối khi không thẻ ngữ nghĩa nào khớp.',
          'Cặp phân biệt hay thi: <em> nhấn mạnh ngữ điệu ("tôi *không* nói vậy") và <strong> mức độ quan trọng — có ngữ nghĩa, trình đọc màn hình có thể đổi giọng; <i> và <b> chỉ là quy ước hình thức (thuật ngữ, tên tàu, từ khóa) — không mang trọng số ngữ nghĩa.',
        ],
      },
      {
        h: 'id, class và các thuộc tính toàn cục',
        p: [
          'id định danh DUY NHẤT một phần tử trong trang — dùng làm đích liên kết #fragment (Ngày 5), móc nối label–input (Ngày 8), và cho JavaScript. class gắn nhãn NHÓM phần tử, một phần tử mang được nhiều class cách nhau khoảng trắng: class="card noi-bat" — đây sẽ là "tay nắm" chính của CSS từ Ngày 11.',
          'Các thuộc tính toàn cục khác: lang (ghi đè ngôn ngữ cục bộ cho một đoạn ngoại ngữ), title (tooltip khi rê chuột — không thay được nội dung chính vì di động không có hover), hidden, và họ data-* để nhét dữ liệu tùy ý cho JavaScript đọc (Ngày 24).',
        ],
        note: 'Quy ước đặt tên class của khóa học: chữ thường không dấu, nối bằng gạch ngang, đặt theo VAI TRÒ chứ không theo hình thức: .tin-noi-bat tốt hơn .chu-do-dam (vì mai đổi màu xanh thì tên nói dối).',
      },
    ],
    lab: {
      title: 'Lab 4: Bài báo "Tuần lễ Công nghệ DLU 2026" chuẩn ngữ nghĩa',
      objective: 'Trang tin tức 1 bài đầy đủ landmark, dàn ý heading sạch, validator 0 lỗi',
      time: '75 phút',
      prep: ['Kết quả Lab 3 để tái sử dụng khung', 'Extension "HTML5 Outliner" hoặc dùng DevTools'],
      steps: [
        {
          t: 'Phác dàn ý trước khi gõ thẻ',
          mota: 'Trên giấy/comment, viết dàn ý: h1 tên trang tin → article: h2 tiêu đề bài, đoạn sapo, section "Lịch sự kiện" (h3), section "Cách đăng ký" (h3). Dàn ý này chính là khung heading — code chỉ là việc "điền vào".',
        },
        {
          t: 'Dựng bộ khung landmark',
          code: `<body>
  <header>
    <h1>Tin tức Khoa CNTT</h1>
    <nav aria-label="Điều hướng chính">
      <ul>
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#">Sự kiện</a></li>
        <li><a href="#">Tuyển sinh</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <!-- bài viết ở bước sau -->
    </article>
  </main>
  <aside>
    <h2>Bài liên quan</h2>
    <ul><li><a href="#">Hackathon 2025 nhìn lại</a></li></ul>
  </aside>
  <footer>
    <p><small>&copy; 2026 Khoa CNTT — DLU</small></p>
  </footer>
</body>`,
        },
        {
          t: 'Viết bài báo bên trong article',
          mota: 'Gồm: <h2> tiêu đề bài; <p> sapo có <strong>; một <blockquote> trích phát biểu kèm <cite>; section Lịch sự kiện chứa <ul> 3 ngày (ngày 2 lồng <ul> con các workshop); section Cách đăng ký chứa <ol> 4 bước.',
        },
        {
          t: 'Gắn class theo vai trò',
          mota: 'Thêm class chuẩn bị cho CSS tuần sau: article class="bai-viet", đoạn sapo class="sapo", blockquote class="trich-dan". Đặt id="dang-ky" cho section đăng ký (Ngày 5 sẽ liên kết tới).',
        },
        {
          t: 'Soi dàn ý và nghiệm thu',
          mota: 'Mở DevTools → tab Elements → panel Accessibility (hoặc extension HTML5 Outliner) xem cây heading: phải ra đúng dàn ý đã phác, không nhảy cấp. Tắt CSS (nếu có) — trang vẫn đọc mạch lạc từ trên xuống. Cuối cùng validate W3C.',
        },
      ],
      checklist: [
        'Đủ 6 landmark: header, nav, main, article, aside, footer; main duy nhất',
        'Dàn ý heading h1→h2→h3 không nhảy cấp, mỗi section có heading',
        'Có blockquote+cite, ul lồng ul, ol các bước',
        'Dùng em/strong đúng ngữ nghĩa (không dùng i/b bừa)',
        'Validator 0 lỗi; đọc trang không CSS vẫn mạch lạc',
      ],
    },
  },

  5: {
    theory: [
      {
        h: 'Thẻ <a> và nghệ thuật viết nhãn liên kết',
        p: [
          'Hyperlink là phát minh định nghĩa nên Web. Cú pháp: <a href="đích">nhãn</a>. Nhãn liên kết là phần NGƯỜI DÙNG đọc — người dùng trình đọc màn hình thường yêu cầu "liệt kê mọi liên kết trong trang": nếu nghe thấy 10 lần "bấm vào đây" thì vô dụng. Quy tắc: nhãn tự mô tả đích đến — "Tải đề cương môn học (PDF, 2MB)" thay vì "tại đây".',
          'href nhận nhiều loại đích: URL tuyệt đối, đường dẫn tương đối, #fragment trong trang, mailto:, tel:, và cả đường dẫn tới file (PDF, ZIP — thêm thuộc tính download để gợi ý tải về thay vì mở).',
        ],
      },
      {
        h: 'Đường dẫn tương đối: bài toán "chỉ đường trong cây thư mục"',
        p: [
          'URL TUYỆT ĐỐI chứa đủ giao thức + tên miền (https://dlu.edu.vn/tuyen-sinh) — bắt buộc khi trỏ sang site khác. URL TƯƠNG ĐỐI tính từ VỊ TRÍ FILE HIỆN TẠI — dùng cho liên kết nội bộ vì site chuyển tên miền hay chạy local đều không hỏng.',
          'Bốn tình huống: cùng thư mục → gõ thẳng tên file (mon-hoc.html); vào thư mục con → tên-thư-mục/file (docs/de-cuong.html); lùi ra một cấp → ../file; lùi hai cấp → ../../file. Ngoài ra đường dẫn GỐC SITE bắt đầu bằng / (vd /images/logo.png) — luôn tính từ thư mục gốc của website, tiện cho menu dùng chung mọi trang, nhưng chỉ chạy đúng khi mở qua server (Live Server/hosting), không đúng khi mở file trực tiếp.',
          'index.html là file mặc định: URL https://site.com/mon-hoc/ thực chất phục vụ /mon-hoc/index.html. Vì vậy mỗi thư mục nội dung nên có một index.html.',
        ],
        code: `Cây thư mục:              Từ mon-hoc/html.html muốn tới:
site/
├── index.html            → ../index.html
├── gioi-thieu.html       → ../gioi-thieu.html
├── images/logo.png       → ../images/logo.png
└── mon-hoc/
    ├── html.html   ★ đang ở đây
    └── css.html          → css.html`,
      },
      {
        h: 'Liên kết trong trang, tab mới và liên kết đặc biệt',
        p: [
          'Liên kết đến vị trí trong trang: đặt id cho đích (<h2 id="lien-he">) rồi <a href="#lien-he">. Kết hợp được với trang khác: huong-dan.html#buoc-3. Ứng dụng: mục lục đầu bài viết dài, nút "về đầu trang" (href="#top" hoặc "#"), và chính là cơ chế điều hướng của nhiều trang tài liệu.',
          'target="_blank" mở tab mới — chỉ dùng khi rời khỏi ngữ cảnh là hợp lý (mở tài liệu ngoài giữa lúc điền form), và LUÔN kèm rel="noopener" (chặn trang đích thao túng trang nguồn qua window.opener — lỗ hổng tabnabbing) — thường viết rel="noopener noreferrer".',
          'mailto:phuctv@dlu.edu.vn mở trình soạn email (thêm ?subject=... để điền sẵn tiêu đề); tel:+842633822246 bấm gọi trên di động. Lưu ý: email đặt công khai dạng mailto dễ bị bot thu thập spam — cân nhắc dùng form liên hệ (Ngày 8).',
        ],
      },
    ],
    lab: {
      title: 'Lab 5: Website mini 3 trang với điều hướng hoàn chỉnh',
      objective: 'Site 3 trang + 1 thư mục con, menu chạy đúng ở mọi trang, có mục lục fragment',
      time: '75 phút',
      prep: ['Kết quả Lab 4', 'Live Server (bắt buộc để thử đường dẫn gốc /)'],
      steps: [
        {
          t: 'Dựng cây thư mục',
          mota: 'Tạo: index.html, gioi-thieu.html, thư mục mon-hoc/ chứa html-css.html, thư mục images/ chứa logo bất kỳ. Trang nào cũng dùng khung landmark của Lab 4.',
        },
        {
          t: 'Menu dùng chung với đường dẫn tương đối',
          mota: 'Viết <nav> 3 mục cho index.html và gioi-thieu.html (cùng cấp nên link thẳng tên file). Sang mon-hoc/html-css.html, các link phải lùi cấp:',
          code: `<!-- Trong mon-hoc/html-css.html -->
<nav aria-label="Điều hướng chính">
  <ul>
    <li><a href="../index.html">Trang chủ</a></li>
    <li><a href="../gioi-thieu.html">Giới thiệu</a></li>
    <li><a href="html-css.html" aria-current="page">HTML &amp; CSS</a></li>
  </ul>
</nav>
<img src="../images/logo.png" alt="Logo Khoa CNTT">`,
        },
        {
          t: 'Mục lục fragment cho trang dài',
          mota: 'Trong gioi-thieu.html viết 4 section dài (mỗi section một h2 có id: #lich-su, #su-mang, #doi-ngu, #lien-he). Đầu trang đặt <nav aria-label="Mục lục"> liệt kê 4 link #. Cuối mỗi section thêm <a href="#top">↑ Về đầu trang</a> (nhớ đặt id="top" cho body hoặc header).',
        },
        {
          t: 'Liên kết ngoài, email, điện thoại',
          mota: 'Ở trang liên hệ (section #lien-he): link MDN mở tab mới với rel="noopener noreferrer"; link mailto có subject điền sẵn: mailto:phuctv@dlu.edu.vn?subject=Hoi%20ve%20mon%20hoc; link tel:. Kiểm tra từng link hoạt động.',
        },
        {
          t: 'Kiểm thử phá đường dẫn',
          mota: 'Cố ý đổi ../index.html thành index.html trong trang con, quan sát 404 của Live Server, rồi sửa. Đổi thử một link sang dạng gốc site /images/logo.png — chạy đúng qua Live Server; sau đó mở file trực tiếp (double-click) để thấy nó hỏng — hiểu vì sao khóa học luôn chạy qua server.',
        },
      ],
      checklist: [
        'Menu hoạt động đúng ở CẢ 3 trang, kể cả trang trong thư mục con',
        'Mục lục fragment nhảy đúng 4 section, nút về đầu trang chạy',
        'Link ngoài có target="_blank" + rel="noopener noreferrer"',
        'mailto có subject điền sẵn; mọi nhãn link tự mô tả (không "bấm vào đây")',
        'Giải thích được khác biệt đường dẫn tương đối vs gốc site',
      ],
    },
  },

  6: {
    theory: [
      {
        h: 'img, alt và hai thuộc tính kích thước "cứu" bố cục',
        p: [
          '<img> là phần tử rỗng với hai thuộc tính bắt buộc: src (đường dẫn ảnh) và alt (văn bản thay thế). Viết alt tốt là kỹ năng: mô tả NỘI DUNG hoặc CHỨC NĂNG của ảnh trong ngữ cảnh — ảnh sản phẩm: "Áo khoác dạ nam màu xám, cổ đứng"; ảnh là nút: alt theo hành động "Tìm kiếm". Ảnh thuần trang trí: alt="" (rỗng có chủ đích) để trình đọc màn hình bỏ qua — KHÁC với thiếu alt (lỗi validation, trình đọc sẽ đọc tên file rất khó chịu).',
          'Luôn khai width và height bằng kích thước gốc của ảnh: trình duyệt tính tỷ lệ và GIỮ CHỖ trước khi ảnh tải xong, tránh nội dung "nhảy" (CLS — chỉ số Core Web Vitals của Ngày 2). CSS sau này ghi đè kích thước hiển thị thoải mái, tỷ lệ vẫn được bảo toàn.',
        ],
      },
      {
        h: 'Ảnh responsive: srcset, sizes và <picture>',
        p: [
          'Bài toán: điện thoại 360px không nên tải ảnh 1600px (phí băng thông), màn Retina lại cần ảnh gấp đôi mật độ điểm. Giải pháp 1 — descriptor x cho mật độ: srcset="logo.png 1x, logo@2x.png 2x". Giải pháp 2 — descriptor w cho bề rộng: cung cấp nhiều phiên bản kèm bề rộng thật, và sizes mô tả ảnh sẽ chiếm bao nhiêu viewport để trình duyệt TỰ CHỌN file tối ưu.',
          'sizes="(max-width: 600px) 100vw, 50vw" đọc là: màn ≤600px ảnh chiếm cả bề ngang, còn lại chiếm nửa. Trình duyệt kết hợp sizes + mật độ màn hình + srcset để quyết định — bạn không kiểm soát file cụ thể, và đó là điều tốt.',
          '<picture> dùng khi cần QUYỀN KIỂM SOÁT: (a) art direction — đổi khung hình theo màn hình (ngang cho desktop, cắt vuông cận cảnh cho mobile) qua <source media="...">; (b) cung cấp định dạng mới AVIF/WebP kèm fallback qua <source type="...">. Bên trong luôn phải có <img> làm fallback cuối và là nơi đặt alt.',
        ],
        code: `<!-- Trình duyệt tự chọn cỡ -->
<img src="anh-960.jpg"
     srcset="anh-480.jpg 480w, anh-960.jpg 960w, anh-1600.jpg 1600w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="Đồi chè Cầu Đất trong sương sớm"
     width="1600" height="1067" loading="lazy">

<!-- Ưu tiên định dạng hiện đại -->
<picture>
  <source type="image/avif" srcset="hero.avif">
  <source type="image/webp" srcset="hero.webp">
  <img src="hero.jpg" alt="..." width="1600" height="900">
</picture>`,
      },
      {
        h: 'Lazy loading, figure và chiến lược chọn định dạng',
        p: [
          'loading="lazy" bảo trình duyệt hoãn tải ảnh đến khi người dùng cuộn gần tới — mặc định nên bật cho MỌI ảnh dưới màn hình đầu tiên. Ngược lại, ảnh hero quyết định LCP nên tải sớm: loading="eager" (mặc định) và có thể thêm fetchpriority="high".',
          '<figure> bọc nội dung minh họa "tự đứng được" (ảnh, biểu đồ, đoạn code) và <figcaption> là chú thích ngữ nghĩa của nó — khác về bản chất với một <p> đặt cạnh ảnh.',
          'Chọn định dạng (chi tiết Ngày 26): ảnh chụp → AVIF/WebP (fallback JPEG); đồ họa phẳng, logo, icon → SVG; cần trong suốt mà không dùng được WebP → PNG; GIF động → thay bằng video ngắn cho nhẹ. Công cụ chuyển đổi nhanh: squoosh.app (chạy ngay trong trình duyệt).',
        ],
        note: 'Ba câu hỏi trước khi chèn mỗi ảnh: (1) alt viết gì — hay là trang trí thuần? (2) đã khai width/height chưa? (3) trên hay dưới màn hình đầu — eager hay lazy?',
      },
    ],
    lab: {
      title: 'Lab 6: Album ảnh Đà Lạt responsive & tiết kiệm băng thông',
      objective: 'Trang album 4 ảnh: hero dùng picture AVIF/WebP, ảnh dưới dùng srcset+lazy; chứng minh bằng tab Network',
      time: '90 phút',
      prep: ['4 ảnh phong cảnh (tự chụp hoặc nguồn free như unsplash.com)', 'squoosh.app'],
      steps: [
        {
          t: 'Sản xuất bộ ảnh nhiều cỡ',
          mota: 'Với MỖI ảnh, dùng squoosh.app xuất 3 bề rộng 480 / 960 / 1600px; riêng ảnh hero xuất thêm định dạng AVIF và WebP ở cỡ 1600. Đặt tên hệ thống: ho-xuan-huong-480.jpg, ho-xuan-huong-960.jpg... Ghi lại dung lượng từng file vào bảng so sánh.',
        },
        {
          t: 'Ảnh hero với <picture>',
          code: `<picture>
  <source type="image/avif" srcset="images/hero-1600.avif">
  <source type="image/webp" srcset="images/hero-1600.webp">
  <img src="images/hero-1600.jpg"
       alt="Toàn cảnh hồ Xuân Hương lúc bình minh"
       width="1600" height="900" fetchpriority="high">
</picture>`,
        },
        {
          t: 'Ba ảnh còn lại với srcset + sizes + lazy',
          mota: 'Mỗi ảnh bọc trong <figure> có <figcaption> tên địa danh. Dùng srcset 3 cỡ với descriptor w, sizes="(max-width: 600px) 100vw, 50vw", loading="lazy", đủ width/height.',
        },
        {
          t: 'Chứng minh trình duyệt chọn ảnh thông minh',
          mota: 'F12 → Network → lọc Img → tick Disable cache. (a) Cửa sổ rộng: tải lại, ghi file nào được tải cho từng ảnh. (b) Ctrl+Shift+M giả lập iPhone: tải lại, thấy trình duyệt lấy bản 480. (c) Chưa cuộn xuống thì các ảnh lazy CHƯA xuất hiện trong Network — cuộn từ từ và nhìn chúng được tải đúng lúc. Chụp 3 màn hình làm minh chứng.',
        },
        {
          t: 'Đối chứng hiệu quả',
          mota: 'Tạo bản đối chứng album-nang.html chỉ dùng <img src="...-1600.jpg"> thô cho cả 4 ảnh. So tổng KB tải trên giả lập mobile giữa hai bản, điền vào bảng báo cáo — con số thường chênh 3–5 lần.',
        },
      ],
      checklist: [
        'Hero là picture AVIF→WebP→JPEG, có fetchpriority="high"',
        'Ảnh dưới: srcset 3 cỡ + sizes + loading="lazy" + width/height + figure/figcaption',
        'Ảnh trang trí (nếu có) dùng alt="" đúng chủ đích',
        'Có 3 ảnh chụp Network chứng minh chọn cỡ + lazy hoạt động',
        'Bảng so sánh KB giữa bản tối ưu và bản thô',
      ],
    },
  },

  7: {
    theory: [
      {
        h: 'Bảng đúng việc: dữ liệu hàng–cột, tuyệt đối không dàn trang',
        p: [
          'Thập niên 90–2000, người ta dùng <table> để dàn toàn bộ layout vì CSS còn yếu — di sản đó khiến bảng mang tiếng xấu. Ngày nay quy tắc rạch ròi: bảng CHỈ cho dữ liệu có quan hệ hàng–cột thật sự (thời khóa biểu, bảng điểm, so sánh thông số, báo cáo tài chính); dàn trang là việc của Grid/Flexbox (Ngày 16–17). Dấu hiệu nhận biết: nếu đọc dữ liệu theo "hàng X, cột Y" mà có nghĩa → bảng; nếu chỉ là các khối đặt cạnh nhau → không phải bảng.',
          'Cấu trúc tối thiểu: <table> chứa các hàng <tr>; trong hàng là ô tiêu đề <th> hoặc ô dữ liệu <td>. Trình duyệt tự cân cột — không cần (và không nên) khai bề rộng bằng thuộc tính HTML cổ.',
        ],
      },
      {
        h: 'caption, thead/tbody/tfoot, và gộp ô',
        p: [
          '<caption> là TIÊU ĐỀ NGỮ NGHĨA của bảng, bắt buộc đứng ngay sau thẻ mở <table>. Trình đọc màn hình đọc caption trước khi vào dữ liệu, giúp người dùng quyết định có "bơi" vào bảng hay không — đừng thay nó bằng một h3 đặt phía trên.',
          'Nhóm hàng theo vai trò: <thead> chứa hàng tiêu đề, <tbody> thân dữ liệu, <tfoot> hàng tổng kết. Lợi ích: CSS style riêng từng vùng, in trang dài tự lặp thead ở mỗi trang, và cấu trúc rõ cho công cụ đọc.',
          'Gộp ô: colspan="n" nuốt n cột theo CHIỀU NGANG, rowspan="n" nuốt n hàng theo CHIỀU DỌC. Kỹ thuật đếm: tổng "suất cột" mỗi hàng phải bằng nhau — ô rowspan ở hàng trên sẽ "ăn" mất một suất của hàng dưới, nên hàng dưới VIẾT ÍT ĐI một ô. Vẽ lưới ra giấy trước khi gõ là cách chống rối hiệu quả nhất.',
        ],
        code: `<table>
  <caption>Học phí theo tín chỉ 2026–2027</caption>
  <thead>
    <tr><th scope="col">Khối ngành</th><th scope="col">Mức/tín chỉ</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">CNTT</th><td>580.000đ</td></tr>
    <tr><th scope="row">Kinh tế</th><td>520.000đ</td></tr>
  </tbody>
  <tfoot>
    <tr><td colspan="2">Áp dụng từ học kỳ 1</td></tr>
  </tfoot>
</table>`,
      },
      {
        h: 'Bảng truy cập được: scope và tư duy "đọc bằng tai"',
        p: [
          'Người sáng mắt hiểu bảng bằng cách LIẾC theo hàng/cột; người dùng trình đọc màn hình nghe TỪNG Ô một. Thuộc tính scope nối mỗi ô dữ liệu với tiêu đề của nó: <th scope="col"> cho tiêu đề cột, <th scope="row"> cho tiêu đề hàng — nhờ đó ô "580.000đ" được đọc thành "CNTT, Mức/tín chỉ: 580.000đ" thay vì một con số trơ trọi.',
          'Bảng phức tạp nhiều tầng tiêu đề có cơ chế id/headers nâng cao, nhưng lời khuyên của cả Robbins lẫn WCAG là: NÊN TÁCH thành nhiều bảng đơn giản thay vì xây một bảng ma trận đánh đố cả người nghe lẫn người viết.',
          'Bảng rộng trên di động: không co chữ đến mức không đọc nổi; giải pháp phổ biến là bọc bảng trong khối cuộn ngang (div với overflow-x: auto — Ngày 14) để bảng giữ nguyên cấu trúc, người dùng vuốt ngang xem thêm.',
        ],
      },
    ],
    lab: {
      title: 'Lab 7: Thời khóa biểu học kỳ có gộp ô + kiểm thử trình đọc màn hình',
      objective: 'Bảng TKB 5 ngày × 4 khung tiết, có rowspan/colspan, scope đầy đủ',
      time: '75 phút',
      prep: ['TKB thật của bạn làm dữ liệu', 'NVDA (miễn phí, nvda-project.org) hoặc Accessibility tree trong DevTools'],
      steps: [
        {
          t: 'Vẽ lưới ra giấy trước',
          mota: 'Kẻ lưới 6 cột (Tiết + Thứ 2→Thứ 6) × 5 hàng (tiêu đề + 4 khung tiết). Tô các ô cần gộp: một môn học 2 tiết liên tiếp (rowspan="2"), khung "Nghỉ trưa" chạy ngang cả 5 thứ (colspan="5"). Đánh dấu hàng nào sẽ "viết thiếu ô" do bị rowspan ăn suất.',
        },
        {
          t: 'Dựng khung bảng chuẩn',
          code: `<table>
  <caption>Thời khóa biểu lớp CTK49A — HK1 2026–2027</caption>
  <thead>
    <tr>
      <th scope="col">Tiết</th>
      <th scope="col">Thứ 2</th><th scope="col">Thứ 3</th>
      <th scope="col">Thứ 4</th><th scope="col">Thứ 5</th>
      <th scope="col">Thứ 6</th>
    </tr>
  </thead>
  <tbody><!-- các hàng ở bước sau --></tbody>
</table>`,
        },
        {
          t: 'Điền dữ liệu và gộp ô theo bản vẽ',
          mota: 'Mỗi hàng bắt đầu bằng <th scope="row">1–2</th>... Môn 2 tiết: <td rowspan="2">Thiết kế Web<br>(A25.101)</td> — và NHỚ bỏ ô tương ứng ở hàng kế. Hàng nghỉ trưa: <th scope="row">Trưa</th><td colspan="5">Nghỉ trưa</td>. Ô trống dùng <td></td> (đừng bỏ hẳn).',
        },
        {
          t: 'Kiểm đếm cấu trúc',
          mota: 'DevTools → Elements: rê chuột từng tr đếm suất cột = 6 ở mọi hàng (tính cả suất bị rowspan chiếm). Validator W3C sẽ báo nếu lệch — sửa đến sạch.',
        },
        {
          t: 'Nghe bảng của mình',
          mota: 'Cài NVDA → mở trang → dùng Ctrl+Alt+mũi tên di chuyển trong bảng: nghe xem mỗi ô có được đọc kèm tiêu đề hàng/cột không. Không cài được NVDA thì dùng DevTools → Accessibility pane xem từng td có liên kết đúng header. Thử XÓA hết scope, nghe lại để cảm nhận khác biệt, rồi hoàn tác.',
        },
      ],
      checklist: [
        'caption đứng ngay sau thẻ mở table, mô tả đúng nội dung',
        'Có thead/tbody; mọi th có scope đúng hướng',
        'rowspan và colspan hoạt động, tổng suất cột mỗi hàng bằng nhau',
        'Validator 0 lỗi',
        'Đã kiểm thử bằng NVDA hoặc Accessibility pane và ghi nhận xét',
      ],
    },
  },

  8: {
    theory: [
      {
        h: 'Form hoạt động thế nào: action, method và cặp name=value',
        p: [
          'Form là "cửa nhập liệu" của web: đăng nhập, tìm kiếm, đặt hàng, khảo sát. <form action="URL" method="get|post"> khai nơi nhận và cách gửi. GET gắn dữ liệu lên URL (?tu-khoa=css&trang=2) — phù hợp tìm kiếm/lọc vì bookmark và chia sẻ được; POST gửi trong thân request — bắt buộc cho đăng nhập, dữ liệu dài hoặc nhạy cảm.',
          'Điều sinh viên hay quên nhất: server chỉ nhận các cặp name=value. Điều khiển KHÔNG có name thì nhập gì cũng như không. id phục vụ label và JavaScript phía client; name phục vụ dữ liệu gửi đi — hai vai trò khác nhau, thường đặt trùng giá trị cho tiện.',
        ],
      },
      {
        h: 'label, fieldset và bộ điều khiển cơ bản',
        p: [
          '<label for="email"> gắn với <input id="email">: bấm nhãn là focus vào ô (vùng chạm lớn hơn trên di động), trình đọc màn hình đọc đúng tên trường — đây là yêu cầu accessibility KHÔNG ĐƯỢC bỏ. Cách 2: bọc input trong label (không cần for/id). placeholder chỉ là gợi ý mờ biến mất khi gõ — không bao giờ thay được label.',
          'Bộ điều khiển: <input type="text">; radio — nhóm cùng name, chọn đúng 1, mỗi cái value riêng; checkbox — chọn nhiều (name giống nhau hoặc name dạng mảng tùy backend); <select> + <option value="..."> danh sách thả (option có selected để chọn sẵn); <textarea rows cols> văn bản nhiều dòng (thẻ có ĐÓNG, khác input); nút gửi <button type="submit"> (mặc định của button trong form là submit — nút "thường" phải ghi rõ type="button").',
          '<fieldset> vẽ nhóm điều khiển liên quan và <legend> đặt tên nhóm — bắt buộc về ngữ nghĩa cho nhóm radio/checkbox: trình đọc màn hình đọc "Hình thức tham gia, Trực tiếp, nút radio 1 trên 2".',
        ],
        code: `<fieldset>
  <legend>Hình thức tham gia</legend>
  <label><input type="radio" name="hinhthuc" value="truc-tiep" checked>
    Trực tiếp tại hội trường</label>
  <label><input type="radio" name="hinhthuc" value="online">
    Trực tuyến qua Meet</label>
</fieldset>

<p>
  <label for="lop">Lớp</label>
  <select id="lop" name="lop">
    <option value="">— Chọn lớp —</option>
    <option value="CTK49A">CTK49A</option>
    <option value="CTK49B">CTK49B</option>
  </select>
</p>`,
      },
      {
        h: 'Kiểu input HTML5 và validation phía client',
        p: [
          'HTML5 thêm các type giàu ngữ nghĩa: email, tel, url, number, date, time, range, color, search, file. Lợi ích kép: bàn phím di động TỰ ĐỔI (type=email hiện phím @, type=tel hiện bàn phím số) và trình duyệt kiểm tra định dạng miễn phí khi submit.',
          'Bộ thuộc tính validation: required (bắt buộc), minlength/maxlength, min/max/step (cho number/date/range), pattern (biểu thức chính quy — kèm title mô tả để thông báo lỗi dễ hiểu). Trình duyệt chặn submit và chỉ đúng ô lỗi — hoàn toàn không cần JavaScript.',
          'Nguyên tắc an ninh phải khắc cốt: validation phía client CHỈ là lớp tiện lợi cho người dùng ngay thẳng; kẻ xấu bỏ qua nó dễ dàng (tắt JS, gửi request thẳng) — server LUÔN phải kiểm tra lại toàn bộ. Ngoài ra 2026 nên dùng autocomplete (name, email, tel, one-time-code...) để trình duyệt tự điền chuẩn xác.',
        ],
        note: 'Trải nghiệm form tốt = ít trường nhất có thể + label rõ + báo lỗi tại chỗ + không bắt người dùng đoán định dạng (ghi rõ "MSSV gồm 7 chữ số" ngay từ đầu).',
      },
    ],
    lab: {
      title: 'Lab 8: Form đăng ký "Tuần lễ Công nghệ DLU" hoàn chỉnh',
      objective: 'Form đủ 8 loại điều khiển, validation HTML5 chạy đúng, quan sát được dữ liệu GET trên URL',
      time: '90 phút',
      prep: ['Trang Lab 4/5 để gắn form vào', 'Không cần backend — dùng method GET để tự quan sát'],
      steps: [
        {
          t: 'Khung form và các trường văn bản',
          mota: 'Tạo <form action="cam-on.html" method="get"> (tạo thêm trang cam-on.html đơn giản). Thêm: họ tên (text, required, autocomplete="name"), email (type=email, required, autocomplete="email"), MSSV (pattern="[0-9]{7}" + title="MSSV gồm 7 chữ số"). Mỗi trường: label for đúng id, name đầy đủ.',
        },
        {
          t: 'Nhóm radio và checkbox trong fieldset',
          mota: 'Fieldset "Hình thức tham gia" (radio truc-tiep/online, checked mặc định). Fieldset "Workshop đăng ký" gồm 4 checkbox: name="ws" value="ai", "web", "iot", "cloud" — chọn được nhiều.',
        },
        {
          t: 'Select, date, range, textarea',
          mota: 'Select lớp (option đầu value="" làm placeholder, kèm required để buộc chọn); ngày tham dự type="date" có min/max trong tuần sự kiện; mức hứng thú type="range" min=1 max=5 (kèm output hiển thị giá trị nếu muốn); textarea góp ý rows="4" maxlength="500".',
        },
        {
          t: 'Nút gửi và thử nghiệm validation',
          mota: 'Kết thúc bằng <button type="submit">Đăng ký tham dự</button>. Lần lượt thử: bỏ trống họ tên → xem thông báo trình duyệt; gõ email thiếu @; MSSV 5 số; chưa chọn lớp. Chụp lại 2 thông báo lỗi.',
        },
        {
          t: 'Đọc dữ liệu trên URL và đổi sang POST',
          mota: 'Điền hợp lệ, submit → tại cam-on.html quan sát query string: ?hoten=...&mssv=...&ws=ai&ws=web... Đối chiếu từng cặp name=value với form. Sau đó đổi method="post", submit lại và thấy URL SẠCH (dữ liệu vào thân request — xem trong DevTools Network → payload). Ghi 3 dòng so sánh GET vs POST.',
        },
      ],
      checklist: [
        'Đủ: text, email, pattern, radio, checkbox, select, date, range, textarea, button submit',
        'Mọi điều khiển có label liên kết đúng; nhóm chọn nằm trong fieldset+legend',
        'Validation chặn đúng: required, email, pattern (có title mô tả)',
        'Đọc và giải thích được query string sau khi submit GET',
        'Nêu được vì sao server vẫn phải validate lại',
      ],
    },
  },

  9: {
    theory: [
      {
        h: 'Video và audio HTML5: nhiều nguồn, một fallback',
        p: [
          'Trước HTML5, video web cần plugin Flash; nay chỉ cần <video controls>. Vì các trình duyệt hỗ trợ codec khác nhau, ta khai nhiều <source> — trình duyệt lấy nguồn ĐẦU TIÊN chơi được: WebM (nhẹ, mở) đặt trước, MP4/H.264 (phổ cập nhất) làm lưới an toàn. Văn bản giữa thẻ mở/đóng là fallback cho trình duyệt cổ.',
          'Thuộc tính đáng nhớ: controls (hiện bộ điều khiển — gần như luôn bật), poster (ảnh bìa trước khi phát), loop, muted, preload="none|metadata|auto" (gợi ý tải trước), width/height (giữ chỗ chống CLS như ảnh). Chính sách autoplay hiện đại: video CHỈ tự phát khi kèm muted — trình duyệt chặn video tự kêu để bảo vệ người dùng.',
          '<audio controls> tương tự với source MP3 (phổ cập) / OGG. Cả hai đều điều khiển được bằng JavaScript (play(), pause()) — nền tảng cho player tùy biến sau này.',
        ],
      },
      {
        h: 'Phụ đề <track> — accessibility của media',
        p: [
          'Video có lời thoại BẮT BUỘC có phụ đề theo WCAG. <track kind="captions" src="phude.vtt" srclang="vi" label="Tiếng Việt" default> gắn file WebVTT — định dạng văn bản thuần: dòng WEBVTT mở đầu, rồi từng cue "mm:ss.mmm --> mm:ss.mmm" kèm nội dung.',
          'Phân biệt kind: captions (phụ đề cùng ngôn ngữ, kèm mô tả âm thanh — phục vụ người khiếm thính), subtitles (bản dịch ngôn ngữ khác), descriptions (mô tả hình ảnh cho người khiếm thị). Phụ đề còn lợi cả SEO (nội dung video thành văn bản tìm kiếm được) và người xem nơi công cộng không bật tiếng.',
        ],
        code: `WEBVTT

00:00.000 --> 00:04.000
Chào mừng đến với Đà Lạt,
thành phố ngàn hoa.

00:04.500 --> 00:08.000
[nhạc nền du dương]
Nhiệt độ trung bình 18–22 độ C quanh năm.`,
      },
      {
        h: 'iframe: cửa sổ nhúng và các nguyên tắc an toàn',
        p: [
          '<iframe src="..."> nhúng nguyên một trang khác vào trang của bạn — cách YouTube, Google Maps, CodePen cung cấp mã nhúng. Bên trong iframe là "lãnh thổ" của trang nguồn: CSS/JS của bạn không với vào được (và ngược lại) — cách ly này vừa là giới hạn vừa là lớp bảo vệ.',
          'Ba thuộc tính kỷ luật: title mô tả nội dung (trình đọc màn hình đọc nó khi gặp iframe — bắt buộc a11y); loading="lazy" hoãn tải iframe dưới màn hình (player YouTube nặng cả MB!); allow liệt kê tính năng cho phép (autoplay; fullscreen; picture-in-picture...). Với nguồn KHÔNG tin cậy, thêm sandbox để tước quyền (chạy script, mở popup, submit form) rồi nới từng quyền có kiểm soát.',
          'Hiệu năng 2026: trang nhúng nhiều video nên dùng kỹ thuật "facade" — hiển thị ảnh thumbnail giả nút play, chỉ khi người dùng bấm mới nạp iframe player thật; hoặc tối thiểu là loading="lazy" cho mọi iframe.',
        ],
      },
      {
        h: 'canvas và bức tranh các công nghệ nhúng',
        p: [
          '<canvas> tạo vùng vẽ bitmap trống — bản thân nó không hiển thị gì, mọi nét vẽ do JavaScript thực hiện qua API 2D (hoặc WebGL/WebGPU cho 3D). Đây là nền của game web, biểu đồ (Chart.js), chỉnh sửa ảnh trực tuyến. Ta chỉ cần nhận diện hôm nay; sang phần JavaScript sẽ vẽ thật.',
          'Toàn cảnh để chọn đúng công cụ: nội dung là ẢNH → img/picture; VIDEO/ÂM THANH của mình → video/audio; nội dung của DỊCH VỤ KHÁC → iframe; ĐỒ HỌA VẼ BẰNG CODE → canvas (bitmap, pixel) hoặc SVG (vector — Ngày 27, ưu thế co giãn và style bằng CSS).',
        ],
      },
    ],
    lab: {
      title: 'Lab 9: Trang media "Khám phá Đà Lạt" — video, phụ đề, YouTube, bản đồ',
      objective: 'Trang gồm video local có phụ đề .vtt tự viết + 2 iframe nhúng chuẩn a11y & lazy',
      time: '90 phút',
      prep: ['1 video MP4 ngắn (quay điện thoại 15–30s là đủ)', '1 ảnh làm poster', 'Link YouTube bất kỳ về Đà Lạt'],
      steps: [
        {
          t: 'Nhúng video local đúng chuẩn',
          code: `<video controls width="720" height="405"
       poster="images/poster.jpg" preload="metadata">
  <source src="media/dalat.webm" type="video/webm">
  <source src="media/dalat.mp4" type="video/mp4">
  <p>Trình duyệt của bạn không hỗ trợ video HTML5.
     <a href="media/dalat.mp4">Tải video về máy</a>.</p>
</video>`,
          mota: 'Chỉ có MP4 cũng được — giữ nguyên cấu trúc nhiều source để đúng thói quen. Kiểm tra poster hiện trước khi bấm phát.',
        },
        {
          t: 'Tự viết phụ đề WebVTT',
          mota: 'Tạo media/phude-vi.vtt: dòng đầu WEBVTT, sau đó 4–6 cue khớp nội dung video của bạn (căn mốc thời gian bằng cách xem video). Lưu UTF-8. Gắn vào video: <track kind="captions" src="media/phude-vi.vtt" srclang="vi" label="Tiếng Việt" default>. Phát video, bật nút CC kiểm tra phụ đề hiện đúng nhịp.',
        },
        {
          t: 'Thí nghiệm autoplay',
          mota: 'Thêm autoplay vào video → tải lại: không chạy. Thêm cả muted → chạy. Ghi 2 dòng giải thích chính sách autoplay hiện đại, rồi gỡ cả hai thuộc tính về trạng thái controls bình thường.',
        },
        {
          t: 'Nhúng YouTube và Google Maps chuẩn',
          mota: 'YouTube: nút Share → Embed, dán mã rồi BỔ SUNG title mô tả + loading="lazy". Google Maps: tìm "Trường Đại học Đà Lạt" → Share → Embed a map, dán và cũng thêm title + loading="lazy". Đặt cả hai ở cuối trang (dưới màn hình đầu).',
        },
        {
          t: 'Kiểm chứng lazy và tổng nghiệm thu',
          mota: 'F12 → Network → tải lại KHÔNG cuộn: các request youtube.com/google.com chưa xuất hiện. Cuộn xuống — chúng ùa về. Chụp minh chứng. Chạy nhanh Lighthouse Accessibility: các cảnh báo về iframe title phải bằng 0.',
        },
      ],
      checklist: [
        'Video: controls, poster, width/height, nhiều source, fallback có link tải',
        'File .vtt tự viết ≥ 4 cue, bật CC hiển thị đúng thời điểm',
        'Giải thích được autoplay + muted',
        '2 iframe đều có title mô tả và loading="lazy"',
        'Minh chứng Network cho thấy iframe chỉ tải khi cuộn tới',
      ],
    },
  },

  10: {
    theory: [
      {
        h: 'Tư duy dự án: đọc yêu cầu như đặc tả của khách hàng',
        p: [
          'Mini Project 1 mô phỏng quy trình thật: nhận yêu cầu → phân tích → thiết kế cấu trúc → thi công → nghiệm thu. Bước phân tích trả lời: website cho AI (đối tượng), để làm gì (mục tiêu), gồm NHỮNG TRANG NÀO (phạm vi). Sản phẩm của bước này là site map — và với mỗi trang, một wireframe phác khối trước khi code (đã học Ngày 2).',
          'Tổ chức thư mục chuẩn ngay từ đầu: index.html ở gốc; các trang cùng cấp hoặc theo thư mục chủ đề; images/, css/, js/ tách riêng; mọi tên file chữ thường-không-dấu-gạch-ngang. Cấu trúc sạch hôm nay = đường dẫn tương đối không đau đầu ngày mai.',
        ],
      },
      {
        h: 'Bốn checklist chất lượng gộp từ 7 ngày HTML',
        p: [
          'Checklist TÀI LIỆU: doctype; html lang="vi"; meta charset UTF-8; meta viewport; title riêng cho TỪNG trang (đừng copy nguyên); validator 0 lỗi.',
          'Checklist CẤU TRÚC: một h1/trang; dàn ý heading không nhảy cấp; đủ landmark header/nav/main/footer (main duy nhất); article/section đúng vai; danh sách dùng ul/ol/dl chứ không phải các p gạch đầu dòng giả.',
          'Checklist MEDIA & BẢNG: mọi ảnh có alt (trang trí thì alt=""); width/height đầy đủ; lazy cho ảnh dưới màn hình đầu; bảng có caption + scope; iframe có title + lazy; video có track nếu có lời thoại.',
          'Checklist FORM & LIÊN KẾT: mọi điều khiển có label; nhóm chọn có fieldset/legend; validation cơ bản; nhãn liên kết tự mô tả; link ngoài noopener; không link chết (bấm thử TẤT CẢ).',
        ],
      },
      {
        h: 'Git tối thiểu để nộp bài chuyên nghiệp',
        p: [
          'Từ project này, mọi bài nộp đều qua GitHub. Bốn lệnh khởi động: git init (biến thư mục thành repo), git add . (đưa thay đổi vào vùng chờ), git commit -m "mô tả" (chốt một "ảnh chụp"), git push (đẩy lên GitHub sau khi git remote add origin URL). Commit NHIỀU LẦN theo mốc ý nghĩa ("Hoàn thành trang chủ", "Thêm form tuyển sinh") thay vì một cục cuối ngày — lịch sử commit là nhật ký lao động của bạn.',
          'Viết commit message chuẩn: câu mệnh lệnh ngắn mô tả THAY ĐỔI ("Thêm bảng chương trình đào tạo" chứ không phải "sửa", "update", "final2"). README.md ở gốc repo giới thiệu dự án — GitHub tự hiển thị nó ở trang chính của repo.',
        ],
        note: 'Đừng commit file rác: tạo .gitignore ngay từ đầu (bỏ qua .DS_Store, Thumbs.db, node_modules về sau). Repo sạch là ấn tượng đầu tiên với người chấm — và với nhà tuyển dụng.',
      },
    ],
    lab: {
      title: 'Mini Project 1: Website "Khoa CNTT — DLU" (5 trang, thuần HTML)',
      objective: 'Repo GitHub công khai chứa site 5 trang đạt cả 4 checklist, Lighthouse Accessibility ≥ 95',
      time: '1 buổi (180 phút)',
      prep: ['Toàn bộ kỹ năng Ngày 3–9', 'Tài khoản GitHub', 'Nội dung thật từ website khoa để tham khảo'],
      steps: [
        {
          t: 'Site map + wireframe (bắt buộc trước khi code)',
          mota: 'Vẽ site map 5 trang: index.html (chủ) — gioi-thieu.html — chuong-trinh.html — tuyen-sinh.html — lien-he.html. Wireframe nhanh mỗi trang trên giấy: vị trí header/nav/main/aside/footer và các khối nội dung. Chụp ảnh đưa vào thư mục docs/ của repo.',
        },
        {
          t: 'Trang chủ + bộ khung dùng chung',
          mota: 'Dựng index.html với header (tên khoa + nav 5 mục, mục hiện tại có aria-current="page"), main gồm 1 section hero giới thiệu và 3 article tin nổi bật (mỗi tin: h3, ảnh có alt + width/height + lazy, đoạn tóm tắt, link "Đọc tiếp"), footer thông tin liên hệ. Nhân bản khung sang 4 trang còn lại, đổi title và aria-current.',
        },
        {
          t: 'Bốn trang nội dung',
          mota: 'gioi-thieu.html: lịch sử khoa với heading phân cấp, blockquote+cite, figure/figcaption, mục lục fragment. chuong-trinh.html: bảng CTĐT có caption, thead/tbody, scope, một ô rowspan (môn 2 học kỳ). tuyen-sinh.html: form tư vấn đầy đủ (text, email required, tel, select ngành, radio hệ đào tạo trong fieldset, checkbox kênh liên hệ, textarea, submit). lien-he.html: iframe Google Maps (title + lazy) + mailto/tel + bảng giờ làm việc.',
        },
        {
          t: 'Tự nghiệm thu bằng 4 checklist',
          mota: 'Chạy validator W3C cho CẢ 5 trang (0 lỗi). Chạy Lighthouse (Mobile) cho trang chủ và trang form: Accessibility ≥ 95 — sửa mọi cảnh báo alt/label/contrast được nêu. Bấm thử toàn bộ liên kết bằng bàn phím Tab.',
        },
        {
          t: 'Đưa lên GitHub đúng quy trình',
          code: `git init
git add .
git commit -m "Khởi tạo: trang chủ và bộ khung"
# ... code tiếp, commit theo mốc, tối thiểu 5 commit ...
git branch -M main
git remote add origin https://github.com/<username>/khoa-cntt-dlu.git
git push -u origin main`,
          mota: 'Viết README.md: giới thiệu, site map, ảnh chụp màn hình, điểm Lighthouse. (Tuần sau học deploy — hôm nay chỉ cần repo sạch đẹp.)',
        },
      ],
      checklist: [
        'Đủ 5 trang, menu nhất quán, không link chết, aria-current đúng trang',
        'Validator 0 lỗi cả 5 trang; Lighthouse Accessibility ≥ 95',
        'Có đủ: bảng chuẩn a11y, form chuẩn label/fieldset, figure, blockquote, iframe chuẩn',
        'Repo có ≥ 5 commit message ý nghĩa + README + docs/ chứa site map, wireframe',
        'Toàn bộ tên file đúng quy ước chữ thường không dấu',
      ],
    },
  },
}
