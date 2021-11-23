import { AreaAction, Button, Container, Main, Price, Section } from "./styles";
import { FiTrash2 } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import { Bet } from "src/store/users/controlUsers";

interface AddToCartData {
  color: string;
  price: number;
  type: string;
  numbers: number[];
}


export function ItemBet(props: AddToCartData) {
    return (
      <Container >
          <AreaAction>
        <Button><FiTrash2 size={22}/></Button>
        </AreaAction>
        <Main color={props.color}>
        <p>{props.numbers.join(",")}</p>
        <Section color={props.color}>
          <p>{props.type}</p>
          <Price>
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(props.price)}
          </Price>
        </Section>
        </Main>
      </Container>
    );
  }