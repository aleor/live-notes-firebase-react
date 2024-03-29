import React, { Component } from "react";
import Posts from "./Posts";
import Authentication from "./Authentication";
import PostPage from "./PostPage";

import { Switch, Route, Link } from "react-router-dom";
import UserProfile from "./UserProfile";

class Application extends Component {
  render() {
    return (
      <main className="Application">
        <Link to="/">
          <h1>Live Notes</h1>
        </Link>
        <Authentication />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/posts/:id" component={PostPage} />
        </Switch>
      </main>
    );
  }
}

export default Application;
