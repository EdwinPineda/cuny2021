import React, { Component, } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./components/pages/Home/Home";
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Profile from './components/pages/Profile/Profile';
import Events from './components/pages/Events/Events';
import Host from './components/pages/Host/Host';
import Past from './components/pages/Past/Past';


export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/host" component={Host} />
          <Route exact path="/past" component={Past} />
        </Switch>
      </Router>
    );
  }
}

export default App;