import { AreaAction, Button, Container, Main, Price, Section } from "./styles";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/store";
import { Bet, removeBet } from "src/store/users/controlUsers";

interface AddToCartData {
  bet: Bet;
}



export function ItemList(props: AddToCartData) {
  const dispatch : AppDispatch= useDispatch();
 
  const handleRemoveBet = (id: string) => {
    dispatch(removeBet({user: props.bet.user ? props.bet.user : undefined, id: id}))
  }

  
  
  return (
    <Container >
        <AreaAction>
      <Button onClick={handleRemoveBet.bind(null, props.bet.bet.id)}><FiTrash2 size={22}/></Button>
      </AreaAction>
      <Main color={props.bet.bet.color}>
      <p>{props.bet.bet.numbers.join(',')}</p>
      <Section color='white'>
        <p>{props.bet.bet.type}</p>
        <Price>
        {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(props.bet.bet.price)}
        </Price>
      </Section>
      </Main>
    </Container>
  );
}
