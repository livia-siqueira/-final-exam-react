import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "src/services/axios";
import { Games } from "./types";
import { RootState } from "../index";


export const fetchGamesData = createAsyncThunk(
    "@games/fetchGamesData",
    async () => {
        const {data} = await axios.get("/games.json")
        return data;
    } 
)