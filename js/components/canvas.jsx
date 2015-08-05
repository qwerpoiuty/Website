
import React from 'react';



var Graphic = React.createClass({ 

	componentDidMount: function() {
		var context = this.getDOMNode().getContext('2d');
		this.paint1(context);
		this.paint2(context);
		this.paint3(context);
		this.paint4(context)
		console.log('hi')
	},

	componentDidUpdate: function() {
		var context = this.getDOMNode().getContext('2d');
		context.clearRect(0, 0, window.innerWidth, window.innerHeight *3);
		this.paint1(context);
		this.paint2(context)
		this.paint3(context)
		this.paint4(context)
	},

	paint1: function(context) {
		var red = parseInt(255 * (this.props.xLocation/window.innerWidth))
		var green = parseInt(255 * (this.props.yLocation/(window.innerHeight * 3)))
		var blue = parseInt(((this.props.xLocation*this.props.yLocation)/(window.innerWidth*window.innerHeight*3))*255)
		context.save();
		context.translate(this.props.xLocation,this.props.yLocation);
		context.fillStyle = 'rgb(' +red+ ',' + green + ',' + blue + ')'
		context.fillRect(0, 0, 150, 150);
		context.restore();
	},
	paint2: function(context) {
		var green = parseInt(255 * (this.props.xLocation/window.innerWidth))
		var blue = parseInt(255 * (this.props.yLocation/(window.innerHeight * 3)))
		var red = parseInt(((this.props.xLocation*this.props.yLocation)/(window.innerWidth*window.innerHeight*3))*255)
		context.save();
		context.translate(-this.props.xLocation -150,-this.props.yLocation - 150);
		context.fillStyle = 'rgb(' +red+ ',' + green + ',' + blue + ')'
		context.fillRect(window.innerWidth, window.innerHeight*3, 150, 150);
		context.restore();
	},
	paint3: function(context) {
		var red = parseInt(255 * (this.props.xLocation/window.innerWidth))
		var blue = parseInt(255 * (this.props.yLocation/(window.innerHeight * 3)))
		var green = parseInt(((this.props.xLocation*this.props.yLocation)/(window.innerWidth*window.innerHeight*3))*255)
		context.save();
		context.translate(-this.props.xLocation -150,this.props.yLocation);
		context.fillStyle = 'rgb(' +red+ ',' + green + ',' + blue + ')'
		context.fillRect(window.innerWidth, 0, 150, 150);
		context.restore();
	},
	paint4: function(context) {
		var blue = parseInt(255 * (this.props.xLocation/window.innerWidth))
		var green = parseInt(255 * (this.props.yLocation/(window.innerHeight * 3)))
		var red = parseInt(((this.props.xLocation*this.props.yLocation)/(window.innerWidth*window.innerHeight*3))*255)
		context.save();
		context.translate(this.props.xLocation,-this.props.yLocation-150);
		context.fillStyle = 'rgb(' +red+ ',' + green + ',' + blue + ')'
		context.fillRect(0, window.innerHeight*3, 150, 150);
		context.restore();
	},
	render: function() {
		return <canvas width={window.innerWidth} height={window.innerHeight *3} />;
	}

});

var FallingBlocks = React.createClass({

	getInitialState: function() {
		return { xLocation:0 ,yLocation :0};
	},

	componentDidMount: function() {
		requestAnimationFrame(this.tick);
	},

	tick: function() {
		var difx,dify;
		if (this.state.yLocation > (window.innerHeight*3-100) || this.state.yLocation <0) this.state.down = !this.state.down
		if (this.state.xLocation > (window.innerWidth -100) || this.state.xLocation <0) this.state.right = !this.state.right
		if (this.state.right) difx = 3
		else difx = -3
		if (this.state.down) dify = 4
		else dify = -4
		this.setState({ yLocation:this.state.yLocation + dify, xLocation: this.state.xLocation + difx });
		requestAnimationFrame(this.tick);
	},

	render: function() {
		return (

			<div>
				<Graphic rotation={this.state.rotation} yLocation = {this.state.yLocation} xLocation = {this.state.xLocation}/>
			</div>
			)
	}

});
export default FallingBlocks