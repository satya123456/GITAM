import NavbarComponent from "./components/NavbarComponent"
import {Routes, Route} from 'react-router-dom'
import ProductList from "./components/products/ProductList"
import CartList from "./components/cart/CartList"
import ProductForm from "./components/products/ProductForm"
import Details from "./components/products/Details"

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/form" element={<ProductForm />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<ProductList />} />
        <Route path="*" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
