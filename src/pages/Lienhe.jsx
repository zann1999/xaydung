import Lienhe_home from "../line/Lienhe";
import { FaPhone, FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import Slie from "../line/Slie";

export default function Lienhe() {
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
    <div className="lh">
      <div className="backgrond_lh">
        <Slie />
      </div>
      <div className="lienhe_page">
        <div className="support-wrapper">
          <div className="support-box">
            <h4>Hotline tư vấn</h4>
            <p>Hỗ trợ 24/7 bất cứ lúc nào quý khách cần.</p>
            <div className="support-button phone">
              <FaPhone /> 09215.000000 - 093.0000.0000
            </div>
          </div>

          <div className="support-box">
            <h4>Hỗ trợ qua Facebook</h4>
            <p>Đội ngũ trực tuyến 100% đảm bảo phản hồi nhanh.</p>
            <div className="support-button fb">
              <FaFacebookF /> FANPAGE THUẬN PHÁT
            </div>
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

        <Lienhe_home />
      </div>
    </div>
  );
}
