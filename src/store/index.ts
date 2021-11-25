import { configureStore } from "@reduxjs/toolkit";
import controlUser from '@storeUser/index'
import {gamesReducer} from "@storeGames/index";
import cartReducer from "@storeCart/index";

export const store = configureStore({
    reducer: {
        users: controlUser,
        games: gamesReducer,
        cart: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
