import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 90%;
    height: 15px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 15px;
    border-top: 1px solid ${theme.borderColors.lightGray};
    @media (max-width: 720px) {
      position: relative;
    }
  `}
`;

export const Footer = styled.footer`
  letter-spacing: 0px;
  height: 1px;
  color: #707070;
  opacity: 1;
  width: 100vw;
  margin-top: auto;
  font-size: 0.8rem;
`;
