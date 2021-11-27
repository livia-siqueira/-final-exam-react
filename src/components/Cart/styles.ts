import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.white} 0% 0% no-repeat padding-box;
  border: 1px solid ${({theme}) => theme.colors.grayCart};
  border-radius: 1rem;
  opacity: 1;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 19rem;
  max-height: 27rem;

  @media (max-width: 720px) {
    margin-left: 8rem;
    margin-bottom: 5rem;
  }
`;

export const SaveCart = styled.footer`
  background-color: ${({theme}) => theme.colors.backgroundCart};
  border: 0.1rem solid #e2e2e2;
  border-top: 0;
  border-radius: 0 0 1rem 1rem;
  text-align: center;
  height: 6rem;
  width: 120%;
  margin-left: -1.5rem;

  button {
    background-color: transparent;
    border: 0;
    color: ${({theme}) => theme.colors.green};
    opacity: 1;
    font-size: 2.6rem;
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
  height: 11rem;
  display: block;
  padding-right: 2rem;
  padding-left: 0;
  width: 18.5rem;
  margin-top: 2rem;

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.borderColors.lightGray};
    border-radius: 2rem;
   
  }

  @media (max-width: 906px) {
    max-height: min(40rem, 45vh);
  }
`;

export const CartTotal = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 2.5rem;
  font-size: 2rem;
  text-align: center;
  font-style: italic;
  width: 100%;
  
  span {
    font-weight: bold;
    margin-right: 0.6rem;
  }
`;

export const InputPrice = styled.input`
  border: none;
  background-color: transparent;
  text-align: left;
  letter-spacing: 0px;
  color: ${({theme}) => theme.colors.mediumGray};
  text-transform: uppercase;
  font-size: 1.5rem;
`;

export const FooterCart = styled.div`
  font-variant: small-caps;
  font-size: 2rem;
`;

export const Msg = styled.h4`
  width: 100%;
  font-style: italic;
  padding-top: 7rem;
  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.green};
`;
