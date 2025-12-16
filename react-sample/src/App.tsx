import { useState } from "react"
// import StateComp from "./hooks/StateComp"

import Users from "./hooks/Users";
import UserDetails from "./hooks/UserDetails";
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from "./hooks/Counter";
import LoginComponent from "./hooks/LoginComponent";
import ParentComponent from './trial/ParentComponent';

function App() {
  let [id,setId] = useState<number>(1);

  return (
    
    <LoginComponent>
    <ParentComponent />
    <div className="container">
      {/* <StateComp /> */}
     <Counter />
     <div className='row'>
          <div className='col-md-8'>
                   <Users setUserId={(id:number) => setId(id)}/>
          </div>
          <div className='col-md-4'>
                   <UserDetails id={id}/>
          </div>
      </div>
    </div>
     </LoginComponent>
  )
}

export default App
