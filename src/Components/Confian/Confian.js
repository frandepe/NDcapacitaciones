import "./Confian.scss";
// import imgConfian1 from "./confian1.jfif";
// import imgConfian2 from "./confian2.jpg";
// import imgConfian3 from "./confian3.png";
// import imgConfian4 from "./confian4.jpg";
// import imgConfian5 from "./confian5.png";
import { Container, Col, Row } from "react-bootstrap";
import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import LazyLoad from "../LazyLoad/LazyLoad";
import { useSelector, useDispatch } from "react-redux";
import { avalAction } from "../../redux/actions/avaldb";
import Spiner from "../../shared/spiner";



const Confian = () => {
  const dispatch = useDispatch();
  const { avalInfo, loading } = useSelector((store) => store.aval);

  useEffect(() => {
    dispatch(avalAction(avalInfo));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="confian__container">
      <h2>Aval</h2>

      <Container className="confian__flexImg">
        <Row className="confian__colImg">
          {!loading ? (
            <Spiner />
          ) : (
            avalInfo?.aval?.map((element) => {
              return (
                <Col key={element.id}>
                  <LazyLoad src={element.imagen} alt="imagen no encontrada" />
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Confian;
