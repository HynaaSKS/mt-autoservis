import { Link } from "react-router-dom";
import { formatCena, formatKm } from "../format.js";

export default function VuzKarta({ vuz }) {
  return (
    <div className="vuz-karta">
      <div className="vuz-foto">Fotografie vozu</div>
      <div className="vuz-info">
        <h3>{vuz.znacka} {vuz.model}</h3>
        <p className="sedy">{vuz.verze}</p>
        <p className="sedy">{vuz.rok} · {formatKm(vuz.km)} · {vuz.palivo} · {vuz.prevodovka}</p>
        <div className="vuz-cena">
          <strong>{formatCena(vuz.cena)}</strong>
          <Link to={"/nabidka-vozu/" + vuz.id}>Detail vozu →</Link>
        </div>
      </div>
    </div>
  );
}
