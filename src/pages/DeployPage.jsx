const NEN_TANG = [
  {
    ten: 'GitHub Pages',
    mau: '#24292f',
    url: 'username.github.io/ten-repo',
    diem: 'Miễn phí vĩnh viễn, gắn liền repo, phù hợp bài tập & tài liệu môn học.',
    cach: [
      {
        t: 'Cách A — Kéo thả cho site tĩnh thuần (HTML/CSS/JS, không cần build)',
        code: `1. Tạo repo mới trên github.com (Public), tick "Add a README"
2. Vào repo → Add file → Upload files → kéo thả toàn bộ file
   (index.html phải nằm ở gốc repo)
3. Settings → Pages → Source: "Deploy from a branch"
   → Branch: main / (root) → Save
4. Chờ 1–2 phút → site chạy tại:
   https://<username>.github.io/<ten-repo>/`,
      },
      {
        t: 'Cách B — Dự án Vite/React bằng package gh-pages (thủ công)',
        code: `npm install -D gh-pages

# package.json thêm script:
#   "deploy": "npm run build && gh-pages -d dist"
# vite.config.js:  base: './'   (hoặc '/ten-repo/')

npm run deploy        # build + đẩy dist/ lên nhánh gh-pages
# Settings → Pages → Branch: gh-pages / (root)`,
      },
      {
        t: 'Cách C — GitHub Actions (chuyên nghiệp, tự động khi push) ⭐',
        code: `# Repo khóa học này đã kèm sẵn .github/workflows/deploy.yml
# Chỉ cần:
git push origin main
# rồi bật: Settings → Pages → Source: "GitHub Actions"
# Mỗi lần push = tự build + deploy. Xem log ở tab Actions.`,
      },
    ],
    luuY: 'SPA (React Router) đặt base "./" + HashRouter, hoặc base "/ten-repo/" — nếu không sẽ lỗi 404 khi tải asset hoặc khi F5 ở trang con.',
  },
  {
    ten: 'Vercel',
    mau: '#000000',
    url: 'ten-du-an.vercel.app',
    diem: 'CDN toàn cầu cực nhanh, mỗi Pull Request có Preview URL riêng — chuẩn quy trình 2026.',
    cach: [
      {
        t: 'Deploy bằng cách kết nối GitHub (khuyến nghị)',
        code: `1. vercel.com → Sign up bằng tài khoản GitHub
2. Add New… → Project → Import repo của bạn
3. Vercel tự nhận framework (Vite/React/Next…) → bấm Deploy
4. Nhận URL https://<ten>.vercel.app

Từ nay:
• push lên main  → deploy production tự động
• mở Pull Request → có Preview URL riêng để review`,
      },
      {
        t: 'Deploy bằng dòng lệnh (không cần push GitHub)',
        code: `npm i -g vercel
vercel            # đăng nhập + deploy bản preview
vercel --prod     # deploy production`,
      },
    ],
    luuY: 'SPA trên Vercel tự có fallback về index.html nên BrowserRouter chạy bình thường. Biến môi trường khai ở Project Settings → Environment Variables (không commit .env).',
  },
  {
    ten: 'Netlify',
    mau: '#0e7d75',
    url: 'ten-du-an.netlify.app',
    diem: 'Nổi tiếng với "Drop" — kéo thả thư mục là có site trong 10 giây, hợp demo nhanh cho sinh viên.',
    cach: [
      {
        t: 'Cách A — Kéo thả (nhanh nhất mọi nền tảng)',
        code: `1. Chạy npm run build (nếu là dự án Vite) → có thư mục dist/
   (site tĩnh thuần thì bỏ qua bước này)
2. Vào app.netlify.com/drop
3. Kéo thả thư mục dist/ (hoặc thư mục site) vào trang
4. Xong! Nhận URL https://<ten-ngau-nhien>.netlify.app
   (đổi tên đẹp hơn tại Site settings → Change site name)`,
      },
      {
        t: 'Cách B — Kết nối GitHub (tự động như Vercel)',
        code: `1. Add new site → Import an existing project → GitHub
2. Chọn repo → Build command: npm run build
   → Publish directory: dist → Deploy
3. SPA cần file public/_redirects với 1 dòng:
   /*  /index.html  200`,
      },
    ],
    luuY: 'Gói free 100GB băng thông/tháng — quá đủ cho lớp học. Form tĩnh có thể dùng Netlify Forms không cần backend.',
  },
  {
    ten: 'Cloudflare Pages',
    mau: '#f6821f',
    url: 'ten-du-an.pages.dev',
    diem: 'Băng thông KHÔNG giới hạn ở gói free, mạng CDN lớn nhất thế giới, rất nhanh ở Việt Nam.',
    cach: [
      {
        t: 'Kết nối GitHub',
        code: `1. dash.cloudflare.com → Workers & Pages → Create → Pages
2. Connect to Git → chọn repo
3. Framework preset: Vite (tự điền build command + output dist)
4. Save and Deploy → nhận https://<ten>.pages.dev
• Mỗi push = deploy mới; mỗi branch có preview riêng`,
      },
      {
        t: 'Upload trực tiếp (không cần Git)',
        code: `# Cách 1: giao diện web — Create → Pages → Upload assets
#          kéo thả thư mục dist/
# Cách 2: dòng lệnh
npm i -g wrangler
wrangler pages deploy dist`,
      },
    ],
    luuY: 'SPA tự fallback index.html, không cần cấu hình thêm. Giới hạn 500 lần build/tháng (thoải mái).',
  },
  {
    ten: 'Surge.sh',
    mau: '#7c3aed',
    url: 'ten-tuy-chon.surge.sh',
    diem: 'Deploy bằng đúng MỘT lệnh trong terminal — nhẹ nhàng nhất cho bài tập hằng ngày.',
    cach: [
      {
        t: 'Deploy 30 giây',
        code: `npm i -g surge
cd dist              # hoặc thư mục site tĩnh của bạn
surge
# Lần đầu: nhập email + mật khẩu để tạo tài khoản
# Enter để chấp nhận domain ngẫu nhiên,
# hoặc gõ domain tự chọn: ten-cua-ban.surge.sh

# SPA: copy index.html thành 200.html để fallback
cp index.html 200.html && surge`,
      },
    ],
    luuY: 'Không có giao diện web quản lý — mọi thứ qua CLI. Gỡ site: surge teardown ten.surge.sh.',
  },
]

