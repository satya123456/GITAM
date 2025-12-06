
import CustomerList from './components/CustomerList'
import ParentComponent from './lifecycle/ParentComponent'
import UserDetails from './users/UserDetails'
import Users from './users/Users'

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    uid: 1
  }
  setUserId(id) {
    this.setState({
      uid: id
    })
  }

  render() {
    return (
         <div className='container'>
         <h1>Customer Application</h1>
          <div className='row'>
            <div className='col-md-8'>
              <Users setId={(id) => this.setUserId(id)}/>
            </div>
             <div className='col-md-4'>
              <UserDetails id={this.state.uid}/>
            </div>
          </div>
        </div>
    )
  }
}

// function App() {
//   return  <div>
      
//         {/* <ParentComponent />
//         <CustomerList /> */}
//         <div className='container'>
//             <h1>Customer Application</h1>
//           <div className='row'>
//             <div className='col-md-8'>
//               <Users />
//             </div>
//              <div className='col-md-4'>
//               <UserDetails />
//             </div>
//           </div>
//         </div>
//   </div>
  

// }

// export default App
