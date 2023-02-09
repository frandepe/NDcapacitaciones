import React, { useState } from "react";
import * as yup from "yup";
import { Button, Form } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import showAlert from "../../shared/showAlert";
import { privatePostRequest } from "../../services/privateApiServices";
import { useNavigate } from "react-router-dom";
import { privatePutRequest } from "../../services/privateApiServices";
import { useLocation } from "react-router-dom";
import "../../Components/shared.scss";

const AdminCursosForm = (patchData) => {
  const location = useLocation();

  // const data = location.state?.data;

  const navigate = useNavigate();

  const [statusForm, setStatusForm] = useState(false);

  const formSchema = yup.object().shape({
    fecha: yup
      .string()
      .required("El campo es requerido")
      .max(100, "No puede ingresar más de 100 caracteres"),
  });

  return (
    <div className="container_abm">
      <div className="container_form">
        <h2>Cursos</h2>
        <Formik
          initialValues={{
            // id: patchData?.location?.state?.id || "",
            fecha: location?.state?.element?.fecha || "",
            countdown: location?.state?.element?.countdown || "",
            titulo: location?.state?.element?.titulo || "",
            localidad: location?.state?.element?.localidad || "",
            lugar: location?.state?.element?.lugar || "",
            horario: location?.state?.element?.horario || "",
            descripcion: location?.state?.element?.descripcion || "",
            certificado: location?.state?.element?.descripcion || false,
          }}
          validationSchema={formSchema}
          onSubmit={async ({ ...formData }) => {
            setStatusForm(true);
            try {
              if (location?.state?.element?.id) {
                await privatePutRequest({
                  url: `cursos/${location?.state?.element?.id}`,
                  putData: { ...formData },
                });

                showAlert({ type: "success", title: "Editado correctamente" });
                navigate("/backoffice/cursos");
                return;
              }
              await privatePostRequest("cursos", {
                ...formData,
              });

              // if (!response?.data?.status === 200)
              //   throw new Error("Algo falló");
              showAlert({
                type: "success",
                title: patchData?.location?.state?.id
                  ? "Editado correctamente"
                  : "Creado correctamente",
              }) && navigate("/backoffice/cursos");
            } catch (err) {
              console.log("Error catch:", err);
            } finally {
              setStatusForm(false);
            }
          }}
        >
          {({
            values,
            handleSubmit,
            handleChange,
            handleBlur,
            setFieldValue,
          }) => (
            <form className="form_inputs" onSubmit={handleSubmit}>
              <Form.Label htmlFor="fecha">Fecha</Form.Label>
              <Form.Control
                placeholder="Ej: 15 de Abril"
                required
                name="fecha"
                id="fecha"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fecha}
              />
              <ErrorMessage
                name="fecha"
                component="p"
                className="input-error"
              />

              <Form.Label htmlFor="countdown">
                Fecha limite para anotarse
                <span>
                  -Es importante que la fecha se coloque de esta manera:
                  2022-05-17T14:20:00
                </span>
              </Form.Label>
              <Form.Control
                placeholder="2022-05-17T14:20:00"
                required
                name="countdown"
                id="countdown"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.countdown}
              />
              <ErrorMessage
                name="countdown"
                component="p"
                className="input-error"
              />

              <Form.Label htmlFor="titulo">Título</Form.Label>
              <Form.Control
                placeholder="Socorrismo urbano con RCP y DEA"
                required
                name="titulo"
                id="titulo"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.titulo}
              />
              <ErrorMessage
                name="titulo"
                component="p"
                className="input-error"
              />

              <Form.Label htmlFor="localidad">Localidad</Form.Label>
              <Form.Control
                placeholder="Pellegrini"
                required
                name="localidad"
                id="localidad"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.localidad}
              />
              <ErrorMessage
                name="localidad"
                component="p"
                className="input-error"
              />

              <Form.Label htmlFor="lugar">Lugar</Form.Label>
              <Form.Control
                placeholder="Complejo polideportivo / A definir"
                required
                name="lugar"
                id="lugar"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lugar}
              />
              <ErrorMessage
                name="lugar"
                component="p"
                className="input-error"
              />

              <Form.Label htmlFor="horario">Horario</Form.Label>
              <Form.Control
                placeholder="19:00"
                required
                name="horario"
                id="horario"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.horario}
              />
              <ErrorMessage
                name="horario"
                component="p"
                className="input-error"
              />

              <Form.Label htmlFor="descripcion">Descripcion</Form.Label>
              <Form.Control
                placeholder="Este curso permitirá al profesional..."
                required
                name="descripcion"
                id="descripcion"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.descripcion}
              />
              <ErrorMessage
                name="descripcion"
                component="p"
                className="input-error"
              />
              {/* 
              <Form.Label htmlFor="certificado">Certificado</Form.Label>
              <Form.Check
                type="radio"
                inline
                label="Si"
                name="certificado"
                id="certificado"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.certificado === true}
              /> */}
              <div className="form_radioCheck">
                <label>Certificado:</label>

                <label style={{ marginLeft: "10px" }}>
                  Si
                  <input
                    type="radio"
                    name="certificado"
                    value={values.certificado}
                    checked={values.certificado === true}
                    onChange={() => setFieldValue("certificado", true)}
                  />
                </label>
                <label>
                  No
                  <input
                    type="radio"
                    name="certificado"
                    value={values.certificado}
                    checked={values.certificado === false}
                    onChange={() => setFieldValue("certificado", false)}
                  />
                </label>
              </div>
              <ErrorMessage
                name="certificado"
                component="p"
                className="input-error"
              />
              <div className="btn-nuevo">
                <Button type="submit" disabled={statusForm}>
                  {patchData?.location?.state?.id ? "Editar" : "Crear"}
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminCursosForm;
