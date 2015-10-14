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
				<h1 className = "blogTitle"><a href="#/blog">I also write sometimes... <i className = "fa fa-chevron-right"></i></a></h1>
		    	<div className = "col-md-12 homePane" id = "intro">
		    		<div className = "row">
			    		<div className = 'introContainer'>
				    		<h1 className = "greeting">Hello, I'm Stan, Welcome to Website</h1>
				    		<h3 className = "subGreeting">Glad you could make it! Read <a href = "#/blog/one">About</a> me.</h3>
				    		<Time start = {Date.now()} />
						</div>
					</div>
		    	</div>
		    	<div className = "col-md-12 homePane" id = "about" ref = "about">
		    		<div className = 'aboutContainer'>
		    			<h1 className = "about">Qwerpoiuty is my handle on the Internet. You can find me around these places. Click <a href = "https://drive.google.com/file/d/0B-jny_6Icg6QeHVjLVBDU0taVkk/view?usp=sharing" target = "_blank">here</a> for my resume.</h1>
		    			<div className = "icons">
			    			<a href = "mailto:hello@stanle.me" target = "_blank"><i className="fa fa-envelope fa-3x"></i></a>
			    			<a href = "https://github.com/qwerpoiuty" target  = "_blank"><i className="fa fa-github fa-4x"></i></a>
			    			<a href = "https://www.linkedin.com/in/stanle1" target = "_blank"><i className="fa fa-linkedin-square fa-3x"></i></a>
			    			
			    		</div>
		    		</div>
		    	</div>
		    	<div className = "col-md-12 homePane" id = "writing">
		    		<div className = "BlogContainer">
		    			<h1 className = 'title'>Things I do in my free time...</h1>
		    			<div className = "projectContainer">
		    				<ul>
		    					<li><a href = "http://www.quokka.chat" target = "_blank" ><h2 className = "projectName">QuokkaChat</h2></a>
			    				<h3 className = "projectDescription">A webapp to remove some of the noise involved with commenting on videos. Organizes comments based on the video time they were made. Comments on screen will update as the video plays!</h3></li>
		    					<li><a href = "https://github.com/qwerpoiuty/FaceOff" target = "_blank" ><h2 className = "projectName">FaceOff</h2></a>
		    					<h3 className = "projectDescription">A game 2 person game where you literally have to dodge incoming fire. Fire back at your opponent with simple math questions.</h3></li>
		    					<li><a href = "https://github.com/qwerpoiuty/gameoflife" target = "_blank" ><h2 className = "projectName">Game of Life</h2></a>
		    					<h3 className = "projectDescription">My version of the Game of Life. Written in vanilla JavaScript.</h3></li>
		    				</ul>
		    			</div>
		    		</div>
		    	</div>
		    </div>
	    </div>
    	);
  }
});

		    			

export default Home; 

