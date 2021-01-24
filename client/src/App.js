import React, { Component, } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from"./components/NavBar/NavBar"
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;