import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsId: null,
  page: 0,
};

export const ProductSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setProductsId: (state, action) => {
      state.productsId = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductsId, setPage } = ProductSlice.actions;

export default ProductSlice.reducer;
