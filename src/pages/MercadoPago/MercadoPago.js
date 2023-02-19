import { Container, Row, Col, Button } from "react-bootstrap";
import scanMP from "./scanMP.png";
import "./MercadoPago.scss";
import {
  AiOutlineAppstore,
  AiFillCreditCard,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { generatePaymentMP } from "../../services/privateApiServices";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const MercadoPago = () => {
  // const navigate = useNavigate();

  const [web, setWeb] = useState("");

  const paymentMP = async () => {
    const newPayment = await generatePaymentMP();

    return setWeb(newPayment);
  };

  useEffect(() => {
    paymentMP();
  }, []);

  return (
    <div>
      <Container className="MercadoPago__container--payweb">
        <Row>
          <h2 className="MercadoPago__container--h2">
            PAGÁ TOCANDO SOLO TU CELULAR
          </h2>
        </Row>
        <Row>
          <h5>Ahora podés pagar nuestros cursos desde Mercado Pago</h5>
        </Row>
        <Row>
          <a
            // onClick={paymentMP}
            href={web}
            target="_blank"
            rel="noopener noreferrer"
            className="MercadoPago__container--button"
          >
            <Button variant="warning">PAGAR AHORA</Button>
          </a>
        </Row>
      </Container>
      <Container className="MercadoPago__container2--paymobile">
        <Row className="MercadoPago__container2--title">
          <Row>
            <h3 className="MercadoPago__container2--h2">PAGÁ CON QR</h3>
          </Row>
          <Row>
            <h4 className="MercadoPago__container2--h3">
              ¡ES MÁS FÁCIL, RÁPIDO Y SEGURO!
            </h4>
          </Row>
        </Row>
        <Row className="MercadoPago__container2--row">
          <Col className="MercadoPago__container2--instrucciones">
            <Row>
              <p>
                <span className="MercadoPago__container2--icon">
                  <AiOutlineAppstore fontSize={30} />
                </span>{" "}
                1. Entrá a la app y escaneá el QR
              </p>
            </Row>
            <Row>
              <p>
                <span className="MercadoPago__container2--icon">
                  <AiFillCreditCard fontSize={30} />
                </span>{" "}
                2. Seleccioná tu método de pago
              </p>
            </Row>
            <Row>
              <p>
                <span className="MercadoPago__container2--icon">
                  <AiOutlineCheckCircle fontSize={30} />
                </span>{" "}
                3. Avisá que pagaste ¡Y listo!
              </p>
            </Row>
          </Col>
          <Col className="MercadoPago__container2--qrimg">
            <img src={scanMP} alt="QR de pago" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
