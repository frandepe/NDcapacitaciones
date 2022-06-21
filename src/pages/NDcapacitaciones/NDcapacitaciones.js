import NDimagenes from "../../Components/NDimagenes/NDimagenes";
import VideosND from "../../Components/VideosND/VideosND";
import img1 from "./img1.jpg";
import img2 from "./rcpcancha2.jpg";
import img3 from "./rcpcancha3.jpg";
import img4 from "./cap1.jpeg";
import img5 from "./cap2.jpeg";
import img6 from "./cap3.jpeg";
import img7 from "./capacitacion1.jpg";
import img8 from "./capacitacion2.jpg";
import img9 from "./capacitacion3.jpg";
import img10 from "./img-patrulla-rural-1.jpeg";
import img11 from "./img-patrulla-rural-2.jpeg";
import img12 from "./img-patrulla-rural-3.jpg";
import img13 from "./img-aniversario-pellegrini-1.jpeg";
import img14 from "./img-aniversario-pellegrini-2.jpeg";
import img15 from "./img-aniversario-pellegrini-3.jpeg";

import "./NDcapacitaciones.scss";
// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const NDcapacitaciones = () => {
  // useEffect(() => {
  //   gsap.from(".NDcapacitaciones__banner", {
  //     scrollTrigger: {
  //       trigger: ".NDcapacitaciones__banner",
  //       start: "top 90%",
  //       end: "bottom 60%",
  //     },
  //     duration: 2,
  //     ease: "ease-in",
  //     opacity: 0,
  //   });
  // }, []);

  return (
    <div>
      <div className="NDcapacitaciones__banner">
        <h2>ND capacitaciones</h2>
        <b>Promovemos</b>
        <p>
          <i className="fas fa-angle-double-right"></i> Capacitaciones de
          calidad con reconocimiento nacional e internacional.
        </p>
        <p>
          <i className="fas fa-angle-double-right"></i> Educación para la vida y
          formación para el trabajo.
        </p>
        <p>
          <i className="fas fa-angle-double-right"></i> Formación continua según
          las necesidades sociales y las exigencias del mercado laboral.
        </p>
      </div>
      <VideosND />
      <NDimagenes
        color="#64d0c3"
        descripcion="Capacitación para jóvenes de entre 12 y 18 años de
        la ciudad de Trenque Lauquen y Treinta de Agosto de Agosto
        con la presencia de dirigentes ruralistas del director de la
        Escuela Agropecuaria “Manuel Belgrano”, Javier Olazábal, y la
        titular de la oficina de la Juventud del Municipio, Marta Bathis."
        imagen1={img1}
        imagen2={img2}
        imagen3={img3}
      />
      <NDimagenes
        color="#da2f2f"
        descripcion="El taller denominado “Socorros urbanos con RCP y DEA” estuvo a cargo de la empresa ND Capacitaciones, mediante el instructor, Nicolás De Paulo. Alumno: “nos gustó mucho, fue simple, didáctica y práctica. Aprendimos qué hay hacer y qué no hay que hacer en una emergencia. Estamos con el compromiso de seguir formándonos en distintas áreas para ser mejores en lo que hacemos”. "
        imagen1={img4}
        imagen2={img5}
        imagen3={img6}
      />
      <NDimagenes
        color="#dac92f"
        descripcion="ND Capacitaciones: “iniciamos un proyecto anual de talleres de primeros auxilios y RCP”...  “comenzamos con la actividad de verano. Ya ofrecimos las charlas en las escuelas de verano: CEC y escuela nº 46 y ahora iniciamos en los talleres de cultura”... “hacemos algo sencillo y ameno para que todos se lleven una idea de lo que puedan hacer”."
        imagen1={img7}
        imagen2={img8}
        imagen3={img9}
      />
      <NDimagenes
        color="#64d0c3"
        descripcion="La Coordinación de Defensa Civil Municipal, a cargo de Nicolás De Paulo, brindó una capacitación sobre Primeros Auxilios con técnicas de Reanimación Cardiopulmonar (RCP) y uso del Desfibrilador Externo Automático (DEA) a personal de la Patrulla Rural de Trenque Lauquen."
        imagen1={img10}
        imagen2={img11}
        imagen3={img12}
      />
      <NDimagenes
        color="#da2f2f"
        descripcion="El Municipio a través del área de Cultura, realizó con total éxito la Peatonal 123, con la Fiesta Regional de la Galleta de Campo. Una multitud de espectadores, entre jóvenes y adultos se dieron cita en la Peatonal, que se vio llena de color, alegría y estuvo vestida de distintos stands."
        imagen1={img13}
        imagen2={img14}
        imagen3={img15}
      />
    </div>
  );
};

export default NDcapacitaciones;
