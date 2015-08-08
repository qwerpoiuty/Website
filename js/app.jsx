import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
// import PostHandler from './components/post.jsx'
import BlogHandler from './components/blog.jsx';
import PostHandler from './components/post.jsx'
import HomeHandler from './components/home.jsx';

require('../styles/main.scss')
let App = React.createClass({  
  render() {
    return (
      <div>
        {this.props.children}
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (  
  <Route name="app" path="/" handler={App}>
    <Route name="blog" path="/blog" handler={BlogHandler}/>
    <Route name="post" path="/blog/:post" handler={PostHandler} />
    <DefaultRoute handler = {HomeHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});

