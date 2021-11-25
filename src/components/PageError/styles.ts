import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 60%;
  margin: 100px auto;
  display: grid;
  grid-template-rows: 1fr 0.2fr 0.4fr;
  justify-content: center;
  align-items: center;

  span {
    text-align: center;
  }

  .buttons   {
    display: flex;
    justify-content: space-between;
  }

  button {
    font-size: 35px;
    margin-top: 15px;
    color: #535351;
    font-weight: bold;
    font-style: italic;
    background-color: transparent;
    border: 0;

  }
`;

export const Text = styled.h2`
  color: #868686;
  font-variant: small-caps;
`;
