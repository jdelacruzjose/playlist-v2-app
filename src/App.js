import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlaylist from "./playlist/pages/NewPlaylist";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/playlist/new" exact>
          <NewPlaylist />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
