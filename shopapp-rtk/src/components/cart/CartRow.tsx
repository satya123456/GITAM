import React from 'react'
import type CartItem from '../../model/CartItem'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { increment } from '../../redux/features/cartSlice';


type AppProps = {
  product: CartItem
}

export default function CartRow({product}: AppProps) {
  let {id, image, title, price, quantity, amount} = product; // CartItem
  let dispatch = useDispatch();
  return (
    <div className='row'>
      <div className='col-md-2'>
        <img src={image} style={{'width': '50px'}} />
      </div>
      <div className='col-md-2'>
        {title}
      </div>
      <div className='col-md-4'>
        <Button> - </Button> &nbsp;
          {quantity} &nbsp;
         <Button onClick={() => dispatch(increment(id))}> + </Button> 
      </div>
      <div className='col-md-2'>
        Price : { price}
      </div>
      <div className='col-md-2'>
        Amount : { amount}
      </div>
    </div>
  )
}
