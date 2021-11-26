import styled from "styled-components";

interface buttonProps {
  color: string;
  isActive: boolean
}

export const Button = styled.button<buttonProps>`
  background-color: ${(props) => props.isActive ? props.color : '#ADC0C4'};
  opacity: 1;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: white;
    font-weight: 700;
`;
