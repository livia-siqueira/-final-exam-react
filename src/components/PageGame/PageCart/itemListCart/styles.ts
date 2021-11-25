import styled from "styled-components";

interface propsContainerItemList {
  color: string;
}

export const Container = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  margin-left: 0;
  height: 80px;
`;

export const Section = styled.section<propsContainerItemList>`
  display: grid;
  grid-template-columns: 0.3fr 0.5fr;
  color: ${(props) => props.color};
  font-weight: bold;
  font-style: italic;

  p {
    width: 100px;
  }
`;
export const Price = styled.p`
  color: #868686;
  font-weight: normal;
`;

export const AreaAction = styled.div`    
  margin-right: 6px;

`;

export const Numbers = styled.span`
  text-align: left;
  color: var(--letters);
  opacity: 1;
  font-size: 15px;
  font-weight: 400;
  font-style: italic;
  margin-top: 12px;
  width: 200px;
  margin: 0;
  padding: 0;
  display: inline-block;
  word-break: break-all;
`;
export const Main = styled.div<propsContainerItemList>`
  border-left: 5px ${(props) => props.color} solid;
  border-radius: 5px;
  padding-left: 5px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0;
  margin-right: 2px;
`;
