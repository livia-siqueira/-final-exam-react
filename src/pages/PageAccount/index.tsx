import { Form } from "@components/Forms";
import { Header } from "@components/Header";
import { PageError } from "@components/PageError";

interface propsAccount {
    authenticated: boolean
}

export function Account(props: propsAccount) {

    if(!props.authenticated) return <PageError/>
    return (
        <>
        <Header type="Nulo"/>
        <Form title="Atualization"/>
        </>
    )
}