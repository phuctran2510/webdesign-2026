// Phần III — CSS (Chương 11–20, Learning Web Design 5th Ed.)
export default [
  {
    id: 11,
    title: 'Nhập môn CSS: selector, cascade, kế thừa',
    chapters: 'Chương 11',
    goals: [
      'Viết rule CSS đúng cú pháp và gắn CSS vào trang theo 3 cách',
      'Dùng selector: phần tử, class, id, hậu duệ, nhóm',
      'Giải thích cascade, specificity và kế thừa',
    ],
    theory: [
      'Cú pháp rule: selector { thuộc-tính: giá-trị; }. Một rule có thể nhiều khai báo, một selector có thể nhóm nhiều đích (h1, h2 { ... }).',
      'Ba cách gắn CSS: external (<link rel="stylesheet" href="style.css">) — chuẩn nhất; internal (<style> trong head); inline (style="") — tránh dùng.',
      'Selector cơ bản: phần tử (p), class (.tin-noi-bat) dùng nhiều lần, id (#header) duy nhất, hậu duệ (article p), con trực tiếp (ul > li), universal (*).',
      'Cascade — thứ tự thắng khi xung đột: nguồn gốc → specificity → thứ tự xuất hiện (rule sau thắng rule trước cùng độ mạnh).',
      'Specificity tính điểm: inline (1000) > id (100) > class/attribute/pseudo-class (10) > phần tử (1). !important phá vỡ mọi thứ — hạn chế tối đa.',
      'Kế thừa: thuộc tính chữ (color, font-*, line-height) truyền xuống con cháu; thuộc tính hộp (margin, border, width) thì không.',
      'DevTools tab Styles là "kính hiển vi CSS": xem rule nào thắng, rule nào bị gạch, sửa thử trực tiếp.',
    ],
    lab: {
      title: 'Lab 11: "CSS hóa" bài báo của Lab 4',
      steps: [
        'Tạo css/style.css, liên kết vào trang bài báo Lab 4 bằng <link>.',
        'Đặt font chữ, màu chữ, màu nền cho body; quan sát kế thừa xuống các đoạn.',
        'Tạo class .noi-bat tô nền vàng nhạt và áp cho 2 đoạn.',
        'Viết 2 rule cùng trỏ vào h1 với màu khác nhau, dự đoán rồi kiểm chứng rule thắng bằng DevTools.',
        'Thí nghiệm specificity: p vs .noi-bat vs #mo-dau — ghi lại kết quả từng cặp.',
      ],
      code: `/* css/style.css */
body {
  font-family: "Be Vietnam Pro", Arial, sans-serif;
  color: #222;
  background-color: #fafafa;
  line-height: 1.6;
}
h1 { color: #1a4fd1; }
.noi-bat { background-color: #fff3bf; }
article p { margin-bottom: 1em; }
/* id thắng class, class thắng phần tử */
#mo-dau { font-size: 1.15em; }`,
    },
    quiz: [
      { q: 'Selector nào có specificity cao nhất?', o: ['p', '.tin', '#header', 'article p'], a: 2, e: 'id (100 điểm) mạnh hơn class (10) và phần tử (1).' },
      { q: 'Thuộc tính nào ĐƯỢC kế thừa xuống phần tử con?', o: ['margin', 'border', 'color', 'width'], a: 2, e: 'Thuộc tính liên quan chữ (color, font) kế thừa; thuộc tính hộp thì không.' },
      { q: 'Cách gắn CSS nào được khuyến nghị cho dự án thật?', o: ['Inline style', 'File .css riêng qua <link>', '<style> trong từng trang', 'Viết trong JavaScript'], a: 1, e: 'External stylesheet tái sử dụng cho nhiều trang, dễ bảo trì, cache được.' },
      { q: 'Hai rule cùng specificity cùng trỏ một phần tử, rule nào thắng?', o: ['Rule viết trước', 'Rule viết sau', 'Rule ngắn hơn', 'Trình duyệt chọn ngẫu nhiên'], a: 1, e: 'Cùng độ mạnh thì thứ tự nguồn quyết định: sau thắng trước.' },
      { q: 'Selector "ul > li" chọn gì?', o: ['Mọi li trong trang', 'li là con TRỰC TIẾP của ul', 'ul nằm trong li', 'li đầu tiên'], a: 1, e: 'Dấu > là quan hệ cha–con trực tiếp, khác selector hậu duệ (khoảng trắng).' },
    ],
  },
  {
    id: 12,
    title: 'Định dạng chữ (Typography)',
    chapters: 'Chương 12',
    goals: [
      'Dùng font-family với ngăn xếp font và Google Fonts (hỗ trợ tiếng Việt)',
      'Làm chủ font-size với đơn vị em/rem, line-height, các thuộc tính chữ',
      'Trang trí danh sách và dùng pseudo-class cho liên kết',
    ],
    theory: [
      'font-family là "ngăn xếp": liệt kê từ font mong muốn đến font hệ dự phòng, kết thúc bằng họ chung (serif/sans-serif/monospace).',
      'Web font qua Google Fonts: chọn font hỗ trợ Vietnamese subset (Be Vietnam Pro, Inter, Lexend...) để chữ có dấu đẹp; nhúng bằng <link> hoặc @import.',
      'Đơn vị chữ: px cố định; em tương đối phần tử cha (dễ cộng dồn); rem tương đối gốc html — khuyến nghị 2026 dùng rem cho font-size để tôn trọng cài đặt người dùng.',
      'line-height không đơn vị (vd 1.6) là cách an toàn nhất; văn bản tiếng Việt nên 1.5–1.7 cho dễ đọc.',
      'Bộ thuộc tính chữ: font-weight, font-style, text-align, text-decoration, text-transform, letter-spacing, text-indent, text-shadow.',
      'Pseudo-class liên kết theo thứ tự LoVe-HAte: :link, :visited, :hover, :active; thêm :focus-visible cho người dùng bàn phím (chuẩn a11y 2026).',
      'Danh sách: list-style-type, list-style-position, hoặc bỏ dấu chấm (none) khi làm menu; ::marker để trang trí riêng dấu đầu dòng.',
    ],
    lab: {
      title: 'Lab 12: Trang bài thơ / trang đọc dài chuẩn typography',
      steps: [
        'Nhúng Google Fonts "Be Vietnam Pro" (Vietnamese subset) và "Lora".',
        'Đặt html { font-size: 100% } và mọi cỡ chữ bằng rem: body 1rem, h1 2.5rem, h2 1.75rem.',
        'Chỉnh line-height 1.7, độ rộng dòng tối đa 65 ký tự (max-width: 65ch).',
        'Tạo hiệu ứng liên kết: mặc định gạch chân, hover đổi màu, focus-visible viền outline rõ.',
        'So sánh đọc thử với/không có tinh chỉnh — chụp lại 2 phiên bản.',
      ],
      code: `html { font-size: 100%; }
body {
  font-family: "Be Vietnam Pro", system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.7;
}
article { max-width: 65ch; margin-inline: auto; }
h1 { font-family: "Lora", serif; font-size: 2.5rem; }
a:link    { color: #1a4fd1; }
a:visited { color: #6741d9; }
a:hover   { color: #d9480f; text-decoration-thickness: 2px; }
a:focus-visible { outline: 3px solid #1a4fd1; outline-offset: 2px; }`,
    },
    quiz: [
      { q: 'Vì sao nên kết thúc font-family bằng họ chung (sans-serif)?', o: ['Bắt buộc cú pháp', 'Làm dự phòng khi mọi font trước không có', 'Tăng tốc tải', 'Đẹp hơn'], a: 1, e: 'Nếu các font liệt kê đều thiếu, trình duyệt dùng font mặc định cùng họ.' },
      { q: '1rem bằng:', o: ['Cỡ chữ phần tử cha', 'Cỡ chữ phần tử gốc html', 'Luôn là 16px', '1% chiều rộng màn hình'], a: 1, e: 'rem = root em, tính theo font-size của html (mặc định thường 16px nhưng người dùng đổi được).' },
      { q: 'line-height khuyến nghị cho đoạn văn tiếng Việt:', o: ['0.8', '1.0', '1.5–1.7', '3.0'], a: 2, e: 'Khoảng 1.5–1.7 cân bằng giữa dễ đọc và không loãng.' },
      { q: ':focus-visible dùng để làm gì?', o: ['Ẩn phần tử', 'Hiện viền khi điều hướng bằng bàn phím', 'Đổi font khi hover', 'Chọn phần tử đầu'], a: 1, e: 'Giúp người dùng Tab bằng bàn phím thấy rõ đang ở đâu — yêu cầu accessibility.' },
      { q: 'Chọn Google Font cho website tiếng Việt cần lưu ý gì?', o: ['Chọn font nhiều weight nhất', 'Font có hỗ trợ Vietnamese subset', 'Font nhẹ nhất', 'Font serif'], a: 1, e: 'Không có subset Vietnamese, chữ có dấu sẽ hiển thị bằng font dự phòng, lệch phong cách.' },
    ],
  },
  {
    id: 13,
    title: 'Màu sắc và nền (Colors & Backgrounds)',
    chapters: 'Chương 13',
    goals: [
      'Khai báo màu bằng keyword, hex, rgb(), hsl() và kênh alpha',
      'Làm chủ background: ảnh nền, lặp, vị trí, kích thước, gradient',
      'Đảm bảo tương phản màu đạt chuẩn WCAG',
    ],
    theory: [
      'Cách ghi màu: keyword (tomato), hex (#d9480f, dạng ngắn #f00), rgb(217 72 15), hsl(24 87% 45%) — HSL trực quan nhất khi cần biến thể sáng/tối cùng tông.',
      'Kênh alpha (độ trong suốt): #d9480f80, rgb(217 72 15 / 0.5), hsl(... / 0.5); khác với opacity (làm mờ cả phần tử lẫn con).',
      'CSS hiện đại 2026: oklch() cho màu đồng đều cảm nhận, color-mix() trộn màu — đã hỗ trợ rộng rãi trên các trình duyệt.',
      'background-color; background-image: url(); background-repeat (no-repeat/repeat-x/…); background-position; background-attachment: fixed tạo hiệu ứng parallax đơn giản.',
      'background-size: cover (phủ kín, có thể cắt) vs contain (hiện trọn, có thể hở) — cover là lựa chọn phổ biến cho hero.',
      'Gradient: linear-gradient(góc, màu1, màu2), radial-gradient, conic-gradient; có thể chồng nhiều lớp nền, lớp ghi trước nằm trên.',
      'Tương phản WCAG AA: chữ thường ≥ 4.5:1, chữ lớn ≥ 3:1. Kiểm bằng DevTools color picker hoặc webaim.org/resources/contrastchecker.',
    ],
    lab: {
      title: 'Lab 13: Hero section với ảnh nền + gradient overlay',
      steps: [
        'Tạo section hero cao 80vh, ảnh nền Đà Lạt background-size: cover, position center.',
        'Chồng lớp linear-gradient tối dần lên ảnh để chữ trắng nổi rõ.',
        'Xây bảng màu thương hiệu 5 màu bằng HSL cùng hue, khác lightness.',
        'Kiểm tra tương phản chữ/nền của cả trang bằng DevTools, sửa các cặp dưới 4.5:1.',
        'Làm nút CTA có màu hover đậm hơn 10% lightness (dùng hsl để chỉnh).',
      ],
      code: `.hero {
  min-height: 80vh;
  display: grid;
  place-items: center;
  color: #fff;
  background-image:
    linear-gradient(180deg, rgb(0 0 0 / .25), rgb(0 0 0 / .65)),
    url("images/dalat-hero.jpg");
  background-size: cover;
  background-position: center;
}
:root {
  --brand:       hsl(222 89% 55%);
  --brand-dark:  hsl(222 89% 42%);
  --brand-light: hsl(222 89% 92%);
}
.cta { background: var(--brand); color: #fff; }
.cta:hover { background: var(--brand-dark); }`,
    },
    quiz: [
      { q: 'rgb(255 0 0 / 0.5) khác opacity: 0.5 ở điểm nào?', o: ['Không khác', 'Alpha chỉ trong suốt màu đó; opacity làm mờ cả phần tử và con bên trong', 'opacity nhanh hơn', 'Alpha không hoạt động với nền'], a: 1, e: 'opacity ảnh hưởng toàn bộ phần tử; kênh alpha chỉ ảnh hưởng màu được khai.' },
      { q: 'background-size: cover có đặc điểm:', o: ['Hiện trọn ảnh, có thể hở nền', 'Phủ kín vùng, có thể cắt bớt ảnh', 'Lặp ảnh', 'Thu nhỏ ảnh 50%'], a: 1, e: 'cover phóng ảnh phủ kín khung, phần thừa bị cắt.' },
      { q: 'Chuẩn tương phản WCAG AA cho chữ thường là:', o: ['2:1', '3:1', '4.5:1', '10:1'], a: 2, e: 'Chữ thường cần tối thiểu 4.5:1; chữ lớn được nới xuống 3:1.' },
      { q: 'Hệ màu nào dễ tạo biến thể sáng/tối cùng tông nhất?', o: ['Hex', 'RGB', 'HSL', 'Keyword'], a: 2, e: 'HSL tách Hue-Saturation-Lightness: giữ hue, chỉnh lightness là ra biến thể.' },
      { q: 'Chồng gradient lên ảnh nền, thứ tự khai báo trong background-image:', o: ['Ảnh trước, gradient sau', 'Gradient trước (lớp trên), ảnh sau (lớp dưới)', 'Tùy ý, kết quả như nhau', 'Không thể chồng lớp'], a: 1, e: 'Lớp khai báo trước nằm trên cùng.' },
    ],
  },
  {
    id: 14,
    title: 'Box Model: padding, border, margin',
    chapters: 'Chương 14',
    goals: [
      'Vẽ và giải thích được mô hình hộp của mọi phần tử',
      'Dùng box-sizing: border-box làm mặc định hiện đại',
      'Xử lý margin collapse, display, overflow, bo góc và đổ bóng',
    ],
    theory: [
      'Mọi phần tử là một chiếc hộp: content → padding (đệm trong) → border (viền) → margin (khoảng cách ngoài).',
      'Mặc định (content-box), width chỉ tính phần content; padding/border cộng thêm ra ngoài — gây lệch tính toán. Chuẩn 2026: đặt *, *::before, *::after { box-sizing: border-box } để width bao trọn padding + border.',
      'Ghi tắt 4 hướng theo chiều kim đồng hồ: margin: trên phải dưới trái; 2 giá trị = dọc ngang; margin-inline / margin-block là cách ghi logic hiện đại.',
      'Margin collapse: margin dọc của hai khối kề nhau gộp lấy giá trị lớn hơn — chỉ xảy ra theo chiều dọc, không xảy ra với padding hay trong flex/grid.',
      'display: block (chiếm cả dòng, nhận width/height), inline (trong dòng, bỏ qua width/height và margin dọc), inline-block (trong dòng nhưng nhận kích thước), none (biến mất khỏi bố cục).',
      'overflow khi nội dung tràn hộp: visible (mặc định), hidden, scroll, auto (chỉ hiện thanh cuộn khi cần).',
      'Trang trí hộp: border-radius bo góc (50% tạo hình tròn), box-shadow (x y blur spread màu) tạo chiều sâu.',
      'Căn giữa khối cổ điển: width cố định + margin-inline: auto.',
    ],
    lab: {
      title: 'Lab 14: Card sản phẩm chuẩn "hộp"',
      steps: [
        'Đặt reset box-sizing: border-box toàn cục ngay đầu file CSS.',
        'Dựng card 320px: ảnh trên, phần thân padding 1.25rem, viền 1px, bo góc 12px, bóng nhẹ.',
        'Bật DevTools → hover phần tử → quan sát sơ đồ box model màu cam/xanh; đối chiếu số liệu.',
        'Tạo 2 đoạn văn margin-bottom 24px và margin-top 16px kề nhau — đo khoảng cách thật để thấy margin collapse (24 chứ không phải 40).',
        'Làm avatar tròn bằng border-radius: 50% và thử 3 mức box-shadow khác nhau.',
      ],
      code: `*, *::before, *::after { box-sizing: border-box; }

.card {
  width: 320px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;            /* cắt ảnh theo góc bo */
  box-shadow: 0 4px 12px rgb(0 0 0 / .08);
  margin-inline: auto;         /* căn giữa khối */
}
.card img { width: 100%; display: block; }
.card-body { padding: 1.25rem; }
.avatar { width: 64px; height: 64px; border-radius: 50%; }`,
    },
    quiz: [
      { q: 'Thứ tự từ trong ra ngoài của box model:', o: ['margin → border → padding → content', 'content → padding → border → margin', 'content → margin → border → padding', 'padding → content → border → margin'], a: 1, e: 'Nội dung ở lõi, đệm trong, viền, rồi khoảng cách ngoài.' },
      { q: 'Với box-sizing: border-box, width: 300px bao gồm:', o: ['Chỉ content', 'Content + padding + border', 'Content + margin', 'Tất cả kể cả margin'], a: 1, e: 'border-box gói padding và border vào width khai báo; margin luôn ở ngoài.' },
      { q: 'margin: 10px 20px nghĩa là:', o: ['Trên 10, phải 20, dưới 10, trái 20', 'Trên 20, dưới 10', 'Bốn phía 10', 'Trái phải 10'], a: 0, e: 'Hai giá trị = (trên/dưới) (trái/phải).' },
      { q: 'Margin collapse xảy ra khi nào?', o: ['Margin ngang hai hộp inline', 'Margin dọc hai khối kề nhau', 'Padding hai khối kề nhau', 'Trong container flex'], a: 1, e: 'Chỉ margin dọc của block bình thường mới gộp; flex/grid không collapse.' },
      { q: 'Phần tử inline bỏ qua thuộc tính nào?', o: ['color', 'width và height', 'font-size', 'background'], a: 1, e: 'inline không nhận width/height (và margin dọc); cần inline-block để nhận.' },
    ],
  },
  {
    id: 15,
    title: 'Float và Positioning',
    chapters: 'Chương 15',
    goals: [
      'Dùng float đúng mục đích gốc: chữ ôm quanh ảnh',
      'Phân biệt 4 chế độ position và ứng dụng từng loại',
      'Làm header dính (sticky) và hiểu z-index/stacking context',
    ],
    theory: [
      'float: left/right đưa phần tử sang một bên, nội dung sau ôm quanh — mục đích gốc là ảnh trong bài báo. Thời nay KHÔNG dùng float để dàn trang (đã có Flexbox/Grid).',
      'Vấn đề cha "xẹp" khi mọi con đều float: sửa bằng display: flow-root trên cha (cách hiện đại thay clearfix hack); clear: both chặn ôm dòng.',
      'position: static — mặc định, theo dòng chảy; relative — dịch khỏi vị trí gốc bằng top/left..., chỗ cũ vẫn được giữ, đồng thời tạo mốc cho con absolute.',
      'position: absolute — rời khỏi dòng chảy, neo theo tổ tiên gần nhất có position khác static; đây là cặp bài "relative cha + absolute con" kinh điển (badge trên card, icon trong ô input).',
      'position: fixed — neo theo viewport, đứng yên khi cuộn (nút chat, thanh công cụ).',
      'position: sticky — lai giữa relative và fixed: cuộn bình thường, chạm ngưỡng top thì dính lại — chuẩn cho header/menu 2026, thay nhiều đoạn JavaScript ngày xưa.',
      'z-index quyết định tầng trên/dưới giữa các phần tử định vị; chỉ có tác dụng trong cùng stacking context — nguyên nhân của nhiều bug "z-index 9999 vẫn bị che".',
    ],
    lab: {
      title: 'Lab 15: Bài báo chữ ôm ảnh + header dính + badge sản phẩm',
      steps: [
        'Trang bài báo: ảnh float: right, margin trái/dưới 1rem, chữ ôm quanh; thêm ảnh thứ hai float: left.',
        'Dùng clear: both cho heading cuối để không bị ôm; bọc vùng bằng flow-root.',
        'Làm header sticky: position: sticky; top: 0; kèm bóng đổ khi dính.',
        'Card sản phẩm: cha relative, badge "Giảm 30%" con absolute góc trên phải.',
        'Tạo nút "lên đầu trang" fixed góc dưới phải; thí nghiệm z-index giữa badge và header.',
      ],
      code: `.bai-bao img.phai { float: right; margin: 0 0 1rem 1rem; }
.bai-bao { display: flow-root; }   /* cha ôm trọn các con float */

header.site {
  position: sticky; top: 0; z-index: 100;
  background: #fff; box-shadow: 0 2px 8px rgb(0 0 0 / .06);
}

.card { position: relative; }
.badge {
  position: absolute; top: 12px; right: 12px;
  background: #d9480f; color: #fff;
  padding: .25rem .6rem; border-radius: 999px;
}
.len-dau { position: fixed; right: 16px; bottom: 16px; }`,
    },
    quiz: [
      { q: 'Mục đích sử dụng phù hợp nhất của float năm 2026:', o: ['Dàn layout 3 cột', 'Chữ ôm quanh ảnh trong bài viết', 'Căn giữa trang', 'Làm menu ngang'], a: 1, e: 'Layout đã có Flexbox/Grid; float trở về đúng vai trò gốc.' },
      { q: 'Con absolute neo theo phần tử nào?', o: ['Luôn theo body', 'Tổ tiên gần nhất có position khác static', 'Phần tử đứng trước nó', 'Viewport'], a: 1, e: 'Vì vậy cha thường đặt relative để làm mốc cho con absolute.' },
      { q: 'position: sticky hoạt động thế nào?', o: ['Luôn đứng yên như fixed', 'Cuộn bình thường, chạm ngưỡng (top...) thì dính', 'Giống static', 'Chỉ hoạt động với footer'], a: 1, e: 'Sticky lai relative + fixed, cần khai ngưỡng như top: 0.' },
      { q: 'Phần tử relative sau khi dịch top: 20px thì chỗ cũ:', o: ['Bị các phần tử khác chiếm', 'Vẫn được giữ nguyên trong dòng chảy', 'Biến mất', 'Co lại một nửa'], a: 1, e: 'relative chỉ dịch phần hiển thị; không gian gốc vẫn được bảo lưu.' },
      { q: 'z-index chỉ có hiệu lực khi:', o: ['Phần tử có position khác static (hoặc trong flex/grid item)', 'Phần tử có width', 'Mọi trường hợp', 'Phần tử là ảnh'], a: 0, e: 'Phần tử static thuần không tham gia xếp tầng bằng z-index.' },
    ],
  },
  {
    id: 16,
    title: 'Flexbox: bố cục một chiều',
    chapters: 'Chương 16 (phần Flexbox)',
    goals: [
      'Kích hoạt flex container và điều khiển trục chính/trục chéo',
      'Dùng justify-content, align-items, gap, flex-wrap thành thạo',
      'Điều khiển item với flex-grow/shrink/basis và order',
    ],
    theory: [
      'display: flex biến phần tử thành flex container, các con thành flex item xếp theo trục chính (main axis) do flex-direction quyết định: row (mặc định) hoặc column.',
      'justify-content căn theo trục chính: flex-start, center, space-between, space-around, space-evenly.',
      'align-items căn theo trục chéo: stretch (mặc định), center, flex-start, flex-end, baseline. Căn giữa hoàn hảo = justify-content: center + align-items: center.',
      'gap tạo khoảng cách giữa item — thay thế margin hack ngày xưa, hoạt động cả flex lẫn grid.',
      'flex-wrap: wrap cho item xuống dòng khi chật — nền tảng của lưới thẻ responsive không cần media query.',
      'Cỡ item: flex-grow (tỷ lệ nở khi thừa chỗ), flex-shrink (tỷ lệ co khi thiếu), flex-basis (cỡ khởi điểm). Ghi tắt: flex: 1 = nở đều lấp đầy.',
      'align-self ghi đè căn chéo cho từng item; order đổi thứ tự hiển thị mà không đổi HTML (cẩn trọng với accessibility).',
      'Ứng dụng kinh điển: navbar (logo trái, menu phải bằng margin-left: auto hoặc justify-content: space-between), media object, footer cột.',
    ],
    lab: {
      title: 'Lab 16: Navbar + hàng thẻ giá responsive bằng Flexbox',
      steps: [
        'Navbar: flex, align-items center; logo trái, menu ul flex gap 1.5rem đẩy phải bằng margin-left auto.',
        'Hàng 3 thẻ bảng giá: container flex gap 1rem, mỗi thẻ flex: 1; thẻ giữa align-self: stretch nổi bật.',
        'Bật flex-wrap và đặt flex-basis 280px cho thẻ — thu nhỏ cửa sổ xem thẻ tự xuống dòng.',
        'Làm "media object": avatar cố định + phần chữ flex: 1.',
        'Dùng DevTools flex inspector (nút "flex" cạnh phần tử) để bật/tắt từng thuộc tính quan sát.',
      ],
      code: `.navbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: .75rem 1.5rem;
}
.navbar ul {
  display: flex; gap: 1.5rem;
  margin-left: auto;           /* đẩy menu sang phải */
  list-style: none;
}

.bang-gia {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.bang-gia .the {
  flex: 1 1 280px;             /* grow shrink basis */
}`,
    },
    quiz: [
      { q: 'justify-content căn item theo trục nào?', o: ['Trục chéo', 'Trục chính', 'Cả hai trục', 'Trục dọc luôn luôn'], a: 1, e: 'justify-content = trục chính; align-items = trục chéo.' },
      { q: 'Khi flex-direction: column, trục chính là:', o: ['Ngang', 'Dọc', 'Chéo 45°', 'Không có trục'], a: 1, e: 'Trục chính đi theo hướng của flex-direction.' },
      { q: 'flex: 1 là ghi tắt của:', o: ['flex-grow: 1 only', 'flex: 1 1 0%', 'flex: 0 0 100%', 'flex-basis: 1px'], a: 1, e: 'flex: 1 = grow 1, shrink 1, basis 0% → các item chia đều không gian.' },
      { q: 'Cách hiện đại tạo khoảng cách giữa các flex item:', o: ['margin từng item', 'gap trên container', 'padding container', 'br giữa các item'], a: 1, e: 'gap gọn, không dư khoảng ở mép như margin hack.' },
      { q: 'Muốn một item duy nhất căn khác các item còn lại theo trục chéo:', o: ['align-items trên item', 'align-self trên item', 'justify-self', 'order'], a: 1, e: 'align-self ghi đè align-items cho riêng item đó.' },
    ],
  },
  {
    id: 17,
    title: 'CSS Grid: bố cục hai chiều',
    chapters: 'Chương 16 (phần Grid)',
    goals: [
      'Định nghĩa lưới với grid-template-columns/rows, đơn vị fr, repeat, minmax',
      'Đặt item theo đường lưới và theo vùng đặt tên (grid-template-areas)',
      'Xây lưới thẻ tự co giãn bằng auto-fit + minmax (không cần media query)',
    ],
    theory: [
      'display: grid + grid-template-columns định nghĩa cột: 200px 1fr 1fr — đơn vị fr chia phần không gian còn thừa.',
      'repeat(3, 1fr) viết gọn; gap (row-gap/column-gap) tạo rãnh; grid-template-rows định nghĩa hàng tường minh, hàng phát sinh thêm là implicit.',
      'Đặt item theo đường (line): grid-column: 1 / 3 (từ đường 1 đến 3 = chiếm 2 cột), hoặc span 2; grid-row tương tự — nhớ đếm ĐƯỜNG, không đếm ô.',
      'grid-template-areas đặt tên vùng trực quan như vẽ bản đồ ASCII: "header header" / "sidebar main" / "footer footer" — đổi layout chỉ cần vẽ lại bản đồ.',
      'Công thức thần thánh 2026: grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) — lưới thẻ tự thêm/bớt cột theo bề rộng, không cần media query.',
      'Căn nội dung trong ô: justify-items/align-items (cho mọi ô), justify-self/align-self (từng item); place-items: center căn giữa cả hai chiều.',
      'Grid vs Flexbox: Grid cho bố cục hai chiều tổng thể trang; Flexbox cho một chiều trong từng thành phần — thực tế luôn dùng phối hợp.',
      'subgrid (2026 đã hỗ trợ rộng): con kế thừa đường lưới của cha — giải bài toán card cao đều thẳng hàng nội dung.',
    ],
    lab: {
      title: 'Lab 17: Layout "Holy Grail" + gallery auto-fit',
      steps: [
        'Dựng layout trang: header, sidebar, main, aside, footer bằng grid-template-areas.',
        'Cho main co giãn 1fr, sidebar cố định 220px, gap 1rem.',
        'Làm gallery ảnh repeat(auto-fit, minmax(220px, 1fr)); một ảnh nổi bật span 2 cột 2 hàng.',
        'Kéo cửa sổ nhỏ dần: quan sát auto-fit tự giảm số cột; vẽ lại areas cho mobile (xếp chồng).',
        'Bật Grid inspector trong DevTools (nút "grid") xem số đường và tên vùng.',
      ],
      code: `.trang {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 1rem;
  min-height: 100vh;
}
header { grid-area: header; }
nav.side { grid-area: sidebar; }
main { grid-area: main; }
footer { grid-area: footer; }

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}
.gallery .noi-bat { grid-column: span 2; grid-row: span 2; }`,
    },
    quiz: [
      { q: 'Đơn vị fr trong Grid nghĩa là gì?', o: ['Pixel Pháp', 'Một phần của không gian còn thừa', 'Phần trăm màn hình', 'Font-relative'], a: 1, e: 'fr (fraction) chia phần không gian còn lại sau khi trừ phần cố định và gap.' },
      { q: 'grid-column: 1 / 3 làm item chiếm:', o: ['3 cột', '2 cột (từ đường 1 đến đường 3)', '1 cột', 'Cả hàng'], a: 1, e: 'Đếm theo ĐƯỜNG lưới: đường 1 → đường 3 là 2 ô cột.' },
      { q: 'repeat(auto-fit, minmax(250px, 1fr)) mang lại lợi ích:', o: ['Ảnh nét hơn', 'Lưới tự điều chỉnh số cột theo bề rộng, không cần media query', 'Tải nhanh hơn', 'Cột luôn đúng 250px'], a: 1, e: 'Trình duyệt tự tính vừa bao nhiêu cột ≥250px thì hiện bấy nhiêu.' },
      { q: 'Grid phù hợp hơn Flexbox khi:', o: ['Xếp một hàng nút', 'Bố cục hai chiều cả hàng lẫn cột của trang', 'Căn giữa một phần tử', 'Menu ngang'], a: 1, e: 'Grid kiểm soát đồng thời hàng và cột; flex mạnh về một chiều.' },
      { q: 'grid-template-areas yêu cầu gì để hợp lệ?', o: ['Mỗi tên vùng tạo hình chữ nhật', 'Tối đa 4 vùng', 'Không được dùng dấu chấm', 'Tên vùng phải viết hoa'], a: 0, e: 'Vùng phải liền khối chữ nhật; dấu chấm (.) đại diện ô trống.' },
    ],
  },
  {
    id: 18,
    title: 'Responsive Web Design',
    chapters: 'Chương 17',
    goals: [
      'Thiết lập viewport meta và tư duy mobile-first',
      'Viết media query theo breakpoint hợp lý',
      'Dùng đơn vị linh hoạt, clamp() và container query (chuẩn 2026)',
    ],
    theory: [
      'RWD = 3 trụ cột (Ethan Marcotte): lưới linh hoạt + ảnh linh hoạt + media query. Bắt buộc có <meta name="viewport" content="width=device-width, initial-scale=1">.',
      'Mobile-first: viết CSS cơ sở cho màn hình nhỏ trước, rồi dùng @media (min-width: ...) mở rộng dần lên — code gọn hơn và ưu tiên đa số người dùng di động.',
      'Chọn breakpoint theo NỘI DUNG gãy ở đâu, không theo tên thiết bị; bộ phổ biến: 600px, 900px, 1200px.',
      'Đơn vị linh hoạt: %, vw/vh, ch; ảnh linh hoạt: img { max-width: 100%; height: auto }.',
      'clamp(min, mong-muốn, max) tạo giá trị co giãn có chặn: font-size: clamp(1rem, 2.5vw, 1.5rem) — typography mượt không cần media query.',
      'Container query (@container) 2026 đã phổ cập: component tự thích ứng theo bề rộng KHUNG CHỨA thay vì viewport — bước tiến lớn cho thiết kế theo component.',
      'Menu responsive: pattern hamburger (checkbox hack hoặc JS) hiện phổ biến; ẩn/hiện bằng media query.',
      'Kiểm thử: DevTools Device Toolbar, thử thật trên điện thoại qua IP LAN, xoay ngang/dọc.',
    ],
    lab: {
      title: 'Lab 18: Chuyển layout Lab 17 thành responsive hoàn chỉnh',
      steps: [
        'Thêm meta viewport; viết lại CSS theo mobile-first: một cột mặc định.',
        '@media (min-width: 900px): trả lại grid 2 cột sidebar + main.',
        'Áp font-size: clamp() cho h1 và ảnh max-width: 100%.',
        'Làm menu hamburger hiện ở mobile, menu ngang ở desktop.',
        'Thử container query: card đổi từ dọc sang ngang khi khung chứa ≥ 500px; kiểm tra trên điện thoại thật.',
      ],
      code: `/* Mobile-first: mặc định 1 cột */
.trang { display: grid; grid-template-areas: "header" "main" "sidebar" "footer"; }

@media (min-width: 900px) {
  .trang {
    grid-template-columns: 220px 1fr;
    grid-template-areas: "header header" "sidebar main" "footer footer";
  }
}

h1 { font-size: clamp(1.5rem, 4vw, 2.75rem); }
img { max-width: 100%; height: auto; }

/* Container query 2026 */
.card-wrap { container-type: inline-size; }
@container (min-width: 500px) {
  .card { display: flex; gap: 1rem; }
}`,
    },
    quiz: [
      { q: 'Thiếu meta viewport, trang trên điện thoại sẽ:', o: ['Không tải', 'Hiển thị thu nhỏ như bản desktop', 'Tự động responsive', 'Chỉ hiện chữ'], a: 1, e: 'Trình duyệt di động giả lập viewport ~980px rồi thu nhỏ — chữ li ti.' },
      { q: 'Mobile-first dùng media query dạng:', o: ['max-width', 'min-width', 'device-width', 'orientation'], a: 1, e: 'CSS gốc cho mobile, min-width mở rộng dần lên màn to.' },
      { q: 'clamp(1rem, 2.5vw, 1.5rem) trả về:', o: ['Luôn 2.5vw', 'Giá trị co giãn 2.5vw nhưng không nhỏ hơn 1rem, không lớn hơn 1.5rem', 'Trung bình cộng ba giá trị', '1rem trên mobile'], a: 1, e: 'clamp = min ≤ preferred ≤ max.' },
      { q: 'Container query khác media query ở chỗ:', o: ['Không khác', 'Đáp ứng theo bề rộng phần tử chứa thay vì viewport', 'Chỉ chạy trên mobile', 'Chỉ dùng cho ảnh'], a: 1, e: 'Component tự thích ứng theo khung chứa nó — tái sử dụng mọi ngữ cảnh.' },
      { q: 'Nên chọn breakpoint dựa trên:', o: ['Kích thước iPhone mới nhất', 'Điểm nội dung bắt đầu "gãy" xấu', 'Con số chẵn đẹp', 'Chuẩn ISO'], a: 1, e: 'Nội dung quyết định; thiết bị thay đổi liên tục theo năm.' },
    ],
  },
  {
    id: 19,
    title: 'Transitions, Transforms và Animation',
    chapters: 'Chương 18',
    goals: [
      'Tạo chuyển động mượt bằng transition cho hover/focus',
      'Biến hình 2D/3D với transform: translate, scale, rotate',
      'Viết keyframes animation và tôn trọng prefers-reduced-motion',
    ],
    theory: [
      'transition: property duration timing-function delay — làm mượt sự THAY ĐỔI giá trị (hover, focus, thêm class). Vd: transition: transform .3s ease.',
      'Timing function: ease, linear, ease-in-out, cubic-bezier() tùy biến nhịp chuyển động.',
      'transform không phá bố cục xung quanh: translate(x,y) dịch, scale() phóng, rotate() xoay, skew() nghiêng; gộp nhiều phép trong một khai báo.',
      'transform-origin đổi tâm biến hình; perspective + rotateY tạo hiệu ứng 3D lật thẻ.',
      '@keyframes đặt tên chuỗi trạng thái (from/to hoặc %), gọi bằng animation: ten 2s ease infinite alternate — chuyển động tự chạy không cần tương tác.',
      'Hiệu năng: chỉ nên animate transform và opacity (GPU xử lý, không reflow); tránh animate width/height/top/left.',
      'Accessibility 2026: bọc chuyển động lớn trong @media (prefers-reduced-motion: no-preference) — tôn trọng người dùng nhạy cảm chuyển động.',
      'Ứng dụng chừng mực: micro-interaction (nút, card nhấc nhẹ), skeleton loading, hiệu ứng xuất hiện khi cuộn — tránh lạm dụng gây rối.',
    ],
    lab: {
      title: 'Lab 19: Bộ hiệu ứng UI: nút, card, loader, thẻ lật',
      steps: [
        'Nút CTA: hover nhấc lên translateY(-2px) + bóng đậm, transition .25s.',
        'Card gallery: hover scale(1.03); ảnh trong card zoom nhẹ với overflow hidden.',
        'Loader xoay tròn: @keyframes quay 360°, animation infinite linear.',
        'Thẻ lật 3D flashcard từ vựng: mặt trước/sau, rotateY(180deg) khi hover.',
        'Bọc toàn bộ animation trong prefers-reduced-motion; bật giả lập trong DevTools Rendering để kiểm tra.',
      ],
      code: `.nut {
  transition: transform .25s ease, box-shadow .25s ease;
}
.nut:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgb(0 0 0 / .15);
}

@keyframes quay { to { transform: rotate(360deg); } }
.loader {
  width: 40px; height: 40px;
  border: 4px solid #e5e7eb; border-top-color: #2547F4;
  border-radius: 50%;
  animation: quay 1s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}`,
    },
    quiz: [
      { q: 'transition khác animation ở điểm nào?', o: ['Không khác', 'transition cần thay đổi trạng thái để kích hoạt; animation tự chạy theo keyframes', 'animation chỉ chạy một lần', 'transition mượt hơn'], a: 1, e: 'Transition phản ứng với thay đổi (hover...); animation chủ động chạy theo kịch bản.' },
      { q: 'Hai thuộc tính nên ưu tiên khi animate vì hiệu năng:', o: ['width, height', 'top, left', 'transform, opacity', 'margin, padding'], a: 2, e: 'transform/opacity được GPU tăng tốc, không gây reflow layout.' },
      { q: 'transform: scale(1.5) làm gì?', o: ['Dịch 1.5px', 'Phóng to 150%', 'Xoay 1.5 độ', 'Tăng z-index'], a: 1, e: 'scale nhân kích thước hiển thị; bố cục xung quanh không đổi.' },
      { q: 'animation: xoay 2s linear infinite — infinite nghĩa là:', o: ['Tốc độ vô hạn', 'Lặp mãi mãi', 'Delay vô hạn', 'Chạy ngược'], a: 1, e: 'iteration-count: infinite lặp không dừng.' },
      { q: 'prefers-reduced-motion dùng để:', o: ['Tăng tốc animation', 'Tôn trọng người dùng cài đặt giảm chuyển động', 'Giảm dung lượng CSS', 'Tắt CSS'], a: 1, e: 'Người nhạy cảm tiền đình có thể chóng mặt với chuyển động lớn — a11y quan trọng.' },
    ],
  },
  {
    id: 20,
    title: 'Kỹ thuật CSS nâng cao: biến, pseudo-element, tổ chức code',
    chapters: 'Chương 19',
    goals: [
      'Dùng CSS custom properties xây hệ thống design token và dark mode',
      'Khai thác ::before/::after, các pseudo-class chọn lọc và :has()',
      'Tổ chức CSS quy mô lớn: đặt tên BEM, tách file, layer',
    ],
    theory: [
      'Custom property (biến CSS): khai báo --brand: #2547F4 trong :root, dùng var(--brand, fallback); đổi 1 chỗ, cả site đổi theo — nền tảng của design token.',
      'Dark mode: đổi bộ biến trong @media (prefers-color-scheme: dark) hoặc theo class .dark do JS gắn; năm 2026 còn có light-dark() gọn hơn.',
      '::before/::after chèn nội dung trang trí bằng CSS (cần content) — làm icon, ribbon, gạch chân hiệu ứng, tooltip mà không thêm HTML.',
      'Pseudo-class chọn lọc: :first-child, :last-child, :nth-child(odd/2n/công thức) — tô sọc bảng, bỏ viền phần tử cuối.',
      ':is()/:where() gom selector gọn; :has() ("parent selector" đã phổ cập 2026): card:has(img) — chọn cha dựa vào con, điều CSS xưa không làm nổi.',
      'Đặt tên BEM: .block__element--modifier (vd .card__title--large) giúp team lớn không giẫm chân nhau.',
      '@layer sắp thứ tự ưu tiên các nhóm rule (reset < base < components < utilities) — kiểm soát cascade chủ động, giảm chiến tranh specificity.',
      'Nesting CSS gốc (không cần Sass) đã chuẩn hóa: .card { & h3 { ... } } — viết gọn như preprocessor.',
    ],
    lab: {
      title: 'Lab 20: Design token + Dark mode cho mini project',
      steps: [
        'Gom mọi màu/cỡ chữ/bo góc của mini project vào biến :root (--mau-nen, --mau-chu, --bo-goc...).',
        'Viết bộ biến dark trong prefers-color-scheme: dark; thêm nút gạt chuyển theme bằng class.',
        'Tô sọc bảng điểm bằng nth-child(odd); bỏ border-bottom ở hàng cuối bằng last-child.',
        'Làm ribbon "Mới" bằng ::after trên card; gạch chân hiệu ứng chạy bằng ::before + transition.',
        'Refactor tên class theo BEM và sắp rule vào @layer base, components, utilities.',
      ],
      code: `:root {
  --nen: #ffffff;   --chu: #1a1a1a;
  --brand: #2547F4; --bo-goc: 12px;
}
@media (prefers-color-scheme: dark) {
  :root { --nen: #101318; --chu: #e8eaef; }
}
body { background: var(--nen); color: var(--chu); }

tbody tr:nth-child(odd) { background: rgb(0 0 0 / .04); }

.card__ribbon::after {
  content: "MỚI";
  position: absolute; top: 10px; right: -8px;
  background: var(--brand); color: #fff;
  padding: 2px 10px; font-size: .75rem;
}

/* :has() — cha đổi kiểu khi chứa ảnh */
.card:has(img) { padding-top: 0; }`,
    },
    quiz: [
      { q: 'Biến CSS thường khai báo ở đâu để dùng toàn cục?', o: [':root', 'body cuối trang', 'Trong <script>', '@keyframes'], a: 0, e: ':root là phần tử gốc, biến kế thừa xuống toàn tài liệu.' },
      { q: '::before/::after bắt buộc có thuộc tính nào mới hiển thị?', o: ['color', 'content', 'display', 'position'], a: 1, e: 'Thiếu content (dù là chuỗi rỗng "") pseudo-element không được tạo.' },
      { q: 'tr:nth-child(2n) chọn:', o: ['Hàng lẻ', 'Hàng chẵn', '2 hàng đầu', 'Hàng cuối'], a: 1, e: '2n = 2,4,6... tức các hàng chẵn.' },
      { q: ':has() cho phép điều gì trước đây CSS không làm được?', o: ['Animation', 'Chọn phần tử CHA dựa trên con bên trong', 'Đổi màu hover', 'Import file'], a: 1, e: ':has() là "parent selector" — card:has(img) chọn card chứa ảnh.' },
      { q: 'Theo BEM, tên class nào đúng chuẩn?', o: ['.Card-Title-Big', '.card__title--large', '.cardTitleLarge', '#card_title'], a: 1, e: 'block__element--modifier: hai gạch dưới cho phần tử, hai gạch ngang cho biến thể.' },
    ],
  },
  {
    id: 21,
    title: 'Công cụ phát triển web hiện đại (2026)',
    chapters: 'Chương 20 (cập nhật 2026)',
    goals: [
      'Dùng thành thạo Git: branch, merge, pull request trên GitHub',
      'Hiểu Node.js/npm và vai trò của build tool Vite',
      'Biết bức tranh công cụ 2026: Tailwind, ESLint/Prettier, AI coding assistant',
    ],
    theory: [
      'Git là hệ quản lý phiên bản phân tán: commit là "ảnh chụp" dự án; branch cho phép làm tính năng song song; merge/pull request gộp code có review — quy trình chuẩn của mọi team.',
      'GitHub là nơi lưu trữ remote + cộng tác: Issues, Pull Request, Actions (CI/CD), Pages (hosting tĩnh miễn phí).',
      'Node.js đưa JavaScript ra khỏi trình duyệt; npm là kho thư viện lớn nhất thế giới; package.json khai báo phụ thuộc và scripts của dự án.',
      'Build tool: Vite là chuẩn 2026 — dev server khởi động tức thì, hot module replacement, build tối ưu (minify, tree-shaking, hash tên file).',
      'Sass từng thống trị (biến, nesting) nhưng CSS gốc 2026 đã có biến, nesting, color function — Sass chỉ còn cần cho dự án kế thừa.',
      'Tailwind CSS: viết class tiện ích trực tiếp trong HTML (flex, p-4, text-lg) — nhanh, nhất quán, là lựa chọn phổ biến nhất trong hệ sinh thái React.',
      'Chất lượng code: ESLint bắt lỗi JS, Prettier tự động format, chạy tự động khi commit qua git hooks.',
      'AI trong quy trình 2026: GitHub Copilot/Claude hỗ trợ viết code, review, giải thích lỗi — kỹ năng "đặt câu hỏi đúng" (prompting) trở thành kỹ năng nghề nghiệp; luôn hiểu và kiểm chứng code AI sinh ra.',
    ],
    lab: {
      title: 'Lab 21: Khởi tạo dự án Vite + quy trình Git branch',
      steps: [
        'Cài Node.js LTS; chạy npm create vite@latest demo-vite (chọn Vanilla) → npm install → npm run dev.',
        'Khám phá cấu trúc: index.html, main.js, package.json; sửa nội dung xem HMR cập nhật tức thì.',
        'Chạy npm run build, so sánh thư mục dist/ (file đã minify + hash) với source.',
        'Tạo branch tinh-nang/doi-mau, commit thay đổi, push và mở Pull Request trên GitHub, tự merge.',
        'Cài Prettier, format toàn dự án; thử nhờ AI assistant giải thích một đoạn code trong main.js và kiểm chứng lại.',
      ],
      code: `# Khởi tạo dự án Vite
npm create vite@latest demo-vite
cd demo-vite
npm install
npm run dev        # http://localhost:5173

# Quy trình branch
git checkout -b tinh-nang/doi-mau
git add . && git commit -m "Đổi bảng màu chủ đạo"
git push -u origin tinh-nang/doi-mau
# → mở Pull Request trên GitHub → review → Merge

npm run build      # xuất bản vào dist/`,
    },
    quiz: [
      { q: 'Branch trong Git dùng để:', o: ['Sao lưu ổ cứng', 'Phát triển tính năng song song không ảnh hưởng nhánh chính', 'Nén repository', 'Xóa lịch sử'], a: 1, e: 'Mỗi nhánh là dòng phát triển riêng, gộp lại khi hoàn thiện.' },
      { q: 'package.json có vai trò gì?', o: ['Chứa CSS', 'Khai báo thông tin, phụ thuộc và scripts của dự án Node', 'Cấu hình trình duyệt', 'Lưu dữ liệu người dùng'], a: 1, e: 'Là "hộ chiếu" của dự án: dependencies, devDependencies, scripts.' },
      { q: 'Lệnh nào khởi tạo dự án Vite mới?', o: ['npm install vite-app', 'npm create vite@latest', 'vite new project', 'npx start vite'], a: 1, e: 'npm create vite@latest là lệnh scaffold chính thức.' },
      { q: 'Pull Request là gì?', o: ['Lệnh tải code về', 'Đề nghị gộp nhánh kèm review code', 'Xóa nhánh', 'Backup tự động'], a: 1, e: 'PR mở không gian review, thảo luận trước khi merge vào nhánh chính.' },
      { q: 'Thái độ đúng khi dùng AI hỗ trợ viết code:', o: ['Copy nguyên không cần đọc', 'Hiểu, kiểm chứng và chịu trách nhiệm về code AI sinh ra', 'Không bao giờ dùng AI', 'Chỉ dùng cho bài thi'], a: 1, e: 'AI là trợ lý; hiểu và kiểm thử code vẫn là trách nhiệm của lập trình viên.' },
    ],
  },
  {
    id: 22,
    title: 'Ôn tập CSS + Mini Project 2: Landing page responsive',
    chapters: 'Tổng hợp Chương 11–20',
    goals: [
      'Tổng hợp toàn bộ CSS vào một landing page hoàn chỉnh, đẹp, chuẩn',
      'Áp dụng quy trình: wireframe → design token → dựng khối → responsive → hiệu ứng',
      'Tự đánh giá bằng Lighthouse cả 4 tiêu chí ≥ 90',
    ],
    theory: [
      'Quy trình dựng landing page chuyên nghiệp: phân tích wireframe → chọn token (màu, chữ, spacing) → dựng khung Grid tổng → dựng từng section bằng Flexbox → responsive mobile-first → micro-interaction cuối cùng.',
      'Cấu trúc landing kinh điển: header sticky → hero (thông điệp + CTA) → tính năng (lưới card) → giới thiệu → đánh giá khách hàng → bảng giá → FAQ → footer.',
      'Spacing có hệ thống: thang 4/8px (0.25/0.5/1/1.5/2/3rem) tạo nhịp điệu thị giác nhất quán.',
      'Nhịp chữ (type scale): tỷ lệ 1.25 hoặc 1.333 giữa các cấp heading giúp trang hài hòa.',
      'Kiểm tra chéo cuối dự án: HTML validator, Lighthouse 4 mục ≥ 90, thử 3 kích cỡ màn hình, thử bàn phím Tab toàn trang, thử prefers-reduced-motion.',
    ],
    lab: {
      title: 'Mini Project 2: Landing page "Khóa học Thiết kế Web 2026"',
      steps: [
        'Vẽ wireframe giấy 7 section; khai báo toàn bộ design token trong :root (kèm bộ dark mode).',
        'Dựng hero: gradient overlay + clamp() typography + 2 nút CTA có hiệu ứng.',
        'Section tính năng: grid auto-fit các card, hover nhấc nhẹ; section đánh giá dùng Flexbox media object.',
        'Bảng giá 3 gói (gói giữa nổi bật), FAQ dùng <details>/<summary>; header sticky đổ bóng.',
        'Responsive 3 breakpoint, chạy Lighthouse đủ 4 mục ≥ 90, push GitHub với README có ảnh chụp màn hình.',
      ],
      code: `/* Bộ khung token của landing page */
:root {
  /* Màu */
  --nen: #ffffff; --nen-phu: #f6f7fb;
  --chu: #14181f; --chu-mo: #5c6470;
  --brand: hsl(228 90% 55%); --brand-dam: hsl(228 90% 42%);
  /* Chữ — type scale 1.25 */
  --cf-nho: .8rem; --cf-goc: 1rem; --cf-lon: 1.25rem;
  --cf-h3: 1.563rem; --cf-h2: 1.953rem; --cf-h1: 2.441rem;
  /* Khoảng cách — thang 8px */
  --kc-1: .5rem; --kc-2: 1rem; --kc-3: 1.5rem;
  --kc-4: 2rem;  --kc-6: 3rem; --kc-8: 4rem;
  --bo-goc: 14px;
}
section { padding-block: var(--kc-8); }`,
    },
    quiz: [
      { q: 'Bước nào nên làm ĐẦU TIÊN khi dựng landing page?', o: ['Viết animation', 'Wireframe và chọn design token', 'Tối ưu SEO', 'Mua tên miền'], a: 1, e: 'Phác thảo cấu trúc và hệ thống token trước khi viết dòng CSS nào.' },
      { q: 'Thang spacing 8px mang lại lợi ích:', o: ['Trang tải nhanh hơn', 'Nhịp điệu thị giác nhất quán, dễ bảo trì', 'Bắt buộc theo chuẩn W3C', 'Giúp SEO'], a: 1, e: 'Mọi khoảng cách là bội số chung → giao diện đều đặn, quyết định nhanh.' },
      { q: 'FAQ đóng/mở không cần JavaScript nhờ cặp thẻ:', o: ['<div>/<span>', '<details>/<summary>', '<dialog>/<form>', '<section>/<article>'], a: 1, e: '<details> có sẵn hành vi toggle, <summary> là dòng tiêu đề bấm được.' },
      { q: 'Type scale 1.25 nghĩa là:', o: ['Chữ to 125px', 'Mỗi cấp heading lớn hơn cấp dưới 1.25 lần', 'Giãn dòng 1.25', 'Chữ đậm 125%'], a: 1, e: 'Nhân liên tiếp 1.25 tạo chuỗi cỡ chữ hài hòa.' },
      { q: 'Trước khi nộp/deploy dự án, KHÔNG cần kiểm tra mục nào?', o: ['Lighthouse', 'Điều hướng bằng bàn phím', 'Thử nhiều kích thước màn hình', 'Số dòng code càng nhiều càng tốt'], a: 3, e: 'Số dòng code không phải thước đo chất lượng — thậm chí ngược lại.' },
    ],
  },
]
