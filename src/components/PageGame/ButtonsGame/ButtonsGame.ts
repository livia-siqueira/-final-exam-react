import styled from "styled-components";

interface buttonProps {
  color: string;
  isActive?: boolean | undefined

}


export const Button = styled.button<buttonProps>`
  background-color: ${(props) => props.isActive ? props.color : 'white' };
  margin-bottom: 6px;
  border-radius: 100px;
  opacity: 1;
  width: 8rem;
  height: 1.8rem;
  border: 2px solid ${(props) => props.color};
  margin-left: 20px;
  font-size: 0.6rem;
  font-weight: bold;
  color:  ${(props) => props.isActive ?  'white' : props.color };
  :hover{
      background-color: ${(props) => props.color};
      color: white;
  }
  :first-child{
    margin-left: 0;
  }
  
`;
