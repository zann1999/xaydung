import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";

export default function Suachua_caitao() {
  return (
    <div>
      <div className="suachua">
        <h4>Sửa chữa, cải tạo</h4>
        <p>
          Quý khách đang có nhu cầu sửa chữa, cải tạo lại nhà ở, công trình và
          đang muốn tìm một công ty uy tín, chất lượng mà giá cả lại phải chăng?
        </p>
        <p>
          Công ty Xây Dựng Thuận Phát không chỉ thiết kế, thi công công trình,
          nhà ở mà còn nhận sửa chữa, cải tạo các kiến trúc, công trình.
        </p>
        <p>
          Đến với chúng tôi, quý khách không chỉ nhận được mức giá tốt nhất mà
          còn đảm bảo được chất lượng cũng như thời gian hoàn thiện nhanh chóng.
        </p>
        <img className="img_tg" src={img4} alt="" />
        <img className="img_tg" src={img5} alt="" />
        <img className="img_tg" src={img6} alt="" />
      </div>
    </div>
  );
}
