import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { betInCart, propsActionAddCart } from "@sharedUtils/types";

const initialState : betInCart = {
  cart: [],
  totalPrice: 0
}

const controlCart = createSlice({
  name: "@bets",
  initialState,
  reducers: {
   addToCart(state, {payload} : PayloadAction<propsActionAddCart>){
     payload.bet.map((bet) => {
       state.cart.push(bet);
       state.totalPrice += bet.bet.price
       return state;
     })
   }
  },
});


export const reducerCart = controlCart.reducer;
export const {addToCart} = controlCart.actions

