import { Link } from "react-router-dom";
import VuzKarta from "../components/VuzKarta.jsx";
import vozy from "../data/vozy.js";
import SmluvniPojistovny from "./SmluvniPojistovny.jsx";

const sluzby = [
  { nazev: "Mechanický servis", text: "Pravidelná údržba, opravy i garanční prohlídky nových vozidel." },
  { nazev: "Karosárna & lakovna", text: "Klempířské a lakýrnické práce, opravy poškozené karoserie." },
  { nazev: "Klimatizace & geometrie", text: "Servis klimatizace a kontrola i seřízení geometrie kol." },
  { nazev: "STK, emise & autoskla", text: "Měření emisí, vyřízení STK a výměna autoskel." },
];

const kroky = [
  { nazev: "Domluvíme termín", text: "Zavolejte nebo napište. Probereme váš požadavek." },
  { nazev: "Probereme opravu", text: "Při převzetí upřesníme rozsah práce a další postup." },
  { nazev: "Postaráme se o vůz", text: "Provedeme dohodnutý servis nebo opravu." },
  { nazev: "Předáme vám klíče", text: "Vysvětlíme provedené práce a předáme auto." },
];

export default function Uvod() {
  const prvniTriVozy = vozy.slice(0, 3); // na úvodu ukážeme jen 3 vozy

  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="nadpisek">MT AUTOSERVIS · SOBOTKA</p>
          <h1>Váš vůz.<br />Naše starost.</h1>
          <p className="podnadpis">Autoservis &amp; autolakovna v Sobotce.</p>
          <p className="sedy">Od běžné údržby po opravu karoserie. Postaráme se o vozy všech značek.</p>
          <div className="tlacitka">
            <Link to="/kontakt" className="btn">Objednat servis</Link>
            <Link to="/nabidka-vozu" className="btn btn-obrys">Prohlédnout vozy</Link>
          </div>
        </div>
      </section>

      <section className="modry-pruh">
        <div className="container mrizka-3">
          <div><small>Objednání servisu</small><strong>+420 739 662 964</strong></div>
          <div><small>Otevírací doba</small><strong>Po–Pá 7:00–16:00</strong></div>
          <div><small>Kde nás najdete</small><strong>Spyšovská 297, Sobotka</strong></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="nadpisek">01 / Co pro vás uděláme</p>
          <h2>Jeden servis. Kompletní péče o vaše auto.</h2>
          <div className="mrizka-4">
            {sluzby.map((s) => (
              <div className="karta" key={s.nazev}>
                <h3>{s.nazev}</h3>
                <p className="sedy">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="nadpisek">02 / Jak to u nás funguje</p>
          <h2>Od prvního telefonátu zpět na silnici.</h2>
          <div className="mrizka-4">
            {kroky.map((k, index) => (
              <div key={k.nazev}>
                <p className="cislo-kroku">0{index + 1}</p>
                <h3>{k.nazev}</h3>
                <p className="sedy">{k.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section svetla">
        <div className="container">
          <p className="nadpisek">03 / Nabídka vozů</p>
          <h2>Další cesta může začít tady.</h2>
          <div className="mrizka-3">
            {prvniTriVozy.map((vuz) => (
              <VuzKarta key={vuz.id} vuz={vuz} />
            ))}
          </div>
          <p><Link to="/nabidka-vozu" className="btn">Všechny vozy</Link></p>
        </div>
      </section>

      <SmluvniPojistovny />

      <section className="modry-pruh velky">
        <div className="container">
          <h2>Domluvme si termín servisu.</h2>
          <p className="velky-tel">+420 739 662 964</p>
          <Link to="/kontakt" className="btn btn-tmave">Přejít na kontakt</Link>
        </div>
      </section>
    </>
  );
}