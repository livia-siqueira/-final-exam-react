import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import { Home, PageBet, PageEntry, Account  } from "../pages/index";
import { FormChangePassword } from "@components/FormChangePassword";

export function RoutesProject() {
  const auth = useSelector(
    (state: RootState) => state.users.isAutenthicated
  );
  const isAutorization= auth ? true : false
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PageEntry />} />
        <Route
          path="/Home"
          element={<Home authenticated={isAutorization} />}
        />
        <Route
          path="/NewBet"
          element={<PageBet authenticated={isAutorization} />}
        />
        <Route path="/Atualization" element={<Account authenticated={isAutorization}/>} />
        <Route path="/ChangePassword/*" element={<FormChangePassword/>}/>
      </Routes>
    </BrowserRouter>
  );
}
