import { FiArrowRight, FiArrowLeft } from "@sharedAssets/index";
import { Button, Container, TitleForm } from "./styles";
import { Input } from "../UI/Input/styles";
import { useNavigate } from "react-router";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import toast from "react-hot-toast";

export function FormResetPassword() {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState<string>();
  const users = useSelector((state: RootState) => state.users.users);

  const handlerBackLogin = () => {
    navigate("/");
  };
  const resetPassword = (event: FormEvent) => {
    event.preventDefault()
    const exist = users.some((user) => {
      return user.email === inputEmail;
    });

    if (exist) {
      navigate(`/ChangePassword/?${inputEmail}`)
    } else {
      toast.error("This user is not registered 🤨");
    }
    return;
  };

    return (
      <>
        <div>
          <TitleForm>Reset Password</TitleForm>
          <Container>
            <Input
              type="Email"
              placeholder="Email"
              onChange={(event) => setInputEmail(event.target.value)}
            />
            <Button onClick={resetPassword}>
              Send link <FiArrowRight color="#B5C401" />
            </Button>
            <Button onClick={handlerBackLogin}>
            <FiArrowLeft color="#868686" /> Back 
            </Button>
          </Container>
        </div>
      </>
    )
}
