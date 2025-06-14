import Gioithieu_home from "../line/Gioithieu";
import Lienhe_home from "../line/Lienhe";

import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";

export default function Gioithieu() {
  return (
    <div>
      <div className="home_gioithieu_page">
        <div className="home_gioithieu">
          <div>
            <h2>VỀ CHÚNG TÔI | XÂY DỰNG THUẬN PHÁT</h2>
            <img className="img_tg" src={img4} alt="" />
            <img className="img_tg" src={img5} alt="" />
            <img className="img_tg" src={img6} alt="" />
            <h4>
              Công ty xây dựng Thuận Phát là công ty chuyên thiết kế, thi công
              xây dựng các công trình nhà phố, biệt thự, trường học, khách sạn.
              Chúng tôi cung cấp giải pháp trọn gói cho lĩnh vực công trình dân
              dụng đến các dự án công nghiệp.
            </h4>
            <h4>
              Với đội ngũ quản lý chuyên nghiệp cùng với đội ngũ kỹ sư giàu kinh
              nghiệm và thợ thi công lành nghề, công ty xây dựng Thuận Phát luôn
              đảm bảo chất lượng, nhanh chóng theo yêu cầu khách hàng đề ra.
            </h4>
          </div>
        </div>
      </div>
      <Lienhe_home />
    </div>
  );
}
