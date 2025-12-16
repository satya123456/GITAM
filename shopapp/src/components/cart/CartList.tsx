import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContextProvider'
import CartRow from './CartRow';
import { Button } from 'react-bootstrap';

export default function CartList() {
  let {items, total, checkout} = useContext(CartContext);

  return (
    <div className='container'>
        {
          items.map(product => <CartRow product={product} key={product.id}/>)
        }
        <div className='row'>
          <div className='col-md-8'>
            &nbsp;
          </div>
           <div className='col-md-4'>
             Total : {total}
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            &nbsp;
          </div>
           <div className='col-md-4'>
             <Button variant='success' onClick={() => checkout()}>Checkout</Button>
          </div>
        </div>
    </div>
  )
}
