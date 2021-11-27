import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`${({theme}) => css`
  body {
    font-family: ${theme.fonts};
    background-color: ${theme.colors.background};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    overflow: hidden;

    @media (max-width: 720px) {
      overflow-y: scroll;
    }

    input:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      border-bottom: 1px solid ${theme.borderColors.lightGray};
      outline: 0;
    }
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }
`}
`;