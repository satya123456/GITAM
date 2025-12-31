import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type Product from '../../model/Product';

const fetchProducts = createAsyncThunk(
  'products/fetch',
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products?limit=5");
    return response.data
  },
)

export interface ProductsState {
  list: Product[]
  status: 'idle' | 'loading',
  error: null | string
}

export default fetchProducts;