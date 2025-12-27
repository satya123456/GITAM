"use client";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import Product from '@/models/Product';


type AppProps = {
  product: Product
}

export default function ProductCard({product}: AppProps) {
  console.log("Rendered ProductCard")
  let {id, title, image, price} = product;
  return (
  <div className='col-md-4'>
    <Card style={{ width: '18rem' }}>
      <Link href={`/products/${id}`}>
        <Card.Img variant="top" src={image} />
      </Link>
      
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
