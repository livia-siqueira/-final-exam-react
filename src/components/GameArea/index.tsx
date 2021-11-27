import { ButtonsBet } from "@components/index";
import { Game } from "src/shared/utils/types";
import { Buttons, Container, Description } from "./styles";


interface propsBetArea {
    arrayNumbersBet: number[];
    numberBet: number[];
    handleCompleteGame: (number: number) => void;
    handleNoSelectedNumber: (number: number) => void;
    handleSelectNumber: (number: number) => void;
    gameActual: Game | null;
  }

export function GameArea(props: propsBetArea) {
  return (
    <Container>
      <Description><b>Fill your bet</b></Description>
      <Description>{props.gameActual?.description}</Description>
      <Buttons qtd={props.arrayNumbersBet.length}>
      {props.arrayNumbersBet.map((number, index) => {
        const exist = props.numberBet.includes(number);
        const ifClick = exist ? props.handleNoSelectedNumber.bind(null, number) : props.handleSelectNumber.bind(null, number);
        return <ButtonsBet  value={number} isActive={exist} color={props.gameActual?.color ? props.gameActual?.color : 'white'} onClick={ifClick}></ButtonsBet>;
      })}
        </Buttons>
    </Container>
  );
}
