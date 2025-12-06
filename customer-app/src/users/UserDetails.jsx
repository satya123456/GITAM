import React, { Component } from 'react'

export default class UserDetails extends Component {
  state = {
    user: null
  }
  // called when new user id is passed
  componentDidUpdate(prevProps, prevState){
     console.log('update Details!!!')
    if(this.props.id !== prevProps.id) {
    fetch('https://jsonplaceholder.typicode.com/users/' + this.props.id)
    .then(response => response.json())
    .then(data => {
        this.setState({
            user: data
        })
    })
    }
  }
  render() {
   
    return (
      <div>
        <h1>UserDetails</h1>
        {
            this.state.user && <div>
                    Address: {this.state.user.address.street}, {this.state.user.address.city} <br/>
                    Company: {this.state.user.company.name} <br />
                </div>
        }  
      </div>
    )
  }
}
