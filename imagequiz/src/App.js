import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/imagequiz/" render = {props => <Home {...props} />}>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/quiz" render = {props => <Quiz {...props} />}>
        </Route>
        <Route path="/score" render = {props => <Score {...props} />}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
