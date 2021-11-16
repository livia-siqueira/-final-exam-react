import React from 'react';
import { Home } from './components/Home/Home';
import { Registration } from './components/Registration/Registration';
import './stylesGlobal/global';
import { GlobalStyle } from './stylesGlobal/global';

function App() {
  return (
    <>
    <GlobalStyle/>
    {/*<Home/>*/}
    <Registration/>
    </>
  );
}

export default App;
