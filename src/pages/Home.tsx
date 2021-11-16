import { FormLogin } from "@components/Home/FormLogin";
import { MainText } from "../components/Home/MainText";
import { Container } from "./styles";

export function Home() {
  return (
      <>
    <Container>
      <MainText/>
      <FormLogin />
    </Container>
    </>
  );
}
