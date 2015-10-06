import React from 'react'

class Time extends React.Component {
	constructor(props){
		super(props)
		this.state = {elapsed:0}
	}
	componentDidMount(){
		
		this.timer = setInterval(this.tick.bind(this),50)
	}
	componentWillUnmount(){
		clearInterval(this.timer)
	}
	tick(){
		this.setState({elapsed: new Date() - this.props.start});
	}

	render() {
		let elapsed = Math.round(this.state.elapsed/100)
		let seconds = (elapsed/10).toFixed(1)
		return (<h3 className = 'timer'>You have been watching blocks bounce for <b>{seconds}</b> seconds.</h3>);
	}
}

export default Time