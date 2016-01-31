import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

let Resume = React.createClass({

	render(){
		return(
			
			<div className = 'resume-container'>
				<div className='basic-info'>
					<h1 className='heading'>Basic Info</h1>
					<p className='title'>Name: <p id='english-name'> Stan Le</p><p id='chinese-name'> 乐夏洋</p></p>
					<p className='title'>Age: <p className='age'> 24</p></p>
					<p className='title'>Location: <p className='address'> 1217 Cabrillo Ave Burlingame, CA 94010</p></p>
					<p className='title'>Phone #: <p className='phone'> 9734243466</p></p>
				</div>
				<div className='skills'>
					<h1 className='heading'>What I'm Good At</h1>

				</div>
				<div className='work-history'>
					<h1 className='heading'>Where I've Worked</h1>
				</div>
				<div className='currently'>
					<h1 className='heading'>What I'm doing</h1>
				</div>
				<div className='Projects'>
					<h1 className='heading'>Things I've built</h1>
				</div>
			</div>

			)
	}
});

export default Resume;