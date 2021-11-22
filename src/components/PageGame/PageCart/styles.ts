import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  opacity: 1;
  padding-left: 15px;
`;

export const Link = styled.a`
  position: absolute;
  left: 1200px;
  top: 670px;
  font-size: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Title = styled.h1``;

export const Bets = styled.div``;

export const CartTotal = styled.span``;

export const InputPrice = styled.input`
  border: none;
  background-color: transparent;
  width: 100px;
  height: 30px;
  text-align: left;
  letter-spacing: 0px;
  color: var(--letters);
  text-transform: uppercase;
  font-size: 20px;
`;

export const FooterCart = styled.div` 
margin-top: 100%;
  font-variant: small-caps;
  font-size: 2rem;

`
