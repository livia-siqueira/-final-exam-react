import styled from "styled-components";

interface propsContainerItemList {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 94px;
  margin-top: 16px;
`;

export const Section = styled.section<propsContainerItemList>`
  display: grid;
  grid-template-rows: 0.3fr 0.3fr;
  color: ${(props) => props.color};
  font-weight: bold;
  font-style: italic;
`;

export const Numbers = styled.span`
  text-align: left;
  font: italic normal bold 17px Helvetica Neue;
  letter-spacing: 0px;
  color: #868686;
  opacity: 1;
`;

export const ContentBet = styled.div` 
  display: flex;
  align-items: center;

`

export const Price = styled.p`
  color: #868686;
  font-weight: normal;
  margin-left: 2px;
`;

export const Data = styled.span`
  color: #868686;
  font-weight: normal;
  span{
    margin-left: 2px;
  }
`;

export const AreaAction = styled.div``;

export const Main = styled.main<propsContainerItemList>`
  border-left: 5px ${(props) => props.color} solid;
  border-radius: 5px;
  padding-left: 10px;
  height: 94px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0;
  margin-right: 90px;
`;
