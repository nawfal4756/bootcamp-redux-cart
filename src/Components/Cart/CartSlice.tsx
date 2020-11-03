import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state) => {},
    deleteItem: (state) => {},
  },
});

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
