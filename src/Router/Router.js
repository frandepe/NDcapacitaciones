import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar3 from "../Components/Navbar/Navbar";
import Login from "../Components/Auth/Login";
import Dashboard from "../pages/Admin/Dashboard";
import Contacto from "../pages/Contacto/Contacto";
import FAQ from "../pages/FAQ/FAQ";
import Fechas from "../pages/Fechas/Fechas";
import Home from "../pages/Home/Home";
import NDcapacitaciones from "../pages/NDcapacitaciones/NDcapacitaciones";
import Programas from "../pages/Programas/Programas";
import AdminCursos from "../pages/Admin/AdminCursos";
import AdminCursosForm from "../pages/Admin/AdminCursosForm";
import AdminAvalForm from "../pages/Admin/AdminAvalForm";
import PrivateRoutes from "./private.routes";
import AdminAval from "../pages/Admin/AdminAval";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar3 />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="backoffice/cursosForm" element={<AdminCursosForm />} />
            <Route path="backoffice/cursos" element={<AdminCursos />} />
            <Route path="backoffice/aval" element={<AdminAval />} />
            <Route path="backoffice/avalForm" element={<AdminAvalForm />} />
            <Route path="backoffice" element={<Dashboard />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="info-nd-capacitaciones" element={<NDcapacitaciones />} />
          <Route path="fechas" element={<Fechas />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="programas" element={<Programas />} />
          {/* <Route path="pagos" element={<MercadoPago />} /> */}
          <Route path="login" element={<Login />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
