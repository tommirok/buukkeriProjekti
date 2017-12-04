
import Login from "./Login";
import Registration  from "./Reg";
import Header from "./Header";

const React = require ('react');

export default class Signin extends React.Component{
	constructor(props)
	{
		super(props);
		
	}
	render(){
		return(
		<signin>
			<Header/>
			<Login />
			<Registration />
			
		</signin>
		)
	}
}