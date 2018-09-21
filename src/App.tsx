import * as React from 'react';
import { Header } from 'semantic-ui-react';
import './App.css';

import Terminal from './components/terminal/terminal';
import Links from './components/links/links';

const App = () => (
  <div className="App">
    <Header className="app-header" as='h1'>
      Andy Terminal
    </Header>
    <Terminal />
    <Header className="app-header" as='h1'>
      Links
    </Header>
    <Links />
  </div>
);

export default App;
