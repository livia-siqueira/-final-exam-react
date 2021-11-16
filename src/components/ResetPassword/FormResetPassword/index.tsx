import {
  Button,
  ButtonSignUp,
  Container,
  TitleForm,
} from "./styles";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi/";
import { Input } from "../../UI/Input/styles";

function FormResetPassword() {
  return (
    <>
      <div>
        <TitleForm>Reset Password</TitleForm>
        <Container>
          <Input type="Email" placeholder="Email" />
          <Button type="submit">
            Send link <FiArrowRight color="#B5C401" />
          </Button>
        </Container>
        <ButtonSignUp>
          <FiArrowLeft color="#535351" /> Back
        </ButtonSignUp>
      </div>
    </>
  );
}
export default FormResetPassword;