export default function DeployPage() {
  return (
    <div>
      <section className="hero" style={{ '--hero-2': '#0f2e22' }}>
        <p className="ma">🚀 Hướng dẫn thực chiến · Ngày 29 mở rộng</p>
        <h1>Triển khai demo lên hosting miễn phí</h1>
        <p className="phu">5 nền tảng · từ kéo-thả 10 giây đến CI/CD tự động</p>
        <p className="mo-ta">
          Mọi bài lab và project trong khóa học đều nên có URL công khai để nộp bài và chia sẻ.
          Dưới đây là hướng dẫn từng bước cho 5 nền tảng free phổ biến nhất năm 2026 — chọn theo nhu cầu:
          demo nhanh dùng Netlify Drop/Surge, bài tập môn học dùng GitHub Pages, dự án nghiêm túc dùng Vercel/Cloudflare.
        </p>
        <div className="chips">
          {NEN_TANG.map((n) => <span className="chip" key={n.ten}>{n.ten}</span>)}
        </div>
      </section>

      <div className="khoi">
        <p className="tieu-de">Bảng so sánh nhanh</p>
        <div style={{ overflowX: 'auto' }}>
          <table className="bang">
            <thead>
              <tr>
                <th scope="col">Nền tảng</th>
                <th scope="col">URL mặc định</th>
                <th scope="col">Cách nhanh nhất</th>
                <th scope="col">Tự động khi push Git</th>
                <th scope="col">Phù hợp nhất cho</th>
              </tr>
            </thead>
            <tbody>
              <tr><th scope="row">GitHub Pages</th><td>username.github.io/repo</td><td>Upload file lên repo</td><td>✅ (Actions)</td><td>Bài tập, tài liệu môn học</td></tr>
              <tr><th scope="row">Vercel</th><td>ten.vercel.app</td><td>Import repo (2 phút)</td><td>✅ + Preview mỗi PR</td><td>Dự án React/SPA nghiêm túc</td></tr>
              <tr><th scope="row">Netlify</th><td>ten.netlify.app</td><td>Kéo thả thư mục (10 giây)</td><td>✅</td><td>Demo nhanh, form tĩnh</td></tr>
              <tr><th scope="row">Cloudflare Pages</th><td>ten.pages.dev</td><td>Import repo / upload</td><td>✅</td><td>Cần tốc độ + băng thông không giới hạn</td></tr>
              <tr><th scope="row">Surge.sh</th><td>ten.surge.sh</td><td>1 lệnh CLI</td><td>❌</td><td>Nộp bài lab hằng ngày</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {NEN_TANG.map((n, idx) => (
        <div className="khoi" key={n.ten} style={{ '--pc': n.mau, borderTop: '4px solid ' + n.mau }}>
          <h2>{idx + 1}. {n.ten} <span style={{ fontFamily: 'var(--f-mono)', fontSize: '.72rem', color: 'var(--muc-mo)', fontWeight: 400 }}>· {n.url}</span></h2>
          <p style={{ fontSize: '.9rem', margin: '0 0 14px' }}>{n.diem}</p>
          {n.cach.map((c, i) => (
            <section className="lt-sec" key={i} style={{ '--pc': n.mau }}>
              <h3>{c.t}</h3>
              <pre className="code"><code>{c.code}</code></pre>
            </section>
          ))}
          <p className="ghi-chu">{n.luuY}</p>
        </div>
      ))}

      <div className="khoi">
        <h2>Lỗi thường gặp & cách xử lý</h2>
        <div style={{ overflowX: 'auto' }}>
          <table className="bang">
            <thead>
              <tr><th scope="col">Triệu chứng</th><th scope="col">Nguyên nhân</th><th scope="col">Cách sửa</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Trang trắng trên GitHub Pages, Console báo 404 file .js/.css</td>
                <td>base của Vite vẫn là "/" trong khi site nằm ở /ten-repo/</td>
                <td>vite.config.js: base: './' (hoặc '/ten-repo/') rồi build lại</td>
              </tr>
              <tr>
                <td>F5 ở trang con của SPA bị 404</td>
                <td>Server không biết route phía client</td>
                <td>Pages: dùng HashRouter · Netlify: file _redirects · Surge: 200.html · Vercel/Cloudflare: tự xử lý</td>
              </tr>
              <tr>
                <td>Ảnh hiện local nhưng mất khi deploy</td>
                <td>Sai hoa/thường trong tên file (Linux phân biệt), hoặc đường dẫn tuyệt đối D:\...</td>
                <td>Đặt tên file chữ thường, dùng đường dẫn tương đối, để ảnh trong public/ hoặc import qua src/</td>
              </tr>
              <tr>
                <td>API key lộ trên GitHub</td>
                <td>Commit file .env</td>
                <td>Thêm .env vào .gitignore, khai báo biến trên dashboard nền tảng, đổi key mới ngay</td>
              </tr>
              <tr>
                <td>Push xong nhưng site không đổi</td>
                <td>Cache trình duyệt hoặc build cũ</td>
                <td>Ctrl+Shift+R; kiểm tra tab Actions/Deployments xem build mới chạy chưa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="khoi">
        <h2>✔ Checklist trước khi nộp link demo</h2>
        <ul className="checklist">
          <li>Mở URL ở chế độ ẩn danh (không cache, không đăng nhập) — mọi trang đều hoạt động</li>
          <li>F5 tại từng trang con — không lỗi 404</li>
          <li>Mở bằng điện thoại thật — responsive đúng</li>
          <li>DevTools Console không có lỗi đỏ; Network không có request 404</li>
          <li>Lighthouse trên URL production: 4 mục ≥ 90</li>
          <li>README của repo có link demo + ảnh chụp màn hình</li>
        </ul>
      </div>
    </div>
  )
}
