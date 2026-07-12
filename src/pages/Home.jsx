import { Link } from 'react-router-dom'
import { PARTS } from '../data/parts.js'
import { DAYS, xoaTienDo } from '../data/index.js'

const TONG_QUIZ = DAYS.reduce((s, d) => s + d.quiz.length, 0)
const SO_LA_MA = ['I', 'II', 'III', 'IV', 'V', 'VI']

export default function Home({ tienDo }) {
  const soXong = DAYS.filter((d) => tienDo[d.id]?.hoanThanh).length
  const phanTram = Math.round((soXong / DAYS.length) * 100)
  const ngayTiepTheo = DAYS.find((d) => !tienDo[d.id]?.hoanThanh) || DAYS[0]

  return (
    <div>
      <section className="hero">
        <p className="ma">📖 Giáo trình: Learning Web Design, 5th Edition · Jennifer Robbins · Cập nhật 2026</p>
        <h1>Thiết kế Web hiện đại 2026</h1>
        <p className="phu">30 ngày · Lý thuyết — Lab thực hành — Trắc nghiệm</p>
        <p className="mo-ta">
          Lộ trình trọn vẹn từ thẻ HTML đầu tiên đến sản phẩm React deploy công khai: HTML ngữ nghĩa,
          CSS Grid & container query, JavaScript hiện đại, React + Vite, tối ưu ảnh AVIF/WebP,
          accessibility và quy trình CI/CD chuyên nghiệp trên GitHub Pages, Vercel, Netlify.
        </p>
        <div className="chips">
          <span className="chip">HTML5 ngữ nghĩa</span>
          <span className="chip">CSS 2026</span>
          <span className="chip">JavaScript & React</span>
          <span className="chip">CI/CD & Deploy free</span>
          <span className="chip">Lab 100%</span>
        </div>
        <div className="cta">
          <Link to={'/ngay/' + ngayTiepTheo.id}>
            <button className="nut-chinh" style={{ background: '#fff', color: '#101114' }}>
              {soXong === 0 ? 'Bắt đầu Ngày 1 →' : soXong === DAYS.length ? 'Ôn tập lại từ Ngày 1' : 'Tiếp tục Ngày ' + ngayTiepTheo.id + ' →'}
            </button>
          </Link>
        </div>
      </section>

      <div className="stats">
        <div className="stat"><span className="so">30</span><span className="nhan">Ngày học</span></div>
        <div className="stat"><span className="so">6</span><span className="nhan">Phần</span></div>
        <div className="stat"><span className="so">25</span><span className="nhan">Chương giáo trình</span></div>
        <div className="stat"><span className="so">30</span><span className="nhan">Lab thực hành</span></div>
        <div className="stat"><span className="so">{TONG_QUIZ}</span><span className="nhan">Câu trắc nghiệm</span></div>
        <div className="stat"><span className="so">{phanTram}%</span><span className="nhan">Tiến độ của bạn</span></div>
      </div>

      <div className="khoi">
        <p className="tieu-de">Phân bổ hoạt động học tập</p>
        <div className="phan-bo">
          <div className="pb" style={{ '--pb-nen': '#e3ebff', '--pb-chu': '#1e3a8a' }}>
            <span className="so">30</span><span className="nhan">Bài lý thuyết</span>
          </div>
          <div className="pb" style={{ '--pb-nen': '#fdf3d7', '--pb-chu': '#92400e' }}>
            <span className="so">30</span><span className="nhan">Lab thực hành</span>
          </div>
          <div className="pb" style={{ '--pb-nen': '#dcf5e8', '--pb-chu': '#065f46' }}>
            <span className="so">30</span><span className="nhan">Bài trắc nghiệm</span>
          </div>
          <div className="pb" style={{ '--pb-nen': '#fce7f3', '--pb-chu': '#9d174d' }}>
            <span className="so">2</span><span className="nhan">Mini project</span>
          </div>
          <div className="pb" style={{ '--pb-nen': '#fee2e2', '--pb-chu': '#991b1b' }}>
            <span className="so">1</span><span className="nhan">Đồ án tổng kết</span>
          </div>
        </div>
        <div className="thanh-tien-do" role="progressbar" aria-valuenow={phanTram} aria-valuemin="0" aria-valuemax="100" style={{ marginTop: 18 }}>
          <div style={{ width: phanTram + '%' }}></div>
        </div>
        <p style={{ fontSize: '.8rem', color: 'var(--muc-mo)', margin: 0 }}>
          Hoàn thành quiz ≥ 60% để tính xong một ngày. Đã xong <strong>{soXong}/30 ngày</strong>.
          {soXong > 0 && (
            <button
              style={{ marginLeft: 10, background: 'none', border: 'none', color: 'var(--muc-mo)', textDecoration: 'underline', fontSize: '.78rem', cursor: 'pointer' }}
              onClick={() => { if (confirm('Xóa toàn bộ tiến độ học?')) { xoaTienDo(); location.reload() } }}>
              Xóa tiến độ
            </button>
          )}
        </p>
      </div>

      <p className="muc-lon">6 phần học · 30 ngày</p>
      <div className="luoi-part">
        {PARTS.map((p) => {
          const xongTrongPart = p.days.filter((d) => tienDo[d]?.hoanThanh).length
          return (
            <Link key={p.id} to={'/ngay/' + p.days[0]} className="part-card" style={{ '--pc': p.color }}>
              <p className="eyebrow">Phần {SO_LA_MA[p.id - 1]} · {p.chapters}</p>
              <h3>{p.name.split(' — ')[1]}</h3>
              <p>{p.desc}</p>
              <span className="chan">
                Ngày {p.days[0]}–{p.days[p.days.length - 1]} · {xongTrongPart}/{p.days.length} ✓
                <span className="xem">Học →</span>
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
