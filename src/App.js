import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Metropolis400 from "./assets/metropolis/Metropolis-Regular.otf";
import Metropolis600 from "./assets/metropolis/Metropolis-SemiBold.otf";

import AppMainWrapper from "./components/AppMainWrapper";
import AppWrapper from "./components/AppWrapper";
import Navigation from "./components/Navigation";

import { AppFooter } from "gm-ui-components";

import { injectGlobal } from 'styled-components';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Navigation />
        <AppMainWrapper>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Grey Matter Starter App</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </AppMainWrapper>
        <AppFooter />
      </AppWrapper>
    );
  }
}

injectGlobal`
  body, body > div {
    margin: 0;
    padding: 0;
    font-family: Metropolis, sans-serif;
    height: 100vh;
  }

  a {
    text-decoration: none
  }

  @font-face {
    font-family: "Metropolis";
    font-style: normal;
    font-weight: 400;
    src: url(${Metropolis400});
  }

  @font-face {
    font-family: "Metropolis";
    font-style: normal;
    font-weight: 600;
    src: url(${Metropolis600});
  }
}
`;

export default App;