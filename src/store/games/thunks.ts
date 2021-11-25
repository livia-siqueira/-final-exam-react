import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "src/services/axios";


export const fetchGamesData = createAsyncThunk(
    "@games/fetchGamesData",
    async () => {
        const {data} = await axios.get("/games.json")
        return data;
    } 
)