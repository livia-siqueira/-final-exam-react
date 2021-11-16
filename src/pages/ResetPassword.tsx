import { Container } from "./styles";
import { MainText } from "@components/Home/MainText/index";
import FormResetPassword from "@components/ResetPassword/FormResetPassword";

export function ResetPassword() {
    return (
        <div>
            <Container>
            <MainText/>
            <FormResetPassword/>
            </Container>
        </div>
    );
}