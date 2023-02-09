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
import img16 from "./edespecial1.jpg";
import img17 from "./edespecial2.jpg";
import img18 from "./edespecial3.jpg";
import img19 from "./new1cap.png";
import img20 from "./new2cap.png";
import img21 from "./new3cap.png";
import img22 from "./olimpic1.jpg";
import img23 from "./olimpic2.jpg";
import img24 from "./olimpic3.jpg";

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

      <h3 className="NDcapacitaciones__noticias">Noticias</h3>
      <NDimagenes
        fecha="4 octubre, 2022"
        link="https://www.instagram.com/p/CjQHe-5ODYl/"
        color="#da2f2f"
        descripcion="Realizamos en Mulchen una capacitación sobre maniobras de reanimación cardiopulmonar (RCP) para todos los colaboradores de la empresa."
        imagen1={img19}
        imagen2={img20}
        imagen3={img21}
      />
      <NDimagenes
        fecha="20 junio, 2022"
        link="https://www.trenquelauquen.gov.ar/noticias/alumnos-as-docentes-y-familias-de-las-escuelas-n501-y-502-tuvieron-un-taller-de-primeros-auxilios-con-tecnicas-de-rcp/"
        color="#dac92f"
        descripcion="Dentro del Programa de Capacitaciones y Prevencion de Riesgos, la Coordinacion de Defensa Civil Municipal junto a integrantes del grupo de Voluntarios de la defensa civil Municipal, brindaron un taller en la tematica de Primeros Auxilios con tecnicas de RCP y uso del DEA (Desfribilador Externo Automatico) en las instalaciones de la Escuela de Educacion Especial Nro 501.  La misma estuvo dirigida a Docentes, Famiiares y Acompañantes Terapeuticos de los Alumnos de las Instituciones 501 y 502.-  En un marco de participacion conjunta, se trabajo en las tematicas mas puntuales sobre problematicas de Alumnos, donde los padres aportaron tambien mucha de sus experiencias que hicieron que la jornada tenga el exito del aprendizaje mutuo"
        imagen1={img16}
        imagen2={img17}
        imagen3={img18}
      />

      <NDimagenes
        fecha="23 abril, 2022"
        color="#64d0c3"
        link="https://laopinion.com.ar/taller-de-rcp-y-primeros-auxilios-para-personal-de-patrulla-rural/"
        descripcion="La Coordinación de Defensa Civil Municipal, a cargo de Nicolás De Paulo, brindó una capacitación sobre Primeros Auxilios con técnicas de Reanimación Cardiopulmonar (RCP) y uso del Desfibrilador Externo Automático (DEA) a personal de la Patrulla Rural de Trenque Lauquen."
        imagen1={img10}
        imagen2={img11}
        imagen3={img12}
      />
      <NDimagenes
        fecha="13 abril, 2022"
        link="https://www.lacamaradetrenque.com.ar/novedades/se-realizo-una-capacitacion-en-primeros-auxilios-y-rcp-en-la-camara-de-comercio-de-trenque-lauquen"
        color="#da2f2f"
        descripcion="El taller denominado “Socorros urbanos con RCP y DEA” estuvo a cargo de la empresa ND Capacitaciones, mediante el instructor, Nicolás De Paulo. Alumno: “nos gustó mucho, fue simple, didáctica y práctica. Aprendimos qué hay hacer y qué no hay que hacer en una emergencia. Estamos con el compromiso de seguir formándonos en distintas áreas para ser mejores en lo que hacemos”. "
        imagen1={img4}
        imagen2={img5}
        imagen3={img6}
      />

      <NDimagenes
        fecha="2 abril, 2022"
        color="#dac92f"
        link="https://www.laregionweb.info/single-post/la-peatonal-123-fue-un-%C3%A9xito-en-pellegrini"
        descripcion="El Municipio a través del área de Cultura, realizó con total éxito la Peatonal 123, con la Fiesta Regional de la Galleta de Campo. Una multitud de espectadores, entre jóvenes y adultos se dieron cita en la Peatonal, que se vio llena de color, alegría y estuvo vestida de distintos stands."
        imagen1={img13}
        imagen2={img14}
        imagen3={img15}
      />
      <NDimagenes
        fecha="6 marzo, 2022"
        link="https://deportelauquen.com.ar/charla-sobre-primeros-auxilios-tecnicas-de-rcp-y-utilizacion-del-dea-en-gtm-sport/"
        color="#64d0c3"
        descripcion="Charla sobre Primeros Auxilios, Técnicas de RCP y utilización del DEA en GTM SPORT, La misma estuvo a cargo de Nicolas De Paulo, Coordinador de Defensa Civil del Municipio de Trenque Lauquen.
         Esta importante jornada de capacitación fue una actividad organizada por la Asociación de Taekwondo de Trenque Lauquen."
        imagen1={img22}
        imagen2={img23}
        imagen3={img24}
      />
      <NDimagenes
        color="#da2f2f"
        fecha="2 febrero, 2022"
        link="https://www.trenquelauquen.gov.ar/noticias/defensa-civil-dicto-un-taller-de-rcp-y-primeros-auxilios-a-un-grupo-de-jovenes-del-ateneo-de-la-sociedad-rural/"
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
        color="#dac92f"
        fecha="21 enero, 2022"
        link="https://www.trenquelauquen.gov.ar/noticias/taller-de-primeros-auxilios-y-rcp-en-los-cursos-de-verano-que-ofrecen-el-municipio-y-otras-instituciones/"
        descripcion="ND Capacitaciones: “iniciamos un proyecto anual de talleres de primeros auxilios y RCP”...  “comenzamos con la actividad de verano. Ya ofrecimos las charlas en las escuelas de verano: CEC y escuela nº 46 y ahora iniciamos en los talleres de cultura”... “hacemos algo sencillo y ameno para que todos se lleven una idea de lo que puedan hacer”."
        imagen1={img7}
        imagen2={img8}
        imagen3={img9}
      />
    </div>
  );
};

export default NDcapacitaciones;
