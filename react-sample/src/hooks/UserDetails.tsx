import { useEffect, useState } from "react"
import type User from "../model/User";

type UserDetailsProps = {
    id: number
}

export default function UserDetails({id}: UserDetailsProps) {
  let [user, setUser] = useState<User | null>( null);
  
  // componentDidUpdate
  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(response => response.json())
    .then(data => {
       setUser(data);
    })
  }, [id]);

  return (
    <div>
        <h1>UserDetails</h1>
        {
            user && <div>
                        {user.company.name} <br />
                        {user.address.city} <br />
                        {user.website} <br />
                </div>
        }
    </div>
  )
}
