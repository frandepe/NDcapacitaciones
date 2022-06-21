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

const AdminAvalForm = (patchData) => {
  const location = useLocation();
  console.log(patchData, " patchData");
  console.log(location, " useLocation Hook");
  const navigate = useNavigate();
  const [statusForm, setStatusForm] = useState(false);
  const [previewImage, setPreviewImage] = useState(
    () => patchData?.location?.state?.imagen || null
  );

  const SUPPORTED_FORMATS = /(jpg|png|jpeg)/;
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const formSchema = yup.object().shape({
    imagen: yup
      .mixed()
      .required("La imagen es requerida")
      .test("fileType", "El formato no es correcto", (imagen) => {
        if (!SUPPORTED_FORMATS.test(imagen)) return false;
        setPreviewImage(imagen);
        return true;
      }),
  });

  return (
    <div className="container_abm">
      <div className="container_form">
        <h2>Aval</h2>
        <Formik
          initialValues={{
            imagen: location?.state?.element?.imagen || "",
          }}
          validationSchema={formSchema}
          onSubmit={async ({ imagen }) => {
            setStatusForm(true);
            try {
              if (location?.state?.element?.id) {
                const putRes = await privatePutRequest({
                  url: `aval/${location?.state?.element?.id}`,
                  putData: { imagen },
                });
                console.log(putRes);

                showAlert({ type: "success", title: "Editado correctamente" });
                navigate("/backoffice/aval");
                return;
              }
              const response = await privatePostRequest("aval", {
                imagen,
              });
              console.log(response);
              // if (!response?.data?.status === 200)
              //   throw new Error("Algo falló");
              showAlert({
                type: "success",
                title: patchData?.location?.state?.id
                  ? "Editado correctamente"
                  : "Creado correctamente",
              }) && navigate("/backoffice/aval");
            } catch (err) {
              console.log("Error catch:", err);
            } finally {
              setStatusForm(false);
            }
          }}
        >
          {({ values, handleSubmit, setFieldValue, setFieldTouched }) => (
            <form className="form_inputs-img" onSubmit={handleSubmit}>
              <Form.Label htmlFor="fecha">Subir imagen</Form.Label>

              <Form.Control
                data-testid="imagen"
                type="file"
                accept="imagen/png, imagen/jpeg, imagen/jpg"
                id="imagen"
                name="imagen"
                onChange={async (event) => {
                  setFieldTouched("imagen", true);
                  const imageBase64 = await getBase64(event.target.files[0]);
                  setFieldValue("imagen", imageBase64);
                }}
              />

              <ErrorMessage
                name="imagen"
                component="p"
                className="input-error"
              />

              {previewImage && (
                <img
                  src={previewImage}
                  alt="Imagen no encontrada"
                  width={300}
                  height={100}
                />
              )}
              <div className="btn-nuevo">
                <Button type="submit" disabled={statusForm}>
                  {patchData?.location?.state?.id ? "Editar" : "Subir"}
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminAvalForm;
