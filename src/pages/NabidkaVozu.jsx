import { useState } from "react";
import VuzKarta from "../components/VuzKarta.jsx";
import vozy from "../data/vozy.js";

export default function NabidkaVozu() {
  const [znacka, setZnacka] = useState("");
  const [palivo, setPalivo] = useState("");
  const [maxCena, setMaxCena] = useState("");

  const znacky = [...new Set(vozy.map((v) => v.znacka))];

  const vyfiltrovane = vozy.filter((v) => {
    if (znacka && v.znacka !== znacka) return false;
    if (palivo && v.palivo !== palivo) return false;
    if (maxCena && v.cena > Number(maxCena)) return false;
    return true;
  });

  return (
    <>
      <section className="hero maly">
        <div className="container">
          <p className="nadpisek">Nabídka vozů</p>
          <h1>Další cesta může začít tady.</h1>
        </div>
      </section>

      <section className="section svetla">
        <div className="container">
          <div className="filtry">
            <label>
              Značka
              <select value={znacka} onChange={(e) => setZnacka(e.target.value)}>
                <option value="">Všechny</option>
                {znacky.map((z) => <option key={z}>{z}</option>)}
              </select>
            </label>
            <label>
              Palivo
              <select value={palivo} onChange={(e) => setPalivo(e.target.value)}>
                <option value="">Všechna</option>
                <option>Benzín</option>
                <option>Nafta</option>
              </select>
            </label>
            <label>
              Cena do (Kč)
              <input type="number" value={maxCena} onChange={(e) => setMaxCena(e.target.value)} placeholder="např. 300000" />
            </label>
          </div>

          <p className="sedy-tmavy">Nalezeno vozů: {vyfiltrovane.length}</p>

          {vyfiltrovane.length === 0 ? (
            <p>Žádný vůz neodpovídá filtrům.</p>
          ) : (
            <div className="mrizka-3">
              {vyfiltrovane.map((vuz) => <VuzKarta key={vuz.id} vuz={vuz} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
