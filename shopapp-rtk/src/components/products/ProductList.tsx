import { useEffect, useState } from "react"
import type Product from "../../model/Product";
import ProductCard from "./ProductCard";
// import axios from "axios";
import { useDispatch } from "react-redux";
import fetchProducts from "../../redux/api/productsApi";
import { useAppSelector } from "../../redux/store";
import { Spinner } from "react-bootstrap";

export default function ProductList() {
  // let [products, setProducts] = useState<Product[]>([]);
  let dispatch = useDispatch();
  let {list: products, status, error} = useAppSelector(state => state.products);
  // componentDidMount
  useEffect(() => {
    // axios.get("https://fakestoreapi.com/products?limit=5")
    // .then(response => {
    //   setProducts(response.data); //json payload
    // })
    // @ts-ignore
    dispatch(fetchProducts());
  },[]);

  return (
   <div className="container">
      {
        error && <div>{error} </div>
      }
      {
        status === "loading" ? <Spinner variant="primary"></Spinner> : (
            <div className="row">
        {
          products && products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </div>
      )
    }
      </div>

  )
}
