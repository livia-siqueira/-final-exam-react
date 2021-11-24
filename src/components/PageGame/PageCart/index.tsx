import {
  Bets,
  CartTotal,
  Container,
  FooterCart,
  InputPrice,
  SaveCart,
  Title,
} from "./styles";
import { FiArrowRight } from "react-icons/fi";
import { ItemList } from "./itemListCart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/store";
import { Game } from "src/store/games/types";
import { Bet } from "src/store/users/controlUsers";
import { saveCart } from "src/store/cartGames/thunks";
import { addToCart } from "src/store/cartGames";
import { at } from "lodash";
import { useNavigate } from "react-router";

interface propsBet {
  bets: Bet[]
}


export function PageCart(props: propsBet) {
  const dispatch : AppDispatch = useDispatch()
  const navigate = useNavigate();
  const valuesBets : number[] = [];

  const handleSaveCartInBet = () => {
    if(props.bets) {
      dispatch(addToCart({bet: props.bets}));
      dispatch(saveCart())
      navigate("/HomeUser");
    }
  }

  props.bets.map((bet) => {
    valuesBets.push(bet.bet.price)
  })

 

  if(props.bets.length === 0){
    return (
      <>
      <Container>
        <Title>Cart</Title>
       <p>Carrinho vazio</p>
        <FooterCart>
          <CartTotal>
            <strong>cart </strong> total:
            <InputPrice type="text" id="inputPrice" value="R$0,00" disabled />
          </CartTotal>
        </FooterCart>
      </Container>
      <SaveCart onClick={handleSaveCartInBet}>
        Save <FiArrowRight />
      </SaveCart>
    </>
    )
  }
  const totalPrice = props.bets.length > 0 ? valuesBets.reduce((ac, at) => ac + at) : 0;
  return (
   
    <>
      <Container>
        <Title>Cart</Title>
        <Bets>
          {props.bets.map((bet) => {
            return <ItemList key={bet.bet.id} bet={bet} />
          })}
        </Bets>
        <FooterCart>
          <CartTotal>
            <strong>cart </strong> total:
            <InputPrice type="text" id="inputPrice" value={new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(totalPrice)} disabled />
          </CartTotal>
        </FooterCart>
      </Container>
      <SaveCart onClick={handleSaveCartInBet}>
        <p>Save <FiArrowRight /></p>
      </SaveCart>
    
    </>
  );
}
