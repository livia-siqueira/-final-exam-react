import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 70%;
  margin: 60px auto;
`;

export const AreaFilter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 34px;
`;

export const Title = styled.h2`
  text-align: center;
  font: italic normal bold 24px/85px Helvetica Neue;
  letter-spacing: 0px;
  color: #707070;
  text-transform: uppercase;
  opacity: 1;
`;

export const Bets = styled.ul`
    margin-top: 20px;
    max-height: 300px;
    overflow-x: hidden;
    overflow-y: auto;

`;

export const NewBet = styled(Link)`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0px;
  font-size: 20px;
  color: #b5c401;
  opacity: 1;
  text-decoration: none;
`;

export const ButtonsFilter = styled.div`
  display: flex;
  height: 34px;
  align-items: center;

  span {
    height: 20px;
    text-align: center;
    letter-spacing: 0px;
    font-size: 20px;
    font-style: italic;
    color: #868686;
    opacity: 1;
  }

  button {
    width: 113px;
    height: 34px;
    max-width: auto;
    font-size: 0.7rem;
    font-weight: bold;
    padding: 0;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Msg = styled.p`  
    font-size: 20px;

`
