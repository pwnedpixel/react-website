import * as React from 'react';
import { Header } from 'semantic-ui-react';
import './App.css';

import Terminal from './components/terminal/terminal';
import Links from './components/links/links';

const App = () => (
  <div className="App">
  <Header className="app-header" as='h1'>
      Andrew K
    </Header>
    <Links />
    <Header className="app-header" as='h1'>
      Resume
    </Header>
    <Terminal commands={["resume"]} expandToFit={true}/>
    
  </div>
);

export default App;
