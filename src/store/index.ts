import { configureStore } from "@reduxjs/toolkit";
import{ reducerCart, reducerUser, reducerGames } from "./reducers";

export const store = configureStore({
    reducer: {
        users: reducerUser,
        games: reducerGames,
        cart: reducerCart
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
