import "./App.css";
import "./components/Navbar";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  c = "vishnu";
  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    );
  }
}
