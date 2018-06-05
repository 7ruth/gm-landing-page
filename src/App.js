import React, { Component } from 'react';
import './App.css';
import AppMainWrapper from './components/AppMainWrapper';
import AppWrapper from './components/AppWrapper';
import AppHeader from './components/AppHeader';
import LinksCollection from './components/LinksCollection';
import UseCases from './components/UseCases';
import OffsiteLinks from './components/OffsiteLinks';
import GreyMatterBillboard from './components/grey-matter-billboard';
import GreyMatterFabric from './components/grey-matter-fabric';
import GreyMatterData from './components/grey-matter-data';
import GreyMatterSense from './components/grey-matter-sense';

import { AppFooter } from 'gm-ui-components';

import { injectGlobal } from 'styled-components';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppMainWrapper>
          <AppHeader />
          <GreyMatterBillboard />
          <LinksCollection />
          <OffsiteLinks />
          <UseCases />
          <GreyMatterFabric />
          <GreyMatterData />
          <GreyMatterSense />
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
    height: 100vh;
  }

  a {
    text-decoration: none
  }
}
`;

export default App;