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

// HEADER COMPONENT
class Header extends React.Component {
	  render() {
	    return (

	      <header>
	        <h1>

	          <a id="headerlink" href="http://localhost:8080/assets/">
	            <img src=".\src\main\img" alt={strings.picture}></img>
	            
	          </a>
	        </h1>
	      </header>
	    );
	  }
	}

// LOGIN BUTTONS

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
//LOGIN
class Login extends React.Component{
	  constructor(props){
	    super(props);
	    this.state = {
	      modalVisble: 'hidden',
			email: "",			
			password: ""
	    };
	    
	    

	    this.toggleModal = this.toggleModal.bind(this);
	    this.closeModal = this.closeModal.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);	   
	    this.handleEmail = this.handleEmail.bind(this);
	    this.handlePassword = this.handlePassword.bind(this);
	    

	  }
	  componentDidMount(){
		 
	  }
	  toggleModal(){
	    this.setState({modalVisble: 'visible'});
	  }
	  closeModal(){
	    this.setState({modalVisble: 'hidden'});
	  }

	  
	 
	  handleEmail(e){
		  this.setState({email: e.target.value})
	  }
	  handlePassword(e){
		  this.setState({password: e.target.value})
	  }

	  handleSubmit(){
		  let user = {
				  fname : this.state.fname,
				  lname : this.state.lname,
				  email : this.state.email,
				  phone : this.state.phone,
				  password : this.state.password
			  }
		  console.log("pläää")
		  console.log(user.password)
		  console.log(JSON.stringify(user))
		  console.log(callUser("POST",LOCALHOST+"users/",JSON.stringify(user)))  
		  
		  
	  }
render(){
		return (
			 <signin className="modalDialog">
		        <button className="btn btn-success btn-lg" onClick={(e) => this.toggleModal(e)} value="login" > {strings.login} </button>
		        <div className={"form-wrapper modal " + this.state.modalVisble }  >
		        <form name="form" className="form-inline" id="form-submit-data" onSubmit={this.handleSubmit}>
				          
							<div className="form-group">
							<input key="email" type="text" placeholder={strings.email} ref="email" onChange={this.handleEmail}  value={this.state.email}/>
						</div>,
							
							<div className="form-group">
							<input key="password" type="password" placeholder={strings.password} ref="password" onChange={this.handlePassword}  value={this.state.pass}/>
						</div>
				          	<button type="button" className="btn btn-primary" value="Submit"  onClick={this.handleSubmit}>{strings.submit}</button>
				          	<button className="btn btn-primary" onClick={(e) => this.closeModal(e)} value="close modal"><small>{strings.close}</small></button>
		          </form>
		          
		        </div>
		      </signin>
	    )
	  }

}


// LOGIN
class Registration extends React.Component{
	  constructor(props){
	    super(props);
	    this.state = {
	      modalVisble: 'hidden',
	      fname: "",
			lname: "",
			email: "",
			phone: "",
			password: "",
			passwordconfirmation: "",
			emailIsValid: false,
			PohneIsValid: false,
			PasswordIsValid: false
				
	    };



	    this.toggleModal = this.toggleModal.bind(this);
	    this.closeModal = this.closeModal.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleFname = this.handleFname.bind(this);
	    this.handleLname = this.handleLname.bind(this);
	    this.handleEmail = this.handleEmail.bind(this);
	    this.handlePhone = this.handlePhone.bind(this);
	    this.handlePassword = this.handlePassword.bind(this);
	    this.handlePasswordConfirm= this.handlePasswordConfirm.bind(this);

	  }
	  componentDidMount(){

	  }
	  toggleModal(){
	    this.setState({modalVisble: 'visible'});
	  }
	  closeModal(){
	    this.setState({modalVisble: 'hidden'});
	  }


	  handleFname(e){
		  this.setState({fname: e.target.value})
	  }
	  handleLname(e){
		  this.setState({lname: e.target.value})
	  }
	  handleEmail(e){
		  this.setState({email: e.target.value})
		  
		  if(e.target.value == e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
			  console.log("läpi")
			  this.setState({emaiIsValid : true})
		  }
		  
		  
	  }
	  handlePhone(e){
		  this.setState({phone: e.target.value})
	  }
	  handlePassword(e){
		  this.setState({password: e.target.value})
	  }
	  handlePasswordConfirm(e){
		  this.setState({passwordconfirmation: e.target.value})
	  }
	  

	  handleSubmit(){
		  if(this.state.fname == ""
			  || this.state.lname == "" 
				  || this.state.email == "" 
					  || this.state.phone == "" 
						  || this.state.password == "" 
							 || this.state.passworconfirmation =="" ){
			  alert("Täytä kaikki kentät ja yritä uudelleen");
		  }
		  
		  
		  else if( /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email) ==false) {
			  alert("Tarkasta sähköposti")
		  }
			  
