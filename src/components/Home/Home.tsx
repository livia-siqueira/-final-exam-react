
import { FormLogin } from "./FormLogin/index";
import { MainText } from "./MainText";
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
