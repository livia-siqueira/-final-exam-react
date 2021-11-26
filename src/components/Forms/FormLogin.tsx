import { useNavigate } from "react-router";
import { FiArrowRight } from "react-icons/fi/";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonSignUp,
  Container,
  Content,
  SpanForgetPassword,
  TitleForm,
} from "./styles";
import { Input } from "@components/UI/Input/styles";
import { loginUser } from "@storeUser/index";
import toast from "react-hot-toast";
import { RootState } from "src/store";


export function FormLogin() {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState<string>();
  const [inputPassword, setInputPassword] = useState<string>();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.users.users);

  function handlerLogin(event: FormEvent) {
    event.preventDefault();
    if (inputEmail && inputPassword) {
      dispatch(loginUser({ email: inputEmail, password: inputPassword }));
      const exist = user.some((user) => user.email === inputEmail);
      navigate(`${exist ? "/HomeUser" : ""}`);
    } else {
      toast.error("Fill in the fields");
    }
  }

  function register(event: FormEvent) {
    event.preventDefault();
    navigate("/Registration");
  }

  function resetPassword() {
    navigate("/ResetPassword");
  }

  return (
    <>
      <Content>
        <TitleForm>Authentication</TitleForm>
        <Container>
          <Input
            type="Email"
            placeholder="Email"
            value={inputEmail}
            onChange={(event) => setInputEmail(event.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(event) => setInputPassword(event.target.value)}
          />
            <SpanForgetPassword>
              <button onClick={resetPassword}>I forget my password</button>
            </SpanForgetPassword>
          <Button onClick={handlerLogin}>
            <span>Login</span> <FiArrowRight color="#B5C401" />
          </Button>
        </Container>
        <ButtonSignUp type="submit" onClick={register}>
          <span>Sign Up</span> <FiArrowRight color="#535351" />
        </ButtonSignUp>
      </Content>
    </>
  );
}

