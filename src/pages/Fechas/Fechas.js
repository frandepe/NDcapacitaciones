import "./Fechas.scss";
import Countdown from "react-countdown";
import { Button, Row } from "react-bootstrap";
import Spiner from "../../shared/spiner";
import BannerHeader from "../../Components/BannerHeader/BannerHeader";
import imgCursoFecha from "./imgCursoFecha.jpg";
import { cursosInfo } from "./Cursos";

const Fechas = () => {
  const Completionist = () => (
    <span className="infofecha__cursoConcluido">Este curso ha concluído</span>
  );

  const renderer = ({ days, hours, minutes, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="fechas__aunquedan">
          <p>
            {`Aún quedan:
					${days} días, ${hours} horas, ${minutes} minutos para
					participar`}
          </p>
        </div>
      );
    }
  };

  return (
    <div className="fechas__container">
      <Row className="row-margin-0">
        <BannerHeader
          title="Próximas fechas"
          description="Brindamos diferentes cursos de capacitaciones tanto para empresas como
          para nuestra comunidad. Puede tomar los cursos cualquier persona que
          desee ampliar sus conocimientos en Salud"
          src={imgCursoFecha}
        />
      </Row>
      <div className="fechas__info">
        <div className="fechas__width">
          <h3>Próximos cursos</h3>

          <div>
            {!cursosInfo ? (
              <Spiner />
            ) : (
              cursosInfo.map((element) => {
                const finishDate = new Date(element.countdown);
                return (
                  <div className="infofecha__container" key={element.id}>
                    <h4>{element.titulo}</h4>
                    <p>
                      <span>Temario:</span> {element.descripcion}
                    </p>
                    <p>
                      <span>Fecha:</span> {element.fecha}{" "}
                      <Countdown date={finishDate} renderer={renderer} />
                    </p>
                    <p>
                      <span>Localidad:</span> {element.localidad}
                    </p>
                    <p>
                      <span>Lugar:</span> {element.lugar}
                    </p>
                    <p>
                      <span>Horario:</span> {element.horario} hs
                    </p>
                    <b>
                      {element.certificado &&
                        "✓ Certificado nacional o internacional"}
                    </b>
                    {finishDate > new Date() && (
                      <div className="infofecha__button">
                        <Button href="contacto">Consultar</Button>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fechas;
