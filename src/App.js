import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./ui/routes/Home";
import FroalaPage from "./ui/routes/FroalaPage";
import "./App.css";
// This is for the froal editor to work without eject from react-creare-app
// https://github.com/froala/react-froala-wysiwyg/issues/7
import $ from 'jquery';
window.$ = $;


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/froala" component={FroalaPage} />
          </div>
        </Router>
    );
  }
}

export default App;
