/**
 * @author Tommi Rokolampi
 */


import LocalizedStrings from 'react-localization';

import Header from "./Header";
import LogReg from "./Signin";
import App from "./Application";
import Footer from "./Footer";
import {
	  BrowserRouter as Router,
	  Route,
	  NavLink
	} from 'react-router-dom';

const React = require ('react');
const ReactDOM = require ('react-dom');




// MAIN
	class Main extends React.Component {
	  render() {


	    return (
	    		<Router>
	    	    <div>
	    	    <LogReg />
	    	      <hr/>
	    	      <Route exact path="/assets/" component={App}/>
	    	    <Footer />
	    	    </div>
	    	  </Router>
	    );
	  }
	}
	
	

ReactDOM.render(<Main />, document.getElementById("react"));
