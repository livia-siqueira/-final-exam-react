import styled from "styled-components";

interface buttonProps {
  color: string;
  isActive: boolean
}

export const Button = styled.button<buttonProps>`
  padding: 0;
  border: 0;
  margin: 2px;
  font-size: 20px;
  width: 38px;
  color: var(--white);
  height: 38px;
  background-color: ${(props) => props.isActive ? props.color : '#ADC0C4'};
  border-radius: 280px;
  opacity: 1;
`;
