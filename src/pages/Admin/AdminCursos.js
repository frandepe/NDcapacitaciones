import React, { useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cursosAction } from "../../redux/actions/cursosdb";
import showAlert from "../../shared/showAlert";
import { privateDeleteRequest } from "../../services/privateApiServices";
import { Table } from "react-bootstrap";
import Spiner from "../../shared/spiner";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../../Components/shared.scss";

const AdminCursos = () => {
  const dispatch = useDispatch();
  const [deleted, setDeleted] = useState(false);
  const { cursosInfo, loading } = useSelector((store) => store.cursos);
  console.log(cursosInfo);
  const navigate = useNavigate();

  async function handleRemove(id) {
    try {
      await privateDeleteRequest(`cursos/${id}`);
      showAlert({ type: "success", title: "Eliminado correctamente" });
      setDeleted(true);
    } catch (error) {
      showAlert({
        type: "error",
        title: "No se pudo eliminar",
      });
    }
  }

  useEffect(() => {
    dispatch(cursosAction(cursosInfo));
    if (deleted) {
      setDeleted(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleted, dispatch]);

  return (
    <section className="container_section">
      <header className="news-header">
        <h1>Listado de usuarios</h1>
      </header>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Cuenta regresiva</th>
            <th>Título</th>
            <th>Localidad</th>
            <th>Lugar</th>
            <th>Horario</th>
            <th>Descripción</th>
            <th>Certificado</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            <Spiner />
          ) : (
            cursosInfo?.cursos?.map((element) => {
              return (
                <tr key={element.id}>
                  <td className="title">{element.fecha}</td>
                  <td>{element.countdown}</td>
                  <td>{element.titulo}</td>
                  <td>{element.localidad}</td>
                  <td>{element.lugar}</td>
                  <td>{element.horario}</td>
                  <td>{element.descripcion}</td>
                  <td>{element.certificado ? "si" : "no"}</td>

                  <td className="options">
                    <Link
                      to="/backoffice/cursosForm"
                      state={{ element: element }}
                      className="change-button-edit"
                    >
                      <MdModeEdit />
                    </Link>

                    <button
                      className="change-button-delete"
                      onClick={() => {
                        handleRemove(element.id);
                      }}
                    >
                      <IoMdTrash />
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
      <div className="btn-nuevo">
        <Button onClick={() => navigate("/backoffice")}>Regresar</Button>
        <Button onClick={() => navigate("/backoffice/cursosForm")}>
          Nuevo curso +
        </Button>
      </div>
    </section>
  );
};

export default AdminCursos;
