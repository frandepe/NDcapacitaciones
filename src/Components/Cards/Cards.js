import React from "react";
import { Card } from "react-bootstrap";
import "./Cards.scss";

const Cards = ({ descripcion, titulo, imagen }) => {
  return (
    <div className="cards__container">
      <Card className="bg-dark text-white">
        <Card.Img className="cards__imagen" src={imagen} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="cards__titulo">{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Cards;
