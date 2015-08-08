var paths = {
  posts: {
    first_post: {
      title: 'Hello my name is Stan',
      md: 'first_post.md',
      published: '2015-08-07',
      preview: 'Icebreaker! Because everyone loves those'
    }
  }

};

module.exports = {

  allPosts: function() {
    return paths.posts;
  },
  postForPath: function(path) {
    return this.postReq()('./' + paths.posts[path].md);
  },
  postReq: function() {
    return require.context('./js/posts', false, /^\.\/.*\.md$/)
  }
};
