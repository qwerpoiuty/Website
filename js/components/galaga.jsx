import React from 'react'
import ReactCanvas from 'react-canvas'

let Surface = ReactCanvas.Surface;
var Image = ReactCanvas.Image;
var Text = ReactCanvas.Text;

var Galaga = React.createClass({

  render() {
    var surfaceWidth = window.innerWidth;
    var surfaceHeight = window.innerHeight;
    var imageStyle = this.getImageStyle();
    var textStyle = this.getTextStyle();

    return (
      <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
        <Image style={imageStyle} src='http://placekitten.com/g/200/300' />
        <Text style={textStyle}>
          Here is some text below an image.
        </Text>
      </Surface>
    );
  },

  getImageHeight() {
    return Math.round(window.innerHeight / 2);
  },

  getImageStyle() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: this.getImageHeight()
    };
  },

  getTextStyle() {
    return {
      top: this.getImageHeight() + 10,
      left: 0,
      width: window.innerWidth,
      height: 20,
      lineHeight: 20,
      fontSize: 12
    };
  }

});

export default Galaga