import {
  Button,
  ButtonSignUp,
  Container,
  TitleForm,
} from "./styles";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi/";
import { Input } from "../../UI/Input/styles";
import { FormEvent, FormEventHandler, useRef, useState } from "react";
import { useDispatch, connect, useSelector, DefaultRootState } from "react-redux";
import {toast, Toaster} from 'react-hot-toast'
import { Usuario } from "src/store/users/controlUsers/types";
import reducerUser, { addUser } from "src/store/users/controlUsers/index";
import { RootState, store } from "src/store";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";


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
      navigate("/")
    }
    else {
      toast.error("Preencha todos os campos para se cadastrar")
    }
  }

  const a = useSelector((state: RootState) => state.users)
  console.log(a)
  return (
    <>
      <div>
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
      </div>
    </>
  );
}

