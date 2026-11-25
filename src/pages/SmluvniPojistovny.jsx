const pojistovny = [
  { nazev: "Pillow", logo: "/obrazky/pillow.jpg" },
  { nazev: "Kooperativa", logo: "/obrazky/kooperativa.jpg" },
  { nazev: "ČPP", logo: "/obrazky/cpp.jpg" },
  { nazev: "Allianz", logo: "/obrazky/allianz.jpg" },
  { nazev: "Uniqa", logo: "/obrazky/uniqa.jpg" },
  { nazev: "Pojišťovna VZP", logo: "/obrazky/vzp.jpg" },
  { nazev: "Hasičská vzájemná pojišťovna", logo: "/obrazky/hvp.jpg" },
  { nazev: "Slavia pojišťovna", logo: "/obrazky/slavia-pojistovna.jpg" },
];

export default function SmluvniPojistovny() {
  return (
    <section className="pojistovny">
      <div className="container pojistovny-obsah">
        <div className="pojistovny-text">
          <p className="nadpisek">04 / Když se něco přihodí</p>
          <h2>Oprava po nehodě? Obraťte se na nás.</h2>
          <p className="sedy">
            Jsme smluvní servis osmi pojišťoven. Pomůžeme vám s nahlášením pojistné
            události, nafotíme a nacení poškození a opravu vyřídíme přímo s pojišťovnou.
            Vy se nemusíte o nic starat.
          </p>
          <p className="pojistovny-kontakt-popis">Karosárna · lakovna · pojistné události</p>
          <a href="tel:+420604947967" className="pojistovny-telefon">+420 604 947 967</a>
          <p className="pojistovny-jmeno">Martin Táborský</p>
        </div>

        <div className="pojistovny-mrizka">
          {pojistovny.map((p) => (
            <div className="pojistovna" key={p.nazev}>
              <img src={p.logo} alt={p.nazev} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}