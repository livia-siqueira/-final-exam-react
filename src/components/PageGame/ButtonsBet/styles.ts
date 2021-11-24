import styled from "styled-components";

interface buttonProps {
  color: string;
  isActive: boolean
}

export const Button = styled.button<buttonProps>`
  padding: 0;
  border: 0;
  margin: 2px;
  font-size: 1rem;
  width: 2rem;
  color: var(--white);
  height: 2rem;
  background-color: ${(props) => props.isActive ? props.color : '#ADC0C4'};
  border-radius: 280px;
  opacity: 1;
`;
