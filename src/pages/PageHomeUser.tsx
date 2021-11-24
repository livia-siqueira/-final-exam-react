import { FooterPage } from "@components/FooterPages";
import HomeUser from "@components/Home/HomeUser";
import { Header } from "@components/PageGame/Header";




export function PageHomeUser(props: {isAutorization: boolean}) {
    if(!props.isAutorization){
        return (
            <>
            <Header type="Home"/>
            <button>Faça login ou cadastre-se</button>
            </>
        )
    }

    return (
        <>
            <HomeUser/>
            <FooterPage/>
        </>
    )
}