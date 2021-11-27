import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import { Home, PageBet, PageEntry  } from "../pages/index";

export function RoutesProject() {
  const authenticated = useSelector(
    (state: RootState) => state.users.isAutenthicated
  );
  //isAutorization={authenticated ? authenticated : false}
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PageEntry />} />
        <Route
          path="/Home"
          element={<Home  />}
        />
        <Route
          path="/NewBet"
          element={<PageBet />}
        />
        {/*<Route path="/ChangePassword/*" element={<ChangePassword/>}/>*/}
      </Routes>
    </BrowserRouter>
  );
}
