const sluzby = [
  { nazev: "Mechanický servis", text: "Pravidelná údržba, výměna olejů a filtrů, brzdy, garanční prohlídky." },
  { nazev: "Klimatizace", text: "Kontrola, plnění a čištění klimatizace." },
  { nazev: "Geometrie", text: "Kontrola a seřízení geometrie kol." },
  { nazev: "STK a emise", text: "Měření emisí a příprava vozu na technickou kontrolu." },
  { nazev: "Autoskla", text: "Výměna a oprava autoskel." },
  { nazev: "Pneuservis", text: "Výměna a oprava pneumatik, přezouvání a vyvažování kol." },
  { nazev: "Lakovna", text: "Lakování a oprava karoserie." },
  { nazev: "Klempířské práce", text: "Opravy karoserie, odstranění promáčklin a poškození." },
  

];

export default function Sluzby() {
  return (
    <>
      <section className="hero maly">
        <div className="container">
          <p className="nadpisek">Naše služby</p>
          <h1>Kompletní péče o vaše auto.</h1>
        </div>
      </section>
      <section className="section">
        <div className="container mrizka-3">
          {sluzby.map((s) => (
            <div className="karta" key={s.nazev}>
              <h3>{s.nazev}</h3>
              <p className="sedy">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
