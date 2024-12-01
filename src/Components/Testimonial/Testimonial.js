import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.scss";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import img1 from "./argentinotestimonial.png";
import img2 from "./ludotetimonial.png";
import img3 from "./penitenciariatestimonial.jpg";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <p style={{ color: "gray", fontSize: "45px" }}>
        <GrFormPrevious />
      </p>
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <p style={{ color: "gray", fontSize: "45px" }}>
        <GrFormNext />
      </p>
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 100,
        marginBottom: 100,
      }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 20 }}>TESTIMONIOS</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card
            img={img1}
            coment="Excelente jornada en el Club Argentino de Trenque Lauquen, Nicolás dio un curso adaptado a las edades de los chicos, generándoles curiosidad e interés por el tema.
            Claro, preciso, didáctico, súper recomendable.
            Ya estamos pensando en la fecha para repetirlo este año."
            name="Argentino"
            job="Club"
          />
          <Card
            img={img3}
            coment="La realidad es que De Paulo, mechando la charla con propias experiencias vividas y claridad de conceptos, mantuvo a todos activos participando, interesados en estos temas tan reales, cotidianos, tan de la vida misma. Y algo quedó claro: todos podemos salvar una vida teniendo estos conocimientos y actuando a tiempo"
            name="Boletín de la penitenciaria"
            job="Prensa"
          />
          <Card
            img={img2}
            coment="Cuando íbamos camino a la Ludo para el curso, coincidíamos con mi hermana que nos sentíamos totalmente inseguras para actuar frente a una situación  de asfixia con nuestros hijos (yo nunca lo pase, ella si y en ese momento no supo actuar, lo hizo mi mamá que en ese momento estaba presente). Llegábamos a la conclusión que la falta de información nos dejaba ese miedo, ese que hago si me pasa estar con alguien que necesita de mi. Cuando salimos del curso, fue otra la charla, salimos comentando todo lo que nos enseñaste, algunas cosas las había visto por tv o en alguna charla, pero jamás había experimentado hacer maniobras de rcp en un muñeco de adulto y en el de bebé"
            name="Asistente al curso"
            job="La Ludoteca"
          />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img, coment, name, job }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <img
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
        alt="algo"
      />
      <p>{coment}</p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "var(--cuarto)" }}>{name}</span>,{" "}
        {job}
      </p>
    </div>
  );
};

export default Testimonial;
