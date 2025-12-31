import { lazy, Suspense } from "react"

import NavbarComponent from "./components/NavbarComponent"
import {Routes, Route} from 'react-router-dom'
import ProductList from "./components/products/ProductList"
import ProductForm from "./components/products/ProductForm"
import Default from "./components/Default"
import ShipAddress from "./components/cart/ShipAddress"
import { Spinner } from "react-bootstrap"
import { useAppSelector } from "./redux/store"
// import { useSelector } from "react-redux"

const CartList = lazy(() => import ("./components/cart/CartList"));
const Details = lazy (() => import ("./components/products/Details"));

function App() {
  let {name} = useAppSelector(state => state.profile);
  // @ts-ignore
  // let {name} = useSelector(state => state.profile);
  return (
    <div>
      <h1> Welcome, {name}</h1>
      <NavbarComponent />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={
          <Suspense fallback={<Spinner animation="border" variant="primary" />}>
             <CartList />
          </Suspense>
  
        } />
        <Route path="/form" element={<ProductForm />} />
        <Route path="/details/:id" element={
           <Suspense fallback={<h1>Loading Details ...</h1>}>
                <Details />
           </Suspense>
        } />
        <Route path="/address" element={<ShipAddress />} />
        <Route path="/" element={<ProductList />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </div>
  )
}

export default App
