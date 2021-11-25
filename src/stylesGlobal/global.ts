import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #F7F7F7;
    --lotofacil: #7f3992;
    --megasena: #01ac66;
    --quina: #f79c31;
    --white: #ffffff;
    --letters: #868686;
    --btNumber: #adc0c4;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #F7F7F7;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    overflow: hidden;


    @media(max-width: 720px){
        overflow-y: scroll;
    }
}

html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

button {
    cursor: pointer;
}

`;

export const Msg = styled.h2`
  color: #27c383;
  width: 100%;
  font-style: italic;
  padding-top: 80px;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 60px;
`;
