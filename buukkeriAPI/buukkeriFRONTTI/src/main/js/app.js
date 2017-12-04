/**
 * @author Tommi Rokolampi
 */
// Commit comment

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
//import logo from 'src/main/img/vapaatvuorot.png';
import LocalizedStrings from 'react-localization';


const React = require ('react');
const ReactDOM = require ('react-dom');

// const client = require ('./client');

// endpoints
const LOCALHOST = 'http://localhost:8090/';


// muuttujat
let strings = new LocalizedStrings({
	fin:{
		picture:"TÄMÄ KUVA EI TOIMI",
		register: "Rekisteröidy",
		firstname: "Etunimi",
		surname: "Sukunimi",
		email: "Sähköposti",
		telnum: "Puhelinnumero",
		password: "Salasana",
		submit: "Vahvista",
		close: "Sulje",
		confirm: "Vahvista salasana",
		login: "Kirjaudu sisään",

	},
	en: {
		picture:"THIS IS NOT WORKING",
		register: "Register",
		firstname: "Firstname",
		surname: "Surname",
		email: "Email",
		telnum: "Phone number",
		password: "Password",
		submit: "Submit",
		close: "Close",
		confirm: "Confirm Password",
		login: "Login"

	}
});
strings.setLanguage('en');



function callUser(method,url,data){
	return new Promise((resolve, reject)=>{
		const call = new XMLHttpRequest();
		call.open(method,url);
		call.onload = ()=> resolve(call.responseText);
		call.onerror = ()=> reject(call.statusText);
		call.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		call.send(data);
	});
}

// ajax calls
function callBookker(url){
	return new Promise((resolve, reject)=>{
		const call = new XMLHttpRequest();
		call.open("GET",url);
		call.onload = ()=> resolve(call.responseText);
		call.onerror = ()=> reject(call.statusText);
		call.send();
	});
}


// MAIN
	class Main extends React.Component {
	  render() {


	    return (
	      <main className="mainComponent">
	      <Header />
	      <Signin/>
	        <App />
	        <Footer />
	      </main>
	    );
	  }
	}
	
	
	class CreateDialog extends React.Component {

		constructor(props) {
			super(props);
			this.handleSubmit = this.handleSubmit.bind(this);
		}

		handleSubmit(e) {

		}

		render() {
			var inputs =
					<input type="text" placeholder="Name" ref="Name" className="field" />



			return (
				<signin>
					<a href="#createEmployee">Create</a>

					<div id="createEmployee" className="modalDialog">
						<div>
							<a href="#" title="Close" className="close">X</a>

							<h2>Create new employee</h2>

							<form>
								{inputs}
								<button onClick={this.handleSubmit}>Create</button>
							</form>
						</div>
					</div>
				</signin>
			)
		}

	}

ReactDOM.render(<Main />, document.getElementById("react"));
