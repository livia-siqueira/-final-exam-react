import { ButtonsBet } from "@components/PageGame/ButtonsBet";
import { Game } from "src/store/games/types";
import { Container } from "./styles";
import { Description } from "./styles";

interface propsBetArea {
    arrayNumbersBet: number[];
    numberBet: number[];
    handleCompleteGame: (number: number) => void;
    handleNoSelectedNumber: (number: number) => void;
    handleSelectNumber: (number: number) => void;
    gameActual: Game | null;
  }

export function BetArea(props: propsBetArea) {
  return (
    <Container>
      <b>Fill your bet</b>
      <Description>{props.gameActual?.description}</Description>
      {props.arrayNumbersBet.map((number, index) => {
        const exist = props.numberBet.includes(number);
        const ifClick = exist ? props.handleNoSelectedNumber.bind(null, number) : props.handleSelectNumber.bind(null, number);
        return <ButtonsBet value={number} isActive={exist} color={props.gameActual?.color ? props.gameActual?.color : 'white'} onClick={ifClick}></ButtonsBet>;
      })}
    </Container>
  );
}
