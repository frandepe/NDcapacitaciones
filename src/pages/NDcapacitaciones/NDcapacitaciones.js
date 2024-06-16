import CardNoticias from "../../Components/CardNoticias/CardNoticias";
import VideosND from "../../Components/VideosND/VideosND";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import img2 from "./rcpcancha2.jpg";
import img4 from "./cap1.jpeg";
import img9 from "./capacitacion3.jpg";
import img10 from "./img-patrulla-rural-1.jpeg";
import img14 from "./img-aniversario-pellegrini-2.jpeg";
import img17 from "./edespecial2.jpg";
import img19 from "./new1cap.png";
import img23 from "./olimpic2.jpg";
import img26 from "./moto2.jpg";
import img28 from "./jardin3.jpeg";
import asichaCurso from "./asichaCurso.jpg";
import dieselCurso from "./dieselCurso.png";
import "./NDcapacitaciones.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NDcapacitaciones = () => {
  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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

      <h3 className="NDcapacitaciones__noticias">Últimas noticias</h3>
      <Row>
        <Col md="6" style={{ padding: "0px" }}>
          <CardNoticias
            height="400px"
            description="Capacitacion al personal de la Empresa Asicha de Trenque Lauquen desarrollo y producción de elásticos de suspensión"
            src={asichaCurso}
          />
        </Col>
        <Col md="3">
          <Row style={{ marginBottom: "2px" }}>
            <CardNoticias
              description="Capacitacion al personal de la empresa Diésel Lange Sucursal Trenque Lauquen representantes de la marca John Deere"
              src={dieselCurso}
              height="199px"
            />
          </Row>
          <Row style={{ marginTop: "2px" }}>
            <CardNoticias
              description="Mulchen: Maniobras de reanimación cardiopulmonar (RCP) para todos los colaboradores de la empresa"
              fecha="4 octubre, 2022"
              link="https://www.instagram.com/p/CjQHe-5ODYl/"
              src={img19}
              height="199px"
            />
          </Row>
        </Col>
        <Col md="3">
          <Row style={{ marginBottom: "2px" }}>
            <CardNoticias
              description="Dentro del Programa de Capacitaciones y Prevencion de Riesgos, la Coordinacion de..."
              fecha="20 junio, 2022"
              link="https://www.trenquelauquen.gov.ar/noticias/alumnos-as-docentes-y-familias-de-las-escuelas-n501-y-502-tuvieron-un-taller-de-primeros-auxilios-con-tecnicas-de-rcp/"
              src={img17}
              height="199px"
            />
          </Row>
          <Row style={{ marginTop: "2px" }}>
            <CardNoticias
              description="La Coordinación de Defensa Civil Municipal, a cargo de Nicolás De Paulo, brindó una capacitación..."
              fecha="23 abril, 2022"
              link="https://laopinion.com.ar/taller-de-rcp-y-primeros-auxilios-para-personal-de-patrulla-rural/"
              src={img10}
              height="199px"
            />
          </Row>
        </Col>
      </Row>
      <Row style={{ marginTop: "2px" }}>
        <Col md="3" style={{ padding: "0px" }}>
          <CardNoticias
            description="Técnicas de rcp al personal que se desempeña en los jardines maternales municipales de la ciudad cabecera"
            fecha="10 febrero, 2023"
            link="https://www.trenquelauquen.gov.ar/noticias/defensa-civil-capacito-en-primeros-auxilios-con-tecnicas-de-rcp-al-personal-que-se-desempena-en-los-jardines-maternales-municipales-de-la-ciudad-cabecera/"
            src={img28}
          />
        </Col>
        <Col md="3" style={{ padding: "0px" }}>
          <CardNoticias
            description="RCP y uso del DEA a personal de la empresa IBERCOM-MULTICOM Fibra Optica de la Seccional Trenque Lauquen"
            fecha="14 febrero, 2023"
            src={img26}
          />
        </Col>
      </Row>
      <Row className="NDcapacitaciones__slider">
        <Slider {...settings}>
          <CardNoticias
            description="El taller denominado “Socorros urbanos con RCP y DEA” estuvo a cargo de la empresa ND Capacitaciones, mediante el instructor, Nicolás De Paulo. Alumno: “nos gustó mucho, fue..."
            fecha="13 abril, 2022"
            link="https://www.lacamaradetrenque.com.ar/novedades/se-realizo-una-capacitacion-en-primeros-auxilios-y-rcp-en-la-camara-de-comercio-de-trenque-lauquen"
            src={img4}
          />
          <CardNoticias
            description="El Municipio a través del área de Cultura, realizó con total éxito la Peatonal 123, con la Fiesta Regional de la Galleta de Campo. Una multitud de espectadores..."
            fecha="2 abril, 2022"
            link="https://www.laregionweb.info/single-post/la-peatonal-123-fue-un-%C3%A9xito-en-pellegrini"
            src={img14}
          />
          <CardNoticias
            description="Esta importante jornada de capacitación fue una actividad organizada por la Asociación de Taekwondo de Trenque Lauquen"
            fecha="6 marzo, 2022"
            link="https://deportelauquen.com.ar/charla-sobre-primeros-auxilios-tecnicas-de-rcp-y-utilizacion-del-dea-en-gtm-sport/"
            src={img23}
          />
          <CardNoticias
            description="Capacitación para jóvenes de entre 12 y 18 años de la ciudad de Trenque Lauquen y Treinta de Agosto"
            fecha="2 febrero, 2022"
            link="https://www.trenquelauquen.gov.ar/noticias/defensa-civil-dicto-un-taller-de-rcp-y-primeros-auxilios-a-un-grupo-de-jovenes-del-ateneo-de-la-sociedad-rural/"
            src={img2}
          />
          <CardNoticias
            description="Iniciamos un proyecto anual de talleres de primeros auxilios y RCP, comenzamos con la actividad de verano. Ya ofrecimos las charlas en las escuelas de verano: CEC y..."
            fecha="21 enero, 2022"
            link="https://www.trenquelauquen.gov.ar/noticias/taller-de-primeros-auxilios-y-rcp-en-los-cursos-de-verano-que-ofrecen-el-municipio-y-otras-instituciones/"
            src={img9}
          />
        </Slider>
      </Row>
    </div>
  );
};

export default NDcapacitaciones;
