import { MainText } from "@components/Home/MainText/index";
import { FooterPage } from "@components/FooterPages";
import { Container } from "./styles";
import { FormChangePassword } from "@components/ResetPassword/FormChangePassword";

export function ChangePassword() {
  return (
    <>
      <Container>
        <MainText />
        <FormChangePassword />
      </Container>
      <FooterPage />
    </>
  );
}
