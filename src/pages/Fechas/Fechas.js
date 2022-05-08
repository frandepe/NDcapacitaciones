import InfoFecha from "../../Components/InfoFecha/InfoFecha";
import "./Fechas.scss";
import imgFecha from "./imgPapa.jpg";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Fechas = () => {
  useEffect(() => {
    gsap.from(".fechas__h3", {
      scrollTrigger: {
        trigger: ".fechas__h3",
        start: "top 90%",
        end: "bottom 60%",
      },
      duration: 2,
      ease: "ease-in",
      opacity: 0,
    });
    gsap.from(".fechas__info", {
      scrollTrigger: {
        trigger: ".fechas__info",
        start: "top 90%",
        end: "bottom 60%",
      },
      duration: 2,
      x: -100,
      ease: "ease-in",
      opacity: 0,
    });
  }, []);
  return (
    <div className="fechas__container">
      <h3 className="fechas__h3">
        Brindamos diferentes cursos de capacitaciones tanto para empresas como
        para nuestra comunidad. Puede tomar los cursos cualquier persona que
        desee ampliar sus conocimientos en Salud.
      </h3>
      <div className="fechas__info">
        <div className="fechas__width">
          <h3>Próximos cursos</h3>
          <InfoFecha
            fecha="17 de Mayo"
            countdown="2022-05-17T14:20:00"
            titulo="Socorrismo urbano con RCP y DEA"
            localidad="Trenque Lauquen"
            lugar="A definir"
            horario="20hs"
            descripcion="Este curso permitirá al profesional adquirir conocimientos y desarrollar competencias sobre el soporte vital básico y avanzado y el reconocimiento de cuadros como taquiarritmias, bradiarritmias y shock, entre otros, para su correcto abordaje y tratamiento."
          />
          <InfoFecha
            fecha="22 de Marzo"
            countdown="2022-03-22T14:20:00"
            titulo="Socorrismo urbano con RCP y DEA"
            localidad="Trenque Lauquen"
            lugar="La Joya Griffa Gym"
            horario="20hs"
            descripcion="Este curso permitirá al profesional adquirir conocimientos y desarrollar competencias sobre el soporte vital básico y avanzado y el reconocimiento de cuadros como taquiarritmias, bradiarritmias y shock, entre otros, para su correcto abordaje y tratamiento."
          />
          <InfoFecha
            countdown="2022-01-22T14:12:00"
            titulo="RCP y Primeros auxilios"
            localidad="Trenque Lauquen"
            lugar="instalaciones del Comando de Prevención Rural"
            horario="17hs"
            descripcion="El taller forma parte de las actividades que viene realizando la Coordinación de Defensa Civil Municipal en distintas instituciones, como escuelas, jardines maternales y dependencias policiales, entre otras, y que apunta a brindar conocimientos en primeros auxilios para poder actuar en la emergencia."
          />

          <InfoFecha
            countdown="2022-01-20T14:12:00"
            titulo="Socorrismo Urbano con RCP y DEA"
            localidad="Trenque Lauquen"
            lugar="No definido"
            horario="20hs"
            descripcion="Este curso permitirá al profesional adquirir conocimientos y desarrollar competencias sobre el soporte vital básico y avanzado y el reconocimiento de cuadros como taquiarritmias, bradiarritmias y shock, entre otros, para su correcto abordaje y tratamiento."
          />
          <InfoFecha
            countdown="2022-01-14T14:12:00"
            titulo="Socorrismo Urbano con RCP y DEA"
            localidad="Pellegrini"
            lugar="Playon complejo polideportivo"
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