		  else if(/^\d{10}$/.test(this.state.phone)==false){
			  alert("Virheellinen puhelin numero")
		  }
		  else if(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(this.state.password)==false){
			  
		  }
		  else if(this.state.password != this.state.passwordconfirmation){
			  alert("Salasana ja salasanan vahvistus täytyy olla sama")
		  }
		  
		  
		  else{
		  let user = {
				  fname : this.state.fname,
				  lname : this.state.lname,
				  email : this.state.email,
				  phone : this.state.phone,
				  password : this.state.password
			  }
		  console.log("pläää")
		  console.log(user.password)
		  console.log(JSON.stringify(user))
		  console.log(callUser("POST",LOCALHOST+"users/",JSON.stringify(user)))  
		  }
		  
	  }
  render(){
		return (
			 <signin className="modalDialog">
		        <button className="btn btn-primary btn-lg btn-block" onClick={(e) => this.toggleModal(e)} value="login" > {strings.register} </button>
		        <div id="form-submit-data" className={"form-wrapper modal form-inline " + this.state.modalVisble }  >
		        <form name="form" className="form-inline" id="form-submit-data" onSubmit={this.handleSubmit}>
				          <div className="form-group">
							<input key="forname" type="text" placeholder={strings.firstname} ref="fname"  onChange={this.handleFname} value={this.state.fname}/>
						</div>,
							<div className="form-group">
							<input key="lastname" type="text" placeholder={strings.surname} ref="lname" onChange={this.handleLname}  value={this.state.lname}/>
						</div>,
							<div className="form-group">
							<input key="email" type="text" placeholder={strings.email} ref="email" onChange={this.handleEmail}  value={this.state.email}/>
						</div>,
							<div className="form-group">
							<input key="phone" type="text" placeholder={strings.telnum} ref="phone" onChange={this.handlePhone}  value={this.state.phone}/>
						</div>,
							<div className="form-group">
							<input key="password" type="password" placeholder={strings.password} ref="password" onChange={this.handlePassword}  value={this.state.pass}/>
						</div>
							<div className="form-group">
							<input key="password" type="password" placeholder={strings.confirm} ref="passwordconfirm" onChange={this.handlePasswordConfirm}  value={this.state.passwordconfirmation}/>
						</div>
				          	<button type="button" className="btn btn-primary" value="Submit"  onClick={this.handleSubmit}>{strings.submit}</button>
				          	<button className="btn btn-primary" onClick={(e) => this.closeModal(e)} value="close modal"><small>{strings.close}</small></button>
		          </form>

		        </div>
		      </signin>
	    )
	  }

  }


// EI TEE MITÄÄN
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

// APP COMPONENT
	class App extends React.Component {

	  constructor(props){
	    super(props);
	    this.state={
	    		sportid: 420,
	    		sports:[],
	    		activities: []
	    		
	    };
	    this.handleState=this.handleState.bind(this);

	  }
	  componentDidMount() {
		  // HAETAAN KANNASTA SPORTTIEN NIMIÄ
		  callBookker(LOCALHOST+"sports").then((data)=>{
				data = JSON.parse(data);
				console.log(data);
				this.setState({sports: data});
				
		  });
		 
	  }

	  handleState(newState){
		  this.setState({sportid: newState });
		  
		  callBookker(LOCALHOST+"/act/sportID="+newState).then((data)=>{
				data = JSON.parse(data);
				console.log(data);
				this.setState({activities: data});
				console.log(this.state.sportid);
				
		  });
		 
	  }
	  render() {
	    return (
	      <app id="app" className="Appcomponent">
	      	<SportButton sportid={this.state.sportid} onClick={this.handleState} sports={this.state.sports}/>
	      	
	      	<Schedule activities={this.state.activities} / >
	      </app>
	    );
	  }
	}

// SPORTBUTTON
	class SportButton extends React.Component {
		constructor(props){
			super(props);
				this.onClick= this.onClick.bind(this);
	
		}
		
		onClick(e){	
			const sportid = e.target.value;
			
			
			this.props.onClick(sportid);
		}



	  render() {
		// MAPATAAN SPORTTIEN NIMET NAPPULOIHIN JA TULOSTETAAN NÄYTÖLLE
		 
	    return (<div id="buttongroup" className="btn-group btn-group-lg">{this.props.sports.map((item)=> <button key={item.id} value={item.id} id="button" onClick={this.onClick} className="btn btn-primary btn-block ">{item.name}</button>)}</div>
	    
	    );
	  }
	}

// SCHEDULE
	class Schedule extends React.Component {
		constructor(props)
		{
			super(props);
			this.state={sports: []}
			this.onClick = this.onClick.bind(this);

		}
		
		onClick(){
			
		}
		
	  render() {
		  
		 const availableActivities = this.props.activities.map((item)=> <li key={item.id} value={item.id} id="lists"  className="act-list"><a>{item.name}</a>{"	"+item.location+"		" + item.description}<button onClick={this.onClick} className="btn btn-primary btn pull-right" >varaa</button> </li>)
		  
	    return (
	      
	        <div id='schedule1' className="well">
	        	<ul>
	        	{availableActivities}
	        	</ul>
	        </div>
	        
	     
	    );
	  }
	}
// FOOTER
	class Footer extends React.Component {
	  render() {
	    return (
	    		<footer id="footer" className="footercomponent">@{new Date().getFullYear()} vapaatvuorot.fi</footer>
	    );
	  }
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

ReactDOM.render(<Main />, document.getElementById("react"));
