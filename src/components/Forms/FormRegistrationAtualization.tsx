import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { FiArrowRight, FiArrowLeft } from "@sharedAssets/index";
import { Button, ButtonSignUp, Container, Content, TitleForm } from "./styles";
import { Input } from "../UI/Input/styles";
import { addUser, changeUser } from "@storeReducers/index";
import { RootState } from "src/store";
import { validationEmail } from "@sharedUtils/functions";

interface propsForm {
  title: string;
}

export function Form({ title }: propsForm) {
  const [inputName, setInputName] = useState<string>();
  const [inputEmail, setInputEmail] = useState<string>();
  const [inputPassword, setInputPassword] = useState<string>();
  const userLogged = useSelector(
    (state: RootState) => state.users.userAuthenticated
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setInputEmail(userLogged ? userLogged.email : "");
    setInputPassword(userLogged ? userLogged.password : "");
    setInputName(userLogged ? userLogged.name : "");
    if(title === 'Atualization') toast.success("View and update your current data"); 
  }, [userLogged]);

  const handlerClick = (event: FormEvent) => {
    event.preventDefault();
    if (inputName && inputPassword && inputEmail) {
      if(!validationEmail(inputEmail)) return toast.error("Email incorrect")
      dispatch(
        changeUser({
          user: { name: inputName, email: inputEmail, password: inputPassword },
          newPassword: inputPassword,
        })
      );
      navigate("/Home");
    } else {
      toast.error("Fill in all fields to register 😉");
    }
  };

  const handlerClickSave = (event: FormEvent) => {
    event.preventDefault();
    if (inputName && inputPassword && inputEmail) {
      dispatch(
        addUser({ name: inputName, email: inputEmail, password: inputPassword })
      );
      navigate("/");
    } else {
      toast.error("Fill in all fields to register 😉");
    }
  };

  if (title === "Registration") {
    return (
      <>
        <Content>
          <TitleForm>{title}</TitleForm>
          <Container onSubmit={handlerClickSave}>
            <Input
              type="text"
              placeholder="Nome"
              onChange={(event) => setInputName(event.target.value)}
            />
            <Input
              type="Email"
              placeholder="Email"
              onChange={(event) => setInputEmail(event.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(event) => setInputPassword(event.target.value)}
            />
            <Button type="submit">
              Register <FiArrowRight color="#B5C401" />
            </Button>
          </Container>
          <ButtonSignUp onClick={() => navigate("/")}>
            <FiArrowLeft color="#535351" /> Back
          </ButtonSignUp>
          )
        </Content>
      </>
    );
  }

  return (
    <>
      <Content>
        <TitleForm>{title}</TitleForm>

        <Container onSubmit={handlerClick}>
          <Input
            type="text"
            placeholder="Nome"
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
          />
          <Input
            type="Email"
            placeholder="Email"
            value={inputEmail}
            onChange={(event) => setInputEmail(event.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={inputPassword}
            onChange={(event) => setInputPassword(event.target.value)}
          />
          <Button type="submit">
            Save <FiArrowRight color="#B5C401" />
          </Button>
        </Container>
        <ButtonSignUp onClick={() => navigate("/Home")}>
          <FiArrowLeft color="#535351" /> Back
        </ButtonSignUp>
      </Content>
    </>
  );
}
