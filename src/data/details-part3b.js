// Bài giảng chi tiết & lab chi tiết — Phần III: CSS (Ngày 17–22)
export default {
  17: {
    theory: [
      {
        h: 'Tư duy Grid: lưới HAI CHIỀU thật sự',
        p: [
          'display: grid biến phần tử thành grid container điều khiển đồng thời HÀNG và CỘT — khác Flexbox chỉ giỏi một chiều. grid-template-columns định nghĩa cột: repeat(3, 1fr) chia 3 cột bằng nhau; đơn vị fr ("fraction") chia phần KHÔNG GIAN CÒN LẠI sau khi trừ các cột kích thước cố định — 1fr 2fr nghĩa là cột hai rộng gấp đôi cột một.',
          'gap: 24px (hoặc row-gap/column-gap riêng) đặt khoảng cách lưới — không cần margin thủ công. Đây là công cụ đúng cho: toàn bộ layout trang (header/sidebar/main/footer), lưới sản phẩm/ảnh đều hàng đều cột, form nhiều cột canh nhãn thẳng hàng.',
        ],
        code: `.trang {
  display: grid;
  grid-template-columns: 240px 1fr;   /* sidebar cố định, còn lại co giãn */
  grid-template-rows: auto 1fr auto;  /* header - main - footer */
  min-height: 100vh;
  gap: 0;
}`,
      },
      {
        h: 'repeat(), auto-fit/auto-fill và minmax() — lưới card không cần media query',
        p: [
          'Công thức được dùng nhiều nhất của Grid hiện đại: grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); — đọc là "nhét bao nhiêu cột rộng tối thiểu 240px vừa được, cột thừa chỗ thì giãn đều (1fr)". Khi cửa sổ hẹp lại dưới 240px×2, tự động còn 1 cột — toàn bộ logic responsive nằm gọn MỘT DÒNG, không cần @media.',
          'Khác biệt auto-fit vs auto-fill: auto-fit CO GIÃN các cột đã có lấp đầy khoảng trống thừa; auto-fill giữ nguyên cỡ cột và chừa các "khe rỗng vô hình" nếu chưa đủ item lấp đầy hàng — auto-fit gần như luôn là lựa chọn đúng cho lưới card.',
          'minmax(min, max) định biên một track: minmax(240px, 1fr) nghĩa là không bao giờ hẹp hơn 240px (chống vỡ chữ) và giãn tối đa theo phần chia đều.',
        ],
      },
      {
        h: 'Đặt vị trí item: line number và grid-template-areas',
        p: [
          'Đặt thủ công theo SỐ ĐƯỜNG KẺ (không phải số cột): grid-column: 1 / 3 nghĩa là từ đường kẻ 1 đến đường kẻ 3 (chiếm 2 cột); span 2 là viết tắt "trải qua 2 track" không cần tính đường kẻ cuối. grid-row tương tự cho hàng.',
          'grid-template-areas là cách trực quan nhất: đặt tên vùng cho container, mỗi item nhận tên qua grid-area — nhìn code gần như nhìn thấy layout thật, và đổi bố cục responsive chỉ cần VIẾT LẠI SƠ ĐỒ chứ không sửa từng item.',
        ],
        code: `.trang {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-areas:
    "dau   dau"
    "menu  noidung"
    "chan  chan";
}
header  { grid-area: dau; }
nav     { grid-area: menu; }
main    { grid-area: noidung; }
footer  { grid-area: chan; }

/* Responsive: viết lại đúng MỘT sơ đồ trong media query */
@media (max-width: 700px) {
  .trang {
    grid-template-columns: 1fr;
    grid-template-areas: "dau" "noidung" "menu" "chan";
  }
}`,
      },
      {
        h: 'Căn item, subgrid và Grid Inspector',
        p: [
          'justify-items/align-items căn TOÀN BỘ item trong ô của chúng (theo trục ngang/dọc); justify-self/align-self ghi đè cho MỘT item; place-items: center gộp cả hai — công thức căn giữa tuyệt đối gọn nhất hiện có. justify-content/align-content phân bổ khi LƯỚI nhỏ hơn container (còn dư khoảng trống).',
          'subgrid (đã hỗ trợ rộng rãi) cho phép item cũng là container Grid THỪA KẾ track của lưới cha — giải bài toán "card trong lưới muốn các dòng con (ảnh, tiêu đề, nút) thẳng hàng NGANG QUA nhiều card" mà trước đây rất khó.',
          'DevTools → phần tử có nhãn "grid" bấm được để bật overlay: số đường kẻ, tên vùng, kích thước từng track hiện trực tiếp trên trang — công cụ không thể thiếu khi mới học Grid.',
        ],
        note: 'Chọn Grid hay Flexbox: hỏi "tôi cần kiểm soát ĐỒNG THỜI hàng và cột, hay chỉ một chuỗi phần tử nối đuôi?" — hai chiều thật (layout trang, lưới ảnh đều) → Grid; một chuỗi (nav, hàng nút, media object) → Flexbox.',
      },
    ],
    lab: {
      title: 'Lab 17: Grid hóa toàn trang + lưới ảnh auto-fit',
      objective: 'Layout tổng thể bằng grid-template-areas, đổi bố cục mobile chỉ 1 khối media query; lưới ảnh responsive không media query',
      time: '90 phút',
      prep: ['Site đã Flex hóa Ngày 16'],
      steps: [
        {
          t: 'Grid hóa khung trang bằng areas',
          mota: 'Áp grid-template-areas đúng mẫu lý thuyết cho phần tử bọc toàn trang (header, nav-sidebar nếu có, main, footer). Nếu site chưa có sidebar, tạo thêm một aside "Bài liên quan" ở trang giới thiệu để có đủ 4 vùng thực hành.',
        },
        {
          t: 'Đổi bố cục mobile bằng cách viết lại areas',
          mota: 'Trong @media (max-width: 700px), viết lại grid-template-columns: 1fr và một grid-template-areas mới xếp dọc theo thứ tự ưu tiên đọc (nội dung trước, sidebar sau). So sánh với cách cũ (phải sửa rải rác nhiều thuộc tính) để thấy lợi ích của areas.',
        },
        {
          t: 'Lưới ảnh Đà Lạt tự co giãn',
          code: `.luoi-anh {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}
.luoi-anh img {
  width: 100%; height: 160px;
  object-fit: cover;
  border-radius: 10px;
}`,
          mota: 'Dùng lại 4 ảnh của Lab 6, bọc trong .luoi-anh. Kéo cửa sổ từ rộng về hẹp quan sát số cột tự đổi mà KHÔNG có một dòng @media nào.',
        },
        {
          t: 'Thẻ nổi bật span nhiều ô',
          mota: 'Cho ảnh đầu tiên grid-column: span 2; grid-row: span 2; để nó chiếm khối 2×2 nổi bật giữa lưới — minh họa đặt vị trí thủ công bằng span.',
        },
        {
          t: 'Form 2 cột bằng Grid',
          mota: 'Trang tuyển sinh: bọc các cặp label+input trong div.truong, cha form { display:grid; grid-template-columns: repeat(auto-fit, minmax(240px,1fr)); gap:16px 24px; } — nhãn và ô thẳng hàng đẹp mà không cần đo tay. Trường textarea/submit cho grid-column: 1 / -1 (chiếm hết chiều ngang).',
        },
      ],
      checklist: [
        'Layout trang dùng grid-template-areas, tên vùng dễ đọc',
        'Bản mobile chỉ sửa 1 khối media query (columns + areas)',
        'Lưới ảnh auto-fit/minmax co giãn mượt không media query',
        'Có ít nhất 1 item dùng span đặt vị trí thủ công',
        'Form tuyển sinh lên lưới 2 cột, textarea/submit tràn hết hàng',
      ],
    },
  },

  18: {
    theory: [
      {
        h: 'Viewport, breakpoint và triết lý Mobile First',
        p: [
          'meta viewport (đã khai từ Ngày 3) là điều kiện CẦN để responsive hoạt động — thiếu nó di động render trang ở độ rộng ảo 980px rồi thu nhỏ, mọi @media vô nghĩa. Breakpoint là các mốc bề rộng ta ĐỔI bố cục — chọn theo NỘI DUNG bắt đầu vỡ (chữ quá dài, ảnh quá nhỏ), không theo tên thiết bị cụ thể (thiết bị 2026 muôn hình vạn trạng, "chuẩn iPhone" vô nghĩa).',
          'Mobile First: viết CSS mặc định (không @media) cho MÀN HÌNH NHỎ trước — nội dung xếp một cột, dễ đọc; rồi dùng min-width mở rộng dần lên cho màn lớn. Ưu thế: di động (nơi phần lớn traffic 2026) không phải tải rồi "hủy" hàng loạt luật desktop; CSS ít, dễ bảo trì; ép buộc ưu tiên nội dung quan trọng nhất lên đầu.',
        ],
        code: `/* Mobile trước — mặc định */
.luoi-part { display: grid; grid-template-columns: 1fr; gap: 16px; }

/* Rồi mở rộng dần */
@media (min-width: 640px) {
  .luoi-part { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .luoi-part { grid-template-columns: repeat(3, 1fr); }
}`,
      },
      {
        h: 'Cú pháp @media và các loại điều kiện',
        p: [
          '@media (điều kiện) { luật CSS } — trình duyệt chỉ áp luật bên trong khi điều kiện đúng, đánh giá lại LIÊN TỤC khi cửa sổ đổi cỡ (không cần tải lại trang). Điều kiện phổ biến: width/min-width/max-width, orientation: portrait|landscape, và prefers-color-scheme (Ngày 19), prefers-reduced-motion.',
          'Kết hợp nhiều điều kiện bằng and: @media (min-width: 640px) and (max-width: 1023px) khoanh vùng riêng tablet. Có thể gộp nhiều @media cùng breakpoint hoặc rải theo từng component — dự án lớn thường đặt @media NGAY CẠNH luật component liên quan thay vì gom hết cuối file, dễ bảo trì hơn.',
        ],
      },
      {
        h: 'Container Query — bước tiến 2023–2026 vượt qua Media Query',
        p: [
          'Nhược điểm cố hữu của Media Query: nó chỉ biết BỀ RỘNG TRÌNH DUYỆT, không biết bề rộng THỰC của component — một card đặt trong sidebar hẹp vẫn nhận layout "desktop" sai lệch vì cửa sổ vẫn rộng. Container Query giải đúng bài toán này: component tự đáp ứng theo KHÔNG GIAN CHA của chính nó, bất kể cửa sổ to nhỏ.',
          'Cách dùng: cha khai container-type: inline-size (và tùy chọn container-name), con dùng @container thay vì @media. Ứng dụng chuẩn: card hiển thị ngang khi cha đủ rộng (≥ 400px), dọc khi cha hẹp — dùng được y hệt trong sidebar 300px lẫn main 900px.',
        ],
        code: `.khoang-card { container-type: inline-size; container-name: card; }

.card { display: grid; gap: 8px; }          /* mặc định: xếp dọc */

@container card (min-width: 400px) {
  .card { grid-template-columns: 120px 1fr; }  /* đủ rộng: ảnh trái, chữ phải */
}`,
        note: 'Media Query hỏi "màn hình rộng bao nhiêu?"; Container Query hỏi "CHỖ CỦA TÔI rộng bao nhiêu?" — dùng Container Query cho component tái sử dụng nhiều nơi, Media Query cho bố cục toàn trang.',
      },
    ],
    lab: {
      title: 'Lab 18: Mobile-first toàn site + Container Query cho card tái sử dụng',
      objective: 'Site responsive mượt ở 360/768/1024/1440px; 1 component card tự đổi layout theo container',
      time: '90 phút',
      prep: ['Site sau Lab 17', 'DevTools chế độ Responsive (Ctrl+Shift+M)'],
      steps: [
        {
          t: 'Rà soát và chuyển sang tư duy mobile-first',
          mota: 'Mở DevTools Responsive, kéo về 360px xem trang vỡ ở đâu. Với mỗi luật hiện đang "mặc định cho desktop", cân nhắc đảo lại: đặt phiên bản 1 cột/nhỏ làm MẶC ĐỊNH, bọc phiên bản nhiều cột trong min-width — áp dụng cho .luoi-part, .luoi-card, .trang (Ngày 16–17).',
        },
        {
          t: 'Ba breakpoint chuẩn cho toàn site',
          mota: 'Thống nhất và ghi comment đầu file: 640px (điện thoại lớn/tablet dọc), 1024px (tablet ngang/laptop nhỏ), 1440px (desktop rộng). Rà lại mọi @media hiện có cho khớp 3 mốc này thay vì số lẻ tùy hứng.',
        },
        {
          t: 'Card media liên quan tự đổi hướng theo container',
          code: `.khung-lien-quan { container-type: inline-size; }
.card-lq { display: grid; gap: 8px; }
.card-lq img { width: 100%; border-radius: 8px; }

@container (min-width: 360px) {
  .card-lq {
    grid-template-columns: 100px 1fr;
    align-items: center;
  }
}`,
          mota: 'Áp cho khối "Bài liên quan". Đặt nó lần lượt trong aside hẹp (~280px) và trong main rộng (~700px) — cùng một component, hai kết quả layout khác nhau tùy container, KHÔNG đổi một dòng CSS nào của chính card.',
        },
        {
          t: 'Kiểm thử orientation',
          mota: 'DevTools Responsive xoay ngang một thiết bị di động mô phỏng: nếu có hero cao (min-height:60vh) kiểm tra nó không chiếm hết màn ngang gây phải cuộn nhiều — thêm @media (orientation: landscape) and (max-height: 500px) giảm min-height nếu cần.',
        },
        {
          t: 'Kiểm thử toàn diện 4 mốc',
          mota: 'Chốt bằng việc chạy qua 360 / 768 / 1024 / 1440px, mỗi mốc chụp 1 ảnh, ghi chú 1 dòng nhận xét bố cục. Không phần tử nào tràn ngang gây thanh cuộn ngoài ý muốn (kiểm bằng overflow-x của body = hidden tự nhiên, không phải ép buộc).',
        },
      ],
      checklist: [
        'CSS mặc định là bản mobile (1 cột), mở rộng bằng min-width, không dùng max-width tràn lan',
        '3 breakpoint thống nhất toàn site, có ghi chú',
        'Component card dùng container-type + @container, đổi layout đúng theo cha, không theo cửa sổ',
        'Không có thanh cuộn ngang ngoài ý muốn ở 360px',
        '4 ảnh chụp + nhận xét ở 4 mốc bề rộng',
      ],
    },
  },

  19: {
    theory: [
      {
        h: 'Transition: chuyển động MƯỢT giữa hai trạng thái',
        p: [
          'transition khai báo: khi một thuộc tính ĐỔI GIÁ TRỊ (do :hover, class JS thêm vào, v.v.), trình duyệt tự nội suy mượt qua thời gian thay vì nhảy cóc. Cú pháp: transition: property duration timing-function delay; — property cụ thể (transform, background-color) hiệu quả hơn all (buộc trình duyệt theo dõi MỌI thuộc tính, tốn tài nguyên).',
          'timing-function nắn "nhịp điệu" chuyển động: linear (đều đều, thường thấy giả tạo), ease (mặc định, chậm-nhanh-chậm tự nhiên), ease-in/ease-out, hoặc cubic-bezier tùy biến. Với UI, ease-out (khởi nhanh, chốt chậm) thường cho cảm giác "phản hồi ngay" tốt nhất.',
        ],
        code: `.nut {
  background: #1e3a8a;
  transform: translateY(0);
  transition: background-color .2s ease, transform .15s ease-out;
}
.nut:hover {
  background: #1e40af;
  transform: translateY(-2px);
}`,
      },
      {
        h: 'Transform: di chuyển, xoay, phóng to KHÔNG đụng layout',
        p: [
          'transform áp các phép biến đổi hình học mà KHÔNG làm phần tử khác né tránh (không như đổi width/margin gây tính lại layout — "reflow" tốn hiệu năng). translate(x, y) dịch chuyển; scale(1.05) phóng to 5%; rotate(6deg) xoay; nhiều phép ghép bằng khoảng trắng: transform: translateY(-4px) scale(1.02).',
          'transform-origin đổi tâm biến đổi (mặc định tâm hộp) — hữu ích khi xoay/phóng to từ một góc cụ thể. Cùng opacity, transform là hai thuộc tính trình duyệt tối ưu chạy trên GPU — vì vậy animation/transition MƯỢT NHẤT chỉ nên dùng transform + opacity, tránh animate width/height/top/left trực tiếp khi có thể.',
        ],
      },
      {
        h: '@keyframes: chuyển động nhiều bước lặp lại',
        p: [
          '@keyframes đặt tên một chuỗi trạng thái theo % thời gian (hoặc from/to), rồi gán vào phần tử bằng animation: tên duration timing iteration-count direction fill-mode. Khác transition (cần một sự kiện kích hoạt như hover), animation TỰ CHẠY khi trang tải, lặp được (infinite), đảo chiều (alternate).',
          'Ứng dụng thực tế: skeleton loading (khối xám nhấp nháy chờ tải), spinner xoay, badge "pulse" thu hút chú ý nhẹ nhàng, fade-in khi phần tử xuất hiện.',
        ],
        code: `@keyframes nhap-nhay {
  0%, 100% { opacity: .4; }
  50%      { opacity: 1; }
}
.khung-cho { animation: nhap-nhay 1.4s ease-in-out infinite; }

@keyframes xoay { to { transform: rotate(360deg); } }
.spinner { animation: xoay 1s linear infinite; }`,
      },
      {
        h: 'prefers-reduced-motion — chuyển động có đạo đức',
        p: [
          'Chuyển động mạnh gây chóng mặt, buồn nôn, mất tập trung với một bộ phận người dùng (rối loạn tiền đình, một số dạng migraine, ADHD). Hệ điều hành cho phép người dùng bật "Giảm chuyển động" — CSS đọc được lựa chọn này qua @media (prefers-reduced-motion: reduce) để TẮT hoặc RÚT GỌN animation, đây là yêu cầu accessibility, không phải tùy chọn.',
          'Khóa học áp dụng quy tắc: mọi animation trang trí (không mang thông tin thiết yếu) đều bọc trong khối kiểm tra reduce — nếu người dùng bật, tắt hẳn hoặc rút animation về gần như tức thời.',
        ],
        code: `@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`,
        note: 'Đây là MỘT trong số rất ít trường hợp !important được chấp nhận: nó là "công tắc an toàn" toàn cục ghi đè mọi animation cụ thể, phục vụ đúng mục đích accessibility.',
      },
    ],
    lab: {
      title: 'Lab 19: Vi tương tác toàn site + tôn trọng reduced-motion',
      objective: 'Hover/focus mượt trên nút và card, 1 keyframes loading, khối reduced-motion áp toàn site',
      time: '75 phút',
      prep: ['Site sau Lab 18'],
      steps: [
        {
          t: 'Nút và link: transition tinh tế',
          mota: 'Rà lại .nut, a, .card từ các bài trước: thêm transition cho background-color/color/transform/box-shadow (0.15–0.2s, ease). Hover card: transform: translateY(-4px) kết hợp box-shadow đậm hơn (đã có nền từ Lab 14, giờ thêm transition mượt).',
        },
        {
          t: 'Menu mobile trượt xuống bằng transition',
          mota: 'Nếu chưa có menu mobile, thêm nút hamburger (chỉ hiện < 640px) điều khiển bằng JS đơn giản (hoặc :target/checkbox-hack nếu chưa học JS). Menu ẩn: max-height:0; overflow:hidden; khi mở: max-height:400px — cả hai có transition: max-height .3s ease.',
        },
        {
          t: 'Skeleton loading cho ảnh lazy',
          mota: 'Với ảnh loading="lazy" trong lưới Lab 17, bọc mỗi ảnh trong div.khung-anh có background dùng @keyframes nhap-nhay (mẫu lý thuyết) — tạo cảm giác "đang tải" trước khi ảnh thật xuất hiện (thực hành hình ảnh, chưa cần JS thật để ẩn khi tải xong).',
        },
        {
          t: 'Badge pulse thu hút nhẹ',
          mota: 'Badge "MỚI" (Lab 15) thêm animation: pulse 2s ease-in-out infinite với @keyframes pulse phóng to nhẹ transform: scale(1) → scale(1.08) → scale(1) — chuyển động RẤT nhỏ, không gây khó chịu.',
        },
        {
          t: 'Bật công tắc an toàn reduced-motion',
          mota: 'Dán khối @media (prefers-reduced-motion: reduce) từ lý thuyết vào CUỐI file CSS (đè lên mọi luật animation phía trên). Kiểm thử: DevTools → Ctrl+Shift+P → gõ "rendering" → mở tab Rendering → Emulate CSS media feature prefers-reduced-motion: reduce — xác nhận mọi hiệu ứng dừng gần như ngay lập tức.',
        },
      ],
      checklist: [
        'Mọi hover/focus có transition mượt (không nhảy cóc cứng)',
        'Menu mobile mở/đóng bằng transition max-height hoặc transform',
        'Có tối thiểu 1 @keyframes (skeleton hoặc spinner) hoạt động đúng',
        'Badge pulse chuyển động nhẹ nhàng, không chói mắt',
        'Bật giả lập reduced-motion trong DevTools và xác nhận animation tắt/rút gọn',
      ],
    },
  },

  20: {
    theory: [
      {
        h: 'CSS Custom Properties (biến CSS): design token sống trong trình duyệt',
        p: [
          'Khai --ten-bien: giá-trị; (thường trên :root để dùng toàn site), đọc bằng var(--ten-bien, giá-trị-dự-phòng). Khác biến SASS/LESS (chỉ tồn tại lúc BIÊN DỊCH, biến mất sau khi ra file .css), biến CSS SỐNG TRONG TRÌNH DUYỆT — đọc/ghi được bằng JavaScript, và QUAN TRỌNG NHẤT: có thể ĐỊNH NGHĨA LẠI trong bất kỳ selector nào để chỉ ảnh hưởng phạm vi đó.',
          'Ứng dụng kinh điển: định nghĩa lại --pc (màu chủ đề) ngay trên từng .part-card qua inline style — mọi con cháu bên trong tự động đổi màu theo, không cần viết N class riêng cho N màu. Đây chính là kỹ thuật đã dùng xuyên suốt app khóa học này.',
        ],
        code: `:root {
  --brand: #2547f4;
  --bo-goc: 14px;
  --khoang-cach: 16px;
}
.card {
  border-radius: var(--bo-goc);
  padding: var(--khoang-cach);
  color: var(--brand);
}
/* Định nghĩa lại CỤC BỘ — chỉ ảnh hưởng bên trong phần tử này */
.card.canh-bao { --brand: #dc2626; }`,
      },
      {
        h: 'Dark mode bằng biến + prefers-color-scheme',
        p: [
          'Kết hợp biến CSS với @media (prefers-color-scheme: dark) tạo dark mode gọn gàng: định nghĩa lại TOÀN BỘ token màu trong khối dark, mọi nơi dùng var(--nen)/var(--chu) tự đổi theo — không phải viết lại từng luật.',
          'Muốn cho người dùng TỰ CHỌN (bất kể hệ điều hành), thêm data-theme="dark" trên thẻ html qua JavaScript và một bộ luật [data-theme="dark"] { ... } song song với khối @media — khối media là mặc định tôn trọng hệ thống, thuộc tính data override khi người dùng bấm nút chuyển đổi thủ công.',
        ],
        code: `:root {
  --nen: #ffffff; --chu: #16181d;
}
@media (prefers-color-scheme: dark) {
  :root { --nen: #101114; --chu: #e5e7eb; }
}
[data-theme="dark"] { --nen: #101114; --chu: #e5e7eb; }
[data-theme="light"] { --nen: #ffffff; --chu: #16181d; }

body { background: var(--nen); color: var(--chu); }`,
      },
      {
        h: ':has() — "selector cha" thay đổi cuộc chơi',
        p: [
          '20 năm CSS không chọn được PHẦN TỬ CHA dựa trên con bên trong nó — :has() (hỗ trợ rộng rãi từ 2023–2024) giải quyết đúng khoảng trống này. .card:has(img) chọn card CÓ CHỨA ảnh; form:has(:invalid) style cả form khi có trường đang lỗi; li:has(> input:checked) đổi giao diện mục danh sách khi checkbox bên trong được tick — làm được to-do list chỉ bằng CSS thuần.',
          ':has() còn dùng làm "container query kiểu điều kiện nội dung": .luoi:has(> :nth-child(5)) đổi layout khi lưới có từ 5 item trở lên. Cẩn trọng hiệu năng: :has() phức tạp trên DOM cực lớn có thể chậm — dùng có chủ đích, không lạm dụng cho mọi selector.',
        ],
      },
      {
        h: 'BEM: quy ước đặt tên class hết mơ hồ',
        p: [
          'BEM = Block__Element--Modifier. BLOCK là component độc lập (card, nav, form); ELEMENT là bộ phận bên trong block, nối bằng 2 gạch dưới (card__title, card__image); MODIFIER là biến thể, nối bằng 2 gạch ngang (card--noi-bat, nut--vo). Toàn bộ tên PHẲNG (không lồng nhiều tầng __), tránh việc phải đếm cấp cha con khi đọc.',
          'Lợi ích: nhìn tên class là biết NGAY quan hệ (card__title chắc chắn thuộc trong .card, không cần tìm HTML); specificity luôn thấp và ĐỀU NHAU (toàn class đơn) nên cascade dễ đoán; đổi cấu trúc HTML không gãy CSS vì không phụ thuộc selector hậu duệ sâu. BEM không phải luật bắt buộc của CSS mà là KỶ LUẬT NHÓM — dự án càng lớn, càng nhiều người, càng đáng áp dụng.',
        ],
        code: `<div class="card card--noi-bat">
  <img class="card__image" ...>
  <h3 class="card__title">...</h3>
  <button class="card__nut card__nut--chinh">Xem</button>
</div>

.card { }
.card--noi-bat { border-color: gold; }
.card__title { font-weight: 700; }
.card__nut--chinh { background: var(--brand); }`,
      },
    ],
    lab: {
      title: 'Lab 20: Tái cấu trúc CSS thành design token + dark mode + :has()',
      objective: 'Toàn bộ màu/khoảng cách/bo góc chuyển sang biến CSS; dark mode chạy được; 1 ứng dụng :has() thật; 1 component viết theo BEM',
      time: '90 phút',
      prep: ['Toàn bộ CSS từ Ngày 11–19'],
      steps: [
        {
          t: 'Rút toàn bộ "số ma thuật" thành biến',
          mota: 'Rà file CSS, gom mọi mã màu, bán kính bo góc, khoảng cách lặp lại từ 2 lần trở lên vào khối :root { --brand: ...; --nen: ...; --chu: ...; --bo-goc: 14px; --khoang: 16px; ... }. Thay từng chỗ dùng bằng var(--ten). Site phải hiển thị Y HỆT như trước — đây là refactor thuần, không đổi giao diện.',
        },
        {
          t: 'Thêm dark mode theo hệ thống',
          mota: 'Nhân đôi token màu trong khối @media (prefers-color-scheme: dark) theo mẫu lý thuyết. Đổi hệ điều hành sang dark mode (hoặc DevTools → Rendering → Emulate prefers-color-scheme: dark) để kiểm tra — chú ý các nơi lỡ viết cứng #fff/#000 thay vì dùng biến sẽ "trơ" ra không đổi, tìm và sửa nốt.',
        },
        {
          t: 'Nút chuyển đổi thủ công (chuẩn bị móc JS)',
          mota: 'Thêm bộ luật [data-theme="dark"] và [data-theme="light"] song song khối @media. Chưa cần JS thật (Ngày 24 sẽ nối nút bấm) — chỉ cần thử tay: mở DevTools, gõ document.documentElement.setAttribute("data-theme","dark") trong Console, xác nhận site đổi giao diện ngay.',
        },
        {
          t: 'Một ứng dụng :has() có ý nghĩa',
          mota: 'Chọn 1 trong 2: (a) .card:has(.badge) { border-color: var(--do); } — card có badge "MỚI" tự viền đỏ nổi bật hơn; (b) form:has(:invalid) { box-shadow: 0 0 0 3px rgb(220 38 38 / .15); } — cả khối form nhá viền cảnh báo khi còn trường lỗi. Giải thích trong comment vì sao trước đây không làm được nếu thiếu :has().',
        },
        {
          t: 'Viết lại 1 component theo BEM',
          mota: 'Chọn .card (đang dùng nhiều class rời .card .badge .doc-tiep) → đổi tên đồng bộ theo BEM: card__anh, card__badge, card__tieu-de, card__nut, biến thể card--noi-bat cho card đầu tiên. Cập nhật HTML và CSS khớp nhau, kiểm tra không vỡ giao diện.',
        },
      ],
      checklist: [
        'Không còn mã màu/bo góc lặp lại viết tay — toàn bộ qua var(--...)',
        'Dark mode qua prefers-color-scheme hoạt động đúng, không còn màu "trơ"',
        'Gán được data-theme bằng Console và giao diện đổi ngay',
        'Có 1 luật :has() chạy đúng, có giải thích lý do cần nó',
        '1 component chuyển hoàn toàn sang cú pháp BEM, HTML/CSS khớp nhau',
      ],
    },
  },

  21: {
    theory: [
      {
        h: 'Vite: vì sao dự án 2026 không viết CSS/JS "chay" nữa',
        p: [
          'Vite là dev server + build tool: lúc phát triển nó phục vụ module tốc độ cực nhanh (không đóng gói lại toàn bộ mỗi lần lưu — chỉ cập nhật đúng module đổi, gọi là HMR — Hot Module Replacement); lúc build (vite build) nó đóng gói, thu nhỏ (minify), chia nhỏ code (code-splitting) thành bản tối ưu production.',
          'npm (Node Package Manager) quản lý thư viện bên thứ ba: npm install tên-gói tải về node_modules/ và ghi vào package.json (khai gói + phiên bản) và package-lock.json (khóa CHÍNH XÁC phiên bản mọi gói con — đảm bảo máy bạn và máy bạn học cùng cài ra kết quả giống hệt nhau).',
        ],
        note: 'node_modules/ KHÔNG BAO GIỜ commit lên Git (đưa vào .gitignore) — nó tái tạo được 100% chỉ bằng npm install đọc package.json, commit nó chỉ tổ làm nặng repo vô ích.',
      },
      {
        h: 'Git: hệ thống quản lý phiên bản — nền của làm việc nhóm',
        p: [
          'Git lưu LỊCH SỬ các "ảnh chụp" (commit) của thư mục dự án. Vòng lặp cơ bản: sửa file → git add (đưa vào vùng chờ "staging") → git commit -m "mô tả" (chốt ảnh chụp vào lịch sử local) → git push (đẩy lịch sử lên remote như GitHub). git pull kéo thay đổi mới của người khác về.',
          'Branch (nhánh) cho phép làm việc song song không đụng nhau: git checkout -b tinh-nang-x tạo và chuyển nhánh mới, code xong merge vào main qua Pull Request (PR) — cơ chế review code trước khi nhập, chuẩn quy trình mọi công ty. Xung đột (conflict) xảy ra khi hai người sửa cùng dòng — Git đánh dấu <<<<<<< / ======= / >>>>>>> để người sửa TỰ QUYẾT giữ đoạn nào.',
        ],
      },
      {
        h: 'Tailwind CSS: utility-first — một trường phái khác',
        p: [
          'Thay vì viết CSS riêng rồi đặt tên class ngữ nghĩa (cách khóa học đang làm), Tailwind cung cấp SẴN hàng nghìn class tiện ích một-nhiệm-vụ (p-4, flex, text-blue-600, rounded-lg) — ráp thẳng trong HTML, gần như không rời sang file .css. Ưu điểm: tốc độ dựng UI rất nhanh, design token nhất quán có sẵn, file CSS cuối cùng nhỏ (chỉ chứa class thực dùng nhờ cơ chế "purge"/JIT).',
          'Đánh đổi: HTML dài và "rối mắt" hơn (một thẻ có thể cõng 15–20 class); phải học một bộ từ vựng riêng của Tailwind. Nhiều đội 2026 dùng Tailwind cho tốc độ, nhưng HIỂU BẢN CHẤT CSS (đã học suốt Ngày 11–20) vẫn là điều kiện để dùng Tailwind GIỎI — utility class chỉ là lớp áo trên nền tảng box model, flex, grid bạn đã nắm.',
        ],
        code: `<!-- Cùng một card, hai trường phái -->
<!-- Ngữ nghĩa (khóa học đang làm) -->
<div class="card">...</div>

<!-- Utility-first (Tailwind) -->
<div class="bg-white rounded-xl shadow p-5 border border-gray-200">...</div>`,
      },
      {
        h: 'AI hỗ trợ code 2026: dùng như đồng nghiệp cấp dưới, không phải nhà tiên tri',
        p: [
          'Trợ lý AI (Claude, Copilot, ChatGPT...) viết CSS/JS boilerplate rất nhanh, gợi ý sửa lỗi, giải thích thông báo lỗi khó hiểu. Nhưng nó có thể sai tự tin ("hallucination") — thuộc tính CSS bịa ra, API không tồn tại, code chạy được nhưng phá accessibility. Kỹ năng 2026 không phải "gõ prompt" mà là ĐỌC HIỂU code AI trả về đủ để phát hiện chỗ sai — chính là những gì 20 ngày vừa qua trang bị.',
          'Quy trình dùng AI có trách nhiệm: (1) tự thử giải trước hoặc ít nhất hiểu rõ bài toán; (2) nhờ AI gợi ý; (3) ĐỌC LẠI từng dòng, kiểm tra bằng validator/Lighthouse/DevTools như mọi code khác; (4) không copy nguyên khối mình không giải thích được nếu ai hỏi. Prompt tốt kèm NGỮ CẢNH (đang dùng công nghệ gì, ràng buộc gì) cho kết quả sát hơn nhiều so với câu hỏi trống trơn.',
        ],
      },
    ],
    lab: {
      title: 'Lab 21: Quy trình chuyên nghiệp — Git branch/PR + thử nghiệm nhanh với Tailwind Play',
      objective: 'Một tính năng nhỏ đi trọn quy trình branch → commit → merge; 1 trang thử nghiệm Tailwind CDN đối chứng cách viết CSS ngữ nghĩa',
      time: '75 phút',
      prep: ['Repo Git đã có từ Mini Project 1', 'Tài khoản GitHub'],
      steps: [
        {
          t: 'Tạo nhánh cho một tính năng nhỏ',
          code: `git checkout -b them-nut-toi-sang
# ... sửa code thêm nút chuyển dark/light bằng data-theme ...
git add .
git commit -m "Thêm nút chuyển giao diện tối/sáng"
git push -u origin them-nut-toi-sang`,
          mota: 'Trên GitHub, vào repo sẽ thấy gợi ý "Compare & pull request" — tạo Pull Request, viết mô tả ngắn (tính năng làm gì, đã kiểm tra thế nào).',
        },
        {
          t: 'Tự "review" PR của chính mình',
          mota: 'Trong tab Files changed của PR, đọc lại từng dòng diff như một reviewer khó tính: có console.log() quên xóa không? có comment thừa không? Sửa trực tiếp trên nhánh nếu cần (commit thêm), PR tự cập nhật.',
        },
        {
          t: 'Merge và dọn nhánh',
          mota: 'Bấm Merge pull request trên GitHub → Confirm merge → Delete branch. Về máy: git checkout main; git pull — xác nhận thay đổi đã về nhánh main local.',
        },
        {
          t: 'Thử nghiệm nhanh với Tailwind Play CDN',
          code: `<script src="https://cdn.tailwindcss.com"></script>
<div class="max-w-sm mx-auto bg-white rounded-xl shadow-md p-5 border border-gray-200">
  <h3 class="text-lg font-bold text-blue-900">Thử Tailwind</h3>
  <p class="text-gray-600 mt-2">Dựng lại đúng 1 card của site bằng utility class.</p>
  <button class="mt-4 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition">
    Xem thêm
  </button>
</div>`,
          mota: 'Tạo file rời thu-tailwind.html, dựng lại y hệt .card của bạn nhưng thuần Tailwind CDN (chỉ để học, KHÔNG dùng CDN này cho production — Ngày mai sẽ không cần vì ta không đổi hướng khóa học sang Tailwind).',
        },
        {
          t: 'So sánh và rút kinh nghiệm dùng AI',
          mota: 'Nhờ một trợ lý AI viết thêm 1 biến thể card (ví dụ card cảnh báo màu đỏ) bằng CẢ HAI cách — ngữ nghĩa và Tailwind. Đọc kỹ code AI trả về: có thuộc tính CSS lạ/không tồn tại không? Có thiếu alt/label không? Ghi báo cáo 5 dòng: ưu/nhược từng cách viết CSS, và 1 lỗi (nếu có) bạn bắt được trong code AI sinh ra.',
        },
      ],
      checklist: [
        'Thực hiện đủ chu trình: branch mới → commit → push → Pull Request → merge → xóa nhánh',
        'Có PR thật trên GitHub với mô tả rõ ràng, lịch sử commit sạch',
        'File thu-tailwind.html dựng lại đúng 1 card bằng Tailwind CDN, hiển thị đúng',
        'So sánh được ưu/nhược 2 trường phái viết CSS bằng ví dụ cụ thể của chính mình',
        'Chỉ ra được ít nhất 1 chỗ cần sửa trong code AI gợi ý (hoặc giải thích vì sao đã đúng)',
      ],
    },
  },

  22: {
    theory: [
      {
        h: 'Landing page: thể loại có công thức, không phải tùy hứng',
        p: [
          'Landing page (trang đích) có MỘT mục tiêu chuyển đổi duy nhất (đăng ký, mua hàng, để lại liên hệ) — khác trang thông tin nhiều mục tiêu. Cấu trúc kinh điển đã được kiểm chứng qua hàng triệu trang: Hero (lời hứa giá trị + 1 CTA chính) → Social proof/Tính năng (vì sao tin tưởng) → Chi tiết/Lợi ích (giải thích sâu) → CTA thứ hai (chốt lại) → Footer.',
          'Nguyên tắc "một CTA chính": mỗi màn hình chỉ nên có MỘT hành động được nhấn mạnh nhất bằng màu/kích thước — quá nhiều nút nổi bật ngang nhau khiến người dùng không biết bấm gì, tỷ lệ chuyển đổi giảm. Đây là lúc bạn ÁP DỤNG mọi kỹ thuật CSS 12 ngày qua trong MỘT sản phẩm hoàn chỉnh.',
        ],
      },
      {
        h: 'Lắp ráp: mỗi kỹ thuật vào đúng vai trò',
        p: [
          'Hero: Grid hoặc Flexbox căn giữa (Ngày 16–17), background nhiều lớp gradient+ảnh (Ngày 13), typography lớn rõ ràng (Ngày 12), nút CTA có transition/transform hover (Ngày 19), toàn bộ dùng biến CSS token (Ngày 20).',
          'Lưới tính năng: Grid auto-fit/minmax (Ngày 17) hiển thị 3–6 tính năng dạng card đều nhau, mobile-first responsive (Ngày 18). Phần "vì sao tin tưởng": có thể dùng :has() để card có icon tự đổi viền (Ngày 20), BEM cho tên class nhất quán (Ngày 20).',
          'CTA cuối trang: lặp lại lời hứa giá trị ngắn gọn + form email đơn giản (label, required, kiểm tra HTML5). Footer: Flexbox nhiều cột (Ngày 16). Toàn trang phải responsive mượt 360→1440px và tôn trọng prefers-reduced-motion.',
        ],
      },
      {
        h: 'Nghiệm thu Mini Project 2 — bốn tiêu chí',
        p: [
          'THIẾT KẾ: phân cấp thị giác rõ (mắt biết nhìn đâu trước), khoảng trắng nhất quán (dùng token khoảng cách), MỘT bảng màu mạch lạc, MỘT CTA chính nổi bật hơn hẳn phần còn lại.',
          'KỸ THUẬT: box-sizing border-box toàn cục, Grid cho lưới 2 chiều + Flexbox cho hàng 1 chiều đúng chỗ, biến CSS cho token, ít nhất 1 dark-mode-ready, transition/animation tôn trọng reduced-motion, mobile-first với ≥ 2 breakpoint.',
          'ACCESSIBILITY: contrast ≥ 4.5:1 toàn trang, focus-visible rõ trên mọi phần tử tương tác, alt đầy đủ, form có label, Lighthouse Accessibility ≥ 95.',
          'QUY TRÌNH: site map/wireframe trước khi code (Ngày 2, 10), Git commit theo mốc có ý nghĩa qua branch/PR (Ngày 21), validator HTML 0 lỗi, README mô tả sản phẩm.',
        ],
        note: 'Đây là lúc "khoe" toàn bộ 12 ngày CSS trong một sản phẩm — nhưng đừng nhồi kỹ thuật vì muốn khoe: mỗi lựa chọn phải phục vụ MỤC TIÊU CHUYỂN ĐỔI của landing page, không phải phô diễn.',
      },
    ],
    lab: {
      title: 'Mini Project 2: Landing page ra mắt khóa học/sản phẩm tự chọn',
      objective: 'Landing page 1 trang hoàn chỉnh, responsive, dark-mode-ready, Lighthouse ≥ 95 cả 4 mục, đẩy lên GitHub qua PR',
      time: '1 buổi (180 phút)',
      prep: ['Toàn bộ kỹ năng Ngày 11–21', 'Chọn chủ đề: khóa học của bạn, CLB, sản phẩm giả định...'],
      steps: [
        {
          t: 'Brief + wireframe (bắt buộc trước khi code)',
          mota: 'Viết brief 5 dòng: sản phẩm gì, đối tượng ai, MỘT hành động chuyển đổi mong muốn là gì. Wireframe nhanh 5 khối (hero/tính năng/lợi ích/CTA/footer) trên giấy, chụp ảnh lưu vào docs/.',
        },
        {
          t: 'Khởi tạo nhánh và bộ khung HTML ngữ nghĩa',
          code: `git checkout -b landing-page
<!-- HTML: header, main (5 section theo wireframe), footer -->
<!-- Nối style.css riêng cho project này -->`,
          mota: 'HTML thuần ngữ nghĩa như Phần II: mỗi khối một <section> có id để làm neo #cta, #tinh-nang... Chưa cần đẹp, chỉ cần ĐÚNG cấu trúc và validate sạch.',
        },
        {
          t: 'CSS nền tảng: token + reset + typography',
          mota: 'Đầu file: box-sizing reset, khối :root khai token màu/khoảng cách/bo góc theo Ngày 20 (kèm bản dark trong prefers-color-scheme), web font tiếng Việt theo Ngày 12.',
        },
        {
          t: 'Lắp từng khối theo đúng vai trò kỹ thuật',
          mota: 'Hero: Flexbox/Grid căn giữa + background nhiều lớp + nút CTA transition. Tính năng: Grid auto-fit/minmax responsive. CTA cuối: form email có validation HTML5. Toàn bộ mobile-first, kiểm tra tại 360/768/1440px sau mỗi khối thay vì dồn cuối mới xem.',
        },
        {
          t: 'Nghiệm thu 4 tiêu chí + đẩy PR',
          mota: 'Chạy đủ: W3C validator, Lighthouse (Mobile, cả 4 mục), kiểm tra Tab toàn trang, giả lập reduced-motion. Sửa đến khi Accessibility ≥ 95. commit theo mốc có ý nghĩa trong lúc làm (không dồn 1 commit cuối), push, mở Pull Request với ảnh chụp trước/sau, tự merge sau khi tự review.',
        },
      ],
      checklist: [
        'Cấu trúc HTML ngữ nghĩa, validator 0 lỗi, có brief + wireframe trong docs/',
        'Áp dụng đúng vai trò: Grid cho lưới 2 chiều, Flexbox cho hàng, biến CSS cho token',
        'Responsive mượt ≥ 3 mốc bề rộng, dark-mode-ready, tôn trọng reduced-motion',
        'Lighthouse Mobile ≥ 95 cả 4 mục (Performance/Accessibility/Best Practices/SEO)',
        '≥ 5 commit ý nghĩa qua nhánh riêng, có Pull Request đã merge, README mô tả sản phẩm',
      ],
    },
  },
}
