import * as React from "react";
import { Header } from "semantic-ui-react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Terminal from "./components/terminal/terminal";
import Login from "./components/login/login";
import Links from "./components/links/links";

const App = () => (
  <Router>
    <div className="App">
    <Header className="app-header" as="h1">
        Links
      </Header>
      <Links />
      <Route exact={true} path="/" component={HomePage} />
      <Route exact={true} path="/login" component={LoginPage} />
      
    </div>
  </Router>
);

const HomePage = () => (
  <div>
    <Header className="app-header" as="h1">
      Andy Terminal
    </Header>
    <Terminal />
  </div>
);

const LoginPage = () => (
  <div>
    <Header className="app-header" as="h1">
      Login
    </Header>
    <Login />
  </div>
);

export default App;
