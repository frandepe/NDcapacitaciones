import React from "react";
import { Accordion } from "react-bootstrap";
import Acordion from "../../Components/Acordion/Acordion";

const FAQ = () => {
  return (
    <div>
      <Accordion>
        <Acordion
          num="1"
          pregunta="¿Cómo me inscribo al curso?"
          respuesta="sarasa!!!"
        />
        <Acordion
          num="2"
          pregunta="¿Cúales son las formas de pago?"
          respuesta="racataa!"
        />
        <Acordion num="3" pregunta="Cómo recibo mi certificado?" />
        <Acordion num="4" pregunta="¿Cómo es la modalidad de los cursos?" />
        <Acordion
          num="5"
          pregunta="¿Necesito tener un conocimiento previo para tomar un curso?"
        />
        <Acordion
          num="6"
          pregunta="¿A quiénes van dirigidas las capacitaciones?"
        />
        <Acordion
          num="7"
          pregunta="¿Por qué hacer un curso de primeros auxilios?"
          respuesta="Por norma general, los objetivos que se fijan en este tipo de formación son aliviar el dolor de la víctima, evitar complicaciones mayores y propiciar una pronta recuperación. Gracias a esta disciplina es posible ofrecer los primeros cuidados en una situación de accidente de tráfico, una catástrofe natural, hemorragias, alergias, quemaduras, fracturas, etc., independientemente del lugar donde se produzca el incidente. Desde otro punto de vista, los cursos de primeros auxilios también se presentan como una forma de promocionar la salud. A través de ellos se toma conciencia de la problemática a la que todo el mundo puede enfrentarse alguna vez en su vida y qué importancia tiene trabajar por conseguir un nivel óptimo de bienestar.  "
        />
        <Acordion num="8" />
        <Acordion num="9" />
      </Accordion>
    </div>
  );
};

export default FAQ;
