import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Login, Home } from "~/pages";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/login" />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
