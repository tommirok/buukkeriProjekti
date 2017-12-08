const React = require ('react');
const ReactDOM = require ('react-dom');

import LocalizedStrings from 'react-localization';
import {strings} from './LocalizationStrings';
import Header from "./Header";
import LogReg from "./Signin";
import App from "./Application";
import Footer from "./Footer";
import Login from './LoginSivu';
import NoMatch from './NoMatch';
import Registration from './Registration';
import BookingPage from './BookingPage';

import {
	  BrowserRouter as Router,
	  Route,
	  Link,
		Switch
	} from 'react-router-dom';



export default class RequireLogin extends React.Component{
	constructor(props)
	{
		super(props);
	}
	componentDidMount(){
	
	
	if(lsLoggedIn){
		
	}
	}
	render(){
		return (
			<div>
			mikä täälläkin nyt on
			</div>
		
		)
	}
}





/*const requireLoggin = (nextState, replace)=>{
	if (!user.isLogged()){
		replace({path:'/assets/login'})
	}
	
}




const LoginRoutes = () => {
	return (
	<Route path="/bookingpage" component={Logged} onEnter={requireLoggin}/>		
	)
}

*/




































