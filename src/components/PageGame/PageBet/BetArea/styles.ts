import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 30%;
  margin: 5px auto;
  color: #707070;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  font-style: italic;
  margin-top: 10px;
`;

interface propsButton {
  qtd: number;
}


export const Buttons = styled.div<propsButton>`

  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.qtd > 25 ? 16  : 10)},
    1fr
  );
  gap: 3px;
  margin-bottom: 4rem;

  button {
    width: ${(props) => (props.qtd > 25 ? 35 : 53)}px ;
    height: ${(props) => (props.qtd > 25 ? 35 : 53)}px;
  }
`;
