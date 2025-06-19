import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gioithieu from "./pages/Gioithieu";
import NotFound from "./pages/NotFound";
import Xaynhatrongoi from "./pages/Xaynhatrongoi";
import Lienhe from "./pages/Lienhe";
import Suachua_caitao from "./pages/Suachua_caitao";
import React, { useRef, useState, useEffect } from "react";
import QuoteForm from "./line/Popup";
import ScrollToTop from "./pages/ScrollToTop";
import { NavLink } from "react-router-dom";
import logo from "./img/Lo go thuận phát.jpg";
import { FaBars } from "react-icons/fa";
function App() {
  const [showForm, setShowForm] = useState(false);
  const popupRef = useRef(null);

  // Đóng popup nếu click ra ngoài box (không phải toàn bộ overlay)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);
  return (
    <div>
      <div className="nav_sub">
        <nav id="navbar">
          <div className="menu">
            <FaBars size={24} />
          </div>
          <NavLink to="/" className={"logo_mobile"}>
            <img className="logo" src={logo} alt="Logo" />
          </NavLink>
          <NavLink to="/">
            <img className="logo" src={logo} alt="Logo" />
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            TRANG CHỦ
          </NavLink>
          <p className="line_nav">|</p>
          <NavLink
            to="/gioi-thieu"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            GIỚI THIỆU
          </NavLink>
          <p className="line_nav">|</p>
          <NavLink
            to="/xay-nha-tron-goi"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            XÂY NHÀ TRỌN GÓI
          </NavLink>
          <p className="line_nav">|</p>
          <NavLink
            to="/sua-chua-cai-tao"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            SỬA CHỮA, CẢI TẠO
          </NavLink>
          <p className="line_nav">|</p>
          <NavLink
            to="/lien-he"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            LIÊN HỆ
          </NavLink>
          <div className="quote-wrapper">
            <button className="quote-button" onClick={() => setShowForm(true)}>
              <span className="icon">★</span> NHẬN BÁO GIÁ
            </button>

            {showForm && (
              <div className="popup-overlay">
                <div ref={popupRef} className="boxpopup">
                  <QuoteForm />
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<Gioithieu />} />
        <Route path="/xay-nha-tron-goi" element={<Xaynhatrongoi />} />
        <Route path="/sua-chua-cai-tao" element={<Suachua_caitao />} />
        <Route path="/lien-he" element={<Lienhe />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <div class="cement-truck">
        <div class="truck-cabin"></div>
        <div class="truck-mixer"></div>
        <div class="truck-wheels">
          <div class="wheel"></div>
          <div class="wheel"></div>
          <div class="wheel"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
