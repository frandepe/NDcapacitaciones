import { Form, Button } from "react-bootstrap";
import { ErrorMessage, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/login";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import * as yup from "yup";
import "../shared.scss";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { infoUser, error } = useSelector((store) => store.user);
  console.log("infoUser!:", infoUser);
  console.log("Token!:", infoUser?.token);
  console.log("Error!:", error);

  useEffect(() => {
    window.localStorage.getItem("token") && navigate("/backoffice");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.localStorage.getItem("token")]);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("El email es requerido")
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "Escriba un correo válido"
      )
      .max(50, "El email es demasiado largo"),
    password: yup
      .string()
      .required("Por favor, ingrese su contraseña")
      .max(50, "La contraseña es demasiado larga"),
  });

  return (
    <div className="form">
      <div>
        <div>
          <h2>Iniciar sesion</h2>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={formSchema}
          onSubmit={({ email, password }, { resetForm }) => {
            resetForm();
            try {
              dispatch(loginAction({ email, password }));
            } catch (err) {
              console.log("Error catch:", err);
            }
          }}
        >
          {({ values, handleSubmit, handleChange, handleBlur }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Floating className="mb-3">
                <Form.Control
                  name="email"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="email">Email address</label>

                <ErrorMessage
                  name="email"
                  component="p"
                  className="input-error"
                />
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form__input"
                />
                <label htmlFor="password">Password</label>
                <ErrorMessage
                  name="password"
                  component="p"
                  className="input-error"
                />
              </Form.Floating>

              <Button className="Login__btn" type="submit">
                "Ingresar"
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
