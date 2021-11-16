import { Button, ButtonSignUp, Container, SpanForgetPassword, TitleForm } from "./styles";
import {FiArrowRight} from 'react-icons/fi/'
import { Input } from "../../UI/Input/styles";
import { Link, Route } from "react-router-dom";


export function FormLogin() {
  return (
    <>
      <div>
        <TitleForm>Authentication</TitleForm>
        <Container action="/Registration">
          <Input type="Email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <SpanForgetPassword> <a href="/ResetPassword" >I forget my password</a> </SpanForgetPassword>
          <Button type="submit"> Log In <FiArrowRight color="#B5C401"/> </Button>
        </Container>
        <ButtonSignUp type="submit" onClick={()=><Link to="/Registration"/>}>Sign Up <FiArrowRight color="#535351"/></ButtonSignUp>
      </div>
    </>
  );
}
