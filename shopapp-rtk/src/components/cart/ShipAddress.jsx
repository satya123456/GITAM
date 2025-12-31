import { useRef } from 'react';

import { Button } from 'react-bootstrap'

// Uncontrolled Component
// input type  text boxes holds the data
export default function ShipAddress() {
  let nameRef = useRef();
  let houseRef = useRef();
  let streetRef = useRef();

  function doSubmit() {
    let address = {
      "Contact": nameRef.current.value,
      "House": houseRef.current.value,
      "Street": streetRef.current.value
    }
    console.log(address);
  }
  return (
    <div>
      <h1>Address Details</h1>
      <form>
        Contact Person : <input type="text" ref={nameRef} /> <br />
        House Number : <input type='number' ref={houseRef} /> <br />
        Street: <input type="text" ref={streetRef} /> <br />
        <Button variant='success' onClick={doSubmit}>Continue to Payment</Button>
      </form>
    </div>
  )
}
