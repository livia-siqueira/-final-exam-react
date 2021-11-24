import { Home } from "../pages/Home";
import { Registration } from "../pages/Registration";
import { ResetPassword } from "../pages/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageBet from "@components/PageGame/PageBet/index";
import HomeUser from "@components/Home/HomeUser";
import { NewBet } from "../pages/NewBet";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import { PageHomeUser } from "src/pages/PageHomeUser";

export function RoutesProject() {
  const authenticated = useSelector(
    (state: RootState) => state.users.isAutenthicated
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/HomeUser"
          element={<PageHomeUser isAutorization={authenticated} />}
        />
        <Route
          path="/NewBet"
          element={<NewBet isAutorization={authenticated ? authenticated : false} />}
        />
        <Route
          path="/Registration"
          element={<Registration/>}
        />
        <Route
          path="/ResetPassword"
          element={<ResetPassword />}
        />
      </Routes>
    </BrowserRouter>
  );
}
