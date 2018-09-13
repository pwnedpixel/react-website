import * as React from 'react';
import { Header } from 'semantic-ui-react';
import './App.css';

import Terminal from './components/terminal/terminal';

const App = () => (
  <div className="App">
    <Header id="app-header" as='h1'>
      Terminal - WIP
    </Header>
    <Terminal />
  </div>
);

export default App;
