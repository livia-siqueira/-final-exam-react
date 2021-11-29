import { createAsyncThunk } from "@reduxjs/toolkit"
import { AppDispatch, RootState } from "../../index"
import { addBetsInCart } from "../index";

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