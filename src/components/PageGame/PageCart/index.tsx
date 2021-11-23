import {
  Bets,
  CartTotal,
  Container,
  FooterCart,
  InputPrice,
  Link,
  Title,
} from "./styles";
import { FiArrowRight } from "react-icons/fi";
import { ItemList } from "./itemListCart";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

export function PageCart() {
  const user = useSelector((state: RootState) => state.users.userAuthenticated);
  const betsUser = user ? user.bets : [];

  return (
    <>
      <Container>
        <Title>Cart</Title>
        <Bets>
          { betsUser.map((bet) => {
            const { color, price, type, numbers } = bet.bet;
            return <ItemList color={color} price={price} type={type} numbers={numbers}/>;
          })}
        </Bets>
        <FooterCart>
          <CartTotal>
            <strong>cart </strong> total:
            <InputPrice type="text" id="inputPrice" value="R$ 0,00" disabled />
          </CartTotal>
        </FooterCart>
      </Container>
      <Link href="">
        Save <FiArrowRight />
      </Link>
    </>
  );
}
