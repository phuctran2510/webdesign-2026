// Bài giảng chi tiết & lab chi tiết — Phần IV: JavaScript (Ngày 23–25)
export default {
  23: {
    theory: [
      {
        h: 'JavaScript trong trang: nối script và vị trí đặt',
        p: [
          'JavaScript là tầng HÀNH VI (Ngày 3). Nối vào trang bằng <script src="js/app.js" defer></script>, thường đặt trong <head> kèm defer — defer bảo trình duyệt TẢI song song với HTML nhưng CHẠY sau khi HTML dựng xong, giữ đúng thứ tự các script defer, tránh lỗi "phần tử chưa tồn tại". Không có defer, script đặt cuối </body> cũng chạy được nhưng defer là cách hiện đại chuẩn.',
          'Console (F12 → tab Console) là nơi thử nghiệm JavaScript trực tiếp không cần file — gõ lệnh, Enter, xem kết quả ngay. console.log(giá_trị) in ra Console, là công cụ debug số một suốt sự nghiệp lập trình.',
        ],
      },
      {
        h: 'Biến, kiểu dữ liệu và toán tử',
        p: [
          'Khai biến bằng let (giá trị đổi được) hoặc const (không gán lại — mặc định nên dùng, chỉ chuyển let khi thật sự cần đổi). var là cách cũ, khóa học không dùng vì phạm vi hoạt động khó lường.',
          'Kiểu nguyên thủy: string ("chuỗi", dùng template literal `Xin chào ${ten}` để chèn biến — thay thế nối chuỗi bằng +); number (không phân biệt số nguyên/thực); boolean (true/false); undefined (biến khai chưa gán); null (rỗng có chủ đích). typeof kiểm tra kiểu.',
          'Toán tử so sánh: LUÔN dùng === và !== (so cả giá trị lẫn kiểu) thay vì == != (tự ép kiểu ngầm gây bug khó hiểu, ví dụ "0" == false là true). Toán tử logic && || ! dùng trong điều kiện; toán tử gộp ?? cho giá trị mặc định khi null/undefined: const ten = user.ten ?? "Khách".',
        ],
        code: `const ten = "Phúc";
let diem = 8.5;
console.log(\`Xin chào \${ten}, điểm của bạn: \${diem}\`);

if (diem >= 8) {
  console.log("Giỏi");
} else if (diem >= 6.5) {
  console.log("Khá");
} else {
  console.log("Cần cố gắng");
}`,
      },
      {
        h: 'Mảng và object — hai cấu trúc dữ liệu nền tảng',
        p: [
          'Mảng (Array) là danh sách có thứ tự: const monHoc = ["HTML", "CSS", "JS"]. Truy cập bằng chỉ số từ 0: monHoc[0]. Phương thức thường dùng: push (thêm cuối), map (biến đổi TỪNG phần tử, trả mảng MỚI), filter (lọc theo điều kiện, trả mảng MỚI), forEach (lặp không trả về gì), find (tìm phần tử đầu tiên khớp). map/filter là nền tảng render danh sách trong React (Ngày 28).',
          'Object là tập hợp cặp khóa:giá trị mô tả một "thực thể": const monHoc = { ten: "CSS", soTinChi: 3, daHoc: true }. Truy cập bằng .ten hoặc ["ten"] (cách 2 dùng khi tên khóa động). Destructuring rút gọn: const { ten, soTinChi } = monHoc lấy thẳng ra biến cùng tên — cú pháp xuất hiện khắp React.',
          'Mảng object là cấu trúc dữ liệu THỰC TẾ NHẤT: danh sách sinh viên, danh sách sản phẩm — mỗi phần tử một object. const sv = [{ten:"An",diem:8},{ten:"Bình",diem:6.5}]; sv.map(s => s.ten) lấy ra mảng tên.',
        ],
        code: `const monHoc = [
  { ten: "HTML", soTinChi: 3, daHoc: true },
  { ten: "CSS", soTinChi: 3, daHoc: true },
  { ten: "JavaScript", soTinChi: 4, daHoc: false },
];

const tenCacMon = monHoc.map(m => m.ten);
const monChuaHoc = monHoc.filter(m => !m.daHoc);
const tongTinChi = monHoc.reduce((tong, m) => tong + m.soTinChi, 0);`,
      },
      {
        h: 'Hàm: đóng gói logic tái sử dụng',
        p: [
          'Ba cách viết: function khaiBao(a, b) { return a + b; } (hoisting — gọi được TRƯỚC vị trí khai trong file); const bieuThuc = function(a,b){...} (không hoisting); và arrow function const cong = (a, b) => a + b; (ngắn gọn, không có this riêng — sẽ quan trọng khi học class/component). Arrow function một dòng tự return khi bỏ ngoặc nhọn.',
          'Tham số mặc định: function chao(ten = "bạn") {...}. Hàm là "công dân hạng nhất": gán được cho biến, truyền làm tham số cho hàm khác (callback) — chính là cách xử lý sự kiện Ngày 24 hoạt động.',
        ],
      },
    ],
    lab: {
      title: 'Lab 23: Máy tính điểm trung bình và thống kê lớp học bằng JS thuần trong Console',
      objective: 'File js/thong-ke.js chạy trong Console tính đúng điểm TB, lọc sinh viên giỏi, không lỗi cú pháp',
      time: '75 phút',
      prep: ['VS Code + Live Server', 'Không cần HTML phức tạp — 1 trang trống + script'],
      steps: [
        {
          t: 'Nối script và xác nhận chạy được',
          mota: 'Tạo js/thong-ke.js, nối vào index.html bằng <script src="js/thong-ke.js" defer></script>. Viết console.log("Đã kết nối!") — mở trang, F12 → Console phải thấy dòng chữ. Đây là bước xác nhận bắt buộc trước khi viết logic thật.',
        },
        {
          t: 'Dữ liệu mảng object sinh viên',
          code: `const sinhVien = [
  { ten: "Nguyễn Văn An", mssv: "2213001", diem: 8.5 },
  { ten: "Trần Thị Bình", mssv: "2213002", diem: 6.0 },
  { ten: "Lê Văn Cường",  mssv: "2213003", diem: 9.2 },
  { ten: "Phạm Thị Dung", mssv: "2213004", diem: 5.5 },
  { ten: "Hoàng Văn Em",  mssv: "2213005", diem: 7.8 },
];`,
          mota: 'Gõ mảng trên vào file. Dùng đúng dữ liệu lớp bạn nếu muốn (tối thiểu 5 sinh viên).',
        },
        {
          t: 'Viết các hàm thống kê',
          code: `function tinhDiemTB(ds) {
  const tong = ds.reduce((t, sv) => t + sv.diem, 0);
  return (tong / ds.length).toFixed(2);
}

function locSinhVienGioi(ds, nguong = 8) {
  return ds.filter(sv => sv.diem >= nguong);
}

function xepLoai(diem) {
  if (diem >= 9) return "Xuất sắc";
  if (diem >= 8) return "Giỏi";
  if (diem >= 6.5) return "Khá";
  if (diem >= 5) return "Trung bình";
  return "Yếu";
}`,
          mota: 'Viết đủ 3 hàm bằng function declaration. Gọi thử trong Console: tinhDiemTB(sinhVien), locSinhVienGioi(sinhVien), xepLoai(7.8).',
        },
        {
          t: 'Kết hợp map để in danh sách xếp loại',
          code: `const bangXepLoai = sinhVien.map(sv => \`\${sv.ten}: \${sv.diem} (\${xepLoai(sv.diem)})\`);
bangXepLoai.forEach(dong => console.log(dong));

console.log("Điểm trung bình lớp:", tinhDiemTB(sinhVien));
console.log("Số sinh viên giỏi trở lên:", locSinhVienGioi(sinhVien).length);`,
          mota: 'Chạy và đối chiếu kết quả Console với tính tay bằng máy tính cho ít nhất 2 sinh viên để tin tưởng logic đúng.',
        },
        {
          t: 'Thử nghiệm lỗi cố ý để quen thông báo lỗi',
          mota: 'Lần lượt gây 3 lỗi rồi đọc thông báo trong Console: (1) gõ sai tên biến sinhVein; (2) quên dấu phẩy giữa 2 phần tử mảng; (3) gọi hàm chưa định nghĩa. Ghi lại tên loại lỗi (ReferenceError, SyntaxError...) và cách bạn tìm ra dòng gây lỗi qua số dòng trong thông báo.',
        },
      ],
      checklist: [
        'Script nối đúng bằng defer, console.log xác nhận kết nối',
        'Đủ 3 hàm: tinhDiemTB, locSinhVienGioi, xepLoai chạy đúng kết quả',
        'Dùng được map/filter/reduce ít nhất mỗi loại 1 lần',
        'Toàn bộ dùng const/let, === , template literal — không dùng var hay +',
        'Ghi lại 3 loại lỗi đã cố ý gây ra và cách đọc thông báo lỗi',
      ],
    },
  },

  24: {
    theory: [
      {
        h: 'DOM: cầu nối giữa JavaScript và trang đang hiển thị',
        p: [
          'DOM (Document Object Model) là cây đối tượng trình duyệt dựng từ HTML — mỗi thẻ trở thành một node JavaScript truy cập và sửa được. document.querySelector("selector-css") trả về PHẦN TỬ ĐẦU TIÊN khớp (dùng cú pháp CSS selector quen thuộc: #id, .class, thẻ); document.querySelectorAll trả về NodeList (giống mảng) mọi phần tử khớp — dùng .forEach lặp qua.',
          'Đọc/sửa nội dung: .textContent (văn bản thuần, AN TOÀN) so với .innerHTML (chèn được thẻ HTML nhưng NGUY HIỂM nếu nội dung từ người dùng — mở đường cho tấn công XSS chèn script độc hại; chỉ dùng innerHTML với nội dung bạn kiểm soát). Sửa thuộc tính: .setAttribute("href", "..."); sửa class: .classList.add/remove/toggle("ten-class") — cách chuẩn để bật/tắt trạng thái giao diện bằng CSS đã viết sẵn thay vì sửa style trực tiếp.',
        ],
        code: `const tieuDe = document.querySelector("h1");
tieuDe.textContent = "Đã đổi bằng JavaScript!";

const cacCard = document.querySelectorAll(".card");
cacCard.forEach(card => card.classList.add("da-tai"));

const nut = document.querySelector("#nut-toggle");
nut.classList.toggle("dang-mo");`,
      },
      {
        h: 'Sự kiện: lắng nghe hành động người dùng',
        p: [
          'phanTu.addEventListener("loai-su-kien", hamXuLy) gắn một "người nghe" — khi sự kiện xảy ra, hàm chạy với tham số event chứa thông tin (event.target là phần tử gây ra sự kiện). Sự kiện thường gặp: click, submit (trên form — LUÔN gọi event.preventDefault() nếu muốn tự xử lý bằng JS thay vì để trình duyệt tải lại trang), input (gõ phím, đổi giá trị theo thời gian thực), change (đổi giá trị select/checkbox), keydown.',
          'Event delegation (ủy quyền sự kiện): thay vì gắn listener cho TỪNG item trong danh sách dài (tốn, và item thêm sau không tự có listener), gắn MỘT listener trên phần tử CHA, kiểm tra event.target bên trong để biết ai bị bấm — kỹ thuật chuẩn cho danh sách động.',
        ],
        code: `const form = document.querySelector("#form-dang-ky");
form.addEventListener("submit", (event) => {
  event.preventDefault();           // chặn tải lại trang
  const ten = document.querySelector("#ten").value;
  console.log("Đã đăng ký:", ten);
});

// Event delegation cho danh sách
document.querySelector(".danh-sach").addEventListener("click", (event) => {
  if (event.target.matches(".nut-xoa")) {
    event.target.closest("li").remove();
  }
});`,
      },
      {
        h: 'Tạo và chèn phần tử động — render danh sách bằng tay',
        p: [
          'document.createElement("li") tạo phần tử mới (chưa gắn vào trang); phanTuCha.appendChild(phanTuMoi) hoặc phanTuCha.append(...) chèn vào cuối; .remove() gỡ khỏi trang. Kết hợp map dữ liệu → chuỗi HTML → gán qua innerHTML là cách nhanh render danh sách khi dữ liệu đến từ mảng object (Ngày 23) — chính kỹ thuật này, khi làm bằng tay, cho thấy React (Ngày 28) giải quyết vấn đề gì tốt hơn.',
          'localStorage.setItem("khoa", "gia-tri") lưu dữ liệu bền vững TRONG TRÌNH DUYỆT (tồn tại qua lần tải lại, giới hạn ~5MB, chỉ lưu được CHUỖI nên object phải JSON.stringify() trước khi lưu và JSON.parse() khi đọc ra) — đây chính là cơ chế lưu tiến độ học tập của app khóa học này (khóa "webdesign2026-tiendo").',
        ],
        code: `const ds = document.querySelector("#danh-sach-mon");
ds.innerHTML = monHoc.map(m => \`
  <li class="\${m.daHoc ? 'da-hoc' : ''}">
    \${m.ten} — \${m.soTinChi} tín chỉ
  </li>
\`).join("");

// Lưu và đọc localStorage
localStorage.setItem("theme", JSON.stringify({ dark: true }));
const cauHinh = JSON.parse(localStorage.getItem("theme") ?? "{}");`,
        note: 'Không bao giờ đưa trực tiếp nội dung người dùng gõ vào innerHTML mà không xử lý — nếu chỉ hiển thị văn bản thuần, textContent luôn an toàn hơn.',
      },
    ],
    lab: {
      title: 'Lab 24: Danh sách việc cần làm (To-do) có lưu localStorage + nút dark mode thật',
      objective: 'To-do list thêm/xóa/đánh dấu hoàn thành, dữ liệu còn nguyên sau F5; nút chuyển sáng/tối hoạt động thật',
      time: '90 phút',
      prep: ['Site đã có biến CSS + [data-theme] từ Ngày 20', 'Kiến thức Lab 23'],
      steps: [
        {
          t: 'Khung HTML tối thiểu',
          mota: 'Trang moi.html riêng cho lab này: input#viec-moi + button#nut-them, ul#danh-sach-viec rỗng, và một nút#nut-doi-giao-dien trong header (dùng lại nút đã chuẩn bị CSS ở Ngày 21).',
        },
        {
          t: 'Thêm việc mới và render bằng map',
          code: `let dsViec = JSON.parse(localStorage.getItem("viec-can-lam") ?? "[]");

function luu() {
  localStorage.setItem("viec-can-lam", JSON.stringify(dsViec));
}
function ve() {
  const ul = document.querySelector("#danh-sach-viec");
  ul.innerHTML = dsViec.map((v, i) => \`
    <li class="\${v.xong ? 'xong' : ''}">
      <label><input type="checkbox" data-i="\${i}" \${v.xong ? 'checked' : ''}> \${v.ten}</label>
      <button data-xoa="\${i}" aria-label="Xóa việc">✕</button>
    </li>\`).join("");
}
ve();`,
          mota: 'Đặt dsViec là mảng object { ten, xong }. Hàm ve() render lại toàn bộ danh sách mỗi khi dữ liệu đổi — mẫu "dữ liệu là nguồn sự thật, HTML chỉ là phản chiếu" chính là tư duy React sẽ học chính thức ở Ngày 28.',
        },
        {
          t: 'Sự kiện thêm, tick hoàn thành, xóa (event delegation)',
          code: `document.querySelector("#nut-them").addEventListener("click", () => {
  const o = document.querySelector("#viec-moi");
  if (!o.value.trim()) return;
  dsViec.push({ ten: o.value.trim(), xong: false });
  o.value = "";
  luu(); ve();
});

document.querySelector("#danh-sach-viec").addEventListener("click", (e) => {
  if (e.target.matches("input[type=checkbox]")) {
    dsViec[e.target.dataset.i].xong = e.target.checked;
    luu(); ve();
  }
  if (e.target.matches("[data-xoa]")) {
    dsViec.splice(e.target.dataset.xoa, 1);
    luu(); ve();
  }
});`,
          mota: 'Một listener DUY NHẤT trên ul xử lý cả tick và xóa cho MỌI mục, kể cả mục thêm sau — đúng kỹ thuật event delegation.',
        },
        {
          t: 'Nút chuyển giao diện sáng/tối thật',
          code: `const nutTheme = document.querySelector("#nut-doi-giao-dien");
function apDungTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem("theme", mode);
}
apDungTheme(localStorage.getItem("theme") ?? "light");
nutTheme.addEventListener("click", () => {
  const hienTai = document.documentElement.getAttribute("data-theme");
  apDungTheme(hienTai === "dark" ? "light" : "dark");
});`,
          mota: 'Nối với CSS [data-theme] đã viết Ngày 20. Kiểm tra: bấm nút đổi giao diện, F5 lại trang — giao diện GIỮ NGUYÊN nhờ localStorage.',
        },
        {
          t: 'Kiểm thử toàn diện',
          mota: 'Thêm 5 việc, tick 2 việc, xóa 1 việc, F5 trang — toàn bộ trạng thái phải còn nguyên. Mở DevTools → Application → Local Storage xem 2 khóa dữ liệu đang lưu. Thử gõ input rỗng bấm Thêm — không được thêm dòng trống.',
        },
      ],
      checklist: [
        'Thêm/tick/xóa việc hoạt động, dùng event delegation cho tick và xóa',
        'Dữ liệu to-do và theme còn nguyên sau khi F5 (xác nhận qua Application tab)',
        'Nút dark/light đổi đúng giao diện đã thiết kế từ Ngày 20',
        'Không innerHTML trực tiếp nội dung gõ tay chưa qua kiểm soát nào khác ngoài hiển thị văn bản',
        'Input rỗng không tạo được việc trống',
      ],
    },
  },

  25: {
    theory: [
      {
        h: 'ES Modules: chia code lớn thành nhiều file có kỷ luật',
        p: [
          'Một file .js duy nhất phình to nhanh chóng và khó bảo trì. ES Modules cho phép chia nhỏ: export function/const/default trong file nguồn, import { ten } from "./file.js" (hoặc import ten from ... cho default export) ở nơi dùng. Trong HTML, script dùng module phải khai <script type="module" src="js/main.js"> — module TỰ ĐỘNG hoãn thực thi như defer, và mỗi file chỉ chạy MỘT LẦN dù import nhiều nơi.',
          'Lợi ích module: mỗi file MỘT trách nhiệm rõ ràng (data.js chứa dữ liệu, ui.js chứa hàm render, main.js kết nối), dễ tái sử dụng, dễ test riêng từng phần — chính cấu trúc mà app khóa học này đang dùng (src/data/index.js, src/components/...).',
        ],
        code: `// tinh-toan.js
export function tinhDiemTB(ds) {
  return ds.reduce((t, x) => t + x.diem, 0) / ds.length;
}
export const PHIEN_BAN = "1.0";

// main.js
import { tinhDiemTB, PHIEN_BAN } from "./tinh-toan.js";
console.log(PHIEN_BAN, tinhDiemTB(sinhVien));`,
      },
      {
        h: 'Bất đồng bộ: vì sao JavaScript "không đợi"',
        p: [
          'JavaScript chạy trên MỘT luồng (single-threaded): nếu một tác vụ chậm (gọi mạng, đợi 3 giây) chặn luồng, cả trang ĐỨNG HÌNH. Giải pháp là bất đồng bộ — tác vụ chậm chạy "nền", code khác vẫn tiếp tục, kết quả trả về qua callback/Promise khi xong.',
          'Promise là "lời hứa" về một giá trị SẼ CÓ trong tương lai, ở một trong ba trạng thái: pending (đang chờ), fulfilled (thành công), rejected (thất bại). async/await là cú pháp hiện đại giúp code bất đồng bộ ĐỌC như tuần tự: đánh dấu hàm async, dùng await trước lời gọi trả Promise để "tạm dừng" đúng hàm đó (không chặn toàn trang) tới khi có kết quả.',
          'Bắt lỗi bằng try/catch quanh await — bắt buộc với mọi lệnh gọi mạng vì lỗi rất dễ xảy ra (mất mạng, server lỗi, sai URL): thiếu try/catch, một request hỏng có thể làm cả hàm "chết lặng" không dấu vết.',
        ],
      },
      {
        h: 'fetch API: lấy dữ liệu thật từ Internet',
        p: [
          'fetch(url) gửi HTTP request (Ngày 1) và trả về Promise. Response chưa phải dữ liệu dùng ngay — gọi tiếp await response.json() để phân tích phần thân JSON thành object/mảng JavaScript. Luôn kiểm tra response.ok trước khi dùng dữ liệu, vì fetch chỉ reject khi lỗi MẠNG — lỗi 404/500 vẫn "thành công" ở tầng fetch nhưng dữ liệu không hợp lệ.',
          'JSON (JavaScript Object Notation) là định dạng trao đổi dữ liệu chuẩn của web hiện đại: cú pháp gần giống object JavaScript nhưng khóa luôn có nháy kép, không cho phép comment, không cho function. Hầu hết API công khai (thời tiết, tỷ giá, tin tức) trả JSON.',
        ],
        code: `async function layThoiTiet(lat, lon) {
  try {
    const url = \`https://api.open-meteo.com/v1/forecast?latitude=\${lat}&longitude=\${lon}&current_weather=true\`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Lỗi HTTP: " + res.status);
    const data = await res.json();
    return data.current_weather;
  } catch (loi) {
    console.error("Không lấy được thời tiết:", loi.message);
    return null;
  }
}`,
      },
      {
        h: 'Trạng thái loading/error/success — vòng đời một request',
        p: [
          'Giao diện chuyên nghiệp luôn xử lý ĐỦ 3 trạng thái của một request: LOADING (đang chờ — hiện skeleton/spinner đã học Ngày 19, vô hiệu hóa nút để tránh bấm nhiều lần), SUCCESS (hiện dữ liệu thật), ERROR (mất mạng, API lỗi — hiện thông báo THÂN THIỆN, không phải để trang trắng hoặc lỗi Console vô hình với người dùng).',
          'Đây là nền trực tiếp cho khái niệm loading/error state trong React (Ngày 28–29) — hiểu đúng ở JavaScript thuần giúp học React nhanh và sâu hơn nhiều so với học thẳng React trước.',
        ],
        note: 'Quy tắc vàng khi gọi API thật trong lớp học: luôn có try/catch, luôn xử lý cả trường hợp fetch "thành công" nhưng response.ok là false, và luôn cho người dùng biết KHI NÀO đang chờ.',
      },
    ],
    lab: {
      title: 'Lab 25: Widget thời tiết Đà Lạt bằng ES Modules + fetch thật (Open-Meteo)',
      objective: 'Widget gọi API thời tiết thật, xử lý đủ 3 trạng thái, code chia module rõ ràng',
      time: '90 phút',
      prep: ['Kiến thức Lab 23–24', 'Không cần API key (Open-Meteo miễn phí, không cần đăng ký)'],
      steps: [
        {
          t: 'Chia module: api.js, ui.js, main.js',
          code: `// js/api.js
const LAT = 11.94, LON = 108.44;   // tọa độ Đà Lạt

export async function layThoiTietDaLat() {
  const url = \`https://api.open-meteo.com/v1/forecast?latitude=\${LAT}&longitude=\${LON}&current_weather=true\`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Lỗi HTTP " + res.status);
  const data = await res.json();
  return data.current_weather;   // { temperature, windspeed, weathercode, ... }
}`,
          mota: 'Tạo 3 file trong js/. api.js CHỈ lo việc gọi mạng, không đụng DOM — tách trách nhiệm rõ ràng.',
        },
        {
          t: 'Hàm hiển thị 3 trạng thái',
          code: `// js/ui.js
export function hienLoading(hop) {
  hop.innerHTML = '<p class="khung-cho">Đang tải thời tiết...</p>';
}
export function hienLoi(hop, thongDiep) {
  hop.innerHTML = \`<p class="loi-thoi-tiet">⚠️ Không tải được: \${thongDiep}</p>\`;
}
export function hienThoiTiet(hop, tt) {
  hop.innerHTML = \`
    <p class="nhiet-do">\${tt.temperature}°C</p>
    <p>Tốc độ gió: \${tt.windspeed} km/h</p>
    <p><small>Cập nhật: \${new Date(tt.time).toLocaleString("vi-VN")}</small></p>\`;
}`,
        },
        {
          t: 'Kết nối trong main.js',
          code: `// js/main.js
import { layThoiTietDaLat } from "./api.js";
import { hienLoading, hienLoi, hienThoiTiet } from "./ui.js";

const hop = document.querySelector("#widget-thoi-tiet");

async function taiThoiTiet() {
  hienLoading(hop);
  try {
    const tt = await layThoiTietDaLat();
    hienThoiTiet(hop, tt);
  } catch (loi) {
    hienLoi(hop, loi.message);
  }
}
taiThoiTiet();
document.querySelector("#nut-tai-lai")?.addEventListener("click", taiThoiTiet);`,
          mota: 'Nối <script type="module" src="js/main.js" defer> trong HTML — CHỈ main.js cần khai trong HTML, api.js/ui.js được import ngầm.',
        },
        {
          t: 'Kiểm thử trạng thái LOADING và ERROR có chủ đích',
          mota: 'Loading: DevTools Network → Throttling "Slow 4G" → tải lại, quan sát khung chờ hiện đủ lâu để thấy. Error: tạm sửa URL sai chính tả (latitudde) → tải lại, xác nhận khung lỗi thân thiện hiện ra (không phải trang trắng, không phải chỉ lỗi trong Console). Sửa lại URL đúng.',
        },
        {
          t: 'Nút tải lại thủ công',
          mota: 'Thêm <button id="nut-tai-lai">Tải lại</button> cạnh widget — bấm gọi lại taiThoiTiet(), quan sát đúng chu trình loading → success lặp lại. Đây là nền trực tiếp cho nút "refetch" quen thuộc trong ứng dụng React thật.',
        },
      ],
      checklist: [
        'Chia đúng 3 module: api.js (gọi mạng), ui.js (hiển thị), main.js (kết nối) — dùng export/import chuẩn',
        'Toàn bộ gọi mạng bọc try/catch, kiểm tra response.ok',
        'Đủ 3 trạng thái hiển thị: loading, lỗi thân thiện, dữ liệu thật',
        'Minh chứng đã kiểm thử cả trạng thái chậm mạng và lỗi URL sai',
        'Nút tải lại hoạt động đúng, không load chồng chéo khi bấm nhiều lần liên tục',
      ],
    },
  },
}
