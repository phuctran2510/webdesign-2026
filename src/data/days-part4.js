// Phần IV — JavaScript (Chương 21–22 + JavaScript hiện đại 2026)
export default [
  {
    id: 23,
    title: 'Nhập môn JavaScript: biến, kiểu dữ liệu, điều khiển, hàm',
    chapters: 'Chương 21',
    goals: [
      'Khai báo biến với let/const, nắm các kiểu dữ liệu cơ bản',
      'Viết câu lệnh điều kiện if/else, vòng lặp for/while',
      'Định nghĩa và gọi hàm, phân biệt tham số và giá trị trả về',
    ],
    theory: [
      'JavaScript là tầng HÀNH VI của trang web: phản hồi sự kiện, thay đổi nội dung, giao tiếp server. Code đặt trong <script> hoặc file .js riêng — chuẩn 2026: <script src="main.js" defer> hoặc type="module".',
      'Khai báo biến: const (không gán lại — mặc định nên dùng), let (gán lại được); var là quá khứ, tránh dùng vì phạm vi lỏng lẻo.',
      'Kiểu dữ liệu: string ("chuỗi", template literal `Xin chào ${ten}`), number, boolean, null, undefined, object, array.',
      'Toán tử so sánh: dùng === / !== (so sánh nghiêm ngặt cả kiểu) thay vì == / != để tránh ép kiểu ngầm gây bug.',
      'Điều khiển luồng: if / else if / else; switch cho nhiều nhánh; toán tử ba ngôi điều_kiện ? a : b cho biểu thức ngắn.',
      'Vòng lặp: for cổ điển, while, for...of duyệt mảng (hiện đại, dễ đọc), và các phương thức mảng forEach/map/filter.',
      'Hàm: function ten(thamSo) { return ...; } và arrow function const ten = (x) => x * 2; hàm là "công dân hạng nhất" — gán được vào biến, truyền vào hàm khác.',
      'Console là bạn thân: console.log() để quan sát giá trị; DevTools tab Console chạy thử code trực tiếp.',
    ],
    lab: {
      title: 'Lab 23: Máy tính điểm học phần trong Console',
      steps: [
        'Tạo project với index.html + main.js (script defer); in "Xin chào lớp CTK49" ra console.',
        'Khai báo const tên sinh viên, let điểm quá trình / giữa kỳ / cuối kỳ; tính điểm tổng theo tỷ trọng 20-30-50.',
        'Viết hàm xepLoai(diem) trả về Giỏi/Khá/Trung bình/Yếu bằng if-else; thử với 4 giá trị.',
        'Dùng mảng điểm cả lớp, viết vòng for...of đếm số sinh viên đạt (>= 5).',
        'Refactor bằng filter + arrow function: const dat = dsDiem.filter(d => d >= 5).',
      ],
      code: `// main.js
const tenSV = "Nguyễn Văn A";
let qt = 8, gk = 7, ck = 6.5;
const tong = qt * 0.2 + gk * 0.3 + ck * 0.5;
console.log(\`\${tenSV}: \${tong.toFixed(2)} điểm\`);

function xepLoai(diem) {
  if (diem >= 8) return "Giỏi";
  else if (diem >= 6.5) return "Khá";
  else if (diem >= 5) return "Trung bình";
  return "Yếu";
}
console.log(xepLoai(tong));

const dsDiem = [9, 4.5, 7, 6, 3, 8.5];
const dat = dsDiem.filter(d => d >= 5);
console.log(\`Số SV đạt: \${dat.length}/\${dsDiem.length}\`);`,
    },
    quiz: [
      { q: 'Khai báo nào phù hợp cho giá trị KHÔNG gán lại?', o: ['var', 'let', 'const', 'static'], a: 2, e: 'const là mặc định nên dùng; chỉ chuyển sang let khi thật sự cần gán lại.' },
      { q: '"5" === 5 cho kết quả:', o: ['true', 'false', 'undefined', 'Lỗi cú pháp'], a: 1, e: '=== so sánh nghiêm ngặt cả kiểu: string khác number nên false.' },
      { q: 'Template literal dùng ký tự nào bao quanh chuỗi?', o: ['Nháy đơn', 'Nháy kép', 'Backtick (`)', 'Ngoặc vuông'], a: 2, e: 'Backtick cho phép nhúng biểu thức ${...} và xuống dòng.' },
      { q: 'Arrow function const f = x => x * 2 tương đương:', o: ['function f(x) { return x * 2; }', 'function f() { return x; }', 'const f = 2x', 'f(x) := x*2'], a: 0, e: 'Arrow một tham số, một biểu thức: bỏ ngoặc và return ngầm.' },
      { q: 'Phương thức mảng nào tạo mảng MỚI chứa phần tử thỏa điều kiện?', o: ['forEach', 'filter', 'push', 'sort'], a: 1, e: 'filter trả mảng mới gồm phần tử mà callback trả true.' },
    ],
  },
  {
    id: 24,
    title: 'JavaScript với DOM và sự kiện',
    chapters: 'Chương 22',
    goals: [
      'Truy vấn và thay đổi phần tử bằng querySelector, textContent, classList',
      'Bắt sự kiện với addEventListener: click, submit, input',
      'Xây tính năng tương tác thực tế: toggle menu, kiểm tra form, lọc danh sách',
    ],
    theory: [
      'DOM (Document Object Model): trình duyệt biến HTML thành cây đối tượng; JavaScript đọc/sửa cây này để trang "sống".',
      'Truy vấn: document.querySelector("#id / .class / thẻ") lấy phần tử đầu tiên; querySelectorAll lấy tất cả (NodeList, duyệt bằng for...of).',
      'Thay đổi nội dung: textContent (an toàn, chỉ chữ) vs innerHTML (chèn được thẻ — cẩn thận XSS khi dữ liệu từ người dùng).',
      'Thay đổi giao diện đúng cách: element.classList.add/remove/toggle("ten-class") — logic ở JS, hình thức vẫn ở CSS.',
      'Sự kiện: element.addEventListener("click", hamXuLy); đối tượng event mang thông tin (event.target, event.key); event.preventDefault() chặn hành vi mặc định (submit tải lại trang).',
      'Sự kiện form: submit trên form (không phải click trên nút), input/change trên ô nhập — nền tảng của validation tùy biến.',
      'Tạo phần tử động: document.createElement + append; đọc/ghi thuộc tính data-* qua element.dataset.',
      'Event delegation: gắn MỘT listener lên cha, dựa vào event.target xử lý con — hiệu quả với danh sách dài hoặc phần tử sinh động.',
    ],
    lab: {
      title: 'Lab 24: Trang landing "sống dậy": menu, dark mode, form, lọc',
      steps: [
        'Thêm nút hamburger: click toggle class .mo trên nav (CSS lo phần ẩn/hiện + transition).',
        'Nút chuyển dark mode: toggle class .dark trên html, lưu lựa chọn vào localStorage và đọc lại khi tải trang.',
        'Form đăng ký: bắt submit, preventDefault, kiểm tra email bằng regex, hiện thông báo lỗi ngay dưới ô nhập.',
        'Ô tìm kiếm lọc danh sách môn học theo từng ký tự gõ (sự kiện input + filter + render lại).',
        'Danh sách việc cần làm mini: thêm việc (createElement), xóa việc bằng event delegation trên ul.',
      ],
      code: `// Toggle menu + dark mode
document.querySelector(".hamburger")
  .addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("mo");
  });

const nutTheme = document.querySelector("#doi-theme");
nutTheme.addEventListener("click", () => {
  const dark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
});

// Kiểm tra form
document.querySelector("#form-dk").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value.trim();
  const loi = document.querySelector("#loi-email");
  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    loi.textContent = "Email không hợp lệ";
  } else {
    loi.textContent = "";
    alert("Đăng ký thành công!");
  }
});`,
    },
    quiz: [
      { q: 'querySelector(".tin") trả về gì?', o: ['Mọi phần tử class tin', 'Phần tử ĐẦU TIÊN khớp selector', 'Chuỗi HTML', 'true/false'], a: 1, e: 'Muốn tất cả thì dùng querySelectorAll.' },
      { q: 'Vì sao ưu tiên textContent hơn innerHTML với dữ liệu người dùng nhập?', o: ['Nhanh hơn', 'Tránh chèn mã độc (XSS) vì không diễn giải thẻ HTML', 'Ngắn hơn', 'Hỗ trợ Unicode'], a: 1, e: 'innerHTML diễn giải thẻ — dữ liệu người dùng chứa <script> sẽ nguy hiểm.' },
      { q: 'event.preventDefault() trong xử lý submit form dùng để:', o: ['Xóa form', 'Ngăn trình duyệt gửi form và tải lại trang', 'Gửi form 2 lần', 'Ẩn nút submit'], a: 1, e: 'Chặn hành vi mặc định để tự xử lý bằng JS.' },
      { q: 'classList.toggle("dark") làm gì?', o: ['Luôn thêm class', 'Luôn xóa class', 'Có thì xóa, chưa có thì thêm', 'Đổi tên class'], a: 2, e: 'Toggle bật/tắt class và trả về trạng thái sau khi đổi.' },
      { q: 'Event delegation là kỹ thuật:', o: ['Gắn listener lên từng phần tử con', 'Gắn một listener lên cha, phân xử qua event.target', 'Xóa mọi sự kiện', 'Chỉ dùng cho form'], a: 1, e: 'Một listener phục vụ cả danh sách, kể cả phần tử thêm sau này.' },
    ],
  },
  {
    id: 25,
    title: 'JavaScript hiện đại: modules, fetch, async/await, JSON',
    chapters: 'Mở rộng 2026 (nối tiếp Chương 22)',
    goals: [
      'Tách code thành ES modules với import/export',
      'Gọi API bằng fetch với async/await và xử lý lỗi',
      'Làm việc với JSON và render dữ liệu động ra trang',
    ],
    theory: [
      'ES Modules: mỗi file một module, export const/function từ file này, import { ... } from "./file.js" ở file khác; kích hoạt bằng <script type="module"> — hết thời một file JS nghìn dòng.',
      'JSON (JavaScript Object Notation) là định dạng trao đổi dữ liệu chuẩn của web: JSON.parse(chuỗi) → object, JSON.stringify(object) → chuỗi.',
      'fetch(url) gọi HTTP trả về Promise; chuỗi xử lý: response → response.json() → dữ liệu. Kiểm tra response.ok trước khi dùng.',
      'async/await làm code bất đồng bộ đọc như tuần tự: const res = await fetch(url); bọc trong try/catch để bắt lỗi mạng.',
      'Trạng thái UI chuẩn khi tải dữ liệu: loading (skeleton/spinner) → thành công (render) → lỗi (thông báo + nút thử lại).',
      'Render danh sách từ dữ liệu: map dữ liệu thành chuỗi HTML hoặc createElement — chính là tư duy sẽ gặp lại trong React.',
      'localStorage lưu chuỗi bền vững phía trình duyệt (kết hợp JSON.stringify/parse cho object) — nhớ dữ liệu giữa các phiên.',
      'API công khai để luyện tập: JSONPlaceholder, restcountries.com, open-meteo.com (thời tiết, không cần key).',
    ],
    lab: {
      title: 'Lab 25: App thời tiết Đà Lạt bằng fetch + Open-Meteo',
      steps: [
        'Tách dự án thành modules: api.js (hàm gọi API), ui.js (hàm render), main.js (điều phối).',
        'Gọi Open-Meteo với tọa độ Đà Lạt (11.94, 108.44) lấy nhiệt độ hiện tại và dự báo 5 ngày.',
        'Hiện trạng thái loading khi chờ, render kết quả thành các card ngày, try/catch hiện lỗi + nút thử lại.',
        'Cho phép đổi thành phố qua ô nhập (geocoding API của Open-Meteo), lưu thành phố gần nhất vào localStorage.',
        'Deploy bản build lên GitHub Pages để bạn cùng lớp dùng thử bằng điện thoại.',
      ],
      code: `// api.js
export async function layThoiTiet(lat = 11.94, lon = 108.44) {
  const url = \`https://api.open-meteo.com/v1/forecast?latitude=\${lat}&longitude=\${lon}&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto\`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Lỗi mạng: " + res.status);
  return res.json();
}

// main.js
import { layThoiTiet } from "./api.js";

async function khoiDong() {
  const kq = document.querySelector("#ket-qua");
  kq.textContent = "Đang tải...";
  try {
    const data = await layThoiTiet();
    kq.textContent =
      \`Đà Lạt hiện tại: \${data.current.temperature_2m}°C\`;
  } catch (err) {
    kq.textContent = "Không tải được dữ liệu. Thử lại sau.";
    console.error(err);
  }
}
khoiDong();`,
    },
    quiz: [
      { q: 'Kích hoạt ES modules trong trang HTML bằng cách:', o: ['<script async>', '<script type="module">', '<script defer>', '<module>'], a: 1, e: 'type="module" cho phép import/export và tự defer.' },
      { q: 'JSON.parse() dùng để:', o: ['Object → chuỗi', 'Chuỗi JSON → object JavaScript', 'Gửi request', 'Nén dữ liệu'], a: 1, e: 'parse đọc chuỗi thành object; stringify là chiều ngược lại.' },
      { q: 'await chỉ dùng được ở đâu?', o: ['Mọi nơi', 'Trong hàm async (hoặc top-level module)', 'Chỉ trong vòng lặp', 'Trong HTML'], a: 1, e: 'await cần ngữ cảnh async; module hiện đại cho phép top-level await.' },
      { q: 'Vì sao cần kiểm tra response.ok sau fetch?', o: ['fetch không bao giờ lỗi', 'fetch không reject với mã 404/500 — phải tự kiểm tra trạng thái HTTP', 'Để chạy nhanh hơn', 'Bắt buộc cú pháp'], a: 1, e: 'fetch chỉ reject khi lỗi mạng; lỗi HTTP vẫn resolve nên phải kiểm tra ok/status.' },
      { q: 'Lưu object vào localStorage đúng cách:', o: ['localStorage.setItem("k", obj)', 'localStorage.setItem("k", JSON.stringify(obj))', 'localStorage.push(obj)', 'localStorage = obj'], a: 1, e: 'localStorage chỉ lưu chuỗi — phải stringify khi ghi, parse khi đọc.' },
    ],
  },
]
