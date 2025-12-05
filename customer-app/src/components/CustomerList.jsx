import React, { Component } from 'react'
import CustomerRow from './CustomerRow';
import Filter from './Filter';

// class component 
// Specialized component
export default class CustomerList extends Component {
  x = 10; // is also a state, but not managed by react
  y = 15; // is also a state, but not managed by react
  state = {
    name : "Raj",
    age: 35,
    // for view
    customers: [
      {"id": 1, "firstName": "Rachel", "lastName": "Green"},
      {"id": 2, "firstName": "Phobhe", "lastName": "Buffay"},
      {"id": 3, "firstName": "Ross", "lastName": "Geller"},
      {"id": 4, "firstName": "Joey", "lastName": "Tribuanni"},
      {"id": 5, "firstName": "Chandler", "lastName": "Bing"},
      {"id": 6, "firstName": "Monica", "lastName": "Geller"}
    ],
    original: [
      {"id": 1, "firstName": "Rachel", "lastName": "Green"},
      {"id": 2, "firstName": "Phobhe", "lastName": "Buffay"},
      {"id": 3, "firstName": "Ross", "lastName": "Geller"},
      {"id": 4, "firstName": "Joey", "lastName": "Tribuanni"},
      {"id": 5, "firstName": "Chandler", "lastName": "Bing"},
      {"id": 6, "firstName": "Monica", "lastName": "Geller"}
    ]
  }
  deleteCustomer(id) {
    // easiest way of deleting array elements
    let custs = this.state.customers.filter(c => c.id !== id);
    // this won't work, state updates but reconcillation won't happen
    //  this.state.customers = custs; 
    // always use setState to update state and force reconcilliation - redraw
    this.setState({
      customers: custs
    })
  }

  filterCustomers(txt) {
    let custs = this.state.original.filter(c => c.lastName.toUpperCase()
      .indexOf(txt.toUpperCase()) >= 0)

     this.setState({
      customers: custs
    })
  }
  // render returns JSX -> React.createElement() -> JS
  render() {
    return (
      <div>
        <Filter filterEvent = {(txt) => this.filterCustomers(txt)}/>
        {
          this.state.customers.map(cust => <CustomerRow 
              delEvent={(id) => this.deleteCustomer(id)}
              customer={cust} key={cust.id}/>)
        }
      </div>
    )
  }
}

