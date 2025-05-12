import React, {useContext} from "react";
import AuthContext from "../context/AuthContext";

const Dashboard = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Dashboard deve estar dentro de <AuthProvider>");
  }

  const {user, logout} = context;

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <>
          <p>Bem vindo, {user.name} ({user.email})</p>
          <button onClick={logout}>Sair</button>
        </>
      ) :  (
        <p>Você não está logado!</p>
      )}
    </div>
  );

}

export default Dashboard;
