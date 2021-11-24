

import { createAsyncThunk } from "@reduxjs/toolkit"
import { AppDispatch, RootState } from "src/store"
import { addBetsInCart, usuario } from "../users/controlUsers";



export const saveCart = createAsyncThunk<  void,
undefined,
{
  dispatch: AppDispatch;
  state: RootState;
}>(
    "saveBet/saveBetInCartUser", (_, thunkApi) => {
      const userActual = thunkApi.getState().users.userAuthenticated;
      if(userActual) {
        thunkApi.dispatch(addBetsInCart(userActual))
      }
    }
)