import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../contexts/auth";

import { Container } from "./styles";

function initialState() {
  return { email: "", password: "" };
}

const Login: React.FC = () => {
  const [values, setValues] = useState(initialState);
  const { signed, signIn } = useContext(AuthContext);

  function handleSubmit(event: any) {
    event.preventDefault();
    signIn(values);
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <div>
      {signed ? (
        <Redirect to={{ pathname: "/painel" }} />
      ) : (
        <Container>
          <form onSubmit={handleSubmit}>
            <h3>Login Admin</h3>
            <div className="label">
              <input
                type="text"
                name="email"
                onChange={onChange}
                value={values.email}
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                onChange={onChange}
                value={values.password}
                placeholder="Senha"
              />
            </div>
            <div className="button">
              <button type="submit">Entrar</button>
              <p>Esqueci minha senha</p>
            </div>
          </form>
        </Container>
      )}
    </div>
  );
};

export default Login;
