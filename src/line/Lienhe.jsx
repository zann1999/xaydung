import { FaHeadset } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Lienhe() {
  return (
    <div className="lienhe">
      <div className="contact_sub">
        <div className="contact">
          <div className="contact-item">
            <FaHeadset className="contact-icon" />
            <div>
              <div>Hotline hỗ trợ 24/7</div>
              <strong>078.353.7459 - 0961.033.660</strong>
            </div>
          </div>

          <div className="contact-item">
            <SiZalo className="contact-icon" />
            <div>
              <div>Tư vấn qua Zalo</div>
              <strong>078.353.7459</strong>
            </div>
          </div>

          <div className="contact-item">
            <MdEmail className="contact-icon" />
            <div>
              <div>Gửi yêu cầu</div>
              <strong>congtythuanphat57@gmail.com</strong>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          {/* Cột 1: Thông tin liên hệ */}
          <div className="footer-col">
            <h3>Thông tin liên hệ</h3>
            <p>
              <strong>CÔNG TY XÂY DỰNG THUẬN PHÁT</strong>
            </p>

            <p>
              <FaPhone /> Hotline: 078.353.7459 - 0961.033.660
            </p>
            <p>
              <FaEnvelope /> Email: congtythuanphat57@gmail.com
            </p>
            <p>
              <FaMapMarkerAlt /> Địa chỉ 1: 278/5 DT743A, khu phố Đông An,
              phường Tân Đông Hiệp, Dĩ An, Bình Dương.
            </p>
            <p>
              <FaMapMarkerAlt /> Địa chỉ 2: thôn Nông Nghiệp, xã Hòa Bình 1, Tây
              Hòa, Phú Yên.
            </p>
            {/* <div className="social-icons">
              <FaFacebook />
              <FaInstagram />
              <FaTiktok />
              <FaYoutube />
            </div> */}
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div className="footer-col">
            <h3>Liên kết nhanh</h3>
            <ul>
              <NavLink to="/">
                <li>Trang chủ</li>
              </NavLink>

              <NavLink to="/gioi-thieu">
                <li>Giới thiệu</li>
              </NavLink>

              <NavLink to="/xay-nha-tron-goi">
                <li>Nhà cấp 4</li>
              </NavLink>

              <NavLink to="/xay-nha-tron-goi">
                <li>Nhà hiện đại 2 - 4 tầng</li>
              </NavLink>

              <NavLink to="/xay-nha-tron-goi">
                <li>Nhà mái Nhật</li>
              </NavLink>

              <NavLink to="/sua-chua-cai-tao">
                <li>Sửa chữa, cải tạo</li>
              </NavLink>

              <NavLink to="/lien-he">
                <li>Liên hệ</li>
              </NavLink>
            </ul>
          </div>

          {/* Cột 3: Fanpage Facebook */}
          <div className="footer-col">
            <h3>
              <FaFacebook /> Fanpage Facebook
            </h3>
            <a
              href="https://www.facebook.com/share/1GdAt2fpb3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              XÂY DỰNG THUẬN PHÁT
            </a>
          </div>
        </div>

        {/* Dòng bản quyền */}
        <div className="footer-bottom">
          Copyright 2025 © <strong>xaydungtrongoithuanphat.com</strong>
        </div>
      </footer>
    </div>
  );
}
