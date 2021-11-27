import React from "react";
import { RoutesProject } from "./routes";
import { GlobalStyle } from "./shared/styles";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import {themeTLG} from './shared/styles'  
import { store } from "./store";
import { Provider } from "react-redux";



function App() {

  return (
    <>
    <Provider store={store}>
    <ThemeProvider theme={themeTLG}>
        <RoutesProject />
        <GlobalStyle />
      <Toaster position="top-left" toastOptions={{duration:3000}}/>
    </ThemeProvider>
    </Provider>
    </>
  );
}

export default App;
