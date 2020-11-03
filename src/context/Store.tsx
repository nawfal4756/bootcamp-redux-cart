import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Components/Cart/CartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
