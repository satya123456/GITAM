import React, { Component } from 'react'

export default class CustomerRow extends Component {

  render() {
     let {id, firstName, lastName} = this.props.customer; // comming from parent
    return (
      <div>
        {firstName} {lastName} <button type='button'>Delete</button>
      </div>
    )
  }
}
