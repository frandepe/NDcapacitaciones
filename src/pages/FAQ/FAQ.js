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
          respuesta="La inscripcion a los cursos se realiza mediante la sección de contactos o al WhatsApp 2392512249"
        />
        <Acordion
          num="2"
          pregunta="¿Cúales son las formas de pago?"
          respuesta="El pago de la capacitacion se puede realizar mediante las siguientes formas: Cuenta DNI, Mercado de Pago, Transferencia Bancaria"
        />
        <Acordion
          num="3"
          pregunta="¿Cómo recibo mi certificado?"
          respuesta="Una vez aprobado el curso, se remitira via mail el correspondiente certificado de aprobacion del curso"
        />
        <Acordion
          num="4"
          pregunta="¿Cómo es la modalidad de los cursos?"
          respuesta="Los cursos son de manera presencial, con un cupo por Protocolo COVID19"
        />
        <Acordion
          num="5"
          pregunta="¿Necesito tener un conocimiento previo para tomar un curso?"
          respuesta="No se necesita tener un conocimiento previo de las tematicas de los cursos ya que los mismos tienen una explicacion muy sencilla aun para personas que no cuentan con una experiancia anterior."
        />
        <Acordion
          num="6"
          pregunta="¿A quiénes van dirigidas las capacitaciones?"
          respuesta="Las capacitacion estan dirigidas a toda aquella persona que tenga interes de aprender las tecnicas de Socorrismo y predisposicion a ayudar al prógimo. Sin limites de edad desde los 12 años."
        />
        <Acordion
          num="7"
          pregunta="¿Por qué hacer un curso de primeros auxilios?"
          respuesta="Saber que hacer ante una situacion de emergencias puede ser la diferencia entre la vida y la muerte, tener un conocimiento de las tecnicas a aplicar hasta el arribo de un Servicio de Emergencias puede salvar una vida."
        />
        <Acordion />
        <Acordion />
        <Acordion />
      </Accordion>
    </div>
  );
};

export default FAQ;
