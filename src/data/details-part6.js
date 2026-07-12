// Bài giảng chi tiết & lab chi tiết — Phần VI: React & Triển khai (Ngày 28–30)
export default {
  28: {
    theory: [
      {
        h: 'Vì sao React ra đời: bài toán "đồng bộ dữ liệu và giao diện"',
        p: [
          'Lab 24 (to-do list JavaScript thuần) đã lộ ra một mẫu hình lặp lại: mỗi lần dữ liệu đổi, ta phải TỰ TAY gọi lại hàm ve() để innerHTML khớp với dữ liệu mới — quên gọi một chỗ là giao diện "nói dối" dữ liệu thật. Ứng dụng càng lớn, càng nhiều nơi cần đồng bộ, lỗi quên cập nhật càng dễ xảy ra.',
          'React giải quyết bằng mô hình khai báo (declarative): bạn MÔ TẢ giao diện là HÀM CỦA DỮ LIỆU ("dữ liệu thế này thì giao diện trông thế kia"), không tự tay ra lệnh "sửa DOM chỗ này chỗ kia" (imperative) như jQuery/JS thuần. Khi dữ liệu đổi, React tự tính toán phần DOM cần cập nhật (qua Virtual DOM — một cây JavaScript nhẹ đại diện giao diện, so sánh phiên bản cũ/mới rồi chỉ áp đúng phần khác biệt vào DOM thật) — bạn không bao giờ tự viết querySelector nữa.',
        ],
      },
      {
        h: 'JSX: viết giao diện ngay trong JavaScript',
        p: [
          'JSX là cú pháp mở rộng cho phép viết thẻ giống HTML NGAY TRONG file .jsx: const el = <h1>Xin chào</h1>. Đây không phải chuỗi hay HTML thật — Vite biên dịch nó thành lệnh gọi hàm JavaScript tạo cây phần tử. Quy tắc khác biệt với HTML cần nhớ: class → className (class là từ khóa JS dành riêng); mọi thẻ PHẢI đóng kể cả thẻ rỗng (<img />); một component chỉ trả về MỘT phần tử gốc (bọc nhiều thứ trong <> </> — Fragment rỗng không sinh thẻ thừa).',
          'Nhúng biểu thức JavaScript bằng dấu ngoặc nhọn { }: {ten}, {diem + 1}, {dieuKien ? "A" : "B"}. Comment trong JSX cũng cần ngoặc nhọn: {/* ghi chú */}.',
        ],
        code: `function LoiChao({ ten }) {
  return (
    <div className="hop-chao">
      <h2>Xin chào, {ten}!</h2>
      {ten === "Phúc" && <p>Chào giảng viên!</p>}
    </div>
  )
}`,
      },
      {
        h: 'Component, props và tư duy "chia nhỏ để tái sử dụng"',
        p: [
          'Component là HÀM JAVASCRIPT trả về JSX, tên VIẾT HOA chữ đầu (phân biệt với thẻ HTML thường viết thường). Props (properties) là "tham số" truyền vào component qua thuộc tính JSX: <TheCard tieuDe="CSS" mau="#2547f4" />, nhận trong component qua tham số object (thường destructure): function TheCard({ tieuDe, mau }) {...}. Props CHỈ ĐỌC — component con không được tự sửa props nhận vào.',
          'Tư duy component hóa: nhìn một trang phức tạp (giống trang tổng quan của app khóa học này), tách thành các khối tái sử dụng (Sidebar, thẻ thống kê, part-card...) — mỗi khối một component, nhận dữ liệu khác nhau qua props nhưng dùng CHUNG một khuôn JSX. Đây chính là cấu trúc mọi component trong app đang dùng (Home.jsx render lặp PARTS.map thành nhiều part-card).',
          'Render danh sách bằng .map() (đã học Ngày 23) — MỖI phần tử lặp BẮT BUỘC có prop đặc biệt key (thường là id duy nhất) để React theo dõi đúng phần tử nào đổi/thêm/xóa khi danh sách thay đổi, tránh lỗi hiển thị sai khi sắp xếp lại.',
        ],
        code: `function TheMonHoc({ mon }) {
  return (
    <li className="the-mon">
      <h3>{mon.ten}</h3>
      <span>{mon.soTinChi} tín chỉ</span>
    </li>
  )
}

function DanhSachMon({ monHoc }) {
  return (
    <ul>
      {monHoc.map((m) => <TheMonHoc key={m.id} mon={m} />)}
    </ul>
  )
}`,
      },
      {
        h: 'useState: "bộ nhớ" của component',
        p: [
          'Biến JavaScript thường trong component KHÔNG sống sót qua lần render lại. useState(giaTriBanDau) là Hook (hàm đặc biệt của React, luôn bắt đầu bằng use) trả về CẶP [giá trị hiện tại, hàm cập nhật]: const [dem, setDem] = useState(0). Gọi setDem(dem + 1) không chỉ đổi biến — nó BÁO REACT RENDER LẠI component với giá trị mới, đây là cơ chế "tự động đồng bộ" đã hứa ở trên.',
          'Quy tắc bất biến quan trọng: KHÔNG BAO GIỜ sửa trực tiếp state (mảng.push(), object.thuoctinh = x) — luôn tạo giá trị MỚI rồi gọi hàm setter: setDsViec([...dsViec, moiViec]) (spread operator sao chép mảng cũ + thêm phần tử), setMon({...mon, daHoc: true}) (sao chép object cũ + ghi đè thuộc tính). Sửa trực tiếp khiến React không nhận ra thay đổi và KHÔNG render lại — lỗi phổ biến nhất của người mới học React.',
        ],
        code: `function ToDoDon() {
  const [dsViec, setDsViec] = useState([])
  const [oNhap, setONhap] = useState("")

  function themViec() {
    if (!oNhap.trim()) return
    setDsViec([...dsViec, { id: Date.now(), ten: oNhap, xong: false }])
    setONhap("")
  }

  return (
    <div>
      <input value={oNhap} onChange={(e) => setONhap(e.target.value)} />
      <button onClick={themViec}>Thêm</button>
      <ul>{dsViec.map((v) => <li key={v.id}>{v.ten}</li>)}</ul>
    </div>
  )
}`,
        note: 'input trong React thường là "controlled component": value luôn LẤY TỪ state, onChange luôn GHI LẠI state — React kiểm soát hoàn toàn giá trị ô nhập, khác hẳn kiểu .value trực tiếp của JS thuần Ngày 24.',
      },
    ],
    lab: {
      title: 'Lab 28: Flashcard học từ vựng CSS bằng React (component + useState)',
      objective: 'Component Flashcard lật thẻ, chuyển thẻ tiếp theo, đếm số thẻ đã ôn — chạy đúng trong site Vite hiện tại',
      time: '90 phút',
      prep: ['Node.js + npm', 'Site React/Vite của khóa học (đã có sẵn cấu trúc src/components)'],
      steps: [
        {
          t: 'Dữ liệu thẻ từ vựng',
          mota: 'Tạo src/data/flashcards.js xuất mảng ≥ 10 object { id, thuat_ngu, giai_thich } về các khái niệm CSS đã học (box-sizing, specificity, flex-grow, z-index...). Đây là dữ liệu tĩnh, không cần backend.',
        },
        {
          t: 'Component Flashcard hiển thị 1 thẻ lật được',
          code: `import { useState } from 'react'

function Flashcard({ the }) {
  const [daLat, setDaLat] = useState(false)
  return (
    <div className="flashcard" onClick={() => setDaLat(!daLat)}>
      {daLat
        ? <p className="giai-thich">{the.giai_thich}</p>
        : <h3>{the.thuat_ngu}</h3>}
      <p className="goi-y">{daLat ? "Bấm để xem thuật ngữ" : "Bấm để xem giải thích"}</p>
    </div>
  )
}`,
          mota: 'Mỗi thẻ TỰ QUẢN LÝ trạng thái lật của chính nó bằng useState riêng — minh chứng mỗi component có "bộ nhớ" độc lập.',
        },
        {
          t: 'Component cha điều khiển bộ thẻ',
          code: `import { useState } from 'react'
import FLASHCARDS from '../data/flashcards.js'
import Flashcard from './Flashcard.jsx'

export default function BoFlashcard() {
  const [chiSo, setChiSo] = useState(0)
  const [daOn, setDaOn] = useState(0)
  const the = FLASHCARDS[chiSo]

  function theTiepTheo() {
    setDaOn(daOn + 1)
    setChiSo((chiSo + 1) % FLASHCARDS.length)
  }

  return (
    <div>
      <p>Đã ôn: {daOn} · Thẻ {chiSo + 1}/{FLASHCARDS.length}</p>
      <Flashcard key={the.id} the={the} />
      <button onClick={theTiepTheo}>Thẻ tiếp theo →</button>
    </div>
  )
}`,
          mota: 'Chú ý key={the.id} trên Flashcard: đổi thẻ, React coi đây là component MỚI nên tự reset trạng thái daLat về false — không cần tự tay reset.',
        },
        {
          t: 'Style và gắn vào một route',
          mota: 'Thêm CSS cho .flashcard (khung lớn, canh giữa chữ, cursor:pointer, transition đổi nền khi lật, min-height cố định tránh nhảy layout). Gắn <BoFlashcard /> vào một vị trí trong DayPage.jsx (ví dụ hiện thêm ở cuối tab "quiz" của Ngày 28) hoặc một route riêng /flashcard.',
        },
        {
          t: 'Kiểm thử hành vi React đặc trưng',
          mota: 'Lật một thẻ, bấm "Thẻ tiếp theo" — xác nhận thẻ mới LUÔN hiện mặt thuật ngữ (không giữ trạng thái lật cũ) nhờ key. Thử cố tình sửa code thành FLASHCARDS[chiSo].xong = true (sửa trực tiếp) so với dùng setDaOn đúng cách — quan sát khác biệt về việc số "Đã ôn" có cập nhật trên giao diện hay không.',
        },
      ],
      checklist: [
        'Flashcard component tự quản lý state lật thẻ độc lập bằng useState',
        'BoFlashcard quản lý chỉ số thẻ hiện tại và bộ đếm đã ôn',
        'key={the.id} khiến trạng thái lật tự reset khi đổi thẻ',
        'Không có chỗ nào sửa trực tiếp state — luôn qua hàm setter',
        'Chạy đúng trong npm run dev không lỗi Console',
      ],
    },
  },

  29: {
    theory: [
      {
        h: 'useEffect: nơi "phụ trợ" nằm ngoài luồng render thuần',
        p: [
          'Render (hàm component chạy và trả JSX) nên là quá trình THUẦN KHIẾT — chỉ tính toán JSX từ props/state, không tự ý gây tác động phụ (side effect) như gọi API, đọc localStorage, hẹn giờ. useEffect(hamTacDong, [phuThuoc]) là nơi CHÍNH THỨC để làm những việc đó, chạy SAU khi component đã render xong lên màn hình.',
          'Mảng phụ thuộc [phuThuoc] điều khiển khi nào effect chạy lại: [] (mảng rỗng) → chạy ĐÚNG MỘT LẦN sau lần render đầu (dùng để fetch dữ liệu ban đầu); [bien] → chạy lại mỗi khi bien đổi giá trị; KHÔNG truyền mảng → chạy lại sau MỌI lần render (hiếm khi cần, dễ gây vòng lặp vô tận nếu không cẩn thận).',
        ],
        code: `import { useState, useEffect } from 'react'

function WidgetThoiTiet() {
  const [ttiet, setTtiet] = useState(null)
  const [dangTai, setDangTai] = useState(true)
  const [loi, setLoi] = useState(null)

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=11.94&longitude=108.44&current_weather=true')
      .then((res) => res.json())
      .then((data) => setTtiet(data.current_weather))
      .catch((e) => setLoi(e.message))
      .finally(() => setDangTai(false))
  }, [])   // [] : chỉ gọi 1 lần khi component xuất hiện

  if (dangTai) return <p>Đang tải...</p>
  if (loi) return <p>Lỗi: {loi}</p>
  return <p>{ttiet.temperature}°C tại Đà Lạt</p>
}`,
      },
      {
        h: 'Hàm dọn dẹp (cleanup) — tránh rò rỉ bộ nhớ',
        p: [
          'Nếu effect thiết lập thứ gì đó "sống lâu dài" hơn một lần render — setInterval, addEventListener trên window, subscription — nó PHẢI trả về một HÀM DỌN DẸP để hủy đúng thứ đó khi component biến mất khỏi màn hình (unmount) hoặc trước khi effect chạy lại lần sau. Thiếu cleanup gây rò rỉ bộ nhớ và lỗi khó dò: hẹn giờ vẫn chạy dù component đã "biến mất từ lâu".',
        ],
        code: `useEffect(() => {
  const idHenGio = setInterval(() => console.log("Tick"), 1000)
  return () => clearInterval(idHenGio)   // dọn dẹp
}, [])`,
      },
      {
        h: 'React Router: một trang, nhiều "màn hình"',
        p: [
          'Ứng dụng React thường chỉ có MỘT trang HTML thật (Single Page Application — SPA) — React Router mô phỏng cảm giác nhiều trang bằng cách đổi component hiển thị theo URL mà KHÔNG tải lại toàn trang. <BrowserRouter> (hoặc <HashRouter> — app khóa học này dùng HashRouter để tương thích tốt với GitHub Pages, URL có dạng /#/ngay/5) bọc ngoài cùng; <Routes><Route path="..." element={<Component/>} /></Routes> khai từng "trang"; <Link to="...">, khác <a>, điều hướng không tải lại trang — giữ nguyên state của các component khác (ví dụ theme đã chọn).',
          'useParams() đọc phần động của URL (path="/ngay/:id" → useParams().id) — chính là cách DayPage.jsx trong app này biết đang hiển thị ngày nào.',
        ],
      },
      {
        h: 'Vite build: từ mã nguồn tới file tĩnh triển khai được',
        p: [
          'npm run dev chỉ chạy máy chủ phát triển TRÊN MÁY BẠN. Để có sản phẩm đưa lên Internet, chạy npm run build — Vite biên dịch toàn bộ JSX/CSS/JS thành các file HTML/CSS/JS THUẦN TÚY tối ưu (thu nhỏ, gộp, đặt tên kèm mã băm để cache hiệu quả) trong thư mục dist/. Thư mục dist/ chính là thứ mọi dịch vụ hosting tĩnh (GitHub Pages, Vercel, Netlify — Ngày 30) cần.',
          'base trong vite.config.js quyết định ĐƯỜNG DẪN GỐC mà các file trong dist/ tham chiếu tới nhau — sai giá trị này là nguyên nhân số một của lỗi "trang trắng, 404 file JS/CSS" khi deploy lên GitHub Pages (vì site không nằm ở gốc domain mà ở /ten-repo/). npm run preview chạy thử CHÍNH XÁC bản dist/ trên máy trước khi đẩy lên mạng — bước kiểm tra không nên bỏ qua.',
        ],
        note: 'Ba lệnh cần nhớ trọn đời làm việc với Vite: npm run dev (phát triển), npm run build (đóng gói production), npm run preview (thử bản đóng gói tại local).',
      },
    ],
    lab: {
      title: 'Lab 29: Ghi chú cá nhân theo ngày học (useEffect + localStorage + build thử)',
      objective: 'Component ghi chú tự lưu/khôi phục qua useEffect, build production chạy đúng qua npm run preview',
      time: '90 phút',
      prep: ['Lab 28 hoàn thành', 'Site React/Vite hiện tại'],
      steps: [
        {
          t: 'Component ghi chú với 2 useEffect',
          code: `import { useState, useEffect } from 'react'

function GhiChuNgay({ dayId }) {
  const [noiDung, setNoiDung] = useState('')

  // Effect 1: mỗi khi đổi ngày, TẢI ghi chú tương ứng
  useEffect(() => {
    const luu = localStorage.getItem('ghichu-' + dayId)
    setNoiDung(luu ?? '')
  }, [dayId])

  // Effect 2: nội dung đổi thì TỰ LƯU (debounce nhẹ bằng setTimeout)
  useEffect(() => {
    const idHenGio = setTimeout(() => {
      localStorage.setItem('ghichu-' + dayId, noiDung)
    }, 500)
    return () => clearTimeout(idHenGio)   // hủy hẹn giờ cũ nếu gõ tiếp
  }, [noiDung, dayId])

  return (
    <div className="ghi-chu-ngay">
      <label htmlFor="ghichu">📝 Ghi chú của bạn cho ngày này</label>
      <textarea id="ghichu" rows="4" value={noiDung}
        onChange={(e) => setNoiDung(e.target.value)}
        placeholder="Điều gì bạn muốn nhớ về ngày học này?" />
    </div>
  )
}
export default GhiChuNgay`,
          mota: 'Effect 2 minh họa kỹ thuật "debounce" bằng cleanup: mỗi lần gõ, hẹn giờ CŨ bị hủy và hẹn giờ MỚI đặt lại — chỉ thực sự lưu khi người dùng NGỪNG gõ 500ms, tránh ghi localStorage liên tục từng phím bấm.',
        },
        {
          t: 'Gắn vào DayPage và kiểm thử đổi ngày',
          mota: 'Import và đặt <GhiChuNgay dayId={day.id} /> vào cuối DayPage.jsx (ví dụ dưới phần mục tiêu). Gõ ghi chú ở Ngày 5, chuyển sang Ngày 6 — ô phải TRỐNG (đúng effect phụ thuộc dayId). Quay lại Ngày 5 — ghi chú CŨ phải hiện lại đúng.',
        },
        {
          t: 'Widget thời tiết bằng useEffect (áp dụng lại Lab 25 nhưng bằng React)',
          mota: 'Tạo component WidgetThoiTiet theo đúng mẫu lý thuyết (fetch trong useEffect với [], 3 trạng thái dangTai/loi/ttiet). So sánh với bản JavaScript thuần Lab 25: chỉ ra 2 điểm khác biệt lớn nhất trong cách quản lý trạng thái (state React thay cho biến DOM thủ công, useEffect thay cho gọi hàm trực tiếp).',
        },
        {
          t: 'Build production và preview thử',
          code: `npm run build
npm run preview
# mở URL preview hiện ra, kiểm tra MỌI route hoạt động y hệt dev`,
          mota: 'Chạy build — theo dõi Console không có lỗi/warning JSX. Mở bằng preview: click qua vài ngày, xác nhận ghi chú và progress vẫn hoạt động (localStorage không phân biệt dev/production, cùng domain).',
        },
        {
          t: 'Kiểm tra thư mục dist/ sinh ra',
          mota: 'Mở thư mục dist/ bằng view: xác nhận có index.html + thư mục assets/ chứa .js/.css đã thu nhỏ và đặt tên kèm mã băm (vd index-a1b2c3.js). Giải thích 1 câu vì sao tên file có mã băm ngẫu nhiên (phục vụ cache-busting: đổi nội dung → đổi tên file → trình duyệt buộc tải bản mới).',
        },
      ],
      checklist: [
        'GhiChuNgay dùng đúng 2 useEffect với dependency array chính xác',
        'Effect lưu có cleanup (clearTimeout) tránh lưu dư thừa mỗi phím gõ',
        'Đổi ngày thì ghi chú tải đúng của ngày đó, quay lại vẫn còn nguyên',
        'npm run build không lỗi; npm run preview hoạt động đúng như dev',
        'Giải thích được vai trò mã băm trong tên file ở thư mục dist/',
      ],
    },
  },

  30: {
    theory: [
      {
        h: 'Từ 29 ngày rời rạc tới MỘT sản phẩm hoàn chỉnh',
        p: [
          'Capstone (đồ án tổng kết) không dạy kỹ thuật mới — nó yêu cầu TÍCH HỢP mọi thứ đã học 29 ngày thành MỘT sản phẩm thật, triển khai công khai, có thể đưa vào hồ sơ năng lực (portfolio). Đây là bài kiểm tra thực sự của việc học: biết từng mảnh ghép là một chuyện, LẮP chúng thành một khối vận hành trơn tru là chuyện khác.',
          'Ba lựa chọn phạm vi tùy năng lực và thời gian: (A) Website nhiều trang thuần HTML/CSS/JS nâng cao (như Mini Project 1/2 nhưng đầy đủ và tinh xảo hơn); (B) Ứng dụng React một trang có state phức tạp (như to-do/flashcard nhưng nhiều tính năng liên kết); (C) kết hợp cả hai — trang landing tĩnh dẫn vào một app React (mô hình gần nhất với chính app khóa học này).',
        ],
      },
      {
        h: 'Rubric 100 điểm — biết trước "luật chơi" để phân bổ công sức đúng chỗ',
        p: [
          'Ý TƯỞNG & THIẾT KẾ (20đ): vấn đề rõ ràng, đối tượng dùng cụ thể, wireframe/site map trước khi code, phân cấp thị giác mạch lạc, bảng màu/typography nhất quán.',
          'HTML NGỮ NGHĨA & ACCESSIBILITY (20đ): landmark đầy đủ, dàn ý heading đúng, alt/label/fieldset đầy đủ, contrast ≥ 4.5:1, focus-visible rõ, Lighthouse Accessibility ≥ 95, validator 0 lỗi.',
          'CSS & RESPONSIVE (20đ): box model chuẩn (border-box), dùng đúng vai trò Flexbox/Grid, biến CSS cho token, mobile-first ≥ 3 breakpoint, dark-mode-ready, transition/animation tôn trọng reduced-motion.',
          'JAVASCRIPT/REACT & TƯƠNG TÁC (20đ): logic đúng, không lỗi Console, state quản lý sạch (React: không sửa trực tiếp state; JS thuần: không rò rỉ listener), có xử lý trạng thái loading/error nếu gọi API, code chia module/component hợp lý.',
          'HIỆU NĂNG, TRIỂN KHAI & QUY TRÌNH (20đ): ảnh tối ưu AVIF/WebP đúng kích thước, Lighthouse Performance ≥ 90, deploy thành công lên URL công khai hoạt động ổn định, Git có ≥ 10 commit ý nghĩa qua nhánh/PR, README đầy đủ (mô tả, ảnh chụp, link demo, hướng dẫn chạy local).',
        ],
        note: 'Đọc kỹ: HIỆU NĂNG & TRIỂN KHAI chiếm 20/100 điểm — một sản phẩm code đẹp nhưng không deploy được, hoặc deploy nhưng ảnh nặng gây Lighthouse thấp, MẤT ĐIỂM ngang với lỗi thiết kế. Đừng để việc "chạy trên máy tôi" đến phút chót.',
      },
      {
        h: 'Danh sách kiểm tra cuối cùng trước khi nộp',
        p: [
          'Kỹ thuật: validator W3C 0 lỗi mọi trang; Lighthouse Mobile 4 mục đều ≥ 90 (riêng Accessibility ≥ 95); mở bằng ẩn danh không cache mọi thứ vẫn chạy; F5 tại mọi route con không lỗi 404 (kiểm tra kỹ nếu dùng BrowserRouter thay vì HashRouter); DevTools Console sạch, không cảnh báo đỏ.',
          'Nội dung: README có ảnh chụp màn hình + link demo + hướng dẫn npm install/npm run dev cho người muốn chạy local; mọi văn bản tiếng Việt đủ dấu, không lỗi chính tả; thông tin liên hệ/bản quyền cuối trang chính xác.',
          'Quy trình: lịch sử Git thể hiện quá trình làm việc thật (nhiều commit theo mốc, không phải một commit "up bài" duy nhất); nếu làm nhóm, mỗi thành viên có commit riêng thể hiện đóng góp.',
        ],
      },
    ],
    lab: {
      title: 'Capstone: Sản phẩm web hoàn chỉnh — thiết kế, xây dựng, tối ưu, triển khai công khai',
      objective: 'Một website/app deploy tại URL công khai, đạt rubric 100 điểm, repo GitHub đầy đủ README',
      time: '2–3 buổi (360–540 phút)',
      prep: ['Toàn bộ 29 ngày', 'Trang Triển khai demo của khóa học (hướng dẫn 5 nền tảng free)'],
      steps: [
        {
          t: 'Chọn đề tài và viết đề xuất 1 trang',
          mota: 'Chọn 1 trong 3 hướng (website nhiều trang / app React / kết hợp). Viết brief: vấn đề giải quyết, đối tượng dùng, phạm vi 5–8 "trang/màn hình", danh sách công nghệ dự kiến dùng (đối chiếu rubric để cân đối 5 mục điểm). Vẽ site map + wireframe từng màn hình, lưu vào docs/.',
        },
        {
          t: 'Dựng khung dự án và khởi tạo Git',
          mota: 'Nếu chọn hướng React: npx tạo project Vite mới hoặc mở rộng app hiện có. Nếu HTML/CSS/JS thuần: cấu trúc thư mục chuẩn như Mini Project 1. git init, commit đầu tiên "Khởi tạo cấu trúc dự án + site map", tạo repo GitHub, push sớm để có nơi lưu trữ an toàn ngay từ đầu.',
        },
        {
          t: 'Thi công theo từng mốc, commit sau mỗi mốc',
          mota: 'Chia công việc thành 6–10 mốc nhỏ tương ứng các nhóm điểm rubric (vd "Hoàn thành cấu trúc HTML ngữ nghĩa 5 trang", "Áp dụng Grid/Flexbox + responsive", "Thêm component/tương tác chính", "Tối ưu ảnh", "Style dark mode"...). Sau MỖI mốc: kiểm tra nhanh bằng validator/Lighthouse, commit với message mô tả đúng mốc đó. Tối thiểu 10 commit theo tiến độ thật, không dồn cuối.',
        },
        {
          t: 'Vòng tối ưu & accessibility toàn diện',
          mota: 'Dành hẳn một buổi CHỈ để tối ưu (không thêm tính năng mới): chạy Lighthouse từng trang, sửa mọi cảnh báo; kiểm tra Tab toàn site; đo contrast mọi cặp chữ/nền; chuyển ảnh sang AVIF/WebP đúng kích thước; kiểm thử reduced-motion; validator 0 lỗi mọi trang.',
        },
        {
          t: 'Triển khai công khai và README hoàn thiện',
          mota: 'Theo trang "Triển khai demo" của khóa học, chọn nền tảng phù hợp (GitHub Pages nếu HTML/CSS/JS thuần hoặc React build tĩnh; Vercel/Netlify nếu muốn CI/CD mượt hơn). Sau khi có URL: kiểm thử ẩn danh, F5 mọi route, mobile thật. Hoàn thiện README: giới thiệu, ảnh chụp, link demo, stack công nghệ, hướng dẫn chạy local, và một mục "Những gì đã học" phản ánh hành trình 30 ngày.',
        },
      ],
      checklist: [
        'Có brief + site map + wireframe trong docs/ trước khi thi công',
        'Validator 0 lỗi mọi trang; Lighthouse Mobile ≥ 90 cả 4 mục, Accessibility ≥ 95',
        'Deploy thành công tại URL công khai, kiểm thử ẩn danh + F5 mọi route + mobile thật đều ổn',
        '≥ 10 commit Git theo mốc tiến độ thật, có thể qua nhánh/PR',
        'README đầy đủ: mô tả, ảnh chụp, link demo, hướng dẫn cài đặt, công nghệ sử dụng',
      ],
    },
  },
}
