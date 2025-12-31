import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
// import action from slice
import { addToCart } from '../../redux/features/cartSlice';
import type Product from '../../model/Product'
 

import { Link } from 'react-router-dom';

type AppProps = {
  product: Product
}

export default function ProductCard({product}: AppProps) {
  let {id, title, image, price} = product;
 let dispatch = useDispatch();
  return (
  <div className='col-md-4'>
    <Card style={{ width: '18rem' }}>
      <Link to={`/details/${id}`}>
        <Card.Img variant="top" src={image} />
      </Link>
      
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        Rs. {price} &nbsp;&nbsp;&nbsp;&nbsp;   
        <Button variant="primary" 
            onClick={() => dispatch(addToCart({...product}))}>
              Add
        </Button>
      </Card.Footer>
    </Card>
  </div>
   
  )
}
