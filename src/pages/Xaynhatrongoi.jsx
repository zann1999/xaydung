import Xaynhatrongoi_home from "../line/Xaynhatrongoi";
import Lienhe_home from "../line/Lienhe";
import {
  FaBalanceScale,
  FaTools,
  FaStar,
  FaQuestionCircle,
} from "react-icons/fa";
export default function Xaynhatrongoi() {
  const cellStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "center",
  };
  const items = [
    {
      icon: <FaBalanceScale size={40} color="#007dc5" />,
    },
    {
      icon: <FaTools size={40} color="#007dc5" />,
    },
    {
      icon: <FaStar size={40} color="#007dc5" />,
    },
    {
      icon: <FaQuestionCircle size={40} color="#007dc5" />,
    },
  ];
  return (
    <div>
      <Xaynhatrongoi_home />
      <div className="xaynha">
        <div className="xaynhatrongoi_page">
          <table style={{ borderCollapse: "collapse" }} className="bang">
            <thead className="title">
              <tr>
                <th style={cellStyle}></th>
                <th style={cellStyle}>Xây nhà trọn gói</th>
                <th style={cellStyle}>Xây nhà truyền thống</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={cellStyle} className="uudiem">
                  Ưu điểm:{" "}
                </td>
                <td style={cellStyle}>
                  {" "}
                  Chi phí xây dựng rõ ràng minh bạch và tránh được những rủi ro
                  phát sinh chi phí trong quá trình thi công.
                </td>
                <td style={cellStyle}>
                  {" "}
                  Có thể thất thoát vật tư, chi phí xây dựng tăng không kiểm
                  soát, kém chất lượng do đơn vị nhà thầu không có sự uy tín,
                  chưa nhiều kinh nghiệm thi công.
                </td>
              </tr>
              <tr>
                <td style={cellStyle} className="nhuocdiem">
                  Nhược điểm:{" "}
                </td>
                <td style={cellStyle}>
                  {" "}
                  Khả năng chịu lực tốt, độ bền và tuổi thọ nhà rất cao, khá
                  linh hoạt trong tạo hình kiến trúc và trang trí.
                </td>
                <td style={cellStyle}>
                  {" "}
                  Chi phí xây dựng nhà cao, thời gian xây nhà tốn nhiều thời
                  gian có thể từ 6 tháng đến 1 năm.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="quytrinh">
          <h3>Quy trình xây nhà trọn gói tại xây dụng Thuận Phát</h3>
          <div>
            <h4>Bước 1: </h4>
            <p>
              Tiếp nhận thông tin từ khách hàng, sẽ được tính toán khái quát dựa
              theo m2 xây dựng và tổng kinh phí dự kiến xây dựng công trình.
            </p>
          </div>
          <div>
            <h4>Bước 2: </h4>
            <p>Tư vấn và báo giá cho khách hàng.</p>
          </div>
          <div>
            <h4>Bước 3: </h4>
            <p>
              Nếu khách hàng và nhà thầu thống nhất sẽ đi đến ký hợp đồng và đặt
              tiền cọc.
            </p>
          </div>
          <div>
            <h4>Bước 4: </h4>
            <p>
              Nhà thầu tiến hành bàn giao hồ sơ thiết kế kiến trúc cùng kết cấu
              và dự toán cho khách hàng xem xét và thống nhất.
            </p>
          </div>
          <div>
            <h4>Bước 5: </h4>
            <p>
              Nhà thầu bắt tay vào việc thực hiện hợp đồng, đảm bảo triển khai
              thi công công trình đúng tiến độ, đảm bảo được chất lượng trong
              suốt quá trình thi công
            </p>
          </div>
          <div>
            <h4>Bước 6: </h4>
            <p>
              Khách hàng nghiệm thu công trình và tiến hành thanh lý hợp đồng.
              Bên cạnh đó, nhà thầu đưa ra các chính sách bảo hành cho khách
              hàng.
            </p>
          </div>
        </div>
        <div className="noibat">
          <h3>
            Điểm nổi bật dịch vụ xây nhà trọn gói Xây Dựng Thuận Phát so với
            những đơn vị xây dựng khác
          </h3>

          <h6>
            <div className="feature-icon">
              <FaStar size={40} color="#007dc5" />
            </div>
            Thi công nhanh, đúng tiến độ.
          </h6>

          <h6>
            {" "}
            <div className="feature-icon">
              <FaStar size={40} color="#007dc5" />
            </div>
            Khách hàng sẽ sở hữu được ngôi nhà đẹp, sang trọng, thiết kế như ý.
          </h6>

          <h6>
            {" "}
            <div className="feature-icon">
              <FaStar size={40} color="#007dc5" />
            </div>
            Tiết kiệm tối đa chi phí xây dựng của gia chủ.
          </h6>

          <h6>
            {" "}
            <div className="feature-icon">
              <FaStar size={40} color="#007dc5" />
            </div>
            Đảm bảo chất lượng từng hạng mục công trình.
          </h6>

          <h6>
            {" "}
            <div className="feature-icon">
              <FaStar size={40} color="#007dc5" />
            </div>
            Không phát sinh chi phí trong suốt quá trình thi công.
          </h6>

          <h6>
            {" "}
            <div className="feature-icon">
              <FaStar size={40} color="#007dc5" />
            </div>
            Sử dụng vật tư đạt chất lượng tốt nhất để đảm bảo chất lượng công
            trình.
          </h6>

          <h6>
            {" "}
            <div className="feature-icon">
              <FaStar size={40} color="#007dc5" />
            </div>
            Có chế độ, chính sách bảo hành rõ ràng từng hạng mục thi công.
          </h6>
        </div>
        <div className="cauhoithuonggap">
          <h3>Các câu hỏi thường gặp về giá xây nhà trọn gói</h3>
          <div>
            <h4>1. Xây nhà trọn gói có phát sinh thêm phí gì không?</h4>
            <h6>
              Không, chắc chắn là không có phát sinh thêm bất kỳ chi phí gì, vì
              ngay từ đầu trước khi ký hợp đồng công ty đã tư vấn rỡ cho khách
              hàng về vật liệu, thiết kế chi tiết và lên dự toán rất chi tiết từ
              yêu cầu của gia chủ.
            </h6>
          </div>
          <div>
            <h4>2. Có nên xây nhà trọn gói không?</h4>
            <h6>
              Tùy vào điều kiện kinh tế, thời gian, kiến thức về xây dựng của
              khách hàng để quyết định xem bạn có nên sử dụng dịch vụ xây nhà
              trọn gói hay không?. Đối với những khách hàng không hiểu biết
              nhiều về lĩnh vực xây dựng và không có thời gian thì nên sử dụng
              dịch vụ xây nhà trọn gói để dược đảm bảo về chất lượng và tiến độ
              công trình.
            </h6>
          </div>
          <div>
            <h4>
              3. Chủ nhà có cần phải chăm lo bồi dưỡng phần cafe hay nước nôi
              cho thợ không?
            </h4>
            <h6>
              So với trước đây ở những công trình xây nhà truyền thống, chủ nhà
              đều sẽ rất quen thuộc với hình thức là bồi dưỡng cafe, nước uống
              cho thợ thi công. Tuy nhiên với công ty Xây Dựng Thuận Phát thì
              việc chuẩn bị nước nôi, cafe cũng như là bồi dưỡng thì đều đã được
              chúng tôi chi trả hết và đều có chế độ thưởng phạt rõ ràng, chủ
              nhà không cần phải lo thêm các phần chi phí trên, trong hợp đồng
              bên cty cũng ghi rõ, nếu chủ nhà cho tiền hay bồi dưỡng mà không
              được phía công ty đồng ý thì chủ nhà còn bị phạt tiền 20 triệu
              đồng.
            </h6>
          </div>
          <div>
            <h4>4. Tại sao xây nhà trong hẻm lại phát sinh thêm đơn giá?</h4>
            <h6>
              Thực tế khi thi công những công trình sẽ có những điều kiện khác
              nhau. Với những khu đất xây dựng nằm nơi đường xá đi lại quá khó
              khăn, trong những con hẻm, hạn chế quá trình vận chuyển nguyên vật
              tư, phát sinh chi phí do phải gọi xe nhỏ lẻ,... Vì vậy Chủ Đầu Tư
              cần phải tốn thêm chi phí để hỗ trợ những phần này khi thi công
              xây nhà trong hẻm sâu, nhỏ bắt buộc.
            </h6>
          </div>
          <div>
            <h4>
              5. Tại sao đơn giá tăng lên khi diện tích xây nhà giảm dần (diện
              tích quá nhỏ) ?
            </h4>
            <h6>
              Trong quá trình thi công sẽ có nhiều chi phí mà công trình dù nhỏ
              hay lớn đều phải tốn công giống như nhau (đổ bê tông, vận chuyển
              xà bần, cổng rào, bảo vệ công trình, chi phí quản lý vận hành,
              giám sát,...). Do đó công trình có quy mô nhỏ, đơn giá chênh lệch
              tăng lên nhằm bù đắp một phần cho các chi phí đó.
            </h6>
          </div>
        </div>
      </div>

      <Lienhe_home />
    </div>
  );
}
