import {
  Button,
  ButtonSignUp,
  Container,
  SpanForgetPassword,
  TitleForm,
} from "./styles";
import { FiArrowRight } from "react-icons/fi/";
import { Input } from "../../UI/Input/styles";
import { FormEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { useNavigate } from "react-router";
import { loginUser } from "src/store/users/controlUsers/index";


export function FormLogin() {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState<string>();
  const [inputSenha, setInputSenha] = useState<string>();
  const dispatch = useDispatch();

  function handlerLogin(event: FormEvent) {
    event.preventDefault();
    dispatch(loginUser({email: inputEmail, password: inputSenha}));
    navigate('/PageBet')
  }

  function register(event: FormEvent) {
    event.preventDefault();
    navigate("/Registration");
  }

  const users = useSelector((state: RootState) => state.users);
  console.log(users);

  return (
    <>
      <div>
        <TitleForm>Authentication</TitleForm>
        <Container onSubmit={handlerLogin}>
          <Input
            type="Email"
            placeholder="Email"
            onChange={(event) => setInputEmail(event.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(event) => setInputSenha(event.target.value)}
          />
          <SpanForgetPassword>
            {" "}
            <a href="/ResetPassword">I forget my password</a>{" "}
          </SpanForgetPassword>
          <Button>
            {" "}
            Log In <FiArrowRight color="#B5C401" />{" "}
          </Button>
        </Container>
        <ButtonSignUp type="submit" onClick={register}>
          Sign Up <FiArrowRight color="#535351" />
        </ButtonSignUp>
      </div>
    </>
  );
}
