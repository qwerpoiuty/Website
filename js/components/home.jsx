import React from 'react';
import Time from './time.jsx'
import FallingBlocks from './canvas.jsx'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

let Home = React.createClass({ 
  render() {
	return(
		<div className = "col-md-12 home">
			<div className = "content">
				<FallingBlocks/>
				<div className = "col-md-12 homePane" id = "intro">
					<div className = "row">
						<div className = 'introContainer'>
							<h1 className = "greeting">Hello, I'm Stan. <span id = 'subhead'>I JavaScript.</span></h1>
							<Time start = {Date.now()} />
							<div className = "icons">
								<a href = "mailto:hello@stanle.me" target = "_blank"><i className="fa fa-envelope fa-3x"></i></a>
								<a href = "https://github.com/qwerpoiuty" target  = "_blank"><i className="fa fa-github fa-4x"></i></a>
								<a href = "https://www.linkedin.com/in/stanle1" target = "_blank"><i className="fa fa-linkedin-square fa-3x"></i></a>
								
							</div>
						</div>
					</div>
				</div>
				<div className = "col-md-12 homePane" id = "writing">
					<div className = "BlogContainer">
						<h1 className = 'title'>Things I do in my free time...</h1>
						<div className = "projectContainer row">
							<a href = "https://github.com/qwerpoiuty/AmIBad" target = "_blank" ><h2 className = "projectName col-md-3">GitGud</h2></a>
							<h3 className = "projectDescription col-md-8">A webapp designed to help you get better at league of legends. Visualizes your performance and compares it to others of the same skill level.</h3>
						</div>
						<div className = "projectContainer row">
							<a href = "http://www.quokka.chat" target = "_blank" ><h2 className = "projectName col-md-3">QuokkaChat</h2></a>
							<h3 className = "projectDescription col-md-8">A webapp to remove some of the noise involved with commenting on videos. Organizes comments based on the video time they were made. Comments on screen will update as the video plays!</h3>
						</div>
						<div className = "projectContainer row">
							<a href = "g-o-l.herokuapp.com" target = "_blank" ><h2 className = "projectName col-md-3">Game of Life</h2></a>
							<h3 className = "projectDescription col-md-8">My version of the Game of Life. Written in vanilla JavaScript.</h3>
						</div>
						<div className = "projectContainer row">
							<a href = "https://github.com/qwerpoiuty/FaceOff" target = "_blank" ><h2 className = "projectName col-md-3">FaceOff</h2></a>
							<h3 className = "projectDescription col-md-8">A game 2 person game where you literally have to dodge incoming fire. Fire back at your opponent with simple math questions.</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
  }
});

						

export default Home; 

