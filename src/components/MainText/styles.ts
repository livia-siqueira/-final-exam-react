import styled from "styled-components";

export const TitlePrincipal = styled.h2`
  font-size: 4rem;
  color: ${({theme}) => theme.colors.mediumGray};
  text-align: center;
  font-style: italic;

  span {
    font-size: 2rem;
    color: white;
    background: ${({theme}) => theme.colors.lightGreen} 0% 0% no-repeat padding-box;
    border-radius: 3rem;
    width: 5rem;
    height: 3rem;
    padding: 0.6rem 3rem;
    padding-bottom: 1rem;
    opacity: 1;
  }
`;

export const SubText = styled.p`
  margin: 0;
  font-size: 5rem;
  font-variant: small-caps;
`;
