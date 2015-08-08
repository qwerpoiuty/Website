var paths = {
  posts: {
    one: {
      title: 'Hello my name is Stan',
      md: '01-Introduction.md',
      published: '2015-08-07',
      preview: 'Icebreaker! Because everyone loves those! I\'m going to introduce myself and try to explain what I\'m writing. Please read this first?'
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
