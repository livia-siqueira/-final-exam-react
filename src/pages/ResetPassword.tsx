import { MainText } from "@components/Home/MainText/index";
import FormResetPassword from "@components/ResetPassword/FormResetPassword";
import { FooterPage } from "@components/FooterPages";
import { Container } from "./styles";

export function ResetPassword() {
  return (
    <>
      <Container>
        <MainText />
        <FormResetPassword />
      </Container>
      <FooterPage />
    </>
  );
}
