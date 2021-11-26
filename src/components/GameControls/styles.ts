import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 0px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #27c383;
  border-radius: 10px;
  max-width: 150px;
  height: 52px;
  color: #27c383;
  opacity: 1;
`;

export const ButtonAddCart = styled.button`
  background: #27c383 0% 0% no-repeat padding-box;
  border: 1px solid #27c383;
  border-radius: 10px;
  color: var(--white);
  font-size: 1rem;
  width: 200px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;


export const ContainerButtonAddCart = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

export const ContainerButtonGame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 20px;
`;
