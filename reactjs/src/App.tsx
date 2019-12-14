import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import {createGlobalStyle} from 'styled-components';
import Header from './Components/Header/Header';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap');

    body {
        background-color:#000;
        color: #fff;
        font-family: 'Open Sans Condensed', sans-serif;
    }
`

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <GlobalStyle />
                <Dashboard />
            </React.Fragment>
        )
    }
  }
  
  export default App;