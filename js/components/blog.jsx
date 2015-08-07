var React = require('react'),
  Router = require('react-router'),
  Link  = Router.Link,
  Moment  = require('./Moment.jsx'),
  Paths = require('./PathsMixin.jsx'),
  _ = require('underscore');
    
var Blog = React.createClass({
  
  mixins: [Router.State, Paths],
  render: function() {
    console.log('blog',this)
    var self = this      
    return (
      <div>
        <h1>This is a Title</h1>
        <ul>
        { 
          _.map(this.getAllPosts(), function(post, key) {
            return <li key={key}>
              <div>
                <Link key={key} to={'/blog/' + key}>{post.title}</Link>
                <br/>
                <Moment datetime={post.published} />
              </div>
              <div>
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
