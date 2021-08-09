import React from "react";
import Home from './components/homepage/Homepage';
import Users from './components/users/Users';
import About from './components/about/About';
import Default from "./components/default/Default";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/users"><Users /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/"><Default /></Route>
        </Switch>
      </div>
    </Router>
  );
}