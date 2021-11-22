import {createSlice} from '@reduxjs/toolkit'
import { Usuario } from '../users/controlUsers/types'


interface Bet {
    numbers: [],
    price: 0
}

interface InitialState {
    bets: Bet[],
    user: Usuario
}


const initialState = {
    bets: [],
    user: ''

}



export const betsReducer = createSlice({
    name: 'bets',
    initialState,
    reducers: {
        addBetInCart(state, action){
            
        }
    }

})