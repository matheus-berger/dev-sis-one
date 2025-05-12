import { useContext } from "react"
import AuthContext from "./context/AuthContext"
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";

const App = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("App deve estar dentro de <AuthProvider>");
  }

  const {user} = context;

  return (
    <div style={{ padding: 24 }}>
      <h1>+ Fiat Lux! +</h1>
      <h1>Exemplo de Autenticação</h1>
      {user ? <Dashboard /> : <LoginForm />}
    </div>
  )
}

export default App
