import React, { Component, } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./components/pages/Home/Home"
import Profile from './components/pages/Profile/Profile';


export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    );
  }
}

export default App;