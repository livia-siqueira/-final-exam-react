import { Button, Header as HeaderPage } from "./styles";
import {FiArrowRight} from 'react-icons/fi'
import { AppDispatch } from "src/store";
import { useDispatch } from "react-redux";
import { logoutUser } from "src/store/users/controlUsers";
import { useNavigate } from "react-router";

interface propsHeader {
  type: string;
}

export function Header({type}: propsHeader) {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch(logoutUser())
    navigate("/")
  }
  const handleHome = () =>{
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
           {type === "Home" ?  <button onClick={handleHome}>Home</button> : ''}
          </div>
        </div>
       { type !== "Nulo" ? <div className="header-rigth">
          <Button>Account</Button>
          <div className="logout">
            <Button onClick={handleLogout}>Log out <FiArrowRight/></Button>
          </div>
        </div> : 
          <div className="logout">
          <Button onClick={handleRegister}>Sign Up <FiArrowRight/></Button>
        </div>
        }
      </HeaderPage>
      <hr />
    </>
  );
}
