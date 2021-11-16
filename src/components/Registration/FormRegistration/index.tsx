import { Button, ButtonSignUp, Container, SpanForgetPassword, TitleForm } from "./styles";
import {FiArrowRight} from 'react-icons/fi/'
import { Input } from "../../UI/Input/styles";


function FormRegister() {
  return (
    <>
      <div>
        <TitleForm>Authentication</TitleForm>
        <Container>
          <Input type="Email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <SpanForgetPassword> <a href="" >I forget my password</a> </SpanForgetPassword>
          <Button type="submit"> Log In <FiArrowRight color="#B5C401"/> </Button>
        </Container>
        <ButtonSignUp>Sign Up <FiArrowRight color="#535351"/></ButtonSignUp>
      </div>
    </>
  );
}

export default FormRegister;
