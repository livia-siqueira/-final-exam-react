import { Button, Header as HeaderPage } from "./styles";
import {FiArrowRight} from 'react-icons/fi'
import { dispatch } from "react-hot-toast/dist/core/store";

export function Header() {




  function handlerLogout(){
    
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
            <h2>Home</h2>
          </div>
        </div>
        <div className="header-rigth">
          <Button>Account</Button>
          <div className="logout">
            <Button onClick={handlerLogout}>Log out <FiArrowRight/></Button>
          </div>
        </div>
      </HeaderPage>
      <hr />
    </>
  );
}
