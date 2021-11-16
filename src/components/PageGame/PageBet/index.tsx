import { useEffect, useState } from "react"
import axios from "src/services/axios"



export interface Game {
    type: string;
    description: string;
    range: number;
    price: number;
    'max-number': number;
    color: string;
    'min-cart-value': number;
}

export function PageBet() {

    useEffect(() =>{
        async function getGames(){
            const games = await axios.get('/games.json')
            console.log(games.data);
        }
        getGames();
    }, []) 



    return (
        <h1>Locl</h1>
    )
}