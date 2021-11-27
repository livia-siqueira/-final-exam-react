import styled from "styled-components";

interface propsContainerItemList {
  color: string;
}

export const Container = styled.li`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  margin-left: 0;
  height: 5rem;
`;

export const Section = styled.section<propsContainerItemList>`
  display: grid;
  grid-template-columns: 0.2fr 0.2fr;
  color: ${(props) => props.color};
  font-weight: bold;
  font-style: italic;

  p{
    width: 6rem;
  }
  
`;
export const Price = styled.p`
  color: ${({theme}) => theme.colors.letters};
  font-weight: normal;
`;

export const AreaAction = styled.div`    
  margin-right: 0.5rem;

`;

export const Numbers = styled.span`
  text-align: left;
  color: ${({theme}) => theme.colors.letters};
  opacity: 1;
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  width: 10rem;
  margin: 0;
  padding: 0;
  display: inline-block;
  word-break: break-all;
`;
export const Main = styled.div<propsContainerItemList>`
  border-left: 0.4rem ${(props) => props.color} solid;
  border-radius: 0.4rem;
  padding-left: 0.4rem;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0;
  margin-right: 0.3rem;
`;
