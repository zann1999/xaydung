import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import xe from "../img/xe.png";

import { NavLink } from "react-router-dom";
export default function Gioithieu() {
  return (
    <div className="home_gioithieu">
      <NavLink to="/gioi-thieu">
        <img className="img_gt_5" src={img4} alt="" />
      </NavLink>
      <NavLink to="/gioi-thieu" className={"a121"}>
        <img className="img_gt_4" src={img5} alt="" />
      </NavLink>
      <img className="xe" src={xe} alt="" />

      <div className="gioithieu">
        <h2>
          <span className="span_gt_1 box box-1">VỀ CHÚNG TÔI</span>
          <div class="vertical-line"></div>
          <span className="span_gt_2 box box-2">XÂY DỰNG</span>{" "}
          <span className="span_gt_3 box box-3">THUẬN PHÁT</span>
        </h2>

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

        <NavLink to="/gioi-thieu">
          <button class="custom-button">
            Giới thiệu <span class="arrow">›</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
}
