
const React = require ('react');

class Signin extends React.Component{
	constructor(props)
	{
		super(props);
		
	}
	render(){
		return(
		<signin>
			<Login />
			<Registration />
			
		</signin>
		)
	}
}