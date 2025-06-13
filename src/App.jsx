import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gioithieu from "./pages/Gioithieu";
import NotFound from "./pages/NotFound";
import Xaynhatrongoi from "./pages/Xaynhatrongoi";
import Lienhe from "./pages/Lienhe";
import Suachua_caitao from "./pages/Suachua_caitao";

import { NavLink } from "react-router-dom";
import logo from "./img/Lo go thuận phát.jpg";
function App() {
  return (
    <div>
      <div className="nav_sub">
        <nav id="navbar">
          <NavLink to="/">
            <img className="logo" src={logo} alt="Logo" />
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            TRANG CHỦ
          </NavLink>

          <NavLink
            to="/gioi-thieu"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            GIỚI THIỆU
          </NavLink>

          <NavLink
            to="/xay-nha-tron-goi"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            XÂY NHÀ TRỌN GÓI
          </NavLink>

          <NavLink
            to="/sua-chua-cai-tao"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            SỬA CHỮA, CẢI TẠO
          </NavLink>

          <NavLink
            to="/lien-he"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            LIÊN HỆ
          </NavLink>
          <button class="quote-button">
            <span class="icon">★</span> NHẬN BÁO GIÁ
          </button>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<Gioithieu />} />
        <Route path="/xay-nha-tron-goi" element={<Xaynhatrongoi />} />
        <Route path="/sua-chua-cai-tao" element={<Suachua_caitao />} />
        <Route path="/lien-he" element={<Lienhe />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
