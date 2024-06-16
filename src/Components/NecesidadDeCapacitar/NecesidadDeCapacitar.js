import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "./Capacitacion-RCP.jpeg";
import img2 from "./imgCursoGente2.jpg";
import img3 from "./ImgCursoGente4.jpg";
import { FaHandsHelping, FaHandHoldingMedical } from "react-icons/fa";
import { RiFirstAidKitFill } from "react-icons/ri";
import "./NecesidadDeCapacitar.scss";

const NecesidadDeCapacitar = () => {
  return (
    <div className="NecesidadDeCapacitar__contentAll">
      <Container>
        <Row className="NecesidadDeCapacitar__container" md>
          <Col className="NecesidadDeCapacitar__Cards">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img2} width={300} height={200} />
              <Card.Body className="NecesidadDeCapacitar__CardBody">
                <RiFirstAidKitFill
                  className="NecesidadDeCapacitar__icon"
                  size={40}
                />
                <Card.Title className="NecesidadDeCapacitar__title">
                  ¿En qué consiste la RCP?
                </Card.Title>
                <Card.Text>
                  La RCP tradicionalmente consistía en realizar respiración boca
                  a boca intercalando compresiones torácicas. Actualmente se
                  centra más en las compresiones torácicas y se reduce al mínimo
                  o elimina la respiración boca a boca. De esta manera, la
                  técnica es más sencilla y supone interrumpir menos la
                  circulación de la sangre
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="NecesidadDeCapacitar__Cards">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img1} width={300} height={200} />
              <Card.Body className="NecesidadDeCapacitar__CardBody">
                <FaHandsHelping
                  className="NecesidadDeCapacitar__icon"
                  size={40}
                />
                <Card.Title className="NecesidadDeCapacitar__title">
                  ¿Con qué propósito realizamos las capacitaciones?
                </Card.Title>
                <Card.Text>
                  El objetivo de este tipo de capacitaciones es mejorar nuestra
                  calidad de servicios y brindar seguridad a los clientes.
                  Queremos ser comerciantes responsables y capaces de resolver
                  una emergencia si se nos presenta a través de las técnicas de
                  primeros auxilios y RCP
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="NecesidadDeCapacitar__Cards">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img3} width={300} height={200} />
              <Card.Body className="NecesidadDeCapacitar__CardBody">
                <FaHandHoldingMedical
                  className="NecesidadDeCapacitar__icon"
                  size={40}
                />
                <Card.Title className="NecesidadDeCapacitar__title">
                  Convertite en protagonista
                </Card.Title>
                <Card.Text>
                  Cuando se produce un paro cardiorespiratorio, la respiración y
                  circulación se detienen. Si recibe asistencia con la técnica
                  de reanimación cardiopulmonar (RCP), la persona tiene
                  posibilidades de recuperarse y no presentar secuelas
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NecesidadDeCapacitar;
{
  /* <h3>¿En qué consiste la RCP?</h3>
<p>
  “La RCP tradicionalmente consistía en realizar respiración boca a
  boca intercalando compresiones torácicas. Actualmente se centra
  más en las compresiones torácicas y se reduce al mínimo o elimina
  la respiración boca a boca. De esta manera, la técnica es más
  sencilla y supone interrumpir menos la circulación de la sangre”.
</p>
<h3>¿Con qué propósito realizamos las capacitaciones?</h3>
<p>
  “El objetivo de este tipo de capacitaciones es mejorar nuestra
  calidad de servicios y brindar seguridad a los clientes. Queremos
  ser comerciantes responsables y capaces de resolver una emergencia
  si se nos presenta a través de las técnicas de primeros auxilios y
  RCP”.
</p>

<h3>Convertite en protagonista</h3>
<p>
  Cuando se produce un paro cardiorespiratorio, la respiración y
  circulación se detienen. Si recibe asistencia con la técnica de
  reanimación cardiopulmonar (RCP), la persona tiene posibilidades
  de recuperarse y no presentar secuelas.
</p> */
}
