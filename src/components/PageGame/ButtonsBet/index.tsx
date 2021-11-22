import { ButtonHTMLAttributes } from "react";
import { Game } from "src/store/games/types";
import {Button} from './styles'


interface propsButtonBet{
    color: string,
    isActive: boolean,
    onClick: () => void
    value?: number,
}

export function ButtonsBet(props: propsButtonBet) {
    return (
        <>
        <Button color={props.color} isActive={props.isActive} onClick={props.onClick}>{props.value}</Button>
       </>
    )
}
