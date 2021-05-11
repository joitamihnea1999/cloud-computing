import './App.css';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { Flight } from './components/Flight';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        
        <section className="container">
          <Switch>
          <Route exact path="/" component={Flight} />
            <Route exact path="/flight" component={Flight}></Route>

          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
