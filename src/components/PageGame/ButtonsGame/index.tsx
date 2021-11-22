import { Button } from "./ButtonsGame";
import { ButtonHTMLAttributes } from "react";
import {Game} from '../../../store/games/types'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  items: Game[];
}

export function ButtonsGame(props: ButtonProps) {
  return (
    <>
      {props.items.map((item) => (
        <Button key={item.id} color={item.color} onClick={props.onClick}> {item.type}</Button>
      ))}
    </>
  );
}
