import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Users, Repositories, MainLayout,About, Help } from "./containers";
import { Header, Footer } from "./components/common";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <MainLayout>
      <Switch>
        <Route
          exact
          component={Home}
          path="/home"
        />

        <Route
          exact
          path="/repositories"
          component={Repositories}
        />

        <Route
          exact
          path="/users"
          component={Users}
        />

        <Route
          exact
          path="/"
          component={Home} />
        <Route
          exact
          path="/about"
          component={About} />
          <Route
          exact
          path="/help"
          component={Help} />
      </Switch>
    </MainLayout>
    <Footer />
  </Router>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();