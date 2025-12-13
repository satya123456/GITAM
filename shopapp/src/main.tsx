import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './context/CartContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <CartContextProvider>
     <App />
  </CartContextProvider>
  </BrowserRouter>
)
