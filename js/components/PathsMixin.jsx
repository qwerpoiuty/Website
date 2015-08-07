
var paths = require('../paths.jsx'),
  React = require('react'),
    Router = require('react-router');

var Paths = {

  contextTypes: {
    router:React.PropTypes.func,
    getCurrentPathname: React.PropTypes.func.isRequired,
    getCurrentParams: React.PropTypes.func.isRequired
  },

  getAllPosts: function() {
    return paths.allPosts();
  },

  getPathMeta: function(context,key) {
    var post = context.getCurrentParams().post;
    if(post) {
      var post = paths.allPosts()[post]
      return post;
    }
    return paths.allPaths()[path][key];
  },

  getPage: function() {
    return paths.pageForPath(this.context.getCurrentPathname());
  },

  getPost: function(context) {
    return paths.postForPath(context.getCurrentParams().post);
  },

  getPreviewForPost: function(post) {
    var postMeta = paths.allPosts()[post];
    if(postMeta.preview) {
      return postMeta.preview;
    }
    // else return the first line from the markdown
    var md = paths.postForPath(post);
    return md.substr(0, md.indexOf('\n'));
  }

};

module.exports = Paths;
