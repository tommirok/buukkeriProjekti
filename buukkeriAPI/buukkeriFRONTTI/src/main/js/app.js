/**
 * @author Tommi Rokolampi
 */


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
//import logo from 'src/main/img/vapaatvuorot.png';
import LocalizedStrings from 'react-localization';

import Header from "./Header";
import Signin from "./Signin"
import App from "./Application";
import Footer from "./Footer";


const React = require ('react');
const ReactDOM = require ('react-dom');




// MAIN
	class Main extends React.Component {
	  render() {


	    return (
	      <main className="mainComponent">
	      <Signin/>
	      <App />
	      <Footer/>
	      
	      </main>
	    );
	  }
	}
	
	

ReactDOM.render(<Main />, document.getElementById("react"));
