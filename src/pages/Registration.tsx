import { MainText } from "@components/Home/MainText/";
import { FormRegister } from "@components/Registration/FormRegistration";
import { FooterPage } from "@components/FooterPages";
import { Container, Footer } from "./styles";

export function Registration() {
  return (
    <>
      <Container>
        <MainText />
        <FormRegister />
      </Container>
      <Footer>
          <FooterPage/>
      </Footer>
    </>
  );
}
