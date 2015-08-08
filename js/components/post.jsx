var Paths = require('./PathsMixin.jsx'),
React = require('react'),
Router = require('react-router'),
Link  = Router.Link,
Moment  = require('./Moment.jsx')
;

var Post = React.createClass({
  mixins: [Router,Paths],
  contextTypes: {
    router:React.PropTypes.func,

},

render: function() {
    var post = this.getPathMeta(this.context.router)
    var title = post.title
    var published = post.published
    var content = this.getPost(this.context.router)
    return (
      <div>
          <header className = 'header'>
          <Link to ='blog'>Back to Blog</Link>
          <h1 className = 'title'>{title}</h1>
          <Moment datetime={published} />
          </header>
          <span className = 'content' dangerouslySetInnerHTML={{__html: content}} />
      </div>
      );
}
});

module.exports = Post;
