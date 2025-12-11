import { useState } from "react"
// import StateComp from "./hooks/StateComp"

import Users from "./hooks/Users";
import UserDetails from "./hooks/UserDetails";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  let [id,setId] = useState<number>(1);

  return (
    <div className="container">
      {/* <StateComp /> */}
     <div className='row'>
          <div className='col-md-8'>
                   <Users setUserId={(id:number) => setId(id)}/>
          </div>
          <div className='col-md-4'>
                   <UserDetails id={id}/>
          </div>
      </div>
    </div>
  )
}

export default App
