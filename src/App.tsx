import React from "react";
import { RoutesProject } from "./routes";
import "./stylesGlobal/global";
import { GlobalStyle } from "./stylesGlobal/global";
import { Provider } from "react-redux";
import {store} from "./store";
import { Toaster } from "react-hot-toast";
  


function App() {

  return (
    <>
    <Provider store={store}>
        <RoutesProject />
        <GlobalStyle />
      <Toaster position="top-left" toastOptions={{duration:3000}}/>
    </Provider>
    </>
  );
}

export default App;
