import { FaHeadset } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { MdEmail } from "react-icons/md";

import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
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
              <strong>09215.44444</strong>
            </div>
          </div>

          <div className="contact-item">
            <SiZalo className="contact-icon" />
            <div>
              <div>Tư vấn qua Zalo</div>
              <strong>0000000000</strong>
            </div>
          </div>

          <div className="contact-item">
            <MdEmail className="contact-icon" />
            <div>
              <div>Gửi yêu cầu</div>
              <strong>aaaaaaaaaaaaaaaaaaa@gmail.com</strong>
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
              <FaPhone /> Hotline: 0000000000 - 0000000000
            </p>
            <p>
              <FaEnvelope /> Email: aaaaaaaaaaaaaaaaaa@gmail.com
            </p>
            <div className="social-icons">
              <FaFacebook />
              <FaInstagram />
              <FaTiktok />
              <FaYoutube />
            </div>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div className="footer-col">
            <h3>Liên kết nhanh</h3>
            <ul>
              <li>Trang chủ</li>
              <li>Giới thiệu</li>
              <li>Thiết kế nhà cấp 4</li>
              <li>Thiết kế nhà hiện đại 2 tầng</li>
              <li>Thiết kế nhà mái Nhật</li>
              <li>Dự án đã hoàn thiện</li>
              <li>Kiến thức</li>
              <li>Liên hệ</li>
            </ul>
          </div>

          {/* Cột 3: Fanpage Facebook */}
          <div className="footer-col">
            <h3>Fanpage Facebook</h3>
            <img src="/img/fbpage.png" alt="Fanpage" className="fb-image" />
            <img
              src="/img/bocongthuong.png"
              alt="Bộ Công Thương"
              className="cert-image"
            />
          </div>
        </div>

        {/* Dòng bản quyền */}
        <div className="footer-bottom">
          Copyright 2025 © <strong>AAAAAAAAAAAAAAAAAAA.vn</strong>
        </div>
      </footer>
    </div>
  );
}
