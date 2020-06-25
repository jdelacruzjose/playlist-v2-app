import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlaylist from "./playlist/pages/NewPlaylist";
import UserPlaylist from "./playlist/pages/UserPlaylist";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/playlist" exact>
            <UserPlaylist />
          </Route>
          <Route path="/playlist/new" exact>
            <NewPlaylist />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
