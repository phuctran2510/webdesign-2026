import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Home from './pages/Home.jsx'
import DayPage from './pages/DayPage.jsx'
import DeployPage from './pages/DeployPage.jsx'
import { docTienDo, getDay } from './data/index.js'

// ============ Style object dùng cho màn hình Login ============
const S = {
  wrap: {
    position: 'relative', minHeight: '100vh', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    background: '#05070d', overflow: 'hidden', fontFamily: 'system-ui, sans-serif',
  },
  grid: {
    position: 'absolute', inset: 0,
    backgroundImage:
      'linear-gradient(rgba(0,212,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,.06) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    animation: 'gridMove 3s linear infinite',
  },
  glow1: {
    position: 'absolute', top: '-10%', left: '-10%', width: 420, height: 420,
    borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,.25), transparent 70%)',
    filter: 'blur(10px)',
  },
  glow2: {
    position: 'absolute', bottom: '-15%', right: '-10%', width: 480, height: 480,
    borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,230,118,.18), transparent 70%)',
    filter: 'blur(10px)',
  },
  card: {
    position: 'relative', zIndex: 1, display: 'flex',
    width: 'min(860px, 92vw)', minHeight: 440, borderRadius: 20,
    overflow: 'hidden', border: '1px solid rgba(0,212,255,.2)',
    boxShadow: '0 30px 80px rgba(0,0,0,.5)',
  },
  left: {
    flex: '0 0 42%', padding: '40px 32px', color: '#fff',
    background: 'linear-gradient(155deg, #0a1622 0%, #05252e 100%)',
    display: 'flex', flexDirection: 'column', justifyContent: 'center',
  },
  badge: {
    alignSelf: 'flex-start', fontSize: 11, letterSpacing: '.12em',
    padding: '4px 10px', borderRadius: 999, marginBottom: 20,
    background: 'rgba(0,212,255,.12)', border: '1px solid rgba(0,212,255,.3)', color: '#67e8f9',
  },
  logo: { fontSize: '1.9rem', fontWeight: 800, marginBottom: 14, lineHeight: 1 },
  logoAccent: { color: '#00d4ff' },
  logoMain: { color: '#fff', marginLeft: 4 },
  tagline: { color: '#9fb4c2', fontSize: '.88rem', lineHeight: 1.6, marginBottom: 24 },
  divider: { height: 1, background: 'rgba(255,255,255,.1)', marginBottom: 20 },
  meta: { display: 'flex', flexDirection: 'column', gap: 10 },
  metaRow: { fontSize: '.82rem', color: '#c7d6dd', display: 'flex', alignItems: 'center', gap: 8 },
  metaDot: { width: 6, height: 6, borderRadius: '50%', background: '#00e676', display: 'inline-block' },
  right: {
    flex: 1, background: '#0b0f16', padding: '48px 40px',
    display: 'flex', flexDirection: 'column', justifyContent: 'center',
  },
  formHead: { textAlign: 'center', marginBottom: 28 },
  lock: { fontSize: '1.8rem', marginBottom: 10 },
  formTitle: { color: '#fff', fontSize: '1.3rem', margin: '0 0 6px', fontFamily: 'inherit' },
  formSub: { color: '#8b98a5', fontSize: '.82rem', margin: 0 },
  inputWrap: {
    display: 'flex', alignItems: 'center', gap: 10,
    border: '1px solid rgba(255,255,255,.15)', borderRadius: 12,
    padding: '12px 16px', marginBottom: 16, transition: 'border-color .2s, box-shadow .2s',
  },
  inputWrapFocus: { borderColor: '#00d4ff', boxShadow: '0 0 0 3px rgba(0,212,255,.15)' },
  inputWrapShake: { borderColor: '#ff4d5e', animation: 'shake .4s' },
  inputIcon: { color: '#00d4ff', fontSize: '1rem' },
  input: {
    flex: 1, background: 'transparent', border: 'none', outline: 'none',
    color: '#fff', fontSize: '.95rem', letterSpacing: '.05em',
  },
  btn: {
    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    padding: '13px 20px', borderRadius: 12, border: 'none', cursor: 'pointer',
    background: 'linear-gradient(135deg,#00d4ff,#00c853)', color: '#03131a',
    fontWeight: 700, fontSize: '.92rem', transition: 'transform .15s, box-shadow .15s',
  },
  btnArrow: { fontSize: '1rem' },
  hint: { textAlign: 'center', color: '#6b7684', fontSize: '.76rem', marginTop: 16 },
}

