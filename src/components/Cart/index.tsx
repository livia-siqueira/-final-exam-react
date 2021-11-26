import { useDispatch} from "react-redux";
import { useNavigate } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import { AppDispatch} from "src/store";
import {
  Bets,
  CartTotal,
  Container,
  FooterCart,
  InputPrice,
  SaveCart,
  Title,
} from "./styles";
import {Msg} from '../../stylesGlobal/global'
import { Bet } from "src/shared/utils/types";
import { saveCart } from "@storeCart/thunks";
import { addToCart } from "@storeCart/index";
import { ItemCart } from "@components/index";
import toast from "react-hot-toast";
import { gameSelected } from "@storeGames/index";


interface propsBet {
  bets: Bet[]
}


export function Cart(props: propsBet) {
  const dispatch : AppDispatch = useDispatch()
  const navigate = useNavigate();

  const handleSaveCartInBet = () => {
    if(props.bets) {
      if(totalPrice >= 30){
        dispatch(addToCart({bet: props.bets}));
        dispatch(saveCart());
        dispatch(gameSelected(''));
        navigate("/HomeUser");
      }
      else{
        const missing = 30.00 - totalPrice;
        toast.error(`Minimum amount is R$30,00. To save, add more ${new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(missing)} to bets.`)
      }
    
    }
  }

  const valuesBets = props.bets.map((bet) => {
    return bet.bet.price;
  })

  if(props.bets.length === 0){
    return (
      <>
      <Container>
        <Title>Cart</Title>
       <Msg>Your shopping cart is empty</Msg>
        <FooterCart>
          <CartTotal>
            <strong>cart </strong>  total:
            <InputPrice type="text" id="inputPrice" value="R$0,00" disabled />
          </CartTotal>
        </FooterCart>
        <div>
        <SaveCart>
        <button>Save <FiArrowRight /></button>
      </SaveCart>
      </div>
      </Container>
    
    </>
    )
  }
  const totalPrice = props.bets.length > 0 ? valuesBets.reduce((ac, at) => ac + at) : 0;
  return (
   
    <>
      <Container>
        <Title>cart</Title>
        <Bets>
          {props.bets.map((bet) => {
            return <ItemCart key={bet.bet.id} bet={bet} />
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
        <SaveCart onClick={handleSaveCartInBet}>
        <button>Save <FiArrowRight /></button>
      </SaveCart>
      </Container>
     
    
    </>
  );
}
