import styled from "styled-components";
interface propsContainerItemList {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 6rem;
  margin-top: 1.5rem;
  font-weight: bold;
  font-style: italic;
`;

export const Section = styled.section<propsContainerItemList>`
  display: grid;
  grid-template-rows: 0.3fr 0.3fr;
  color: ${(props) => props.color};
`;

export const Numbers = styled.span`
  letter-spacing: 0px;
  color: ${({theme}) => theme.colors.letters};
  opacity: 1;
`;

export const ContentBet = styled.div` 
  display: flex;
  align-items: center;
`

export const Price = styled.p`
  color: ${({theme}) => theme.colors.letters};
  font-weight: normal;
  margin-left: 0.5rem;
`;

export const Data = styled.span`
  color:  ${({theme}) => theme.colors.letters};
  font-weight: normal;
  span{
    margin-left: 0.2rem;
  }
`;

export const AreaAction = styled.div``;

export const Main = styled.main<propsContainerItemList>`
  border-left: 0.4rem ${(props) => props.color} solid;
  border-radius: 0.3rem;
  padding-left: 1rem;
  height: 6rem;
`;