import {
  FormLogin,
  FormRegistration,
  FormResetPassword,
} from "@components/Forms/index";
import { MainText } from "@components/MainText";
import { Route, Routes } from "react-router";
import { Container } from "./styles";

export function PageEntry() {
  return (
    <Container>
      <MainText />
      <div>
        <Routes>
          <Route path="/" element={<FormLogin />} />
          <Route path="/Registration" element={<FormRegistration />} />
          <Route path="/ResetPassword" element={<FormResetPassword />} />
        </Routes>
      </div>
    </Container>
  );
}
