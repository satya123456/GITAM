import { useEffect, useState } from "react"
import type User  from "../model/User";

type AppProps = {
  setUserId: (id:number) => void
}

export default function Users({setUserId}: AppProps) {
  let [users, setUsers] = useState<User[]>();

  // componentDidMount ==> called once when component is created
  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        setUsers(data);
    })
  }, [ ]);

  return (
    <div>
      {
        users && users.map(user => <div key={user.id} onMouseEnter={() => setUserId(user.id)}>  
          {user.name} , {user.email}
        </div>)
    
      }
    </div>
  )
}
