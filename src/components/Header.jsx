import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [menuOtevrene, setMenuOtevrene] = useState(false); 

  return (
    <header className="header">
      <div className="topbar">
        <div className="container topbar-obsah">
          <span>AUTOSERVIS &amp; AUTOLAKOVNA SOBOTKA</span>
          <span className="skryt-mobil">Po–Pá 7:00–16:00 · mtautoservis@seznam.cz</span>
        </div>
      </div>

      <div className="container header-obsah">
        <Link to="/">
          <img src="/obrazky/logo.svg" alt="MT AUTOSERVIS" className="logo-obrazek" />
        </Link>

        <button className="tlacitko-menu" onClick={() => setMenuOtevrene(!menuOtevrene)}>☰</button>

        <nav className={menuOtevrene ? "menu otevrene" : "menu"} onClick={() => setMenuOtevrene(false)}>
          <NavLink to="/" end>Úvod</NavLink>
          <NavLink to="/sluzby">Naše služby</NavLink>
          <NavLink to="/nabidka-vozu">Nabídka vozů</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
          <Link to="/kontakt" className="btn">Objednat servis</Link>
        </nav>
      </div>
    </header>
  );
}

