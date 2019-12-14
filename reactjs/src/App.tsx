import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
                <GlobalStyle />
                <Dashboard />
            </React.Fragment>
        )
    }
  }
  
  export default App;