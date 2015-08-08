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
      <div className = 'post'>
          <header className = 'header'>
          <Link to ='blog'><i className = "fa fa-chevron-left fa-4x"></i></Link>
          <h1 className = 'title'>&#123;{title}&#125;</h1>
          <Moment datetime={published} />
          </header>
          <div className = 'contentContainer'>
            <span className = 'content' dangerouslySetInnerHTML={{__html: content}} />
          </div>
      </div>
      );
}
});

module.exports = Post;
