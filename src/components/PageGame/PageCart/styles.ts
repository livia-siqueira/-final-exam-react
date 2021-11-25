import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  opacity: 1;
  padding-left: 15px;
  padding-right: 20px;
  width: 250px;
  max-height: 380px;
`;

export const SaveCart = styled.footer`
  background-color: #f4f4f4;
  border: 1px solid #e2e2e2;
  border-top: 0;
  border-radius: 0 0 12px 12px;
  text-align: center;
  height: 96px;
  width: 114%;
  margin-left: -15px;

  button {
    background-color: transparent;
    border: 0;
    color: #27c383;
    opacity: 1;
    font-size: 35px;
    font-weight: bold;
  }
`;

export const Title = styled.h1`
  font-variant: small-caps;
  font-weight: 200;
  font-style: italic;
  margin-bottom: 0;
`;

export const Bets = styled.ul`
  overflow-x: hidden;
  overflow-y: auto;
  height: 200px;
  display: block;
  padding-right: 4px;
  padding-left: 0;
  width: 270px;
  margin:0;
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #707070;
    border-radius: 20px;
  }
  @media (max-width: 906px) {
    max-height: min(40rem, 45vh);
  }
`;

export const CartTotal = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  text-align: center;
`;

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
  font-variant: small-caps;
  font-size: 2rem;
`;
