import { useEffect } from "react";
import { ActionType } from "react-hot-toast/dist/core/store";
import {fetchGamesData} from "src/store/games/thunks";
import { AppDispatch } from "src/store";
import { useDispatch } from "react-redux";

export function PageGame() {
    const dispatch : AppDispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchGamesData())
    },[dispatch])
}