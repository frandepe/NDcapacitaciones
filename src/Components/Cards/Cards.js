import { Card, CardGroup, Button } from "react-bootstrap";
import "./Cards.scss";
import imgCard1 from "./ImgsCards/imgCursoGente.jpg";
import imgCard2 from "./ImgsCards/ImgCursoGente6.jpg";
import imgCard3 from "./ImgsCards/imgCurso3.jpg";
import imgCard4 from "./ImgsCards/imgDog.jpeg";

const Cards = () => {
  return (
    <div className="cards__div">
      <CardGroup className="cards__container">
        <Card className="cards__card">
          <Card.Img variant="top" src={imgCard3} />
          <Card.Body>
            <Card.Title>Socorros urbanos con RCP y DEA</Card.Title>
            <Card.Text>
              Diseñados para capacitar a los participantes a reconocer y tratar
              eficazmente las emergencias en adultos, niños y lactantes en los
              primeros minutos críticos hasta que llega el personal de los
              servicios de emergencias médicas. Especialmente recomendados para
              profesionales que desarrollan actividades con un alto compromiso
              social o tienen personas a cargo que puedan estar expuestas a
              situaciones de emergencia. Diseñados para capacitar a los
              participantes a reconocer y tratar eficazmente las emergencias en
              adultos, niños y lactantes en los primeros minutos críticos hasta
              que llega el personal de los servicios de emergencias médicas.
              Especialmente recomendados para profesionales que desarrollan
              actividades
            </Card.Text>
            <div className="cards__btn">
              <Button href="contacto" variant="primary">
                Más información
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="cards__card">
          <Card.Img variant="top" style={{ height: "320px" }} src={imgCard2} />
          <Card.Body>
            <Card.Title>Formador de Brigadistas de Emergencias</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="cards__btn">
              <Button href="contacto" variant="primary">
                Más información
              </Button>
            </div>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card className="cards__card">
          <Card.Img variant="top" src={imgCard1} />
          <Card.Body>
            <Card.Title>Monitor de Zonas Cardio Seguras</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="cards__btn">
              <Button href="contacto" variant="primary">
                Más información
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="cards__card">
          <Card.Img variant="top" src={imgCard4} />
          <Card.Body>
            <Card.Title>Primeros Auxilios para Perros y Gatos</Card.Title>
            <Card.Text>
              El curso está dirigido a personas que tengan compromiso por las
              mascotas y quieran adquirir el conocimiento de cómo reconocer y
              actuar ante enfermedades súbitas y lesiones frecuentes en mascotas
              hasta que llegue el veterinario o arribe al hospital veterinario.
              No se necesitan conocimientos previos. El curso está dirigido a
              personas que tengan compromiso por las mascotas y quieran adquirir
              el conocimiento de cómo reconocer y actuar ante enfermedades
              súbitas y lesiones frecuentes en mascotas hasta que llegue el
              veterinario o arribe al hospital veterinario. No se necesitan
              conocimientos previos.
            </Card.Text>
            <div className="cards__btn">
              <Button href="contacto" variant="primary">
                Más información
              </Button>
            </div>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Cards;
