import styled from "styled-components";

interface propsContainerItemList {
  color: string;
}

export const Container = styled.div`
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  align-items: center;

`;

export const Section = styled.section<propsContainerItemList>`
  display: grid;
  grid-template-columns: 0.3fr 0.5fr;
  color: ${(props) => props.color};
  font-weight: bold;
  font-style: italic;
  
`;
export const Price = styled.p`
  color: #868686;
`;

export const AreaAction = styled.div``;

export const Main = styled.main<propsContainerItemList>`
  border-left: 5px ${(props) => props.color} solid;
  border-radius: 5px; 
  padding-left: 10px;

`;

export const Button = styled.button` 
background-color: transparent;
border: 0;
padding: 0;
margin-right: 2px;
`

