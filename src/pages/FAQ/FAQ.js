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
        <Acordion num="7" />
        <Acordion num="8" />
        <Acordion num="9" />
      </Accordion>
    </div>
  );
};

export default FAQ;
