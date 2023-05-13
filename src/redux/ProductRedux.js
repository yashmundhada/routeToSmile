import { createSlice } from "@reduxjs/toolkit";

const ProductRedux = createSlice({
  name: "product",
  initialState: {
    value: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.value = action.payload.products;
    },
    updateProduct: (state, action) => {
      state.value = [...state.value, action.payload];
    }
  }
});

//exported reducer
export const {
  addProduct,
  updateProduct,
  deleteProduct
} = ProductRedux.actions;

//default export the slice
export default ProductRedux.reducer;
