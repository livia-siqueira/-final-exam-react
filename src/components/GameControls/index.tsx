import { Button, ButtonAddCart, Container, ContainerButtonAddCart, ContainerButtonGame } from "./styles";
import {AiOutlineShoppingCart} from 'react-icons/ai'

interface propsBetArea {
  handleCompleteGame: () => void
  handleClearGame: () => void
  handleAddCart: () => void
}
export function GameControls(props: propsBetArea) {
  return (
    <Container>
      <ContainerButtonGame>
        <Button  onClick={props.handleCompleteGame}>Complete game</Button>
        <Button onClick={props.handleClearGame}>Clear game</Button>
      </ContainerButtonGame>
      <ContainerButtonAddCart>
        <ButtonAddCart onClick={props.handleAddCart}><AiOutlineShoppingCart size="26"/>Add to Cart</ButtonAddCart>
      </ContainerButtonAddCart>
    </Container>
  );
}
