import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import {toast} from 'react-hot-toast';
import { useDispatch} from "react-redux";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi/";
import {
  Button,
  ButtonSignUp,
  Container,
  Content,
  TitleForm,
} from "./styles";
import { Input } from "../../UI/Input/styles";
import { addUser } from "@storeUser/index";


export function FormRegister() {

  const [inputName, setInputName] = useState<string>();
  const [inputEmail, setInputEmail] = useState<string>();
  const [inputPassword, setInputPassword] = useState<string>();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  


  const handlerClick = async(event: FormEvent) => {
    event.preventDefault()
    if(inputName && inputPassword && inputEmail){
      dispatch(addUser({name: inputName, email: inputEmail, password: inputPassword}))
      
    }
    else {
      toast.error("Fill in all fields to register 😉")
    }
  }
  return (
    <>
      <Content>
        <TitleForm>Registration</TitleForm>
        <Container onSubmit={handlerClick}>
          <Input type="text" placeholder="Nome" onChange={(event) => setInputName(event.target.value)}/>
          <Input type="Email" placeholder="Email" onChange={(event) => setInputEmail(event.target.value)}/>
          <Input type="password" placeholder="Password" onChange={(event) => setInputPassword(event.target.value)} />
          <Button type="submit">
            Register <FiArrowRight color="#B5C401" />
          </Button>
        </Container>
        <ButtonSignUp onClick={()=>navigate("/")}>
          <FiArrowLeft color="#535351" /> Back
        </ButtonSignUp>
      </Content>
    </>
  );
}

