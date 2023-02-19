import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.scss";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const PreviousBtn = (props) => {
  console.log(props);
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
            img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg"
            coment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            name="David Garcia"
            job="Músico"
          />
          <Card
            img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg"
            coment="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
            name="Paco De Lucia"
            job="Bombero"
          />
          <Card
            img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg"
            coment="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
            name="Angel Di Maria"
            job="Policia"
          />
          <Card
            img="https://www.tutorialrepublic.com/examples/images/clients/4.jpg"
            coment="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
            name="Maria Antonia"
            job="Abogada"
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
