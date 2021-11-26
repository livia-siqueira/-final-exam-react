import { useDispatch} from "react-redux";
import { FiTrash2 } from "react-icons/fi";
import { AppDispatch} from "src/store";
import { AreaAction, Button, Container, Main, Numbers, Price, Section } from "./styles";
import { removeBet } from "@storeUser/index";
import {Bet} from 'src/shared/utils/types';

interface AddToCartData {
  bet: Bet;
}

export function ItemCart(props: AddToCartData) {
  const dispatch: AppDispatch = useDispatch();

  const handleRemoveBet = (id: string) => {
    dispatch(
      removeBet({ user: props.bet.user ? props.bet.user : undefined, id: id })
    );
  };
  return (
    <Container>
      <AreaAction>
        <Button onClick={handleRemoveBet.bind(null, props.bet.bet.id)}>
          <FiTrash2 size={22} />
        </Button>
      </AreaAction>
      <Main color={props.bet.bet.color}>
        <Numbers>
        {props.bet.bet.numbers.join(',')}
        </Numbers>
        <Section color={props.bet.bet.color}>
          <p>{props.bet.bet.type}</p>
          <Price>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(props.bet.bet.price)}
          </Price>
        </Section>
      </Main>
    </Container>
  );
}
