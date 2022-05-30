import "./Cards.scss";
import imgCard1 from "./ImgsCards/imgCursoGente.jpg";
import imgCard2 from "./ImgsCards/ImgCursoGente6.jpg";
import imgCard3 from "./ImgsCards/imgCurso3.jpg";
import imgCard4 from "./ImgsCards/imgDog.jpeg";
import Cards from "./Cards";

const Cas = () => {
  const cards = [
    {
      titulo: "Socorros urbanos con RCP y DEA",
      descripcion:
        "Diseñados para capacitar a los participantes a reconocer y tratar eficazmente las emergencias en adultos, niños y lactantes en los primeros minutos críticos hasta que llega el personal de los servicios de emergencias médicas. Especialmente recomendados para profesionales que desarrollan actividades con un alto compromiso social o tienen personas a cargo que puedan estar expuestas a situaciones de emergencia.",
      imagen: imgCard3,
    },
    {
      titulo: "Formador de Brigadistas de Emergencias",
      descripcion:
        "Este curso está dirigido a aquellos Instructores de Primeros Socorros con RCP y DEA, que quieran certificar brigadistas o brigadas en empresas o instituciones. Una brigada de emergencia es un grupo de trabajadores que se encuentran debidamente organizados, entrenados y equipados para identificar las condiciones de riesgo que puedan generar determinadas emergencias. A estos trabajadores se los denomina brigadistas y se encuentran entrenados para actuar oportunamente controlando o minimizando los riesgos identificados.",
      imagen: imgCard2,
    },
    {
      titulo: "Monitor de Zonas Cardio Seguras",
      descripcion:
        "El objetivo de este curso es capacitar a toda persona que pudiese verse involucrada en alguna situación que requiera conocimientos en Reanimación CerebroCardiopulmonar, uso del desfibriladorexterno y Certificar la Zona Cardio Segura.",
      imagen: imgCard1,
    },
    {
      titulo: "Primeros Auxilios para Perros y Gatos",
      descripcion:
        "El curso está dirigido a personas que tengan compromiso por las mascotas y quieran adquirir el conocimiento de cómo reconocer y actuar ante enfermedades súbitas y lesiones frecuentes en mascotashasta que llegue el veterinario o arribe al hospital veterinario.",
      imagen: imgCard4,
    },
  ];

  return (
    <div className="dataCards__container">
      {cards.map((e) => {
        return (
          <Cards
            key={e.titulo}
            titulo={e.titulo}
            descripcion={e.descripcion}
            imagen={e.imagen}
          />
        );
      })}
    </div>
  );
};

export default Cas;
