import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import type Product from "../../model/Product";

export default function Details() {
  let {id} = useParams(); // PathVariable, Path Parameter
  let [product, setProduct] = useState<Product>();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
    .then(response => response.json())
    .then(data => setProduct(data));
  }, [id]);

  return (
    <div>
      Details
      { product && <div>
        Title: {product.title} <br />
        <img src = {product.image} />
      </div>  
      }  
    </div>
  )
}
