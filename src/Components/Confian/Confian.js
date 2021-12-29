import "./Confian.scss";
import imgConfian1 from "./confian1.jfif";
import imgConfian2 from "./confian2.jpg";
import imgConfian3 from "./confian3.png";
import imgConfian4 from "./confian4.jpg";

const Confian = () => {
  return (
    <div className="confian__container">
      <h2>Aval</h2>
      <div className="confian__flexImg">
        <img src={imgConfian1} alt="American College of Emergency" />
        <img src={imgConfian2} alt="Emergency Care and Safety Institute " />
        <img src={imgConfian3} alt="Aider" />
        <img src={imgConfian4} alt="Organización Panamericana de la Salud" />
      </div>
    </div>
  );
};

export default Confian;
