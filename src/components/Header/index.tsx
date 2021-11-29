import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FiArrowRight } from "@sharedAssets/index";
import * as SC from "./styles";
import { AppDispatch, RootState } from "src/store";
import { logoutUser, gameSelected } from "@storeReducers/index";

interface propsHeader {
  type: string;
}

export function Header({ type }: propsHeader) {
  const dispatch: AppDispatch = useDispatch();
  const userLogged = useSelector(
    (state: RootState) => state.users.userAuthenticated
  );
  const Account = userLogged ? userLogged.name : "Account";
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  const handleHome = () => {
    dispatch(gameSelected(null));
    navigate("/Home");
  };
  const handleRegister = () => {
    navigate("/Registration");
  };

  const handleAccount = () => {
    navigate("/Atualization");
  }

  return (
    <>
      <SC.Container>
        <SC.HeaderPage>
          <div className="header-left">
            <div className="nameCompany">
              <h1>TLG</h1>
              <hr />
            </div>
            <div className="Home">
              {type === "Home" ? (
                <SC.Button onClick={handleHome}>Home</SC.Button>
              ) : (
                ""
              )}
            </div>
          </div>
          {type !== "Nulo" ? (
            <div className="header-rigth">
              <SC.Button onClick={handleAccount}>{Account}</SC.Button>
              <div className="logout">
                <SC.Button onClick={handleLogout}>
                  Log out <FiArrowRight />
                </SC.Button>
              </div>
            </div>
          ) : (
            <div className="logout">
              <SC.Button onClick={handleRegister}>
                Sign Up <FiArrowRight />
              </SC.Button>
            </div>
          )}
        </SC.HeaderPage>
      </SC.Container>
    </>
  );
}
