import { FormLogin } from "@components/Home/FormLogin";
import axios from '../services/axios'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MainText } from "../components/Home/MainText";
import { Container } from "./styles";
import { FooterPage } from "@components/FooterPages";
export function Home() {

  
  return (
      <>
    <Container>
      <MainText/>
      <FormLogin />
    </Container>
    <FooterPage/>
    </>
  );
}
