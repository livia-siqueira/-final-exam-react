import { Button } from "./ButtonsGame";
import { ButtonHTMLAttributes } from "react";
import {Game} from '../../../store/games/types'
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import { Bet } from "src/store/users/controlUsers";

interface ButtonProps {
  select(type: string): void;
}



export function ButtonsGame(props: ButtonProps) {
  const games = useSelector((state: RootState) => state.games.typesGame)
  return (
    <>
      {games.map((item) => {
        return <Button key={item.id} color={item.color} onClick={props.select.bind(null, item.type)}> {item.type}</Button>
})}
    </>
  );
}
