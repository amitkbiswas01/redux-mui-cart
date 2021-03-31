import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
    products: {},
  },
  reducers: {
    addToCart: (state, id) => {
      state.value += 1;

      id = id.payload.toString();
      state.products = {
        ...state.products,
        [id]: {
          quantity: (state.products[id]?.quantity ?? 0) + 1,
        },
      };
    },
    removeFromCart: (state, id) => {
      state.value -= 1;

      id = id.payload.toString();
      const currentState = { ...state.products };
      currentState[id].quantity -= 1;
      if (currentState[id].quantity === 0) {
        delete currentState[id];
      }
      state.products = currentState;
    },
  },
});
export const selectCount = (state) => state.cart.value;
export const selectProducts = (state) => state.cart.products;

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
