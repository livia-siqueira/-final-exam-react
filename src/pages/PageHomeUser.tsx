import { FooterPage } from "@components/FooterPages";
import HomeUser from "@components/Home/HomeUser";
import { PageError } from "@components/PageError";
import { Header } from "@components/PageGame/Header";
import { Footer } from "./styles";

export function PageHomeUser(props: { isAutorization: boolean }) {
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
      <HomeUser />
      <Footer>
        <FooterPage />
      </Footer>
    </>
  );
}
