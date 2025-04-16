import { useNavigate } from "react-router"

export default function NotFound () {
  const navigation = useNavigate();

  return(
    <>
      <h2>Oops!</h2>
      <p>A pagina que você tentou entrar não existe!</p>
      <p>Tente voltar a nossa pagina inicial <button onClick={() => navigation('/')}>clicando aqui</button>!</p>
    </>
  )
}