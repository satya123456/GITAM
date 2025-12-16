import { useContext, useEffect, useState } from "react"
import type User  from "../model/User";
import { UserContext } from "./LoginComponent";

type AppProps = {
  setUserId: (id:number) => void
}

export default function Users({setUserId}: AppProps) {
  let [users, setUsers] = useState<User[]>();

  let {name} = useContext(UserContext); // Consumer
  // let {cartItems} = useContext(CartContext);

  // componentDidMount ==> called once when component is created
  useEffect(() => {
    console.log("Called in Users useEffect")
     fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        setUsers(data);
    })
  }, [ ]);

  return (
    <div>
      <h1> Welcome , {name} </h1>
      {
        users && users.map(user => <div key={user.id} onMouseEnter={() => setUserId(user.id)}>  
          {user.name} , {user.email}
        </div>)
    
      }
    </div>
  )
}
