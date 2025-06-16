import img13 from "../img/13.jpg";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img8 from "../img/8.jpg";
import img9 from "../img/9.jpg";
import img16 from "../img/16.jpg";
import img11 from "../img/11.jpg";
import img15 from "../img/15.jpg";
import { NavLink } from "react-router-dom";
import FORMLH from "../line/FORMLH";

export default function Suachua_caitao() {
  return (
    <div>
      <div className="suachua">
        <div className="suachua_sub">
          <span className="suachua_subtext">SỬA CHỮA, CẢI TẠO</span>
        </div>
        <p className="font_def">
          Quý khách đang có nhu cầu sửa chữa, cải tạo lại nhà ở, công trình và
          đang muốn tìm một công ty uy tín, chất lượng mà giá cả lại phải chăng?
        </p>
        <p className="font_def">
          Công ty Xây Dựng Thuận Phát không chỉ thiết kế, thi công công trình,
          nhà ở mà còn nhận sửa chữa, cải tạo các kiến trúc, công trình.
        </p>
        <p className="font_def">
          Đến với chúng tôi, quý khách không chỉ nhận được mức giá tốt nhất mà
          còn đảm bảo được chất lượng cũng như thời gian hoàn thiện nhanh chóng.
        </p>
        <NavLink to="/sua-chua-cai-tao">
          <img className="img_tg" src={img13} alt="" />
        </NavLink>

        <NavLink to="/sua-chua-cai-tao">
          <img className="img_tg" src={img1} alt="" />
        </NavLink>
        <NavLink to="/sua-chua-cai-tao">
          <img className="img_tg" src={img2} alt="" />
        </NavLink>
        <NavLink to="/sua-chua-cai-tao">
          <img className="img_tg" src={img8} alt="" />
        </NavLink>
        <NavLink to="/sua-chua-cai-tao">
          <img className="img_tg" src={img9} alt="" />
        </NavLink>
        <NavLink to="/sua-chua-cai-tao">
          <img className="img_tg" src={img16} alt="" />
        </NavLink>
        <NavLink to="/sua-chua-cai-tao">
          <img className="img_tg" src={img11} alt="" />
        </NavLink>
        <NavLink to="/sua-chua-cai-tao">
          <img className="img_tg" src={img15} alt="" />
        </NavLink>
      </div>
    </div>
  );
}
