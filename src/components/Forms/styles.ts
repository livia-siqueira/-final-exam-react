import styled from "styled-components";

export const Container = styled.form`
  width: 350px;
  max-height: 460px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  border: 0;
  background-color: white;
  padding: 0;
  padding-top: 14px;
  box-shadow: 0px 3px 25px #00000014;
  border-radius: 14px 14px 14px 14px;
`;
export const Button = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 2rem;
  color: #b5c401;
  font-weight: bold;
  font-style: italic;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-right: 12px;
  }
`;

export const SpanForgetPassword = styled.span`
  height: 20px;
  margin-top: 20px;
  button {
    background-color: transparent;
    border: 0;
    margin-left: 40%;
    font-size: 17px;
    color: #c1c1c1;
    font-style: italic;
  }
`;

export const ButtonSignUp = styled.button`
  border: 0;
  width: 100%;
  background-color: transparent;
  font-size: 35px;
  margin-top: 15px;
  color: #535351;
  font-weight: bold;
  font-style: italic;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;

  span {
    margin-right: 12px;
  }
`;

export const TitleForm = styled.h1`
  text-align: center;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  margin-top:20px;
  margin-bottom: 10px;
`;

export const Content = styled.div` 
display: grid;
justify-content: center;
align-items: center;

`
