import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3.5rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.borderColors.lightGray};
`;
export const HeaderPage = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;

    .header-left {
      display: flex;
      align-items: center;
    }

    .Home {
      margin-left: 0.6rem;
    }

    .nameCompany {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0px;
      margin-top: 0.8rem;
    }
    .logout {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nameCompany hr {
      width: 5rem;
      padding: 0;
      background-color: ${theme.colors.lightGreen};
      height: 0.3rem;
      border-radius: 1rem;
    }
    .header-rigth {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
    .logout span {
      text-align: center;
    }
    h1 {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      font-style: italic;
      letter-spacing: 0px;
      color: ${theme.colors.mediumGray};
      opacity: 1;
      margin: 0;
    }
  `}
`;

export const Button = styled.button`
  background-color: transparent;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.mediumGray};
  opacity: 1;
  border: 0;
  font-style: italic;
`;
