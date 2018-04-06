import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Metropolis400 from "./assets/metropolis/Metropolis-Regular.otf";
import Metropolis600 from "./assets/metropolis/Metropolis-SemiBold.otf";

import AppMainWrapper from "./components/AppMainWrapper";
import AppWrapper from "./components/AppWrapper";
import AppHeader from "./components/AppHeader";
import Navigation from "./components/Navigation";
import PageHeader from "./components/PageHeader";
import LinksCollection from "./components/LinksCollection";
import OffsiteLinks from "./components/OffsiteLinks";
import LearnMoreContent from './components/LearnMoreContent';

import { AppFooter } from "gm-ui-components";

import { injectGlobal } from 'styled-components';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppMainWrapper>
          <AppHeader />
          <PageHeader />
          <LinksCollection />
          <OffsiteLinks />
          <LearnMoreContent />
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