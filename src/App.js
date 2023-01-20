import "./App.css";
import "./components/Navbar";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  pageSize = 6;
  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={this.state.progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                country="in"
                apiKey={this.apiKey}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                key="business"
                pageSize={this.pageSize}
                country="in"
                apiKey={this.apiKey}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                apiKey={this.apiKey}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                apiKey={this.apiKey}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                key="health"
                pageSize={this.pageSize}
                country="in"
                apiKey={this.apiKey}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                key="science"
                pageSize={this.pageSize}
                country="in"
                apiKey={this.apiKey}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                key="sports"
                pageSize={this.pageSize}
                country="in"
                apiKey={this.apiKey}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                key="technology"
                pageSize={this.pageSize}
                country="in"
                apiKey={this.apiKey}
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
