import { Bets, CartTotal, Container, FooterCart, InputPrice, Link, Title } from "./styles";
import { FiArrowRight } from "react-icons/fi";

export const PageCart = () => {
  return (
    <>
      <Container>
        <Title>Cart</Title>
        <Bets></Bets>
        <FooterCart>
          <CartTotal>
            <strong>cart </strong> total:
            <InputPrice
              type="text"
              id="inputPrice"
              value="R$ 0,00"
              disabled
            />
          </CartTotal>
        </FooterCart>
      </Container>
      <Link href=""> Save <FiArrowRight/></Link>
    </>
  );
};
