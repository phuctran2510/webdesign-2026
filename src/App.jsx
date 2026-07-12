import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Home from './pages/Home.jsx'
import DayPage from './pages/DayPage.jsx'
import DeployPage from './pages/DeployPage.jsx'
import { docTienDo, getDay } from './data/index.js'


function Login({ onLogin }) {
  const [pwd, setPwd] = useState('')
  const [shake, setShake] = useState(false)
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pwd === 'ngn2026') {
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
      <div style={S.grid}/>
      <div style={S.glow1}/>
      <div style={S.glow2}/>

      <div style={S.card}>
        {/* Left — branding */}
        <div style={S.left}>
          <div style={S.badge}>NGN · CNTT · DLU</div>
          <div style={S.logo}>
            <span style={S.logoAccent}>NGN</span>
            <span style={S.logoMain}>EDU</span>
          </div>
          <p style={S.tagline}>Hệ thống học tập & nghiên cứu<br/>NEXT GENERATION NETWORK</p>
          <div style={S.divider}/>
          <div style={S.meta}>
            <div style={S.metaRow}><span style={S.metaDot}/> GV: Trần Vĩnh Phúc</div>
            <div style={S.metaRow}><span style={S.metaDot}/> phuctv@dlu.edu.vn</div>
            <div style={S.metaRow}><span style={S.metaDot}/> 0976 353 605</div>
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
              ...(shake ? S.inputWrapShake : {})
            }}>
              <span style={S.inputIcon}>⬡</span>
              <input
                type="password"
                placeholder="••••••••"
                value={pwd}
                onChange={e => setPwd(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={S.input}
              />
            </div>
            <button type="submit" style={S.btn}>
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
        @keyframes pulse { 0%,100%{opacity:.6} 50%{opacity:1} }
        .login-card { animation: fadeUp .5s cubic-bezier(.16,1,.3,1) both }
        .login-btn:hover { background: linear-gradient(135deg,#00eeff,#00e676) !important; box-shadow: 0 8px 32px rgba(0,212,255,.35) !important; transform: translateY(-1px) }
        .login-btn:active { transform: translateY(0) }
      `}</style>
    </div>
  )
}

export default function App() {

  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('auth')
    if (saved === 'true') setIsAuth(true)
  }, [])


  const [tienDo, setTienDo] = useState(docTienDo)
  const loc = useLocation()

  let duong = 'Tổng quan'
  if (loc.pathname === '/trien-khai') duong = 'Triển khai demo'
  else if (loc.pathname.startsWith('/ngay/')) {
    const d = getDay(loc.pathname.split('/')[2])
    if (d) duong = 'Ngày ' + d.id + ' · ' + d.title
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
