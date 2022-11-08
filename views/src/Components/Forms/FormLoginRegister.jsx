import React from "react";
import { createUser } from "../../redux/features/users/usersGetSlice";
import FormItem from "./components/FormItem";
//ejemplo de component

export const FormLoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const onSubmit = (values, actions) => {
    // logica para consumir los endpoints register y login
    if (isLogin) {
    } else {
      createUser(values);
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={inputSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          <h3>{isLogin ? "Ingresar" : "Registrarse"}</h3>
          {!isLogin && (
            <>
              <FormItem
                labelText="Nombre:"
                type="text"
                name="name"
                placeholder="Nombre"
              />
              <FormItem
                labelText="Apellido:"
                type="text"
                name="lastName"
                placeholder="Apellido"
              />
            </>
          )}
          <FormItem
            labelText="Email:"
            name="email"
            type="email"
            placeholder="email"
          />
          <FormItem
            labelText="Pasword:"
            name="password"
            type="password"
            placeholder="password"
          />
          <button type="submit" disabled={props.isSubmitting}>
            {isLogin ? "Ingresar" : "Crear cuenta"}
          </button>
          <p>
            {isLogin ? "¿No estas registrado? " : "Ya tienes una cuenta "}
            <button type="button" className="login-btn" onClick={toggleLogin}>
              {isLogin ? " Crear cuenta" : " Ingresar"}
            </button>
          </p>
        </Form>
      )}
    </Formik>
  );
};
