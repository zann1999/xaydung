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

import {
  FaBars,
  FaPhone,
  FaFacebookMessenger,
  FaEnvelope,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";
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
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const openMenu = () => {
    setIsVisible(true);
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setIsVisible(false), 400); // khớp animation
  };

  const handleMenuClick = () => {
    closeMenu();
  };
  // Để kích hoạt class CSS
  const [isVisible, setIsVisible] = useState(false); // Giữ component trong DOM

  return (
    <div>
      <div className="nav_sub">
        <nav id="navbar">
          <div className="menu" onClick={() => setIsOpen(true)}>
            <FaBars size={24} />
          </div>

          {isOpen && (
            <div className="overlay">
              <div
                className={`menu-popup ${isOpen ? "slide-in" : "slide-out"}`}
                ref={menuRef}
              >
                <NavLink
                  onClick={handleMenuClick}
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active show_mobile" : "show_mobile"
                  }
                >
                  TRANG CHỦ
                </NavLink>
                <div className="line_menu"></div>
                <NavLink
                  onClick={handleMenuClick}
                  to="/gioi-thieu"
                  className={({ isActive }) =>
                    isActive ? "active show_mobile" : "show_mobile"
                  }
                >
                  GIỚI THIỆU
                </NavLink>
                <div className="line_menu"></div>

                <NavLink
                  onClick={handleMenuClick}
                  to="/xay-nha-tron-goi"
                  className={({ isActive }) =>
                    isActive ? "active show_mobile" : "show_mobile"
                  }
                >
                  XÂY NHÀ TRỌN GÓI
                </NavLink>
                <div className="line_menu"></div>

                <NavLink
                  onClick={handleMenuClick}
                  to="/sua-chua-cai-tao"
                  className={({ isActive }) =>
                    isActive ? "active show_mobile" : "show_mobile"
                  }
                >
                  SỬA CHỮA, CẢI TẠO
                </NavLink>
                <div className="line_menu"></div>

                <NavLink
                  onClick={handleMenuClick}
                  to="/lien-he"
                  className={({ isActive }) =>
                    isActive ? "active show_mobile" : "show_mobile"
                  }
                >
                  LIÊN HỆ
                </NavLink>
                <div className="line_menu"></div>
              </div>
            </div>
          )}

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
      <div className="bottom-nav">
        <div className="nav-item menu" onClick={() => setIsOpen(true)}>
          <FaBars size={24} />

          <span>Menu</span>
        </div>
        <a href="tel:0783537459" className="contact-link">
          <div className="nav-item">
            <FaPhone size={20} />
            <span>Gọi điện</span>
          </div>
        </a>
        <a
          href="https://www.facebook.com/share/1GdAt2fpb3/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className="nav-item livechat_box">
            <FaFacebookMessenger size={20} className="livechat" />
            <span>Live chat</span>
          </div>
        </a>
        <a
          href="https://zalo.me/0783537459"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <div className="nav-item zalo_bot">
            <SiZalo size={30} />
            <span>Zalo</span>
          </div>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=congtythuanphat57@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link contact-link-mail"
        >
          <div className="nav-item">
            <FaEnvelope size={20} />
            <span>Gửi Email</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
