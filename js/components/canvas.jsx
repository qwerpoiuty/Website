
import React from 'react';



var Graphic = React.createClass({ 

	componentDidMount: function() {
		var context = this.getDOMNode().getContext('2d');
		this.paint1(context);
		this.paint2(context)
	},

	componentDidUpdate: function() {
		var context = this.getDOMNode().getContext('2d');
		context.clearRect(0, 0, window.innerWidth, window.innerHeight *3);
		this.paint1(context);
		this.paint2(context)
	},

	paint1: function(context) {
		var red = parseInt(255 * (this.props.xLocation/window.innerWidth))
		var green = parseInt(255 * (this.props.yLocation/(window.innerHeight * 3)))
		var blue = parseInt(((this.props.xLocation*this.props.yLocation)/(window.innerWidth*window.innerHeight*3))*255)
		context.save();
		context.translate(this.props.xLocation,this.props.yLocation);
		context.fillStyle = 'rgb(' +red+ ',' + green + ',' + blue + ')'
		context.fillRect(0, 0, 100, 100);
		context.restore();
	},
	paint2: function(context) {
		var red = parseInt(255 * (this.props.xLocation/window.innerWidth))
		var green = parseInt(255 * (this.props.yLocation/(window.innerHeight * 3)))
		var blue = parseInt(((this.props.xLocation*this.props.yLocation)/(window.innerWidth*window.innerHeight*3))*255)
		context.save();
		context.translate(-this.props.xLocation -100,-this.props.yLocation - 100);
		context.fillStyle = 'rgb(' +red+ ',' + green + ',' + blue + ')'
		context.fillRect(window.innerWidth, window.innerHeight*3, 100, 100);
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
		if (this.state.right) difx = 2
		else difx = -2
		if (this.state.down) dify = 2
		else dify = -2
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