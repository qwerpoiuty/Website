var React = require('react'),
  Router = require('react-router'),
  Link  = Router.Link,
  Moment  = require('./Moment.jsx'),
  Paths = require('./PathsMixin.jsx'),
  _ = require('underscore');
    
var Blog = React.createClass({
  
  mixins: [Paths],
  contextTypes: {
    router:React.PropTypes.func,
    getCurrentPathname: React.PropTypes.func.isRequired,
    getCurrentParams: React.PropTypes.func.isRequired
  },
  render: function() {
    var self = this      
    return (
      <div className = 'blog'>
        <div className = 'titleContainer'>
          <h1 className ='title' >This is a Title</h1>
          <h4 className = 'subTitle'>Biased recounts of Stan's misadventures</h4>
        </div>
        <ul className = 'blogList'>
        { 
          _.map(this.getAllPosts(), function(post, key) {
            return <li key={key}>
              <div>
                <Link className = 'blogTitle' key={key} to={'/blog/' + key}>{post.title} </Link>
                <Moment datetime={post.published} />
              </div>
              <div className = 'preview'>
                <blockquote>{self.getPreviewForPost(key)}</blockquote>
              </div>
            </li>
          })
        }
        </ul>
      </div>
    );
  }
});

module.exports = Blog;