function Login({ onLogin }) {
  const [pwd, setPwd] = useState('')
  const [shake, setShake] = useState(false)
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pwd === 'tkw2026') {
      localStorage.setItem('auth', 'true')
      onLogin(true)
    } else {
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div style={S.wrap}>
      {/* Animated grid background */}
      <div style={S.grid} />
      <div style={S.glow1} />
      <div style={S.glow2} />

      <div style={S.card}>
        {/* Left — branding */}
        <div style={S.left}>
          <div style={S.badge}>Thiết Kế Web · CNTT · DLU</div>
          <div style={S.logo}>
            <span style={S.logoAccent}>TKW</span>
            <span style={S.logoMain}>EDU</span>
          </div>
          <p style={S.tagline}>Hệ thống học tập &amp; nghiên cứu<br />THIẾT KẾ WEB</p>
          <div style={S.divider} />
          <div style={S.meta}>
            <div style={S.metaRow}><span style={S.metaDot} /> GV: Trần Vĩnh Phúc</div>
            <div style={S.metaRow}><span style={S.metaDot} /> phuctv@dlu.edu.vn</div>
            <div style={S.metaRow}><span style={S.metaDot} /> 0976 353 605</div>
          </div>
        </div>

        {/* Right — login form */}
        <div style={S.right}>
          <div style={S.formHead}>
            <div style={S.lock}>🔐</div>
            <h2 style={S.formTitle}>Truy cập hệ thống</h2>
            <p style={S.formSub}>Nhập mật khẩu được cấp bởi giảng viên</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{
              ...S.inputWrap,
              ...(focused ? S.inputWrapFocus : {}),
              ...(shake ? S.inputWrapShake : {}),
            }}>
              <span style={S.inputIcon}>⬡</span>
              <input
                type="password"
                placeholder="••••••••"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={S.input}
              />
            </div>
            <button type="submit" className="login-btn" style={S.btn}>
              <span>Đăng nhập</span>
              <span style={S.btnArrow}>→</span>
            </button>
          </form>

          <p style={S.hint}>Liên hệ giảng viên nếu chưa có mật khẩu</p>
        </div>
      </div>

      <style>{`
        @keyframes gridMove { from { transform: translateY(0) } to { transform: translateY(40px) } }
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-5px)} 80%{transform:translateX(5px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .login-btn:hover { background: linear-gradient(135deg,#00eeff,#00e676) !important; box-shadow: 0 8px 32px rgba(0,212,255,.35) !important; transform: translateY(-1px) }
        .login-btn:active { transform: translateY(0) }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  )
}

export default function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [dangKiemTra, setDangKiemTra] = useState(true)

  useEffect(() => {
    const daLuu = localStorage.getItem('auth')
    if (daLuu === 'true') setIsAuth(true)
    setDangKiemTra(false)
  }, [])

  const [tienDo, setTienDo] = useState(docTienDo)
  const loc = useLocation()

  let duong = 'Tổng quan'
  if (loc.pathname === '/trien-khai') duong = 'Triển khai demo'
  else if (loc.pathname.startsWith('/ngay/')) {
    const d = getDay(loc.pathname.split('/')[2])
    if (d) duong = 'Ngày ' + d.id + ' · ' + d.title
  }

  // Chờ đọc xong localStorage trước khi quyết định hiện gì (tránh nháy màn hình)
  if (dangKiemTra) return null

  // Chưa đăng nhập → CHỈ hiện màn hình Login, chặn toàn bộ nội dung phía sau
  if (!isAuth) {
    return <Login onLogin={setIsAuth} />
  }

  return (
    <div className="app">
      <Sidebar tienDo={tienDo} />
      <div className="main">
        <div className="topbar">
          <span className="duong">{duong}</span>
          <div className="phai">
            <Link className="nut-nho" to="/">Tổng quan</Link>
            <Link className="nut-nho" to="/trien-khai">Deploy</Link>
            <a className="nut-nho nhan" href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
        </div>
        <div className="noidung">
          <Routes>
            <Route path="/" element={<Home tienDo={tienDo} />} />
            <Route path="/ngay/:id" element={<DayPage tienDo={tienDo} setTienDo={setTienDo} />} />
            <Route path="/trien-khai" element={<DeployPage />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
