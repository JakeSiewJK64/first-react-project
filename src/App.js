import React from "react";
import Home from './components/homepage/Homepage';
import About from './components/about/About';
import Default from "./components/default/Default";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Toolbar, AppBar, Button } from "@material-ui/core";
import './App.css';

export default function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <div className="toolbar-container">
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
      <div>
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/"><Default /></Route>
        </Switch>
      </div>
    </Router>
  );
}