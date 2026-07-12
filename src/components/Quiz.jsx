import { useState } from 'react'
import { luuKetQuaQuiz } from '../data/index.js'

export default function Quiz({ day, setTienDo }) {
  const [dapAn, setDapAn] = useState({}) // {index câu: index lựa chọn}
  const [daNop, setDaNop] = useState(false)

  const tongCau = day.quiz.length
  const daChonDu = Object.keys(dapAn).length === tongCau
  const diem = day.quiz.filter((c, i) => dapAn[i] === c.a).length

  function nopBai() {
    setDaNop(true)
    const td = luuKetQuaQuiz(day.id, diem, tongCau)
    setTienDo({ ...td })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function lamLai() {
    setDapAn({})
    setDaNop(false)
  }

  return (
    <div>
      {daNop && (
        <div className="the-noi ket-qua-quiz">
          <p className="diem">{diem}/{tongCau}</p>
          <p>
            {diem === tongCau
              ? 'Xuất sắc! Bạn nắm chắc bài hôm nay. 🎉'
              : diem / tongCau >= 0.6
                ? 'Đạt! Xem lại giải thích các câu sai bên dưới nhé.'
                : 'Chưa đạt (cần ≥ 60%). Đọc lại lý thuyết rồi làm lại nhé.'}
          </p>
          <button className="nut-chinh" onClick={lamLai}>Làm lại</button>
        </div>
      )}

      <div className="the-noi">
        <h2>Bài tập trắc nghiệm ({tongCau} câu)</h2>
        {day.quiz.map((cau, i) => (
          <div className="cau-hoi" key={i}>
            <p className="de">Câu {i + 1}. {cau.q}</p>
            <div className="lua-chon" role="group" aria-label={`Câu ${i + 1}`}>
              {cau.o.map((luaChon, j) => {
                let cls = ''
                if (!daNop && dapAn[i] === j) cls = 'chon'
                if (daNop && j === cau.a) cls = 'dung'
                if (daNop && dapAn[i] === j && j !== cau.a) cls = 'sai'
                return (
                  <button
                    key={j}
                    className={cls}
                    disabled={daNop}
                    onClick={() => setDapAn({ ...dapAn, [i]: j })}
                  >
                    {String.fromCharCode(65 + j)}. {luaChon}
                  </button>
                )
              })}
            </div>
            {daNop && <p className="giai-thich">💡 {cau.e}</p>}
          </div>
        ))}

        {!daNop && (
          <button className="nut-chinh" disabled={!daChonDu} onClick={nopBai}>
            {daChonDu ? 'Nộp bài' : `Còn ${tongCau - Object.keys(dapAn).length} câu chưa chọn`}
          </button>
        )}
      </div>
    </div>
  )
}
