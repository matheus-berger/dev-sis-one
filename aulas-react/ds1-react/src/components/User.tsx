import { useEffect, useState } from "react";
import { useParams } from "react-router"



export default function User () {
  /*
    Essa id é o nome que esta na url.
    Porteriormente é possivel fazer uma pesquisa na api para pegar os dados do usuario.
  */
  const { id } = useParams();

  const [user, setUser] = useState<any>();
  
    const fetchUser = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const userData = await response.json();
      setUser(userData);
    }
  
    useEffect(() => {
      fetchUser()
    }, [])

  return(
    <div>
      <h2>User id {id}</h2>
      <p>{user && user.id}</p>
      <p>{user && user.name}</p>
    </div>
    
  )
};