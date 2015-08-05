import React from 'react';
import Time from './time.jsx'
import FallingBlocks from './canvas.jsx'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

let Home = React.createClass({ 

  render() {
    return(
	    <div className = "home">
	    	<FallingBlocks />
	    	<div className = "col-md-12 homePane" id = "intro">
	    		<div className = "row">
		    		<div className = 'introContainer'>
			    		<h1 className = "greeting">Hello, I'm Stan. Welcome to Website</h1>
			    		<h2 className = "greeting">Glad you could make it.</h2>
			    		<Time start = {Date.now()} />
					</div>
				</div>
	    	</div>
	    	<div className = "col-md-12 homePane" id = "about">
	    		<div className = 'aboutContainer'>
	    			<h1 className = "about">Qwerpoiuty is my handle on the Internet. You can find around here.</h1>
	    			<div className = "icons">
		    			<a href = "mailto:stan.le1107@gmail.com" target = "_blank"><i className="fa fa-envelope fa-3x"></i></a>
		    			<a href = "https://github.com/qwerpoiuty" target  = "_blank"><i className="fa fa-github fa-3x"></i></a>
		    			<a href = "https://www.linkedin.com/in/stanle1" target = "_blank"><i className="fa fa-linkedin-square fa-3x"></i></a>
		    		</div>
	    		</div>
	    		
	    	</div>
	    	<div className = "col-md-12 homePane" id = "writing">
	    		<div className = "BlogContainer">
	    			<Link to="blog"><h1 className = "blogTitle">I also write sometimes... <i className = "fa fa-chevron-right"></i></h1></Link>

	    		</div>
	    	</div>
	    </div>
    	);
  }
});


export default Home; 

