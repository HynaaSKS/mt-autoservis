import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-sloupce">
        <div>
          <Link to="/">
  <img src="/obrazky/logo.svg" alt="MT AUTOSERVIS" className="logo-obrazek" />
</Link>
          <p>Servis vozidel všech značek, autolakovna a klempířské práce. V Sobotce od roku 2014.</p>
        </div>
        <div>
          <h4>Rychlé odkazy</h4>
          <p><Link to="/">Úvod</Link></p>
          <p><Link to="/sluzby">Naše služby</Link></p>
          <p><Link to="/nabidka-vozu">Nabídka vozů</Link></p>
          <p><Link to="/kontakt">Kontakt</Link></p>
        </div>
        <div>
          <h4>Objednání do servisu</h4>
          <p className="footer-tel">+420 739 662 964</p>
          <p>+420 737 003 333</p>
          <p>mtautoservis@seznam.cz</p>
        </div>
        <div>
          <h4>Najdete nás v Sobotce</h4>
          <p>Spyšovská 297, 507 43 Sobotka</p>
          <p>Po–Pá 7:00–16:00, sobota dle domluvy</p>
        </div>
      </div>
      <div className="container footer-spodek">
        © 2026 MT AUTOSERVIS s.r.o. · IČ 28851137
      </div>
    </footer>
  );
}

