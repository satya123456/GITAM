import React from 'react'

// import CartRow from './CartRow';
import { Button } from 'react-bootstrap';
import { useAppSelector } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { checkout } from '../../redux/features/cartSlice';
import CartRow from './CartRow';
export default function CartList() {
   
   let {items, total} = useAppSelector(state => state.cart);
   let dispatch = useDispatch();

   function cartCheckout() {
    // API call to Server to store orders...
    dispatch(checkout());
   }
  return (
    <div className='container'>
        {
          items.map(product => <CartRow key={product.id} product={product} />)
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
             <Button variant='success' onClick={cartCheckout}>Checkout</Button>
          </div>
        </div>
    </div>
  )
}
