import { FormLogin } from "@components/Home/FormLogin";
import { MainText } from "../components/Home/MainText";
import { Container, Footer } from "./styles";
import { FooterPage } from "@components/FooterPages";
export function Home() {
  return (
    <>
      <Container>
        <MainText />
        <FormLogin title="Autentication" type="Login"/>
      </Container>
      <Footer>
        <FooterPage />
      </Footer>
    </>
  );
}
