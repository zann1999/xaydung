import React from "react";

const QuoteForm = () => {
  return (
    <div className="boxpopup">
      <div className="quote-form-container">
        <div className="quote-form-header">
          <h2>Điền thông tin báo giá và nhận khuyến mãi!</h2>
          <p className="quote-form-hotline">📞 078.353.7459 - 0961.033.660</p>
          <hr />
          <p className="quote-form-note">
            Hoặc để lại số điện thoại, chuyên viên Thuận Phát sẽ liên hệ ngay
            trong ít phút!
          </p>
        </div>

        <form className="quote-form-body">
          <input type="text" placeholder="Họ và tên" />
          <input type="tel" placeholder="Số điện thoại" />
          <input type="text" placeholder="Địa chỉ xây dựng?" />
          <select>
            <option>Chọn loại nhà để nhận báo giá</option>
            <option>Nhà cấp 4</option>
            <option>Nhà phố</option>
            <option>Biệt thự</option>
          </select>
          <button type="submit">NHẬN BÁO GIÁ XÂY NHÀ</button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
