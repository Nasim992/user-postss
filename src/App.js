import React from 'react';
import './App.css';
import Homepage from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Error from './components/Error/Error';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home">
            <Homepage></Homepage>
          </Route>
          <Route path="/posts/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="/posts">
          <Homepage></Homepage>
          </Route>
          <Route exact path = "/">
          <Homepage></Homepage>
          </Route>
          <Route path = "*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
