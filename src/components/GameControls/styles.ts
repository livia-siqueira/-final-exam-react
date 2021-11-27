import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 9rem;

  button{
    height: 2.7rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

export const ContainerButtonAddCart = styled.div``;

export const ContainerButtonGame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;


export const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.colors.green};
  color: #27c383;
  opacity: 1;
  max-width: 10rem;
  padding: 0 1.5rem 0 1.5rem;
`;

export const ButtonAddCart = styled.button`
  background: ${({theme}) => theme.colors.green} 0% 0% no-repeat padding-box;
  border: 0.2rem solid ${({theme}) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  padding: 0 3rem 0 3rem;
  span {
    margin-right: 1rem;
  }
`;


