import { createStore, combineReducers, Store } from "redux";
import {UsuarioState} from './users/controlUsers/types'
//import reducerGame from "./games";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from './users/controlUsers/index'
import {gamesReducer} from "./games";


export interface ApplicationState {
    usuarios: UsuarioState[]
}

export const store = configureStore({
    reducer: {
        users: userSlice,
        games: gamesReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch