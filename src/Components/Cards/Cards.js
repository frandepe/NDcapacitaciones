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
              situaciones de emergencia.
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
              Este curso está dirigido a aquellos Instructores de Primeros
              Socorros con RCP y DEA, que quieran certificar brigadistas o
              brigadas en empresas o instituciones. Una brigada de emergencia es
              un grupo de trabajadores que se encuentran debidamente
              organizados, entrenados y equipados para identificar las
              condiciones de riesgo que puedan generar determinadas emergencias.
              A estos trabajadores se los denomina brigadistas y se encuentran
              entrenados para actuar oportunamente controlando o minimizando los
              riesgos identificados.
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
              El objetivo de este curso es capacitar a toda persona que pudiese
              verse involucrada en alguna situación que requiera conocimientos
              en Reanimación CerebroCardiopulmonar y uso del desfibrilador
              externo. y Certificar la Zona Cardio Segura.
            </Card.Text>
            <div className="cards__btn btn2">
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
            </Card.Text>
            <div className="cards__btn btn2">
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
