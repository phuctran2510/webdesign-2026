// Bài giảng chi tiết & lab chi tiết — Phần III: CSS (Ngày 11–16)
export default {
  11: {
    theory: [
      {
        h: 'Cú pháp CSS và ba nơi đặt style',
        p: [
          'Một luật (rule) CSS gồm: selector { thuộc-tính: giá-trị; }. Selector chỉ định ÁP VÀO ĐÂU, mỗi cặp thuộc tính:giá trị là một khai báo, kết thúc bằng chấm phẩy. Chú thích CSS dùng /* ... */ (không phải <!-- -->).',
          'Ba nơi đặt CSS: (1) external — file .css riêng nối bằng <link rel="stylesheet" href="css/style.css"> trong head — CHUẨN sản xuất vì một file phục vụ nghìn trang và được cache; (2) internal — khối <style> trong head — chấp nhận cho trang đơn lẻ/demo; (3) inline — thuộc tính style="..." trên từng thẻ — tránh tối đa vì trộn trình bày vào cấu trúc và có độ ưu tiên "cứng đầu" khó ghi đè. Khóa học dùng external từ hôm nay.',
        ],
        code: `/* css/style.css */
h1 {
  color: #1e3a8a;          /* màu chữ */
  font-size: 2rem;         /* cỡ chữ */
}
.sapo { font-style: italic; }   /* selector class */
#dang-ky { background: #eef; }  /* selector id  */`,
      },
      {
        h: 'Selector nền tảng và tổ hợp',
        p: [
          'Bộ selector cốt lõi: theo thẻ (p, h2), theo class (.card — dùng nhiều nhất), theo id (#header), gộp nhiều selector chung style bằng dấu phẩy (h1, h2, h3 {...}), và universal * (dè xẻn).',
          'Tổ hợp quan hệ: A B (hậu duệ — B nằm BẤT KỲ đâu trong A, dùng nhiều nhất), A > B (con TRỰC TIẾP), A + B (anh em LIỀN KỀ ngay sau), A ~ B (mọi anh em phía sau). Ví dụ .bai-viet p chỉ nhắm các đoạn trong bài viết, không đụng đoạn ở footer; li > ul nhắm danh sách lồng cấp một.',
          'Selector thuộc tính: a[target="_blank"] (link mở tab mới), input[type="checkbox"], a[href^="https"] (bắt đầu bằng), img[src$=".svg"] (kết thúc bằng) — rất mạnh khi kết hợp kiến thức HTML tuần trước.',
        ],
      },
      {
        h: 'Cascade: cuộc phân xử "luật nào thắng"',
        p: [
          'Khi nhiều luật cùng nhắm một phần tử, trình duyệt phân xử theo thứ tự: (1) NGUỒN GỐC & !important; (2) ĐỘ CỤ THỂ (specificity); (3) THỨ TỰ XUẤT HIỆN — luật sau thắng khi hòa. Specificity đếm như bộ ba (a,b,c): a = số id, b = số class/thuộc-tính/pseudo-class, c = số thẻ. So từ trái sang: #menu (1,0,0) thắng .nav .item (0,2,0) thắng nav li a (0,0,3).',
          'Hai hệ quả thực hành: viết selector CÀNG NHẸ CÀNG TỐT (ưu tiên một class đơn) để sau này dễ ghi đè; và !important là "lệnh vượt luật" phá vỡ mọi tính toán — chỉ chấp nhận trong utility class có chủ đích, tuyệt đối không dùng để "chữa cháy" vì sẽ kéo theo chuỗi !important trả đũa.',
          'INHERITANCE (thừa kế) là chuyện khác cascade: các thuộc tính chữ nghĩa (color, font-*, line-height, text-align) tự truyền từ cha xuống con — nên set font cho body là cả trang theo; các thuộc tính hộp (margin, border, background) KHÔNG thừa kế. Giá trị inherit/initial/unset cho phép điều khiển thủ công.',
        ],
        note: 'Kỹ năng quan trọng nhất hôm nay không phải thuộc lòng công thức mà là ĐỌC được panel Styles trong DevTools: luật nào áp dụng, luật nào bị gạch ngang (thua cuộc), và click sửa trực tiếp để thí nghiệm.',
      },
    ],
    lab: {
      title: 'Lab 11: Nối CSS ngoài + giải 8 câu đố cascade bằng DevTools',
      objective: 'Site Mini Project 1 có style.css chung; bảng lời giải 8 tình huống specificity',
      time: '75 phút',
      prep: ['Mini Project 1 (Ngày 10)', 'DevTools'],
      steps: [
        {
          t: 'Nối file CSS chung cho cả site',
          mota: 'Tạo css/style.css trong repo Mini Project 1. Thêm <link rel="stylesheet" href="css/style.css"> vào head của CẢ 5 trang (trang trong thư mục con nhớ ../css/style.css). Viết luật thử body { background: #fafafa; } — thấy cả 5 trang đổi màu là nối đúng.',
        },
        {
          t: 'Style nền tảng bằng thừa kế',
          code: `body {
  font-family: system-ui, sans-serif;
  color: #1f2937;
  line-height: 1.6;
}
h1, h2, h3 { color: #1e3a8a; }
.sapo { font-style: italic; }
a[target="_blank"]::after { content: " ↗"; }`,
          mota: 'Quan sát: chỉ set font ở body mà mọi đoạn, li, td đều đổi — đó là inheritance. Thêm luật cho .sapo và selector thuộc tính như trên.',
        },
        {
          t: 'Tự tạo xung đột và dự đoán',
          mota: 'Viết vào CSS 4 cặp luật cùng nhắm một phần tử: (p vs .sapo), (.sapo vs #gioi-thieu p), (thứ tự trước/sau của hai luật cùng class), (một luật có !important). TRƯỚC khi lưu, ghi dự đoán "luật nào thắng, vì sao" vào comment. Lưu, kiểm chứng bằng mắt.',
        },
        {
          t: 'Phân xử bằng DevTools',
          mota: 'Ctrl+Shift+C chọn phần tử tranh chấp → panel Styles: xác nhận luật thắng đứng trên, luật thua bị GẠCH NGANG; rê chuột vào selector xem specificity. Sửa giá trị màu trực tiếp trong DevTools để thí nghiệm nhanh (nhớ: sửa ở đây không lưu vào file).',
        },
        {
          t: 'Lập bảng tổng kết 8 tình huống',
          mota: 'Hoàn thành bảng: cột Selector A, Selector B, bộ ba (a,b,c) từng bên, bên thắng, một dòng giải thích. 8 hàng bao phủ: thẻ vs class, class vs id, hậu duệ dài vs class đơn, hòa specificity xét thứ tự, inline vs id, !important vs id, luật thừa kế vs luật trực tiếp, universal vs thẻ.',
        },
      ],
      checklist: [
        'Cả 5 trang dùng chung 1 file style.css (đường dẫn đúng cả trang trong thư mục con)',
        'Chỉ ra được ví dụ thừa kế thật trên site của mình',
        'Bảng 8 tình huống điền đủ bộ ba specificity và giải thích đúng',
        'Biết đọc luật bị gạch ngang trong DevTools',
        'File CSS có comment nhóm luật rõ ràng',
      ],
    },
  },

  12: {
    theory: [
      {
        h: 'Font stack, đơn vị chữ và bài toán font tiếng Việt',
        p: [
          'font-family nhận DANH SÁCH dự phòng: trình duyệt thử từ trái sang, kết thúc bằng họ chung (serif, sans-serif, monospace). Năm 2026 system font stack rất được chuộng vì nhanh (không tải gì) và quen mắt: font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif.',
          'Đơn vị chữ: px tuyệt đối; em tính theo cỡ chữ CHA (lồng nhiều cấp dễ "lãi kép" khó lường); rem tính theo cỡ chữ GỐC html (ổn định, khuyến nghị cho font-size); % và các đơn vị viewport (vw) cho chữ co giãn. Quy ước khóa học: font-size dùng rem; spacing (margin/padding) dùng rem; border dùng px.',
          'Chữ tiếng Việt cần font phủ đủ dấu: các font Google Fonts hỗ trợ subset vietnamese như Be Vietnam Pro, Inter, Lora, Nunito, Source Sans 3. Thiếu subset, dấu sẽ vay từ font khác gây chữ "vá chằng vá đụp".',
        ],
      },
      {
        h: 'Web font với @font-face và Google Fonts',
        p: [
          'Google Fonts cách nhanh: chọn font + weight → copy <link> vào head (kèm preconnect cho nhanh). Cách tự chủ: tải file .woff2 về, khai @font-face { font-family: "Tên"; src: url("fonts/ten.woff2") format("woff2"); font-weight: 400; font-display: swap; } — tự host giúp không phụ thuộc bên thứ ba và tốt cho quyền riêng tư.',
          'font-display: swap chỉ định: hiện chữ NGAY bằng font hệ thống, tráo sang web font khi tải xong — tránh màn hình "chữ tàng hình" (FOIT). Kỷ luật hiệu năng: mỗi weight là một file — chỉ lấy weight thực dùng (thường 400, 600/700), đừng bê cả 9 weight về "cho chắc".',
        ],
        code: `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap" rel="stylesheet">

/* CSS */
body { font-family: 'Be Vietnam Pro', system-ui, sans-serif; }`,
      },
      {
        h: 'Bảng thuộc tính chữ và công thức dễ đọc',
        p: [
          'Nhóm font-*: font-size, font-weight (400 thường, 700 đậm — số linh hoạt hơn từ khóa), font-style (italic). Nhóm dàn chữ: line-height (viết SỐ KHÔNG ĐƠN VỊ như 1.6 để tự tỷ lệ theo cỡ chữ), letter-spacing, text-align (trái mặc định; justify dễ tạo "sông trắng" với tiếng Việt — thận trọng), text-transform (uppercase cho nhãn nhỏ), text-decoration (đừng gạch chân thứ không phải link), text-shadow.',
          'Công thức typography dễ đọc đã kiểm chứng: cỡ chữ thân bài 16–18px (1–1.125rem); line-height 1.5–1.7; bề rộng dòng 45–75 ký tự — đạt bằng max-width: 65ch (đơn vị ch = bề rộng số 0); tương phản chữ/nền tối thiểu 4.5:1 theo WCAG (kiểm bằng DevTools contrast checker).',
          'Pseudo-class trạng thái cho link — viết ĐÚNG THỨ TỰ LVHA: :link, :visited, :hover, :focus-visible, :active. Nguyên tắc a11y: hover chỉ dành cho chuột — mọi hiệu ứng hover phải có bản tương đương :focus-visible cho người dùng bàn phím; và đừng bao giờ xóa outline mà không thay bằng chỉ báo focus khác.',
        ],
        note: 'Nâng cấp nhỏ mà chuyên nghiệp: đặt ::selection đổi màu vùng bôi đen; ::first-letter làm drop-cap cho bài viết; ::marker đổi màu dấu đầu dòng.',
      },
    ],
    lab: {
      title: 'Lab 12: Hệ typography hoàn chỉnh cho trang bài viết',
      objective: 'Trang gioi-thieu.html đạt: web font tiếng Việt, thân bài 65ch, tương phản ≥ 4.5:1, focus rõ',
      time: '75 phút',
      prep: ['Site Mini Project 1 + style.css (Lab 11)', 'Google Fonts'],
      steps: [
        {
          t: 'Chọn cặp font và nhúng đúng cách',
          mota: 'Chọn 1 font heading (vd Lora) + 1 font thân (vd Be Vietnam Pro), CHỈ lấy weight 400 và 700, nhớ tick hỗ trợ Vietnamese. Dán link kèm 2 dòng preconnect vào head. Kiểm tra nhanh chữ "ắ ế ỗ ữ" hiển thị cùng một font.',
        },
        {
          t: 'Thiết lập thang chữ bằng rem',
          code: `html { font-size: 100%; }        /* 16px gốc, tôn trọng cài đặt user */
body {
  font-family: 'Be Vietnam Pro', system-ui, sans-serif;
  font-size: 1.0625rem;            /* 17px */
  line-height: 1.65;
  color: #1f2937;
}
h1, h2, h3 { font-family: 'Lora', Georgia, serif; line-height: 1.25; }
h1 { font-size: 2.25rem; }
h2 { font-size: 1.5rem; }
h3 { font-size: 1.17rem; }
.bai-viet { max-width: 65ch; margin-inline: auto; }`,
        },
        {
          t: 'Trang trí ngữ nghĩa',
          mota: 'blockquote: italic + border-left 4px màu nhấn + padding trái; cite hiển thị block, cỡ nhỏ hơn; .sapo cỡ 1.15rem màu xám đậm; đoạn mở đầu bài dùng ::first-letter (cỡ 3rem, float trái) làm drop-cap; đổi màu ::selection và ::marker theo màu nhấn của site.',
        },
        {
          t: 'Bộ trạng thái link chuẩn a11y',
          code: `a { color: #1d4ed8; text-underline-offset: 2px; }
a:visited { color: #6d28d9; }
a:hover { color: #1e40af; text-decoration-thickness: 2px; }
a:focus-visible {
  outline: 3px solid #1d4ed8;
  outline-offset: 2px;
  border-radius: 2px;
}
a:active { color: #dc2626; }`,
          mota: 'Kiểm tra bằng BÀN PHÍM: nhấn Tab đi khắp trang — vòng focus phải luôn nhìn thấy rõ.',
        },
        {
          t: 'Đo tương phản và chốt',
          mota: 'DevTools → chọn đoạn chữ → panel Styles bấm ô màu color: xem chỉ số Contrast ratio, phải ≥ 4.5 (AA). Chỉnh màu chữ/nền nếu chưa đạt. Chạy Lighthouse Accessibility xác nhận không cảnh báo contrast. So sánh trước/sau bằng cách tắt/bật file CSS.',
        },
      ],
      checklist: [
        'Web font subset Vietnamese, chỉ 2 weight, có preconnect, font-display swap',
        'Thân bài giới hạn 65ch, line-height 1.5–1.7, cỡ chữ ≥ 1rem',
        'Đủ 5 trạng thái link theo thứ tự LVHA, focus-visible rõ ràng',
        'Mọi cặp chữ/nền đạt contrast ≥ 4.5:1 (minh chứng DevTools)',
        'Có drop-cap, ::selection, ::marker tùy biến',
      ],
    },
  },

  13: {
    theory: [
      {
        h: 'Bốn cách viết màu và cách chọn năm 2026',
        p: [
          'Từ khóa (tomato, rebeccapurple) tiện demo; HEX #RRGGBB là "lingua franca" của designer (#1e3a8a; dạng 8 ký tự #RRGGBBAA có kênh trong suốt); rgb(30 58 138 / 0.9) cú pháp hiện đại dùng khoảng trắng và / cho alpha; hsl(hue saturation lightness) trực quan để BIẾN TẤU: giữ hue, tăng giảm lightness là có cả dải đậm nhạt cùng tông.',
          'Mới đáng biết 2026: oklch() — không gian màu đều theo cảm nhận mắt người, đổi lightness không làm màu "bẩn" như hsl, đã hỗ trợ rộng rãi; color-mix(in oklch, blue 70%, white) trộn màu ngay trong CSS. Khóa học dùng hex làm chính, hsl/oklch khi cần suy biến.',
          'Tương phản không chỉ là thẩm mỹ: văn bản thường ≥ 4.5:1, chữ lớn (≥ 24px hoặc 19px đậm) ≥ 3:1 — số liệu WCAG lặp lại từ Ngày 12 vì đây là lỗi audit phổ biến nhất.',
        ],
      },
      {
        h: 'Nền: màu, ảnh, và cú pháp gộp',
        p: [
          'background-color là "lớp lót an toàn" LUÔN khai kèm ảnh nền (ảnh hỏng thì chữ vẫn đọc được). background-image: url(...) đi cùng bộ điều khiển: background-repeat (no-repeat / repeat-x / repeat-y / space / round), background-position (từ khóa hoặc tọa độ: center, right 20px bottom 10px), background-size (cover phủ kín có cắt — phổ biến nhất cho hero; contain trọn ảnh có thể hở; hoặc kích thước cụ thể), background-attachment: fixed tạo hiệu ứng thị sai đơn giản (cân nhắc hiệu năng mobile).',
          'Nhiều ảnh nền một phần tử: liệt kê cách nhau dấu phẩy, ảnh khai TRƯỚC nằm TRÊN. Cú pháp gộp background: <color> <image> <position> / <size> <repeat> — lưu ý cặp position/size ngăn bằng dấu gạch chéo.',
        ],
        code: `.hero {
  color: #fff;
  background:
    linear-gradient(rgb(0 0 0 / .55), rgb(0 0 0 / .25)),
    url(../images/hero.jpg) center / cover no-repeat,
    #1e293b;                    /* lớp lót cuối cùng */
  min-height: 60vh;
}`,
      },
      {
        h: 'Gradient — "ảnh" vẽ bằng CSS',
        p: [
          'Gradient là background-image do trình duyệt vẽ, không tốn request: linear-gradient(hướng, màu1, màu2, ...) — hướng bằng từ khóa (to right, to bottom left) hoặc góc (135deg); chèn điểm dừng phần trăm để kiểm soát (gold 0%, gold 50%, tomato 50% tạo sọc cứng); radial-gradient tỏa tròn; conic-gradient quét quanh tâm — làm biểu đồ tròn thuần CSS; họ repeating-* tạo hoa văn sọc.',
          'Ứng dụng đắt giá nhất: PHỦ LỚP gradient tối mờ lên ảnh hero (ví dụ trên) để chữ trắng đạt chuẩn tương phản trên mọi tấm ảnh — kỹ thuật xuất hiện ở hầu hết landing page hiện đại. Kèm kỷ luật a11y: đừng để nội dung CHỈ tồn tại trong background-image (nó vô hình với trình đọc màn hình và biến mất khi ảnh lỗi) — ảnh nội dung dùng <img> có alt.',
        ],
      },
    ],
    lab: {
      title: 'Lab 13: Hero banner + hệ nút gradient cho trang chủ',
      objective: 'Trang chủ có hero ảnh phủ gradient chữ đạt chuẩn tương phản, nền trang có hoa văn nhẹ, bộ nút đồng bộ',
      time: '75 phút',
      prep: ['1 ảnh phong cảnh rộng ≥ 1600px', 'Site đang làm dở'],
      steps: [
        {
          t: 'Chuẩn hóa bảng màu của site',
          mota: 'Chọn 1 màu nhấn (brand) dạng hex, rồi tạo 2 biến thể sáng/tối bằng hsl cùng hue. Ghi cả ba vào comment đầu file CSS như "bảng màu" (Ngày 20 sẽ nâng cấp thành biến CSS). Kiểm tra màu nhấn trên nền trắng đạt 4.5:1.',
        },
        {
          t: 'Dựng hero',
          mota: 'Section hero đã có từ Mini Project 1: áp background nhiều lớp theo mẫu lý thuyết (gradient tối + ảnh + màu lót), min-height 60vh, chữ trắng. Thử tắt ảnh (sửa tên file) xác nhận màu lót cứu chữ.',
        },
        {
          t: 'Đo tương phản trên ảnh',
          mota: 'DevTools đo contrast chữ trắng tại VỊ TRÍ SÁNG NHẤT của ảnh. Nếu < 4.5, tăng độ mờ gradient (0.55 → 0.65) đến khi đạt. Ghi lại con số trước/sau.',
        },
        {
          t: 'Nền hoa văn và dải phân cách',
          code: `body {
  background:
    repeating-linear-gradient(45deg,
      transparent 0 14px, rgb(30 58 138 / .03) 14px 15px),
    #f8fafc;
}
.day-phan-cach {
  height: 6px;
  background: linear-gradient(90deg, #1e3a8a, #0e9f6e);
  border-radius: 999px;
}`,
          mota: 'Hoa văn phải NHẸ đến mức gần như không thấy — nó tạo chất liệu, không được cản chữ.',
        },
        {
          t: 'Bộ nút gradient 3 trạng thái',
          mota: 'Class .nut: nền linear-gradient hai sắc từ màu nhấn, chữ trắng, padding 12px 24px, border-radius; :hover đảo hướng gradient hoặc dùng cặp màu đậm hơn; :focus-visible outline 3px. Áp cho nút submit form và các link "Đọc tiếp". Kiểm tra bằng Tab.',
        },
      ],
      checklist: [
        'Hero 3 lớp: gradient + ảnh + màu lót; chữ đạt ≥ 4.5:1 có minh chứng',
        'Ảnh nền hỏng thì trang vẫn đọc tốt',
        'Hoa văn repeating-gradient tinh tế, không ảnh hưởng độ đọc',
        'Bộ nút gradient đủ hover/focus-visible/active',
        'Bảng màu 3 giá trị được ghi chú đầu file CSS',
      ],
    },
  },

  14: {
    theory: [
      {
        h: 'Box model: mọi phần tử là một chiếc hộp',
        p: [
          'Từ trong ra ngoài: CONTENT (nội dung, định bởi width/height) → PADDING (đệm trong, cùng màu nền) → BORDER (viền) → MARGIN (lề ngoài, trong suốt, đẩy hàng xóm). DevTools vẽ sơ đồ hộp màu ở cuối panel Styles — người bạn tra cứu số một khi layout "lệch vài pixel".',
          'Mặc định box-sizing: content-box khiến width CHỈ là phần content — cộng padding/border vào, hộp phình to hơn con số bạn viết, gây vỡ layout kinh niên. Giải pháp toàn ngành đã chuẩn hóa: đặt border-box cho mọi phần tử để width = TỔNG content+padding+border. Đây là dòng đầu tiên của mọi stylesheet hiện đại.',
        ],
        code: `*, *::before, *::after { box-sizing: border-box; }

.card {
  width: 300px;          /* border-box: đã GỒM padding + border */
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  margin: 16px;
}`,
      },
      {
        h: 'Viết tắt 4 phía, margin collapse và căn giữa',
        p: [
          'padding/margin viết tắt theo chiều kim đồng hồ TRBL: 1 giá trị (cả 4), 2 (dọc | ngang), 3 (trên | ngang | dưới), 4 (trên phải dưới trái). CSS logic properties hiện đại: margin-inline (2 bên ngang), margin-block (2 bên dọc) — thân thiện đa ngôn ngữ và gọn hơn.',
          'MARGIN COLLAPSE: hai margin DỌC chạm nhau (đoạn dưới của p này gặp đoạn trên của p kia) không cộng dồn mà lấy SỐ LỚN HƠN; margin ngang không collapse. Biết luật này khỏi hoang mang "sao 24 + 16 lại ra 24". Mẹo kỷ luật spacing: chỉ đặt margin MỘT CHIỀU (vd margin-block-end cho mọi khối) để khỏi collapse khó đoán.',
          'Căn giữa khối theo chiều ngang: cho width/max-width rồi margin-inline: auto — công thức .container { max-width: 1100px; margin-inline: auto; padding-inline: 16px; } là bộ khung của gần như mọi website.',
        ],
      },
      {
        h: 'Border, bo góc, bóng đổ và overflow',
        p: [
          'border: 1px solid #màu (viết tắt độ dày | kiểu | màu); từng cạnh riêng border-top... border-radius bo góc — 999px/50% biến hộp vuông thành viên thuốc/hình tròn (avatar). outline giống border nhưng KHÔNG chiếm chỗ trong box model — vì thế được dùng cho focus (không làm layout nhảy).',
          'box-shadow: x y blur spread màu — bóng mềm dùng màu rgb(0 0 0 / .08–.15); nhiều bóng chồng bằng dấu phẩy tạo chiều sâu tự nhiên; inset đổ bóng vào trong. Bóng + bo góc + border mảnh = ngôn ngữ "card" thống trị UI hiện đại.',
          'Khi nội dung to hơn hộp: overflow: visible (mặc định, tràn ra), hidden (cắt), auto (thanh cuộn khi cần — đáp án cho bảng rộng trên mobile: bọc bảng trong div overflow-x: auto), scroll. Hai trục riêng: overflow-x/overflow-y.',
        ],
        note: 'display ba trạng thái nền tảng: block (chiếm cả hàng, nhận width/height — div, p, h1); inline (nằm trong dòng chữ, KHÔNG nhận width/height và margin dọc — a, span, strong); inline-block (nằm trong dòng nhưng nhận đủ kích thước). Flexbox/Grid ngày 16–17 sẽ thay thế nhiều mẹo cổ điển, nhưng ba trạng thái này vẫn là nền móng.',
      },
    ],
    lab: {
      title: 'Lab 14: Hệ card tin tức + container chuẩn',
      objective: 'Trang chủ có .container căn giữa và 3 card tin đồng bộ đẹp như UI thật; giải thích được 2 hiện tượng box model',
      time: '75 phút',
      prep: ['Trang chủ Mini Project 1 (3 article tin nổi bật)'],
      steps: [
        {
          t: 'Reset box-sizing và dựng container',
          mota: 'Đặt luật *, *::before, *::after { box-sizing: border-box; } lên ĐẦU file. Tạo .container { max-width: 1100px; margin-inline: auto; padding-inline: 16px; } và bọc nội dung các vùng chính bằng nó.',
        },
        {
          t: 'Biến 3 article thành card',
          code: `.card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 20px;
  margin-block-end: 20px;
  box-shadow: 0 1px 3px rgb(0 0 0 / .06);
}
.card img { border-radius: 10px; }
.card:hover {
  box-shadow: 0 10px 24px rgb(0 0 0 / .12);
}`,
          mota: 'Gắn class="card" cho 3 article. Ảnh trong card bo góc nhẹ hơn hộp.',
        },
        {
          t: 'Thí nghiệm content-box vs border-box',
          mota: 'Tạm đổi .card { box-sizing: content-box; width: 300px; } → đo bề rộng thật trong DevTools (tab Computed, sơ đồ hộp): 300 + 40 padding + 2 border = 342px. Đổi lại border-box: đúng 300px. Ghi 2 dòng kết luận rồi xóa width thử nghiệm.',
        },
        {
          t: 'Quan sát margin collapse',
          mota: 'Hai card liền nhau đều margin-block 20px — đo khoảng cách thực giữa chúng trong DevTools: 20px chứ không phải 40px. Đổi một bên thành 32px → khoảng cách = 32px (lấy max). Ghi nhận xét, sau đó áp kỷ luật một chiều: chỉ giữ margin-block-end.',
        },
        {
          t: 'Avatar tròn và bảng cuộn ngang',
          mota: 'Thêm ảnh giảng viên vào trang giới thiệu: class .avatar { width:120px; height:120px; border-radius:50%; object-fit:cover; border:3px solid màu-nhấn; }. Sang trang chương trình: bọc bảng trong <div class="cuon-ngang"> với overflow-x:auto; thu cửa sổ hẹp kiểm tra bảng cuộn được thay vì phá layout.',
        },
      ],
      checklist: [
        'border-box đặt toàn cục ở đầu stylesheet',
        '.container căn giữa mọi vùng, có padding hai bên cho mobile',
        'Card đủ: nền, viền, bo góc, padding, bóng, hover đổi bóng',
        'Giải thích bằng số liệu DevTools: content-box phình và margin collapse',
        'Bảng rộng cuộn ngang êm trên cửa sổ hẹp',
      ],
    },
  },

  15: {
    theory: [
      {
        h: 'float: đúng vai ban đầu — chữ ôm quanh ảnh',
        p: [
          'float: left/right đưa phần tử dạt về một phía và cho nội dung DÒNG CHẢY ôm quanh — đúng như ảnh minh họa trong báo giấy. Đây là công dụng CHÍNH ĐÁNG duy nhất của float ngày nay: hình/bảng nhỏ trong bài viết, drop-cap. Suốt ~15 năm float bị "trưng dụng" làm cột layout vì không có gì tốt hơn — thời đó đã chấm dứt khi Flexbox/Grid phủ sóng.',
          'Hệ lụy phải biết để đọc code cũ: phần tử float thoát một phần khỏi dòng chảy khiến CHA KHÔNG ÔM được nó (cha "xẹp" chiều cao); chữa bằng clear: both cho phần tử sau, hoặc hiện đại nhất: đặt display: flow-root cho cha — tạo block formatting context ôm trọn float, thay thế hoàn toàn "clearfix hack" cổ điển.',
        ],
        code: `.anh-minh-hoa {
  float: left;
  width: 260px;
  margin: 4px 16px 8px 0;
}
.bai-viet { display: flow-root; }  /* cha ôm trọn float */
h2 { clear: both; }                /* heading không ôm ảnh */`,
      },
      {
        h: 'position: bốn chế độ và bộ tứ tọa độ',
        p: [
          'position quyết định phần tử tham chiếu vào đâu khi dùng top/right/bottom/left: STATIC (mặc định — tọa độ vô hiệu); RELATIVE — xê dịch so với CHÍNH CHỖ CŨ, chỗ cũ vẫn giữ nguyên trong dòng chảy, và quan trọng hơn: biến mình thành MỐC cho con absolute; ABSOLUTE — nhấc HẲN khỏi dòng chảy, neo theo tổ tiên gần nhất có position khác static (không có thì theo trang); FIXED — neo theo VIEWPORT, đứng im khi cuộn (nút chat, banner cookie); STICKY — lai: trôi bình thường, chạm ngưỡng (vd top: 0) thì dính lại trong phạm vi cha (header thu gọn, tiêu đề cột bảng dài).',
          'Cặp bài trùng số 1 của UI: cha relative + con absolute — badge "Mới" góc ảnh, số đỏ trên chuông thông báo, caption đè lên ảnh, icon trong ô input. Nhớ: absolute nhấc khỏi dòng chảy nên không đẩy ai — lạm dụng cho layout lớn sẽ vỡ trên màn hình khác.',
        ],
      },
      {
        h: 'z-index và stacking context',
        p: [
          'Khi các hộp chồng nhau, z-index quyết định trên dưới — CHỈ tác dụng với phần tử có position khác static (hoặc là item của flex/grid). Số lớn hơn nằm trên.',
          'Cạm bẫy kinh điển: z-index chỉ so được TRONG CÙNG stacking context. Một phần tử có position + z-index (hoặc opacity < 1, transform, filter...) tạo context riêng — con của nó dù z-index: 9999 cũng KHÔNG chui lên trên phần tử thuộc context khác có z-index cha cao hơn. Khi "9999 vẫn bị che": tìm và nâng z-index của TỔ TIÊN tạo context, đừng đua số. Kỷ luật dự án: định thang z-index ít bậc (1 nội dung nổi, 10 header sticky, 100 dropdown, 1000 modal) và ghi chú trong CSS.',
        ],
        note: 'Câu hỏi tự kiểm mỗi lần định dùng position: "Thứ này có bản chất ĐÈ LÊN thứ khác không?" Có (badge, tooltip, modal, sticky header) → position đúng vai. Không, chỉ là các khối đặt cạnh nhau → mai học Flexbox/Grid.',
      },
    ],
    lab: {
      title: 'Lab 15: Badge, nút nổi, header sticky và bài viết ôm ảnh',
      objective: 'Bốn kỹ thuật position + float chạy trên site; giải thích 1 tình huống z-index bằng stacking context',
      time: '75 phút',
      prep: ['Site đang làm dở với các card Ngày 14'],
      steps: [
        {
          t: 'Ảnh ôm chữ trong bài viết',
          mota: 'Trang giới thiệu: cho ảnh minh họa float trái theo mẫu lý thuyết, cha .bai-viet đặt display: flow-root, h2 kế tiếp clear: both. Thu hẹp cửa sổ quan sát chữ ôm ảnh tự nhiên.',
        },
        {
          t: 'Badge "MỚI" trên card tin',
          code: `.card { position: relative; }
.badge {
  position: absolute;
  top: 12px; right: 12px;
  background: #dc2626; color: #fff;
  font-size: .7rem; font-weight: 700;
  padding: 4px 10px; border-radius: 999px;
}`,
          mota: 'Thêm <span class="badge">MỚI</span> vào card đầu. Thí nghiệm: XÓA position: relative của .card — badge bay lên góc trang (neo nhầm mốc). Hoàn tác và ghi 1 dòng giải thích.',
        },
        {
          t: 'Header dính khi cuộn',
          mota: 'header { position: sticky; top: 0; z-index: 10; background: #fff; box-shadow: 0 1px 4px rgb(0 0 0 / .08); }. Cuộn thử — nếu không dính, kiểm tra tổ tiên có overflow: hidden (kẻ phá sticky số một) và gỡ.',
        },
        {
          t: 'Nút "Lên đầu trang" cố định',
          mota: 'Thêm <a class="len-dau" href="#top" aria-label="Lên đầu trang">↑</a> cuối body: position: fixed; bottom/right 24px; hình tròn 48px (đủ chuẩn vùng chạm); nền màu nhấn; chữ trắng; box-shadow; :focus-visible rõ.',
        },
        {
          t: 'Ca "z-index 9999 vẫn thua"',
          mota: 'Dựng lại cạm bẫy: cho một card cha position: relative; z-index: 1, card kề sau z-index: 2; đặt tooltip absolute z-index: 9999 TRONG card đầu và kéo nó đè sang card sau → tooltip vẫn bị che. Giải thích trong comment bằng khái niệm stacking context, rồi sửa đúng cách (nâng z-index của cha thứ nhất). Chốt thang z-index của site trong comment đầu file.',
        },
      ],
      checklist: [
        'Float ảnh + flow-root + clear hoạt động, thu nhỏ không vỡ',
        'Badge neo đúng góc card; giải thích được khi mất relative',
        'Header sticky có z-index và nền, không bị nội dung đè',
        'Nút fixed đạt vùng chạm ≥ 44px, có aria-label và focus-visible',
        'Tái hiện + giải thích + sửa đúng ca stacking context',
      ],
    },
  },

  16: {
    theory: [
      {
        h: 'Tư duy Flexbox: dòng chảy MỘT CHIỀU',
        p: [
          'display: flex biến phần tử thành flex container, các con thành flex item xếp dọc theo TRỤC CHÍNH (main axis — mặc định ngang, đổi bằng flex-direction: row | column | *-reverse); vuông góc là TRỤC PHỤ (cross axis). Toàn bộ Flexbox chỉ là trả lời hai câu hỏi: các item PHÂN BỔ thế nào dọc trục chính, và CĂN thế nào theo trục phụ.',
          'Chọn công cụ: Flexbox cho bố cục MỘT chiều — thanh nav, hàng nút, card ngang, căn giữa; Grid (mai học) cho HAI chiều — lưới trang. Hai thứ bổ trợ, không thay thế nhau: trang thật thường Grid tổng thể, Flexbox trong từng khối.',
        ],
      },
      {
        h: 'Thuộc tính phía container',
        p: [
          'justify-content phân bổ theo TRỤC CHÍNH: flex-start | center | flex-end | space-between (dàn hai mép, đều khoảng giữa — chuẩn cho header logo–menu) | space-around | space-evenly. align-items căn theo TRỤC PHỤ: stretch (mặc định — các item cao bằng nhau, lý do card flex tự đều chân) | center | flex-start | flex-end | baseline (thẳng chân chữ).',
          'gap: 16px đặt khoảng cách GIỮA các item — sạch hơn hẳn margin từng con (không dư mép, không collapse). flex-wrap: wrap cho phép xuống hàng khi chật — bật nó là có lưới card co giãn không cần media query; khi có nhiều hàng, align-content phân bổ các HÀNG.',
        ],
        code: `.thanh-nav {
  display: flex;
  justify-content: space-between;  /* logo trái — menu phải */
  align-items: center;
  gap: 24px;
}
.luoi-card {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}`,
      },
      {
        h: 'Thuộc tính phía item và công thức căn giữa',
        p: [
          'flex-grow (nhận bao nhiêu PHẦN không gian thừa; 0 = không nở), flex-shrink (mức chịu co khi thiếu chỗ; 0 = không co), flex-basis (cỡ khởi điểm trước khi chia chác). Viết gộp flex: grow shrink basis; ba công thức thuộc lòng: flex: 1 (chia đều, co giãn hết cỡ), flex: auto (nở theo nội dung), flex: none (giữ nguyên). Lưới card co giãn: flex: 1 1 280px — cơ sở 280px, chật thì wrap.',
          'align-self ghi đè align-items cho MỘT item; order đổi thứ tự hiển thị (thận trọng: thứ tự Tab và trình đọc màn hình vẫn theo HTML — lệch nhiều gây rối loạn a11y); margin-left: auto trong flex là "lò xo" đẩy một item dạt hẳn về cuối — mẹo đắt giá cho nút cuối thanh nav.',
          'Căn giữa tuyệt đối một thứ giữa khung — bài toán ám ảnh 20 năm — nay là 3 dòng: display: flex; justify-content: center; align-items: center. (Hoặc display: grid; place-items: center.)',
        ],
        note: 'Mở DevTools, phần tử display:flex có nhãn "flex" bấm được — bật overlay trục và vùng phân bổ, là cách nhanh nhất "nhìn thấy" hai trục khi mới học.',
      },
    ],
    lab: {
      title: 'Lab 16: Flex hóa site — nav, hàng card, media object, footer',
      objective: 'Bốn khu vực chuyển sang Flexbox chạy đẹp mọi bề rộng, dùng đúng gap/wrap/flex:1/margin auto',
      time: '90 phút',
      prep: ['Site với card Ngày 14–15'],
      steps: [
        {
          t: 'Thanh điều hướng chuẩn',
          mota: 'header trong: .thanh-nav theo mẫu lý thuyết; ul menu cũng display:flex; gap:8px; list-style:none; padding:0. Thêm nút "Đăng nhập" cuối menu với margin-left:auto — quan sát "lò xo" đẩy nó tách khỏi nhóm link.',
        },
        {
          t: 'Hàng card tự đều chân + wrap',
          code: `.luoi-card { display: flex; flex-wrap: wrap; gap: 20px; }
.luoi-card .card {
  flex: 1 1 280px;
  display: flex;
  flex-direction: column;
  margin-block-end: 0;      /* gap thay margin */
}
.card .doc-tiep { margin-top: auto; }  /* nút dính đáy card */`,
          mota: 'Bọc 3 card trang chủ trong .luoi-card. Chú ý hai tầng flex: lưới ngoài xếp card, trong mỗi card flex-direction:column để nút "Đọc tiếp" luôn chạm đáy dù nội dung dài ngắn khác nhau.',
        },
        {
          t: 'Media object cho mục "Bài liên quan"',
          mota: 'Mỗi mục trong aside: display:flex; gap:12px; align-items:flex-start — ảnh thumbnail 72px flex:none, khối chữ flex:1. Đây là pattern "media object" xuất hiện khắp nơi: comment, tin nhắn, kết quả tìm kiếm.',
        },
        {
          t: 'Footer nhiều cột co giãn',
          mota: 'Footer chia 3 khối (giới thiệu, liên kết nhanh, liên hệ): container flex-wrap:wrap; gap:32px; mỗi khối flex:1 1 220px. Kéo cửa sổ từ rộng về hẹp: 3 cột → 2 → 1 mượt mà không cần media query.',
        },
        {
          t: 'Đọc trục bằng DevTools và tổng duyệt',
          mota: 'Bật overlay flex cho .thanh-nav và .luoi-card: chỉ ra trục chính/phụ, vùng space-between. Thử đổi flex-direction:column của nav để cảm nhận justify/align đổi vai, rồi hoàn tác. Duyệt toàn site ở 360px / 768px / 1200px.',
        },
      ],
      checklist: [
        'Nav dùng space-between + align-items:center + gap, không margin vặt',
        'Card flex:1 1 280px wrap đẹp; nút Đọc tiếp dính đáy bằng margin-top:auto',
        'Có media object trong aside đúng pattern',
        'Footer tự gãy cột hợp lý ở mọi bề rộng',
        'Chỉ được trên overlay DevTools đâu là trục chính/phụ',
      ],
    },
  },
}
