import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { PARTS } from '../data/parts.js'
import { DAYS } from '../data/index.js'

export default function Sidebar({ tienDo }) {
  const loc = useLocation()
  const dayIdHienTai = loc.pathname.startsWith('/ngay/') ? Number(loc.pathname.split('/')[2]) : null
  const partHienTai = PARTS.find((p) => p.days.includes(dayIdHienTai))?.id
  const [mo, setMo] = useState(() => new Set(partHienTai ? [partHienTai] : [1]))

  function togglePart(id) {
    const s = new Set(mo)
    s.has(id) ? s.delete(id) : s.add(id)
    setMo(s)
  }

  const soXong = DAYS.filter((d) => tienDo[d.id]?.hoanThanh).length

  return (
    <aside className="sidebar">
      <div className="sb-head">
        <p className="sb-gv">Trần Vĩnh Phúc</p>
        <Link to="/" className="sb-title">Thiết kế Web<br />hiện đại 2026</Link>
        <div className="sb-chips">
          <span className="sb-chip">30 ngày</span>
          <span className="sb-chip">6 phần</span>
          <span className="sb-chip">{soXong}/30 ✓</span>
        </div>
      </div>

      <p className="sb-nhom">Điều hướng</p>
      <NavLink to="/" end className={({ isActive }) => 'sb-link' + (isActive ? ' active' : '')}>
        Tổng quan
      </NavLink>
      <NavLink to="/trien-khai" className={({ isActive }) => 'sb-link' + (isActive ? ' active' : '')}>
        Triển khai demo (Deploy)
      </NavLink>

      <p className="sb-nhom">Các phần học</p>
      {PARTS.map((part) => {
        const dangMo = mo.has(part.id) || part.id === partHienTai
        return (
          <div className="sb-part" key={part.id} style={{ '--pc': part.color }}>
            <button className="sb-part-btn" onClick={() => togglePart(part.id)} aria-expanded={dangMo}>
              <span>{part.name.replace(' — ', ': ')}</span>
              <span className="dem">{part.days.length}n</span>
              <span className="mui">{dangMo ? '▾' : '▸'}</span>
            </button>
            {dangMo && part.days.map((id) => {
              const d = DAYS.find((x) => x.id === id)
              const xong = tienDo[id]?.hoanThanh
              return (
                <NavLink key={id} to={'/ngay/' + id}
                  className={({ isActive }) => 'sb-day' + (isActive ? ' active' : '') + (xong ? ' xong' : '')}>
                  <span className="so">{xong ? '✓' : String(id).padStart(2, '0')}</span>
                  <span>{d.title}</span>
                </NavLink>
              )
            })}
          </div>
        )
      })}

      <div className="sb-foot">
        Khoa Công nghệ Thông tin – DLU<br />phuctv@dlu.edu.vn
      </div>
    </aside>
  )
}
