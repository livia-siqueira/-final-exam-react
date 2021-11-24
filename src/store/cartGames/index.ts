import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dispatch } from "react-hot-toast/dist/core/store";
import { Bet, usuario } from "../users/controlUsers";



interface betInCart {
  cart: Bet[],
  totalPrice: number
  
}

const initialState : betInCart = {
  cart: [],
  totalPrice: 0
}

interface propsAction {
  bet: Bet[]
}

const cart = createSlice({
  name: "@bets",
  initialState,
  reducers: {
   addToCart(state, {payload} : PayloadAction<propsAction>){
     payload.bet.map((bet) => {
       state.cart.push(bet);
       state.totalPrice += bet.bet.price
     })
   }
  },
});


export default cart.reducer;
export const {addToCart} = cart.actions

