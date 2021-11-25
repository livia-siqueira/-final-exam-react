import styled from "styled-components";

export const Container = styled.form`
  width: 300px;
  height: 160px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  border: 0;
  background-color: white;
  padding: 14px;
  padding-left: 0;
  padding-right: 0;
  box-shadow: 0px 3px 25px #00000014;
  border-radius: 14px 14px 14px 14px;

  @media(max-width: 720px){
    margin-left: 100px;
  }
`;
export const Button = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 35px;
  color: #b5c401;
  font-weight: bold;
  font-style: italic;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonBack = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 1.6rem;
  color: #868686;
  font-weight: bold;
  font-style: italic;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -90px;
`;
export const ButtonSignUp = styled.button`
  border: 0;
  width: 100%;
  background-color: transparent;
  font-size: 35px;
  color: #535351;
  font-weight: bold;
  font-style: italic;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const TitleForm = styled.h1`
  font-size: 1.6rem;
  text-align: center;
  margin-right: 190px;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
`;
