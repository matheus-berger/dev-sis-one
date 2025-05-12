import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginForm = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("LoginForm deve estar dentro de <AuthProvider>");
  }

  const {login} = context;

  const handleLogin = () => {
    login({ name: "Matheus Berger", email: "felipe@example.com"});
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );

}

export default LoginForm;