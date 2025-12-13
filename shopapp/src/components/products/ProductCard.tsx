import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import type Product from '../../model/Product'

type AppProps = {
  product: Product
}

export default function ProductCard({product}: AppProps) {
  let {id, title, image, price} = product;
  return (
  <div className='col-md-4'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        Rs. {price} &nbsp;&nbsp;&nbsp;&nbsp;   
        <Button variant="primary">Add</Button>
      </Card.Footer>
    </Card>
  </div>
   
  )
}
