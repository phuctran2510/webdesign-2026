import { useParams, Link, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getDay, DAYS, getDetail } from '../data/index.js'
import { partOfDay } from '../data/parts.js'
import Quiz from '../components/Quiz.jsx'

export default function DayPage({ tienDo, setTienDo }) {
  const { id } = useParams()
  const day = getDay(id)
  const [tab, setTab] = useState('lythuyet')

  useEffect(() => { setTab('lythuyet'); window.scrollTo(0, 0) }, [id])

  if (!day) return <Navigate to="/" replace />
  const part = partOfDay(day.id)
  const detail = getDetail(day.id)
  const kq = tienDo[day.id]

  return (
    <article style={{ '--pc': part.color }}>
      <span className="day-eyebrow">Ngày {day.id} / 30 · {part.name}</span>
      <h1 className="day-title">{day.title}</h1>
      <p className="day-chuong">
        📖 {day.chapters} — Learning Web Design, 5th Edition
        {kq?.diemQuiz != null && <> · Điểm quiz gần nhất: <strong>{kq.diemQuiz}/{kq.tongCau}</strong></>}
      </p>

      <div className="khoi">
        <h2>🎯 Mục tiêu hôm nay</h2>
        <ul className="muc-tieu">
          {day.goals.map((g, i) => <li key={i}>{g}</li>)}
        </ul>
      </div>

      <div className="tabs" role="tablist">
        {[['lythuyet', '📚 Lý thuyết'], ['lab', '🧪 Lab thực hành'], ['quiz', '✅ Trắc nghiệm']].map(([key, nhan]) => (
          <button key={key} role="tab" aria-selected={tab === key}
            className={'tab' + (tab === key ? ' active' : '')}
            onClick={() => setTab(key)}>
            {nhan}
          </button>
        ))}
      </div>

      {tab === 'lythuyet' && (
        <>
          <div className="khoi tom-tat">
            <h2>Điểm cốt lõi cần nhớ</h2>
            <ul className="muc-tieu">
              {day.theory.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
          {detail?.theory && (
            <div className="khoi">
              <h2>Bài giảng chi tiết</h2>
              {detail.theory.map((sec, i) => (
                <section className="lt-sec" key={i}>
                  <h3>{i + 1}. {sec.h}</h3>
                  {sec.p.map((para, j) => <p key={j}>{para}</p>)}
                  {sec.code && <pre className="code"><code>{sec.code}</code></pre>}
                  {sec.note && <p className="ghi-chu">{sec.note}</p>}
                </section>
              ))}
            </div>
          )}
        </>
      )}

      {tab === 'lab' && (
        <div className="khoi">
          <h2>{detail?.lab?.title || day.lab.title}</h2>
          {detail?.lab ? (
            <>
              <div className="lab-meta">
                <div className="o"><b>Sản phẩm nộp</b>{detail.lab.objective}</div>
                <div className="o"><b>Thời lượng</b>{detail.lab.time}</div>
                <div className="o"><b>Chuẩn bị</b>{detail.lab.prep.join(' · ')}</div>
              </div>
              <ol className="lab-buoc">
                {detail.lab.steps.map((b, i) => (
                  <li key={i}>
                    <p className="buoc-t">{b.t}</p>
                    {b.mota && <p className="buoc-mota">{b.mota}</p>}
                    {b.code && <pre className="code"><code>{b.code}</code></pre>}
                  </li>
                ))}
              </ol>
              <h3>✔ Checklist nghiệm thu</h3>
              <ul className="checklist">
                {detail.lab.checklist.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </>
          ) : (
            <>
              <ol className="lab-buoc">
                {day.lab.steps.map((b, i) => (
                  <li key={i}><p className="buoc-t">{b}</p></li>
                ))}
              </ol>
              <h3>Code mẫu</h3>
              <pre className="code"><code>{day.lab.code}</code></pre>
            </>
          )}
        </div>
      )}

      {tab === 'quiz' && <Quiz day={day} setTienDo={setTienDo} />}

      <nav className="dieu-huong-ngay" aria-label="Chuyển ngày">
        {day.id > 1
          ? <Link to={'/ngay/' + (day.id - 1)}>← Ngày {day.id - 1}</Link>
          : <Link to="/">← Tổng quan</Link>}
        {day.id < DAYS.length
          ? <Link to={'/ngay/' + (day.id + 1)}>Ngày {day.id + 1} →</Link>
          : <Link to="/trien-khai">Triển khai demo 🚀</Link>}
      </nav>
    </article>
  )
}
