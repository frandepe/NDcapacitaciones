import React, { useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { avalAction } from "../../redux/actions/avaldb";
import showAlert from "../../shared/showAlert";
import { privateDeleteRequest } from "../../services/privateApiServices";
import { Table } from "react-bootstrap";
import Spiner from "../../shared/spiner";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../../Components/shared.scss";

const AdminAval = () => {
  const dispatch = useDispatch();
  const [deleted, setDeleted] = useState(false);
  const { avalInfo, loading } = useSelector((store) => store.aval);
  const navigate = useNavigate();

  async function handleRemove(id) {
    try {
      await privateDeleteRequest(`aval/${id}`);
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
    dispatch(avalAction(avalInfo));
    if (deleted) {
      setDeleted(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleted, dispatch]);

  return (
    <section className="container_section">
      <header className="news-header">
        <h1>Imagenes Aval</h1>
      </header>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            <Spiner />
          ) : (
            avalInfo?.aval?.map((element) => {
              return (
                <tr key={element.id}>
                  <td className="img-backoffice">
                    <img src={element.imagen} alt="Imagen no encontrada" />
                  </td>
                  <td className="options">
                    <Link
                      to="/backoffice/avalForm"
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
        <Button onClick={() => navigate("/backoffice/avalForm")}>
          Nueva imagen +
        </Button>
      </div>
    </section>
  );
};

export default AdminAval;
