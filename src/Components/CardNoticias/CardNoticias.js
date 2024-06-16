import "./CardNoticias.scss";
import { Card } from "react-bootstrap";
// import LazyLoad from "../LazyLoad/LazyLoad";
import { BsCalendarDate } from "react-icons/bs";

const CardNoticias = ({ description, fecha, link, src, height = "200px" }) => {
  return (
    <Card
      className="CardNoticias__container"
      style={{
        background: `url('${src}')`,
        height,
      }}
    >
      <Card.ImgOverlay className="CardNoticias__info">
        {link && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="CardNoticias__leerMas"
          >
            Leer Más
          </a>
        )}
        <p className="CardNoticias__description">{description}</p>
        {fecha && (
          <p className="CardNoticias__date">
            <BsCalendarDate /> {fecha}
          </p>
        )}
      </Card.ImgOverlay>
    </Card>
  );
};

export default CardNoticias;
