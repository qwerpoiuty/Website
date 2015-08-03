import React from 'react';

let Home = React.createClass({ 

  render() {
    return(
	    <div className = "home">
	    	<div className = "col-md-12 homePane" id = "intro">
	    		<div className = 'introContainer'>
		    		<h1 className = "greeting">Hello. Welcome to Website</h1>
		    		<h2 className = "greeting">Glad you caould make it</h2>
				</div>
	    	</div>
	    	<div className = "col-md-12 homePane" id = "about">
	    		<div className = 'aboutContainer'>
	    			<h1 className = "about">qwerpoiuty is my handle on the Internet. You can find around here.</h1>
	    			<div className = "icons">
		    			<a href = "mailto:stan.le1107@gmail.com" target = "_blank"><i className="fa fa-envelope fa-3x"></i></a>
		    			<a href = "https://github.com/qwerpoiuty" target  = "_blank"><i className="fa fa-github fa-3x"></i></a>
		    			<a href = "https://www.linkedin.com/in/stanle1" target = "_blank"><i className="fa fa-linkedin-square fa-3x"></i></a>
		    		</div>
	    		</div>
	    	</div>
	    	<div className = "col-md-12 homePane" id = "writing">
	    		<h1 className = "writing">I also write sometimes...</h1>
	    		<ul className = "postList">
	    			
	    		</ul>
	    	</div>
	    </div>
    	);
  }
});


export default Home; 

