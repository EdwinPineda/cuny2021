import React, { Component, } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./components/pages/Home/Home"
import SignUp from './components/pages/SignUp/SignUp'
import Profile from './components/pages/Profile/Profile';


export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    );
  }
}
export default App;