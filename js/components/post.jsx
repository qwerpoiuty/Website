var Moment = require('./Moment.jsx'),
  Paths = require('./PathsMixin.jsx'),
  React = require('react'),
  Router = require('react-router');

var Post = React.createClass({
  mixins: [Router.State, Paths],
   contextTypes: {
    router:React.PropTypes.func,
    getCurrentPathname: React.PropTypes.func.isRequired,
    getCurrentParams: React.PropTypes.func.isRequired
  },
  
  render: function() {
    var post = this.getPathMeta(this.context.router)
    var title = post.title
    var published = post.published
    var content = this.getPost(this.context.router)
    console.log('hi',content)
    return (
      <div>
        <header>
          <h1>{title}</h1>
          <Moment datetime={published} />
        </header>
        <span dangerouslySetInnerHTML={{__html: content}} />
      </div>
    );
  }
});

module.exports = Post;
