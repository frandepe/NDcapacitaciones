import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import PrivateRoutes from "./private.routes";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar3 />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="backoffice/cursosForm" element={<AdminCursosForm />} />
            <Route path="backoffice/cursos" element={<AdminCursos />} />
          </Route>
          <Route path="home" element={<Home />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="info-nd-capacitaciones" element={<NDcapacitaciones />} />
          <Route path="fechas" element={<Fechas />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="programas" element={<Programas />} />
          <Route path="backoffice" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
