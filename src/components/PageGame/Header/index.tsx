import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {FiArrowRight} from 'react-icons/fi'
import { Button, Header as HeaderPage } from "./styles";
import { AppDispatch, RootState } from "src/store";
import { logoutUser } from "@storeUser/index";
import { gameSelected } from "@storeGames/index";

interface propsHeader {
  type: string;
}

export function Header({type}: propsHeader) {
  const dispatch: AppDispatch = useDispatch();
  const userLogged = useSelector((state : RootState) => state.users.userAuthenticated)
  const Account = userLogged ? userLogged.name : 'Account';
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate("/")
  }
  const handleHome = () =>{
    dispatch(gameSelected(''));
    navigate("/HomeUser")
  }
  const handleRegister = () => {
    navigate("/Registration")
  }

  return (
    <>
      <HeaderPage>
        <div className="header-left">
          <div className="nameCompany">
            <h1>TLG</h1>
            <hr />
          </div>
          <div className="Home">
           {type === "Home" ?  <Button onClick={handleHome}>Home</Button> : ''}
          </div>
        </div>
       { type !== "Nulo" ? <div className="header-rigth">
          <Button>{Account}</Button>
          <div className="logout">
            <Button onClick={handleLogout}>Log out <FiArrowRight/></Button>
          </div>
        </div> : 
          <div className="logout">
          <Button onClick={handleRegister}>Sign Up <FiArrowRight/></Button>
        </div>
        }
      </HeaderPage>
    </>
  );
}
