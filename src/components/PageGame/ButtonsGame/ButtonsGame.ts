import styled from "styled-components";

interface buttonProps {
  color: string;
}

export const Button = styled.button<buttonProps>`
  background-color: white;
  margin-top: 10px;
  margin-bottom: 30px;
  border-radius: 100px;
  opacity: 1;
  margin-left: 20px;
  width: 150px;
  padding-bottom: 10px;
  padding-top: 10px;
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};

  :hover{
      background-color: ${(props) => props.color};
      color: white;
  }
`;
