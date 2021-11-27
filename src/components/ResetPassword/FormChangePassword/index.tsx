import { Input } from "@components/UI/Input/styles";
import { changePassword } from "@storeUser/thunks";
import { validatePassword } from "src/shared/utils/index";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { FiArrowLeft, FiArrowRight } from "@sharedAssets/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "src/store";
import {
  Button,
  ButtonSignUp,
  Container,
  Content,
  TitleForm,
} from "./styles";

export function FormChangePassword() {
  const [password, setInputPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  const userEmail = window.location.href;
  const email = userEmail.match(/\?\w.+/);
  const finalEmail = email ? email[0].match(/\w.+/) : "";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.users.users);

  const handlerBackLogin = () => {
    navigate("/");
  };

  const savePassword = (event: FormEvent) => {
    event.preventDefault();
    if (!password) return toast.error("Enter password to change");
    if (!finalEmail) return toast.error("Error");
    const userExact = users.find((user) => {
      return user.email === finalEmail[0];
    });
    if(userExact){
      if(password && confirmPassword){
        if(!validatePassword(password)) return toast.error('Password must have a capital character and at least 9 characters');
        if(password.trim() !== confirmPassword.trim()) return toast.error('Passwords do not match')
        dispatch(changePassword({user: userExact, newPassword: password}))
        navigate("/");
      }
    
    }
  };

  return (
    <Content>
      <TitleForm>New Password</TitleForm>
      <Container onSubmit={savePassword}>
        <Input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(event) => setInputPassword(event.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <Button type="submit">
          <span>Save</span> <FiArrowRight color="#B5C401" />
        </Button>
      </Container>
      <ButtonSignUp onClick={handlerBackLogin}>
            <FiArrowLeft color="#868686" /> 
            Back 
            </ButtonSignUp>
    </Content>
  );
}
