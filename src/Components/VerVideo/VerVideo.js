import React from "react";
import img1 from "./img1.png";
import "./VerVideo.scss";
import ModalVideo from "./ModalVideo";

export const VerVideo = () => {
  return (
    <div className="VerVideo__container">
      <div className="VerVideo__containerImg">
        <img src={img1} alt="rcp" width={400} />
      </div>
      <div className="VerVideo__text">
        <h3>Dejando Huella</h3>
        <p>
          Un viaje audiovisual que ilustra cómo cada sesión de entrenamiento se
          convierte en una oportunidad para aprender, crecer y salvar vidas...
        </p>
        <ModalVideo />
      </div>
    </div>
  );
};
