import Suachua_caitao_homme from "../line/Suachua_caitao";
import Lienhe_home from "../line/Lienhe";
import FORMLH from "../line/FORMLH";

export default function Suachua_caitao() {
  return (
    <div>
      <div className="suachua_page">
        <Suachua_caitao_homme />
      </div>
      <FORMLH />
      <Lienhe_home />
    </div>
  );
}
