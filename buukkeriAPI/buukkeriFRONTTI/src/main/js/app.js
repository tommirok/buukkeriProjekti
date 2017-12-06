/**
 * @author Tommi Rokolampi
 */


import LocalizedStrings from 'react-localization';

import Header from "./Header";
import LogReg from "./Signin";
import App from "./Application";
import Footer from "./Footer";
import Login from './LoginSivu';
import NoMatch from './NoMatch';
import {
	  BrowserRouter as Router,
	  Route,
	  Link,
		Switch
	} from 'react-router-dom';

const React = require ('react');
const ReactDOM = require ('react-dom');




// MAIN
	class Main extends React.Component {
	  render() {


	    return (
	    		<Router>
	    	    <div>
						<ul>
							 <li><Link to="/assets/">Home</Link></li>
							 <li><Link to="/assets/login">About</Link></li>
						 </ul>

	    	      <hr/>
							<Switch>
	    	      <Route exact path="/assets/" component={App}/>
							<Route path="/assets/login" component={Login}/>
							<Route component={NoMatch}/>
							</Switch>
	    	    <Footer />
	    	    </div>
	    	  </Router>
	    );
	  }
	}
ReactDOM.render(<Main />, document.getElementById("react"));
