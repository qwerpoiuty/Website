import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/Login.jsx';
import HomeHandler from './components/home.jsx';
require('../styles/main.scss')
let App = React.createClass({  
  render() {
    return (
      <div className="nav">
        <Link to="app">App</Link>
        <Link to="login">Login</Link>
        <Link to="home">Home</Link>
        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (  
  <Route name="Home" path="/" handler={HomeHandler}>
    <Route name="login" path="/login" handler={LoginHandler}/>
    
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});