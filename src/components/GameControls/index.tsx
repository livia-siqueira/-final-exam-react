import * as SC from "./styles";
import {AiOutlineShoppingCart} from '@sharedAssets/index'

interface propsBetArea {
  handleCompleteGame: () => void
  handleClearGame: () => void
  handleAddCart: () => void
}
export function GameControls(props: propsBetArea) {
  return (
    <SC.Container>
      <SC.ContainerButtonGame>
        <SC.Button  onClick={props.handleCompleteGame}>Complete game</SC.Button>
        <SC.Button onClick={props.handleClearGame}>Clear game</SC.Button>
      </SC.ContainerButtonGame>
      <SC.ContainerButtonAddCart>
        <SC.ButtonAddCart onClick={props.handleAddCart}><span><AiOutlineShoppingCart size="25"/></span>Add to Cart</SC.ButtonAddCart>
      </SC.ContainerButtonAddCart>
    </SC.Container>
  );
}
