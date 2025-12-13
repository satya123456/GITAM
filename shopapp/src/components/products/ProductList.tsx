import { useEffect, useState } from "react"
import type Product from "../../model/Product";
import ProductCard from "./ProductCard";
import axios from "axios";

export default function ProductList() {
  let [products, setProducts] = useState<Product[]>([]);

  // componentDidMount
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=5")
    .then(response => {
      setProducts(response.data); //json payload
    })
  },[]);

  return (
   <div className="container">
    <div className="row">
        {
        products && products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </div>
   </div>
  )
}
