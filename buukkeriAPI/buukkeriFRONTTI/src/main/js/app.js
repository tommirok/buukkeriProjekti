/**
 * @author Tommi Rokolampi
 */

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
import Language from './Language';
<<<<<<< HEAD
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {strings} from './LocalizationStrings';

=======
import BookingPage from './BookingPage';
import RequireLogin from './RequireLogin';
import UserPage from './UserPage';
>>>>>>> 49d6b6ae1abbab5eecaa9032bb8633ec9d2a49f7
import {
	  BrowserRouter as Router,
	  Route,
	  Link,
		Switch
	} from 'react-router-dom';





// MAIN
	class Main extends React.Component {
		constructor(props)
		{
			super(props)
			this.state={loggedin:false}
			this.handler = this.handler.bind(this)
		}
		handler() {
		    
		    this.setState({
		      loggedin: true
		      
		    })
		    console.log(this.state.loggedin)
		    console.log("täällä")
		  }

	  render() {


	    return (
	    		<Router>
	    		
	    	    <main>
<<<<<<< HEAD
						<Link to="/assets/">
							<img src="/src/main/img/vapaatvuorot.png" alt="Vapaatvuorot.fi" className="logo"></img>
						</Link>
						<Link className="btn btn-success login" to="/assets/login">{strings.login}</Link>
						<Language />

	    	      <hr/>
							<Switch>
								<Route exact path="/assets/" component={App}/>
								<Route path="/assets/Registration" component={Registration}/>
								<Route path="/assets/login" component={Login}/>
								<Route component={NoMatch}/>
=======
	    	    		
						<Language />
						<ul>
							 <li><Link to="/assets/">Home</Link></li>
							 <li><Link to="/assets/login">Login</Link></li>
						 </ul>
						 <signin>
					        <Link to="/assets/login"><button className="btn btn-success btn-lg" > {strings.login} </button></Link>

						 </signin>
						 

	    	      <hr/>
							<Switch>
							
							<Route exact path="/assets" component={App}/>
									
							<Route path="/assets/Registration" component={Registration}/>
							<Route path="/assets/login" component={Login} handler={this.handler}/>
							<Route path="assets/UserPage" component={UserPage}/>
						    <Route path="assets/BookingPage" component={BookingPage}/>
						   
						
						    <Route component={NoMatch}/>
>>>>>>> 49d6b6ae1abbab5eecaa9032bb8633ec9d2a49f7
							</Switch>
	    	    <Footer />
	    		 </main>
	    	    
	    	  </Router>
	    	  
	    );
	  }
	}
ReactDOM.render(<Main />, document.getElementById("react"));


