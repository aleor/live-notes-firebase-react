import React, { Component } from "react";
import Posts from "./Posts";
import Authentication from "./Authentication";

class Application extends Component {
  render() {
    return (
      <main className="Application">
        <h1>Live Notes</h1>
        <Authentication />
        <Posts />
      </main>
    );
  }
}

export default Application;
