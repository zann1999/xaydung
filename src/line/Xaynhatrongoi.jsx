import React from "react";
import img6 from "../img/6.jpg";
import img15 from "../img/15.jpg";
import img3 from "../img/3.jpg";
import img7 from "../img/7.jpg";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  FaBalanceScale,
  FaTools,
  FaStar,
  FaQuestionCircle,
} from "react-icons/fa";

export default function Xaynhatrongoi() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const offset = 200; // Khoảng cách cách top 200px
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  const items = [
    {
      icon: <FaBalanceScale size={40} color="#007dc5" />,
    },
    {
      icon: <FaTools size={40} color="#007dc5" />,
    },
    {
      icon: <FaStar size={40} color="#007dc5" />,
    },
    {
      icon: <FaQuestionCircle size={40} color="#007dc5" />,
    },
  ];

  return (
    <div className="box_xaynha">
      <div className="home_xaynhatrongoi">
        <div className="section">
          <h2>XÂY NHÀ TRỌN GÓI CÙNG THUẬN PHÁT</h2>
          <p>
            Bạn đang tìm kiếm đơn vị thiết kế và xây nhà trọn gói từ A – Z. Xây
            dựng Thuận Phát là sự lựa chọn tốt nhất cho bạn.
          </p>

          <div className="features">
            <div className="feature-blob">
              <div className="feature-content">
                <NavLink to="/xay-nha-tron-goi#uunhuoc">
                  <div className="feature-box">
                    <div className="feature-icon">
                      <FaBalanceScale size={40} color="#007dc5" />
                    </div>
                    <div className="feature-title">Ưu nhược điểm</div>
                    <div className="feature-description">
                      Chi phí xây dựng rõ ràng minh bạch và tránh được những rủi
                      ro phát sinh chi phí trong quá trình thi công.
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="feature-blob">
              <div className="feature-content">
                <NavLink to="/xay-nha-tron-goi#quytrinh">
                  <div className="feature-box">
                    <div className="feature-icon">
                      <FaTools size={40} color="#007dc5" />
                    </div>
                    <div className="feature-title">Quy trình xây nhà</div>
                    <div className="feature-description">
                      Tiếp nhận thông tin từ khách hàng, được tính toán khái
                      quát dựa theo m2 xây dựng...
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="feature-blob">
              <div className="feature-content">
                <NavLink to="/xay-nha-tron-goi#noibat">
                  <div className="feature-box">
                    <div className="feature-icon">
                      <FaStar size={40} color="#007dc5" />
                    </div>
                    <div className="feature-title">Điểm nổi bật</div>
                    <div className="feature-description">
                      Thi công nhanh, đúng tiến độ. Tiết kiệm tối đa chi phí xây
                      dựng của gia chủ...
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="feature-blob">
              <div className="feature-content">
                <NavLink to="/xay-nha-tron-goi#cauhoithuonggap">
                  <div className="feature-box">
                    <div className="feature-icon">
                      <FaQuestionCircle size={40} color="#007dc5" />
                    </div>
                    <div className="feature-title">Các câu hỏi thường gặp</div>
                    <div className="feature-description">
                      Xây nhà trọn gói có phát sinh thêm phí gì không? Có nên
                      xây nhà trọn gói không?
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <NavLink to="/xay-nha-tron-goi">
          <img className="img_tg" src={img6} alt="" />
        </NavLink>

        <NavLink to="/xay-nha-tron-goi">
          <img className="img_tg" src={img15} alt="" />
        </NavLink>

        <NavLink to="/xay-nha-tron-goi">
          <img className="img_tg" src={img3} alt="" />
        </NavLink>

        <NavLink to="/xay-nha-tron-goi">
          <img className="img_tg" src={img7} alt="" />
        </NavLink>
      </div>
    </div>
  );
}
