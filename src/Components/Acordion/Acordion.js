import React from "react";
import { Accordion } from "react-bootstrap";

const Acordion = ({ num, pregunta, respuesta }) => {
  return (
    <div>
      <Accordion.Item eventKey={{ num }}>
        <Accordion.Header>
          <p>{pregunta}</p>
        </Accordion.Header>
        <Accordion.Body>
          <p>{respuesta}</p>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default Acordion;
