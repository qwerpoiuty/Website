var moment = require('moment'),
  React = require('react');
    
var Moment = React.createClass({

  getDefaultProps: function() {
    return {
      format: 'D MMM YYYY',
    };
  },

  propTypes: {
    datetime: React.PropTypes.string.isRequired,
    format: React.PropTypes.string,
    style: React.PropTypes.object
  },

  render: function() {
    return (
      <time className = 'date' dateTime="{this.props.datetime}">Written on <strong>{moment(this.props.datetime).format(this.props.format)}</strong></time>
    );
  }
});

module.exports = Moment;
