import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  justify-items: center;
  margin: 0px auto;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ebebeb;

  .header-left {
    display: flex;
    align-items: center;
  }

  .Home{
    margin-left: 20px;
  }

  .nameCompany {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0px;
    margin-top: 20px;
  }
  .logout {
    display: flex;
    justify-content: center;
    justify-items: center;
  }
  .nameCompany hr {
    width: 90px;
    padding: 0;
    background-color: #b5c401;
    height: 6px;
    border-radius: 5px;
  }
  .header-rigth {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
  .logout span {
    text-align: center;
  }
  h1 {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    margin: 0;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #707070;
  opacity: 1;
  border: 0;
  font-style: italic;
`;
