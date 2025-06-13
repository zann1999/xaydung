import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";

export default function Xaynhatrongoi() {
  return (
    <div className="home_xaynhatrongoi">
      <div>
        <h2>Xây nhà trọn gói cùng Thuận Phát</h2>
        <h4>
          Bạn đang tìm kiếm đơn vị thiết kế và xây nhà trọn gói từ A – Z. Xây
          dựng Thuận Phát là sự lựa chọn tốt nhất cho bạn.
        </h4>
      </div>
      <img className="img_tg" src={img4} alt="" />
      <img className="img_tg" src={img5} alt="" />
      <img className="img_tg" src={img6} alt="" />
    </div>
  );
}
