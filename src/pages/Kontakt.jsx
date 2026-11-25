import { useState } from "react";

export default function Kontakt() {
  const [odeslano, setOdeslano] = useState(false);

  function odeslat(e) {
    e.preventDefault(); 
    setOdeslano(true);
  }

  return (
    <>
      <section className="hero maly">
        <div className="container">
          <p className="nadpisek">Kontakt</p>
          <h1>Ozvěte se. O auto se postaráme.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container mrizka-2">
          <div className="karta">
            <h3>MT AUTOSERVIS s.r.o.</h3>
            <p>Spyšovská 297, 507 43 Sobotka</p>
            <p>Po–Pá 7:00–16:00, sobota dle domluvy</p>
            <p>Objednání: +420 739 662 964, 737 003 333</p>
            <p>Karosárna a lakovna: +420 604 947 967 (Martin Táborský)</p>
            <p>E-mail: mtautoservis@seznam.cz</p>
          </div>

          <div className="karta">
            {odeslano ? (
              <p>Děkujeme, ozveme se vám co nejdříve.</p>
            ) : (
              <form className="formular" onSubmit={odeslat}>
                <label>Jméno<input required /></label>
                <label>Telefon<input type="tel" required /></label>
                <label>E-mail<input type="email" /></label>
                <label>Váš vůz<input /></label>
                <label>Vaše požadavky a problémy, které nám umožní identifikovat problém<textarea rows="4" required /></label>
                <label>Zpráva pro nás<textarea rows="4" /></label>
                <button className="btn" type="submit">Odeslat</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
