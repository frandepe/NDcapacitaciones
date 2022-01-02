import InfoFecha from "../../Components/InfoFecha/InfoFecha";
import "./Fechas.scss";
import imgFecha from "./imgPapa.jpg";

const Fechas = () => {
  return (
    <div className="fechas__container">
      <h3 className="fechas__h3">
        Brindamos diferentes cursos relacionados con la resolución 905/15 para
        capacitaciones en la empresa y en nuestro centro. Tambien puede tomar
        los cursos cualquier persona que desee ampliar sus conocimientos en
        Salud.
      </h3>
      <div className="fechas__info">
        <div className="fechas__width">
          <h3>Próximos cursos</h3>
          <InfoFecha
            fecha="14 de Enero"
            titulo="Socorrismo Urbano con RCP y DEA"
            localidad="Pellegrini"
            lugar="No definido"
            horario="20hs"
            descripcion="Este curso permitirá al profesional adquirir conocimientos y desarrollar competencias sobre el soporte vital básico y avanzado y el reconocimiento de cuadros como taquiarritmias, bradiarritmias y shock, entre otros, para su correcto abordaje y tratamiento."
          />
        </div>
        <div className="fechas__containerimg">
          <img src={imgFecha} alt="Img cardio" />
        </div>
      </div>
    </div>
  );
};

export default Fechas;
