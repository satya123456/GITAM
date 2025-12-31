import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { ProductsState } from "../api/productsApi"
import fetchProducts from "../api/productsApi"
import type Product from "../../model/Product"

const initialState: ProductsState = {
    list: [],
    status: "idle",
    error: null
}

const productSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
   },
  extraReducers: (builder) => {
     builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
      state.list = [];
      state.error = null;
    }),
     builder.addCase(fetchProducts.fulfilled, (state, action:PayloadAction<Product[]>) => {
     
      state.list.push(...action.payload)
      state.error = null;
       state.status = "idle";
    }),
    builder.addCase(fetchProducts.rejected, (state) => {
      state.list = [];
       state.status = "idle";
       state.error = "Boom :-(";
    })
  },
})

export default productSlice.reducer;