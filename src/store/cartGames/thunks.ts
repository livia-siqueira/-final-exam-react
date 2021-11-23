

import { createAsyncThunk } from "@reduxjs/toolkit"
import { AppDispatch, RootState } from "src/store"



export const addBetInCartThunk = createAsyncThunk<  void,
undefined,
{
  dispatch: AppDispatch;
  state: RootState;
}>(
    "saveBet/saveBetInCartUser", (_, thunkApi) => {
        const userActual = thunkApi.getState().users.userAuthenticated;

        //const { bets } = thunkApi.getState().cart;

      //  const uptadeUserAccount = {...userActual, bets: [...bets, userActual?.bets]}

        console.log('oiiiiiiiiii')


    
    }
)