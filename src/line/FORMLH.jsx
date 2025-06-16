import Lienhe_home from "../line/Lienhe";
import { FaPhone, FaFacebookF } from "react-icons/fa";
import { useState } from "react";

export default function FORRMLH() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    type: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu gửi:", form);
    // TODO: Gửi dữ liệu về server hoặc xử lý tại đây
  };
  return (
    <div className="fomrmlh">
      <div className="backgrond_lh"></div>
      <div className="lienhe_page">
        <div className="support-wrapper">
          <div className="support-box">
            <h4>Hotline tư vấn</h4>
            <p>Hỗ trợ 24/7 bất cứ lúc nào quý khách cần.</p>

            <div class="call-wrapper">
              <div class="call-pulse"></div>
              <button class="call-button">
                <div className="support-button phone">
                  <FaPhone /> 078.353.7459 - 0961.033.660
                </div>
              </button>
            </div>
          </div>

          <div className="support-box">
            <h4>Hỗ trợ qua Facebook</h4>
            <p>Đội ngũ trực tuyến 100% đảm bảo phản hồi nhanh.</p>
            <a
              href="https://www.facebook.com/share/1GdAt2fpb3/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div class="call-wrapper">
                <div class="call-pulse"></div>
                <button class="call-button">
                  <div className="support-button fb">
                    <FaFacebookF /> FANPAGE THUẬN PHÁT
                  </div>
                </button>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h2>LIÊN HỆ VỚI THUẬN PHÁT</h2>
          <hr className="underline" />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Số điện thoại"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Địa chỉ xây dựng?"
              value={form.address}
              onChange={handleChange}
              required
            />
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              required
            >
              <option value="">Chọn loại nhà để nhận báo giá</option>
              <option value="cap4">Nhà cấp 4</option>
              <option value="2tang">Nhà 2 tầng</option>
              <option value="mainhat">Nhà mái Nhật</option>
            </select>
            <button type="submit">NHẬN BÁO GIÁ XÂY NHÀ</button>
          </form>
        </div>
      </div>
    </div>
  );
}
