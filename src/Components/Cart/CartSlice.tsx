import { createSlice } from "@reduxjs/toolkit";

export const cartSlice: any = createSlice({
  name: "shoppingCart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state: any, action) => {
      state.cart, action.payload;
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
