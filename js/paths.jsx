var paths = {
  '/': {
    title: 'Home',
    page: 'home.html'
  },
  '/about': {
    title: 'About',
    page: 'about.html'
  },
  '/blog': {
    title: 'Blog'
  },
  
  posts: {
    first_post: {
      title: 'My First Blog Post',
      md: 'first_post.md',
      published: '2015-01-01',
      preview: 'Everyone has to start somewhere.'
    },
    second_post: {
      title: 'I Blogged Again',
      md: 'blogged_again.md',
      published: '2015-01-03',
      preview: 'Oops I did it again.'
    }
  }

};
var postReq = 
console.log('hi',postReq)
module.exports = {
  allPosts: function() {
    return paths.posts;
  },
  postForPath: function(path) {
    return this.postReq()('./' + paths.posts[path].md);
  },
  postReq: function() {
    return require.context('../posts', false, /^\.\/.*\.md$/);
  }
};
