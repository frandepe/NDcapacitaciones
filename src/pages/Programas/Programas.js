import "./Programas.scss";
import Cards from "../../Components/Cards/Cards";
import imgPersonas from "./peopleIcon.png";
import imgEmpresa from "./empresaIcon.png";

const Programas = () => {
  return (
    <div className="programas__div">
      <div className="programas__divp">
        <p>
          Cada uno de los cursos está avalado por{" "}
          <span style={{ fontWeight: "bold" }}>aider.org</span> entre otras
          instituciones internacionales.
        </p>
      </div>
      <div className="programas__conth2">
        <h2>
          El saber que hacer, permite actuar con seguridad… permite salvar una
          vida
        </h2>
      </div>
      <Cards />

      <div className="programas__contenedorInfo">
        <div className="programas__info">
          <h3>Contenido</h3>
          <p>
            <i className="fas fa-heartbeat"></i> Diagrama de primeros auxilios
          </p>
          <p>
            <i className="fas fa-heartbeat"></i> Estado de conciencia
          </p>
          <p>
            <i className="fas fa-heartbeat"></i> Lipotomia o desmayo
          </p>
          <p>
            <i className="fas fa-heartbeat"></i> Convulsiones
          </p>
          <p>
            <i className="fas fa-heartbeat"></i> Heridas / Hemorragias
          </p>
          <p>
            <i className="fas fa-heartbeat"></i> Quemaduras
          </p>
          <p>
            <i className="fas fa-heartbeat"></i> Esguinces / Luxaciones
          </p>
          <p>
            <i className="fas fa-heartbeat"></i> Fracturas
          </p>
          <p>
            <i className="fas fa-heartbeat"></i> Obstrucción de vias aéreas
          </p>
          <p>
            <i className="fas fa-heartbeat"></i> Reanimación cardio pulmonar
          </p>
          <p>
            <i className="fas fa-heartbeat"></i> Uso del D.E.A
          </p>
        </div>
        <div className="programas__info--flex">
          <div className="programas__info--column">
            <img src={imgPersonas} alt="personasimg" />
            <b>Personas</b>
          </div>

          <div className="programas__info--column">
            <img src={imgEmpresa} alt="empresaimg" />
            <b>Empresas</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programas;
