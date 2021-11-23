import { Button, Header as HeaderPage } from "./styles";
import {FiArrowRight} from 'react-icons/fi'

export function Header() {

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
            <Button>Log out <FiArrowRight/></Button>
          </div>
        </div>
      </HeaderPage>
      <hr />
    </>
  );
}
