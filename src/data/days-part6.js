// Phần VI — React & Triển khai 2026 (mở rộng ngoài giáo trình gốc)
export default [
  {
    id: 28,
    title: 'React cơ bản: component, props, state',
    chapters: 'Mở rộng 2026',
    goals: [
      'Khởi tạo dự án React bằng Vite và hiểu cấu trúc',
      'Viết function component với JSX, truyền dữ liệu qua props',
      'Quản lý trạng thái bằng useState và render danh sách/điều kiện',
    ],
    theory: [
      'React là thư viện UI theo COMPONENT: giao diện = hàm của dữ liệu. Thay vì tự sửa DOM như Ngày 24, ta khai báo "trạng thái này thì giao diện trông thế này" — React lo phần cập nhật.',
      'Khởi tạo: npm create vite@latest ten-app -- --template react; component là hàm trả về JSX, tên viết Hoa, mỗi file một component.',
      'JSX = HTML trong JavaScript với vài khác biệt: className thay class, htmlFor thay for, {} nhúng biểu thức JS, thẻ luôn phải đóng.',
      'Props là "tham số" của component — dữ liệu chảy MỘT chiều từ cha xuống con: <TheMon ten="HTML" diem={9} />; con đọc qua destructuring ({ ten, diem }).',
      'State là dữ liệu nội bộ có thể đổi: const [dem, setDem] = useState(0); GỌI setDem mới khiến React render lại — gán trực tiếp không có tác dụng.',
      'Render danh sách: mang.map(item => <Card key={item.id} {...item}/>) — key ổn định giúp React so khớp hiệu quả; render điều kiện bằng && hoặc ba ngôi.',
      'Sự kiện: onClick={hamXuLy} (truyền HÀM, không gọi hàm); form input theo pattern controlled component: value + onChange.',
      'Tư duy chia component: nhìn thiết kế → khoanh vùng các khối lặp lại → mỗi khối một component nhận props — chính là cách app khóa học này được xây.',
    ],
    lab: {
      title: 'Lab 28: App Flashcard ôn thi bằng React',
      steps: [
        'Tạo dự án React Vite; dọn file mẫu, dựng App > BoThe > The (3 tầng component).',
        'Dữ liệu 10 câu hỏi HTML/CSS đặt trong mảng object; render bằng map với key.',
        'Component The có state lat (useState boolean): click để lật mặt câu hỏi/đáp án (dùng lại CSS 3D của Lab 19).',
        'Thêm bộ đếm "đã thuộc x/10": state ở App, truyền hàm đánh dấu xuống qua props (lifting state up).',
        'Nút lọc "Tất cả / Chưa thuộc" bằng render điều kiện + filter.',
      ],
      code: `import { useState } from "react";

function The({ cauHoi, dapAn, daThuoc, onThuoc }) {
  const [lat, setLat] = useState(false);
  return (
    <div className={"the" + (lat ? " lat" : "")}
         onClick={() => setLat(!lat)}>
      <p>{lat ? dapAn : cauHoi}</p>
      {lat && !daThuoc && (
        <button onClick={(e) => { e.stopPropagation(); onThuoc(); }}>
          Đã thuộc ✓
        </button>
      )}
    </div>
  );
}

export default function App() {
  const [ds, setDs] = useState(DU_LIEU); // mảng {id, cauHoi, dapAn, daThuoc}
  const danhDau = (id) =>
    setDs(ds.map(t => t.id === id ? { ...t, daThuoc: true } : t));

  return (
    <main>
      <h1>Flashcard ôn thi ({ds.filter(t => t.daThuoc).length}/{ds.length})</h1>
      <div className="luoi">
        {ds.map(t => (
          <The key={t.id} {...t} onThuoc={() => danhDau(t.id)} />
        ))}
      </div>
    </main>
  );
}`,
    },
    quiz: [
      { q: 'Trong JSX, thuộc tính class của HTML viết thành:', o: ['class', 'className', 'cssClass', 'style'], a: 1, e: 'class là từ khóa của JavaScript nên JSX dùng className.' },
      { q: 'Cách ĐÚNG để cập nhật state:', o: ['dem = dem + 1', 'setDem(dem + 1)', 'this.dem++', 'useState(dem + 1)'], a: 1, e: 'Chỉ hàm setter mới báo React render lại; gán trực tiếp bị bỏ qua.' },
      { q: 'Props trong React có tính chất:', o: ['Con sửa được thoải mái', 'Chỉ đọc, dữ liệu chảy một chiều từ cha xuống', 'Tự đồng bộ hai chiều', 'Chỉ nhận chuỗi'], a: 1, e: 'Muốn con "đổi" dữ liệu của cha thì cha truyền xuống một hàm callback.' },
      { q: 'Khi render danh sách, key nên là:', o: ['Chỉ số index của map', 'Giá trị định danh ổn định (id)', 'Math.random()', 'Không cần key'], a: 1, e: 'Index gây bug khi thêm/xóa/sắp xếp; random phá cơ chế so khớp.' },
      { q: 'onClick={xuLy()} (có ngoặc gọi hàm) gây ra vấn đề gì?', o: ['Không có vấn đề', 'Hàm chạy ngay khi render thay vì khi click', 'Chạy hai lần', 'Lỗi cú pháp'], a: 1, e: 'Phải truyền tham chiếu hàm: onClick={xuLy} hoặc onClick={() => xuLy(x)}.' },
    ],
  },
  {
    id: 29,
    title: 'Triển khai chuyên nghiệp: GitHub Pages, Vercel, CI/CD',
    chapters: 'Mở rộng 2026',
    goals: [
      'Build dự án Vite/React và hiểu nội dung thư mục dist',
      'Deploy lên GitHub Pages bằng GitHub Actions và lên Vercel',
      'Thiết lập quy trình CI/CD: push là tự động build + deploy',
    ],
    theory: [
      'npm run build biên dịch dự án thành static files trong dist/: HTML + JS/CSS đã minify, tree-shake, hash tên file (cache lâu dài an toàn).',
      'GitHub Pages phục vụ static site miễn phí tại username.github.io/ten-repo. Lưu ý SPA: cần base đường dẫn đúng trong vite.config (hoặc base "./" + HashRouter) vì site nằm trong thư mục con.',
      'Hai cách deploy Pages: thủ công bằng package gh-pages (npm run deploy đẩy dist lên nhánh gh-pages), hoặc chuyên nghiệp bằng GitHub Actions — file YAML mô tả: checkout → cài Node → npm ci → build → upload → deploy.',
      'CI/CD: Continuous Integration (tự build + test mỗi lần push), Continuous Deployment (tự phát hành khi pass). Actions của khóa học này chạy đúng quy trình đó.',
      'Vercel: kết nối repo GitHub → nhận diện Vite tự động → mỗi push lên main là một production deploy, mỗi Pull Request có PREVIEW URL riêng — quy trình review hiện đại.',
      'Khác biệt: Pages thuần static, đường dẫn con; Vercel có CDN toàn cầu, domain riêng dễ, serverless functions, analytics — dự án thật 2026 thường chọn Vercel/Netlify, Pages hợp cho tài liệu/demo.',
      'Biến môi trường: file .env (VITE_ prefix mới lộ ra client), khai báo trên dashboard Vercel — KHÔNG commit secret vào Git.',
      'Sau deploy luôn kiểm tra: đường dẫn asset, routing khi F5 trang con (SPA fallback), Lighthouse trên URL thật, thử trên điện thoại.',
    ],
    lab: {
      title: 'Lab 29: Deploy app Flashcard lên CẢ GitHub Pages và Vercel',
      steps: [
        'Sửa vite.config.js base "./" (hoặc "/flashcard/"), build và kiểm tra local bằng npm run preview.',
        'Tạo file .github/workflows/deploy.yml (dùng mẫu của khóa học), bật Pages nguồn "GitHub Actions", push và xem tab Actions chạy.',
        'Đăng nhập vercel.com bằng GitHub, Import repo flashcard, giữ mặc định, Deploy — ghi lại URL.',
        'Tạo branch sửa màu chủ đạo, mở Pull Request, xem Vercel comment Preview URL ngay trong PR.',
        'Chạy Lighthouse trên cả hai URL production; điền bảng so sánh Pages vs Vercel (tốc độ, quy trình, tính năng).',
      ],
      code: `# Cách 1 — gh-pages thủ công
npm install -D gh-pages
# package.json: "deploy": "npm run build && gh-pages -d dist"
npm run deploy
# → Settings ▸ Pages ▸ nhánh gh-pages

# Cách 2 — GitHub Actions (khuyến nghị)
# .github/workflows/deploy.yml: checkout → setup-node
# → npm ci → npm run build → upload dist → deploy-pages
git push origin main   # push là tự deploy

# Vercel
# vercel.com → Add New Project → Import repo
# Framework: Vite (tự nhận) → Deploy
# Mỗi PR = 1 Preview URL, merge = production`,
    },
    quiz: [
      { q: 'Thư mục dist/ sau npm run build chứa:', o: ['Source code gốc', 'Static files đã tối ưu (minify, hash) sẵn sàng phục vụ', 'node_modules', 'File cấu hình Git'], a: 1, e: 'dist là sản phẩm cuối để đưa lên server/CDN.' },
      { q: 'SPA deploy lên GitHub Pages hay gặp lỗi 404 asset vì:', o: ['Pages chặn JS', 'Site nằm ở /ten-repo/ nhưng base vẫn trỏ gốc /', 'File quá lớn', 'Thiếu index.html'], a: 1, e: 'Phải chỉnh base trong vite.config theo tên repo (hoặc dùng "./" + HashRouter).' },
      { q: 'Preview Deployment của Vercel là:', o: ['Bản nháp trên máy local', 'URL riêng tự sinh cho mỗi Pull Request để review', 'Bản trả phí', 'Ảnh chụp màn hình'], a: 1, e: 'Reviewer bấm xem bản chạy thật của PR trước khi merge.' },
      { q: 'CI trong CI/CD nghĩa là:', o: ['Code Inspection', 'Tự động build + test mỗi lần đẩy code', 'Cài đặt thủ công', 'Chỉ chạy cuối dự án'], a: 1, e: 'Continuous Integration phát hiện lỗi sớm ngay khi tích hợp code.' },
      { q: 'Biến môi trường chứa secret nên:', o: ['Commit vào repo cho tiện', 'Khai trên dashboard nền tảng deploy, không đưa vào Git', 'Viết thẳng vào code', 'Gửi qua email nhóm'], a: 1, e: 'Secret trong Git công khai là lỗ hổng bảo mật kinh điển.' },
    ],
  },
  {
    id: 30,
    title: 'Đồ án tổng kết (Capstone): Website thực chiến 2026',
    chapters: 'Tổng hợp toàn khóa',
    goals: [
      'Vận dụng toàn bộ 29 ngày vào một sản phẩm hoàn chỉnh, có thật, deploy công khai',
      'Thực hành quy trình chuyên nghiệp: đặc tả → thiết kế → Git branch → CI/CD → nghiệm thu',
      'Thuyết trình và phản biện sản phẩm như một buổi demo với khách hàng',
    ],
    theory: [
      'Đề bài (chọn 1): (A) Website khoa/bộ môn phiên bản 2026; (B) Cổng thông tin khóa học có quiz tương tác (như chính app này); (C) Portfolio cá nhân + blog; (D) Landing page sản phẩm khởi nghiệp sinh viên. Mọi đề đều phải responsive, accessibility ≥ 95, deploy cả GitHub Pages lẫn Vercel.',
      'Yêu cầu kỹ thuật bắt buộc: HTML ngữ nghĩa (Ngày 3–10) · design token + dark mode (Ngày 20) · Grid/Flexbox (16–17) · responsive mobile-first + container query (18) · animation có prefers-reduced-motion (19) · ảnh AVIF/WebP + SVG icon system (26–27) · JavaScript tương tác hoặc React (23–28) · CI/CD tự động (29).',
      'Quy trình 5 giai đoạn trong tuần đồ án: (1) đặc tả + site map + wireframe; (2) design token + dựng khung; (3) hoàn thiện nội dung & tương tác; (4) tối ưu (Lighthouse, ảnh, a11y); (5) deploy + viết README + slide demo.',
      'Làm việc như team thật: mỗi tính năng một branch, mở Pull Request tự review theo checklist, commit message rõ ràng — lịch sử Git là một phần điểm số.',
      'README chuẩn: giới thiệu, ảnh chụp màn hình, link demo (2 nền tảng), công nghệ, hướng dẫn chạy local, điểm Lighthouse, những gì học được.',
      'Rubric chấm 100 điểm: Chức năng & nội dung 25 · Chất lượng code & Git 20 · Responsive & UI 20 · Accessibility & hiệu năng 20 · Deploy & tài liệu 10 · Thuyết trình 5.',
      'Dùng AI có trách nhiệm: được phép hỗ trợ, nhưng phải hiểu và giải thích được mọi dòng code khi phản biện — không giải thích được coi như không phải của mình.',
    ],
    lab: {
      title: 'Capstone: Xây dựng, deploy và bảo vệ sản phẩm',
      steps: [
        'Ngày 1–2: viết đặc tả 1 trang (mục tiêu, đối tượng, site map 5+ trang/section, wireframe), tạo repo + bật Actions + kết nối Vercel ngay từ commit đầu.',
        'Ngày 3–4: dựng design token, layout tổng bằng Grid, từng section bằng Flexbox; mỗi section một branch + PR.',
        'Ngày 5: tương tác JavaScript/React (menu, dark mode, form validation, quiz hoặc lọc dữ liệu, fetch một API thật).',
        'Ngày 6: tối ưu — ảnh AVIF/WebP + lazy, icon SVG sprite, Lighthouse 4 mục ≥ 90 (chụp minh chứng), kiểm tra bàn phím + trình đọc màn hình.',
        'Ngày 7: hoàn thiện README + slide 5 phút; demo trực tiếp trên URL production, trả lời phản biện về mọi quyết định kỹ thuật.',
      ],
      code: `# Cấu trúc nộp bài chuẩn
ten-do-an/
├── README.md            # giới thiệu + link demo + Lighthouse
├── docs/
│   ├── dac-ta.md        # đặc tả 1 trang
│   ├── wireframe.png
│   └── lighthouse.png   # minh chứng ≥ 90
├── .github/workflows/deploy.yml
├── src/ hoặc css/ js/ images/
└── index.html

# Checklist trước khi bấm "Nộp"
✓ 2 link demo sống (Pages + Vercel)
✓ Lighthouse ≥ 90 cả 4 mục, a11y ≥ 95
✓ Lịch sử Git ≥ 15 commit ý nghĩa, ≥ 4 PR
✓ README đầy đủ ảnh chụp màn hình
✓ Giải thích được 100% code của mình`,
    },
    quiz: [
      { q: 'Theo quy trình đồ án, việc nào làm SỚM NHẤT?', o: ['Viết animation', 'Kết nối CI/CD ngay từ commit đầu', 'Tối ưu ảnh', 'Viết README'], a: 1, e: 'Deploy sớm giúp phát hiện lỗi môi trường sớm và luôn có bản demo sống.' },
      { q: 'Lịch sử Git được chấm điểm nhằm đánh giá:', o: ['Số dòng code', 'Quá trình làm việc thật và kỹ năng quy trình', 'Tốc độ gõ phím', 'Thời gian online'], a: 1, e: 'Commit/PR phản ánh tiến trình, tư duy chia việc và tính trung thực.' },
      { q: 'Tiêu chí accessibility của đồ án yêu cầu Lighthouse Accessibility:', o: ['≥ 50', '≥ 70', '≥ 95', 'Không yêu cầu'], a: 2, e: 'A11y là trọng tâm xuyên suốt khóa học nên chuẩn cao hơn các mục khác.' },
      { q: 'Quan điểm đúng về dùng AI trong đồ án:', o: ['Cấm tuyệt đối', 'Dùng thoải mái không cần hiểu', 'Được hỗ trợ nhưng phải hiểu và bảo vệ được mọi dòng code', 'Chỉ dùng cho phần CSS'], a: 2, e: 'AI là công cụ; năng lực được đánh giá qua khả năng giải thích và phản biện.' },
      { q: 'README của đồ án KHÔNG bắt buộc có mục nào?', o: ['Link demo', 'Ảnh chụp màn hình', 'Mật khẩu tài khoản deploy', 'Hướng dẫn chạy local'], a: 2, e: 'Không bao giờ công khai thông tin đăng nhập/secret trong repo.' },
    ],
  },
]
