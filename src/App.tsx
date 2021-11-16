import { PageBet } from "@components/PageGame/PageBet";
import React from "react";
import { Home } from "./pages/Home";
import { RoutesProject } from "./routes";
import "./stylesGlobal/global";
import { GlobalStyle } from "./stylesGlobal/global";

function App() {
  return (
    <>
        <RoutesProject/>
        <GlobalStyle />
        <PageBet/>
    </>
  );
}

export default App;
