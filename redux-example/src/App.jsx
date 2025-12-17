import {connect} from 'react-redux'; // bridging react and redux
import { useState } from "react"

function App(props) {
  let [email, setEmail] = useState();
  let [name,setName] = useState();

  function newContact() {
    let contact = {
      email,
      name
    };
    // send to REDUX
    props.addContact(contact);
  }

  function clearContacts() {
    //
  }
  return (
   <div>
      Email : <input type="email" onChange={(evt) => setEmail(evt.target.value)}/> <br />
      Name: <input type="text" onChange={(evt) => setName(evt.target.value)}/> <br />
      <button type="button" onClick={newContact}> Add Contact</button>
      <button type="button"  onClick={clearContacts}>Clear Contacts</button>
      <hr />
      {
        props.contactList.map(contact => <div key={contact.email}>
          {contact.email}, {contact.name}
          <button type="button" onClick={() => props.removeContact(contact.email)}>Remove</button>
        </div>)
      }
   </div>
  )
}

function mapStateToProps(state) {
  return {
    contactList: state.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: contact => dispatch({type:'ADD_CONTACT', payload: contact}),
    removeContact: email => dispatch({type:'REMOVE_CONTACT', payload: email})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

