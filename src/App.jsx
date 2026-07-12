import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Home from './pages/Home.jsx'
import DayPage from './pages/DayPage.jsx'
import DeployPage from './pages/DeployPage.jsx'
import { docTienDo, getDay } from './data/index.js'

export default function App() {
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
