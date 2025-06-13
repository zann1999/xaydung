import Gioithieu from "../line/Gioithieu";
import Xaynhatrongoi from "../line/Xaynhatrongoi";
import Lienhe from "../line/Lienhe";
import Suachua_caitao from "../line/Suachua_caitao";
import Slie from "../line/Slie";

export default function Home() {
  return (
    <div className="home">
      <Slie />

      <Gioithieu />
      <Xaynhatrongoi />
      <Suachua_caitao />
      <Lienhe />
    </div>
  );
}
