import { Button, ButtonAddCart, Container, ContainerButtonAddCart, ContainerButtonGame } from "./styles";
import {AiOutlineShoppingCart} from 'react-icons/ai'

interface propsBetArea {
  handleCompleteGame: () => void
  handleClearGame: () => void
}
export function UserActionGame(props: propsBetArea) {
  return (
    <Container>
      <ContainerButtonGame>
        <Button  onClick={props.handleCompleteGame}>Complete game</Button>
        <Button onClick={props.handleClearGame}>Clear game</Button>
      </ContainerButtonGame>
      <ContainerButtonAddCart>
        <ButtonAddCart><AiOutlineShoppingCart size="26"/>Add to Cart</ButtonAddCart>
      </ContainerButtonAddCart>
    </Container>
  );
}
