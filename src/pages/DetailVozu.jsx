import { useParams, Link } from "react-router-dom";
import vozy from "../data/vozy.js";
import { formatCena, formatKm } from "../format.js";

export default function DetailVozu() {
  const { id } = useParams();
  const vuz = vozy.find((v) => v.id === Number(id));

  if (!vuz) {
    return <p className="container section">Vůz nebyl nalezen. <Link to="/nabidka-vozu">Zpět na nabídku</Link></p>;
  }

  return (
    <section className="section svetla">
      <div className="container detail">
        <div>
          <Link to="/nabidka-vozu">← Zpět na nabídku</Link>
          <div className="vuz-foto velka">Fotografie vozu</div>
          <h1 className="tmavy">{vuz.znacka} {vuz.model}</h1>
          <p className="sedy-tmavy">{vuz.verze}</p>
          <table className="parametry">
            <tbody>
              <tr><th>Rok výroby</th><td>{vuz.rok}</td></tr>
              <tr><th>Najeto</th><td>{formatKm(vuz.km)}</td></tr>
              <tr><th>Palivo</th><td>{vuz.palivo}</td></tr>
              <tr><th>Převodovka</th><td>{vuz.prevodovka}</td></tr>
            </tbody>
          </table>
          <p>{vuz.popis}</p>
        </div>
        <aside className="detail-panel">
          <p className="detail-cena">{formatCena(vuz.cena)}</p>
          <p>Máte o vůz zájem? Zavolejte nám.</p>
          <p className="footer-tel">+420 739 662 964</p>
          <Link to="/kontakt" className="btn">Poslat dotaz</Link>
          
        </aside>
      </div>
    </section>
  );
}
