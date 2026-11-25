import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Uvod from "./pages/Uvod.jsx";
import Sluzby from "./pages/Sluzby.jsx";
import NabidkaVozu from "./pages/NabidkaVozu.jsx";
import DetailVozu from "./pages/DetailVozu.jsx";
import Kontakt from "./pages/Kontakt.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Uvod />} />
          <Route path="/sluzby" element={<Sluzby />} />
          <Route path="/nabidka-vozu" element={<NabidkaVozu />} />
          <Route path="/nabidka-vozu/:id" element={<DetailVozu />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<p className="container section">Stránka nenalezena.</p>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
