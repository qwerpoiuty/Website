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
      <div className = 'blog col-md-12'>
        <div className = 'titleContainer'>
          <Link to = "app" ><i className = 'fa fa-chevron-left fa-4x'></i></Link>
          <h1 className ='title' >&#123;This is a Title&#125;</h1>
          <h4 className = 'subTitle'>Biased recounts of Stan's misadventures, trivia, code.</h4>
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
