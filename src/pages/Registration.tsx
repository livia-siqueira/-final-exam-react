import { Container } from "./styles";
import { MainText } from "@components/Home/MainText/";
import FormRegister from "@components/Registration/FormRegistration";

export function Registration() {
    return (
        <div>
            <Container>
            <MainText/>
            <FormRegister/>
            </Container>
        </div>
    );
}