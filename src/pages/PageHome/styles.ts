import styled from "styled-components";
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
  letter-spacing: 0px;
  color: #707070;
  text-transform: uppercase;
  opacity: 1;
  font-size: 1.4rem;
`;

export const Bets = styled.ul`
  margin-top: 20px;
  max-height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
  width: 80%;

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #707070;
    border-radius: 20px;
  }
`;

export const NewBet = styled.button`
  text-align: center;
  letter-spacing: 0px;
  font-size: 1.4rem;
  color: #b5c401;
  opacity: 1;
  background-color: transparent;
  border: 0;
  font-weight: bold;
  font-style: italic;
`;

export const ButtonsFilter = styled.div`
  display: flex;
  height: 34px;
  align-items: center;
  margin-left: 30px;

  span {
    height: 20px;
    text-align: center;
    letter-spacing: 0px;
    font-size: 15px;
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

export const ButtonNeutralFilter = styled.button`
  background-color: transparent;
  border: 0;
  height: 20px;
  text-align: center;
  letter-spacing: 0px;
  font-size: 20px;
  font-style: italic;
  color: #868686;
  opacity: 1;
`;
