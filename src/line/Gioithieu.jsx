import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";

export default function Gioithieu() {
  return (
    <div className="home_gioithieu">
      <img className="img_gt_5" src={img4} alt="" />

      <img className="img_gt_4" src={img5} alt="" />

      <div className="gioithieu">
        <h2>VỀ CHÚNG TÔI | XÂY DỰNG THUẬN PHÁT</h2>
        <h4>
          Công ty xây dựng Thuận Phát là công ty chuyên thiết kế, thi công xây
          dựng các công trình nhà phố, biệt thự, trường học, khách sạn. Chúng
          tôi cung cấp giải pháp trọn gói cho lĩnh vực công trình dân dụng đến
          các dự án công nghiệp.
        </h4>
        <h4>
          Với đội ngũ quản lý chuyên nghiệp cùng với đội ngũ kỹ sư giàu kinh
          nghiệm và thợ thi công lành nghề, công ty xây dựng Thuận Phát luôn đảm
          bảo chất lượng, nhanh chóng theo yêu cầu khách hàng đề ra.
        </h4>
        <button class="custom-button">
          Giới thiệu <span class="arrow">›</span>
        </button>
      </div>
    </div>
  );
}
