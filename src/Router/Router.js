import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar3 from "../Components/Navbar/Navbar";
import Contacto from "../pages/Contacto/Contacto";
import FAQ from "../pages/FAQ/FAQ";
import Fechas from "../pages/Fechas/Fechas";
import Home from "../pages/Home/Home";
import Programas from "../pages/Programas/Programas";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar3 />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="fechas" element={<Fechas />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="programas" element={<Programas />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
