import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const cartSlice: any = createSlice({
  name: "shoppingCart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state: any, action: any) => {
      return state.map((item: any) => {
        if (item.id !== action.payload.id) {
          return item
        }

        return {...item, added: true},
      })
    }
  }  
})
export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
