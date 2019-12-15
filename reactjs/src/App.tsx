import React, { FC, Fragment } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header/Header";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap');

    body {
        background-color:#000;
        color: #e1e1e1;
        font-family: 'Open Sans Condensed', sans-serif;
    }
`;

const App: FC = () => {
  return (
    <Fragment>
      <Header />
      <GlobalStyle />
      <Dashboard />
    </Fragment>
  );
};

export default App;
