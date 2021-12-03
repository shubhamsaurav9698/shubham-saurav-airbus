import React from "react";
import "./App.css";
import { HomePage } from "./components/homePage";
import { UserDetails } from "./components/userDetails";
import { PostDetails } from "./components/postDetails";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/userDetails/:id"
            exact={true}
            component={React.memo(UserDetails)}
          />
          <Route path="/" exact={true} component={React.memo(HomePage)} />
          <Route
            path="/userDetails/:id/postDetails/:post"
            exact={true}
            component={React.memo(PostDetails)}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
