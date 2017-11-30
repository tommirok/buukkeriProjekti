/**
 * @author Tommi Rokolampi
 */
// Commit comment




const React = require ('react');
const ReactDOM = require ('react-dom');


// const client = require ('./client');

// endpoints
const LOCALHOST = 'http://localhost:8090/';


// muuttujat



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

	          <a id="headerlink" href={LOCALHOST}>
	            <img href="./img/vapaatvuorot.png"></img>
	            TÄMÄ KUVA EI TOIMI
	          </a>
	        </h1>
	      </header>
	    );
	  }
	}

// LOGIN BUTTONS


function LoginButton(props){
	return(
			<signin>
	        <button onClick={props.onClick} className="btn btn-primary btn-lg btn-block">
	          Kirjaudu sisään
	        </button>
	      </signin>
	);
}

// LOGIN
class Login extends React.Component{
	  constructor(props){
	    super(props);
	    this.state = {
	      modalVisble: 'hidden',
	      fname: "",
			lname: "",
			email: "",
			phone: "",
			password: ""
	    };
	    
	    

	    this.toggleModal = this.toggleModal.bind(this);
	    this.closeModal = this.closeModal.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleFname = this.handleFname.bind(this);
	    this.handleLname = this.handleLname.bind(this);
	    this.handleEmail = this.handleEmail.bind(this);
	    this.handlePhone = this.handlePhone.bind(this);

	    

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

	  
	  handleFname(e){
		  this.setState({fname: e.target.value})
	  }
	  handleLname(e){
		  this.setState({lname: e.target.value})
	  }
	  handleEmail(e){
		  this.setState({email: e.target.value})
	  }
	  handlePhone(e){
		  this.setState({phone: e.target.value})
	  }
	  handlePassword(e){
		  this.setState({password: e.target.value})
	  }

	  handleSubmit(){
		  let user = [{
				  fname : this.state.fname,
				  lname : this.state.lname,
				  email : this.state.email,
				  phone : this.state.phone,
				  password : this.state.password
			  }]
		  console.log("pläää")
		  console.log(user.password)
		  console.log(JSON.stringify(user))
		  console.log(callUser("POST",LOCALHOST+"users/",JSON.stringify(user)))  
		  
	  }
  render(){
		return (
			 <signin className="modalDialog">
		        <button className="btn btn-primary btn-lg btn-block" onClick={(e) => this.toggleModal(e)} value="login" > Rekisteröidy </button>
		        <div className={"form-wrapper modal " + this.state.modalVisble }  >
		        <form name="form" className="form-inline" id="form-submit-data" onSubmit={this.handleSubmit}>
				          <div className="form-group">
							<input key="forname" type="text" placeholder="Etunimi" ref="fname"  onChange={this.handleFname} value={this.state.fname}/>
						</div>,
							<div className="form-group">
							<input key="lastname" type="text" placeholder="Sukunimi" ref="lname" onChange={this.handleLname}  value={this.state.lname}/>
						</div>,
							<div className="form-group">
							<input key="email" type="text" placeholder="Sähköposti" ref="email" onChange={this.handleEmail}  value={this.state.email}/>
						</div>,
							<div className="form-group">
							<input key="phone" type="text" placeholder="Puhelinumero" ref="phone" onChange={this.handlePhone}  value={this.state.phone}/>
						</div>,
							<div className="form-group">
							<input key="password" type="password" placeholder="Salasana" ref="password" onChange={this.handlePassword}  value={this.state.pass}/>
						</div>
				          	<button type="button" className="btn btn-primary" value="Submit"  onClick={this.handleSubmit}>Vahvista</button>
				          	<button className="btn btn-primary" onClick={(e) => this.closeModal(e)} value="close modal"><small>Sulje</small></button>
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
	    		availables: 'no',
	    		acts:[]
	    		
	    };
	    this.handleState=this.handleState.bind(this);
	    
	  }
	  componentDidMount() {		  
		  // HAETAAN KANNASTA SPORTTIEN NIMIÄ
		  callBookker(LOCALHOST+"sports").then((data)=>{
				data = JSON.parse(data);
				console.log(data);
				this.setState({acts: data});
				
		  });
		  callBookker(LOCALHOST+"/act/sportID=7").then((data1)=>{
				data1 = JSON.parse(data1);
				console.log(data1);
				this.setState({availables: data1});
				
		  });
	  }
	  
	  
	  handleState(newState){
		  this.setState({availables: newState });
	  }
	  render() {
		
			
		
		  
	    return (
	      <app id="app" className="Appcomponent">
	      	<SportButton availables={this.state.availables} onClick={this.handleState} acts={this.state.acts}/>
	      	
	      	<Schedule / >
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
			console.log();
			console.log(e.target.value);
			const availables = e.target.value;
			this.props.onClick(availables);
		}
		
		
		
	  render() {
		// MAPATAAN SPORTTIEN NIMET NAPPULOIHIN JA TULOSTETAAN NÄYTÖLLE
		 
	    
	    
	    
	    return (<div id="buttongroup" className="btn-group btn-group-lg">{this.props.acts.map((item)=> <button key={item.id} value={item.id} id="button" onClick={this.onClick} className="btn btn-primary btn-block">{item.name}</button>)}</div>
	    
	    );
	  }
	}

// SCHEDULE
	class Schedule extends React.Component {
		constructor(props)
		{
			super(props);
			this.state={acts: []}

		}
		componentDidMount() {

			  
			  callBookker(LOCALHOST+"act").then((data)=>{


				data = JSON.parse(data);
					console.log(data);
					this.setState({acts: data});
			  });
		  }
	  render() {
	    return (
	      <div id="schedule" className="">
	        <div id='schedule1' className="well">

	        </div>
	        <div className="well">
	          </div>
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
	      <Login />

	        <App />
	        <Footer />
	      </main>
	    );
	  }
	}

	ReactDOM.render(<Main />, document.getElementById("react"));
