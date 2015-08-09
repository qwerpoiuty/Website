import React from "react"

let one = ['Writes code', 'Makes websites', 'Stays professional', 'Communicates ideas clearly']
let two = ['Works Hard', 'Is nice', 'Is humble', 'Always Hungry']
let three = ['I knows the JavaScripts','I am comfortable with the Terminal and Git','I like working with back-end folks too','I want to craft high-quality user experiences for web and mobile','I know about SASS','My spirit is independent','I have the ability to create new web technologies and user experiences']
let four = ['Money', 'Benefits', '401k', 'Amazing clients', ' Dogs to pet(cats too?)', 'Paid holidays and vacation', 'A smart and fun team']
let instrumentApp = React.createClass({
	render(){
		return(
			<div className = "appContainer container-fluid">
				<h1>This is my application for the front-end developer position at Instrument</h1>
				<div className = "row">
					<div className = "col col-sm-6">
						<h1 className = 'contentTitle fade-in first'> I can do these</h1>
						<ul>
							{
								_.map(one,function(item,key){	
									return(<li className= 'fade-in one'>&#x2713;  {item}</li>)
								})
							}
						</ul>
					</div>
						<div className="col col-sm-6">
						<h1 className="contentTitle fade-in second">I can also do these</h1>
						<ul>
							{
								_.map(two,function(item,key){	
									return(<li className = 'fade-in two'>&#x2713;  {item}</li>)
								})
							}
						</ul>
					</div>
				</div>
				<div className = "row">
					<div className="col col-sm-6">
						<h1 className="contentTitle fade-in third">Things I have</h1>
						<ul>
{
								_.map(three,function(item,key){	
									return(<li className = 'fade-in three'>&#x2713;  {item}</li>)
								})
							}
						</ul>
					</div>
					<div className="col col-sm-6">
						<h1 className="contentTitle fade-in fourth">Things you have that I want</h1>
						<ul>
							{
								_.map(four,function(item,key){	
									return(<li className = 'fade-in four'>&#x2713;  {item}</li>)
								})
							}
						</ul>
					</div>
				</div>
				<div className = 'thanks'>
					<h2 className = "fade-in last">Thank you for your consideration</h2>
				</div>
			</div>
			) 
	}
})

export default instrumentApp