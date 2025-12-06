import React, { Component } from 'react'

export default class Users extends Component {
  state = {
    users : []
  }

  // called after first Render!!!
  componentDidMount() {
    console.log("componentDidMount()!!!")
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        this.setState({
            users: data
        })
    })
  }
  render() {
    console.log("Render!!!")
    return (
      <div>
        <h1>Users</h1>
        {
            this.state.users.map(user => <div 
                onMouseMove={() => this.props.setId(user.id)}
                key={user.id}> {user.name}, {user.email} </div>)
        }
      </div>
    )
  }
}
