import { useEffect, useState } from "react"
import type Product from "../../model/Product";
import ProductCard from "./ProductCard";
import axios from "axios";

export default function ProductList() {
  let [products, setProducts] = useState<Product[]>([]);

  // componentDidMount
  useEffect(() => {
    // MySQL and Sequelize database and product.routes.ts
    axios.get("http://localhost:1234/api/products")
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
