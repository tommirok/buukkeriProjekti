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
import Registration from './Registration';
import Language from './Language';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {strings} from './LocalizationStrings';

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

	    	    <main>
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
							</Switch>
	    	    <Footer />
	    		 </main>

	    	  </Router>

	    );
	  }
	}
ReactDOM.render(<Main />, document.getElementById("react"));
