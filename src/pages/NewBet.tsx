import { FooterPage } from "@components/FooterPages";
import { PageError } from "@components/PageError";
import { Header } from "@components/PageGame/Header";
import PageBet from "@components/PageGame/PageBet";
import { Footer } from "./styles";

export function NewBet(props: { isAutorization: boolean }) {
  if (!props.isAutorization) {
    return (
      <>
        <Header type="Nulo" />
        <PageError />
      </>
    );
  }
  return (
    <>
      <PageBet />
      <Footer>
        <FooterPage />
      </Footer>
    </>
  );
}
