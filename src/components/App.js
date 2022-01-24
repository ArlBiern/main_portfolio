import { Route, Switch } from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import "../styles/general.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
