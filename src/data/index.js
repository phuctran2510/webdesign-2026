import p1 from './days-part1.js'
import p2 from './days-part2.js'
import p3 from './days-part3.js'
import p4 from './days-part4.js'
import p5 from './days-part5.js'
import p6 from './days-part6.js'

import det1 from './details-part1.js'
import det2 from './details-part2.js'
import det3a from './details-part3a.js'
import det3b from './details-part3b.js'
import det4 from './details-part4.js'
import det5 from './details-part5.js'
import det6 from './details-part6.js'

export const DAYS = [...p1, ...p2, ...p3, ...p4, ...p5, ...p6]

const DETAILS = { ...det1, ...det2, ...det3a, ...det3b, ...det4, ...det5, ...det6 }

export function getDay(id) {
  return DAYS.find((d) => d.id === Number(id))
}

export function getDetail(id) {
  return DETAILS[Number(id)] || null
}

// ------ Tiến độ học lưu trên trình duyệt của sinh viên ------
const KEY = 'webdesign2026-tiendo'

export function docTienDo() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {}
  } catch {
    return {}
  }
}

// trangThai: { [dayId]: { hoanThanh: bool, diemQuiz: number|null } }
export function luuKetQuaQuiz(dayId, diem, tongCau) {
  const td = docTienDo()
  td[dayId] = { hoanThanh: diem / tongCau >= 0.6, diemQuiz: diem, tongCau }
  localStorage.setItem(KEY, JSON.stringify(td))
  return td
}

export function xoaTienDo() {
  localStorage.removeItem(KEY)
}
