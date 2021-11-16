import {
  Button,
  ButtonSignUp,
  Container,
  TitleForm,
} from "./styles";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi/";
import { Input } from "../../UI/Input/styles";

function FormRegister() {
  return (
    <>
      <div>
        <TitleForm>Registration</TitleForm>
        <Container>
          <Input type="text" placeholder="Nome" />
          <Input type="Email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">
            Register <FiArrowRight color="#B5C401" />
          </Button>
        </Container>
        <ButtonSignUp>
          <FiArrowLeft color="#535351" /> Back
        </ButtonSignUp>
      </div>
    </>
  );
}
export default FormRegister;
