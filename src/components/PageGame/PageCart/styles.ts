import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: white;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  opacity: 1;
  padding-left: 15px;
  width: 310px;
  max-height: 400px;
`;

export const SaveCart = styled.button`
  background-color: #f4f4f4;
  width: 324px;
  height: 96px;
  border: 1px solid #e2e2e2;
  border-top: 0;
  border-radius: 0 0 12px 12px;
  text-align: center;
  color: #27c383;
  opacity: 1;
  position: absolute;
  margin-left: 630px;
  margin-top: 350px;
  font-size: 35px;
  font-weight: bold;
`;

export const Title = styled.h1``;

export const Bets = styled.ul`
  overflow-x: hidden;
  overflow-y: auto;
  height: 200px;
  margin-top: 20px;
  display: block;
  padding-left: 0;
`;

export const CartTotal = styled.span``;

export const InputPrice = styled.input`
  border: none;
  background-color: transparent;
  width: 100px;
  height: 30px;
  text-align: left;
  letter-spacing: 0px;
  color: var(--letters);
  text-transform: uppercase;
  font-size: 20px;
`;

export const FooterCart = styled.div`
  font-variant: small-caps;
  font-size: 2rem;
`;
