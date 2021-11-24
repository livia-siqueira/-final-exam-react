import { FooterPage } from "@components/FooterPages";
import { Container } from "@components/Home/FormLogin/styles";
import { Header } from "@components/PageGame/Header";
import PageBet from "@components/PageGame/PageBet";
import Page from "@components/PageGame/PageBet";
import { PageCart } from "@components/PageGame/PageCart/index";
import { ContainerBet } from "./styles";

export function NewBet(props: {isAutorization: boolean}) {

  if(!props.isAutorization) { 
    return (
      <>
      <Header type="Nulo"/>
      <button>Faça Login ou cadastre-se</button>
      </>
    )
  } ;
  return (
    <>
        <PageBet />
        <FooterPage/>
    </>
  );
}
