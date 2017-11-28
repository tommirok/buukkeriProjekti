/**
 * @author Tommi Rokolampi
 */
// Commit comment




const React = require ('react');
const ReactDOM = require ('react-dom');
// const client = require ('./client');

// endpoints
const LOCALHOST = 'http://localhost:8090/';


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
	          <a id="headerlink" href="http://localhost:8080">
	            <em>vapaatvuorot.fi</em>
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
function LogoutButton(props){
	return(
			<signin>
	        <button onClick={props.onClick} className="btn btn-primary btn-lg btn-block">
	          Kirjaudu ulos
	        </button>
	      </signin>
	)
}
/*
 * //SIGN_IN CONTROL class LoginControl extends React.Component {
 * constructor(props) { super(props); this.handleLoginClick =
 * this.handleLoginClick.bind(this); this.handleLogoutClick =
 * this.handleLogoutClick.bind(this); this.state={isLoggedIn : false}; }
 * 
 * handleLoginClick(){
 * 
 * this.setState({isLoggedIn:true}); } handleLogoutClick(){
 * this.setState({isLoggedIn: false}); }
 * 
 * 
 * render() { const IsLoggedIn = this.state.isLoggedIn;
 * 
 * let button= null; let form = null;
 * 
 * if (IsLoggedIn){ button = <LogoutButton onClick= {this.handleLogoutClick} /> }
 * else{
 * 
 * 
 * button = <LoginButton onClick= {this.handleLoginClick} /> }
 * 
 * return ( <signin>
 * 
 * {button} </signin> ); } }
 * 
 * 
 * //REGISTRATION class Registration extends React.Component{
 * constructor(props){ super(props) this.state={ email:"", password: "" }; }
 * 
 * 
 * render(){ return( <div className="form-inline"> <h2>Sign Up</h2> <div
 * className="form-group"> <input className="form-control" type="text"
 * placeholder="email" onChange={event => this.setState({email:
 * event.target.value})}/>
 * 
 * <input className="fomr-control" type="password" placeholder="password"
 * onChange={event => this.setState({password: event.target.value})}/>
 * 
 * 
 * <button className="btn btn-primary" type="button" onClick={() =>
 * this.signUp()}> Kirjaudu sisään </button>
 * 
 * </div> </div> ) } }
 */
	



// VIEWWRAPPER
	class ViewWrapper extends React.Component{
		constructor(props)
		{
			super(props);
			this.state = {
					view_state:'quest' 
								
			}
			this.handleLogin = this.handleLogin.bind(this);
			this.handleLogout = this.handleLogout.bind(this);
		}
		
		componentDidMount(){
			
		}
		
		handleLogin(){
			
			this.setState({view_state: !'quest'});
		}
		handleLogout(){
			this.setState({view_state: 'quest'});
		}
		
		render(){
			
			if(this.state.view_state=='quest'){
				return <QuestView loginHandler ={this.handleLogin} />
			}else{
				return <PrivateView loginHandler ={this.handleLogout}/>
						
			}
			
		}
	}
//TELLS WHAT TO SHOW IF NOT LOGGED IN
	class QuestView extends React.Component{
		constructor(props)
		{
			super(props);
			this.state={
					//
			}
			this.loginEventHandler = this.loginEventHandler.bind(this);
			
		}
		componentDidMount(){
			this.loginEventHandler("login");//Button id
		}
		
		loginEventHandler(id){
			const loginToggler = document.getElementById(id);
			loginToggler.addEventListener('click', this.props.loginHandler); 
		}
		
		render(){
			return(
					<signin className="wrap">
					<button id="reg" className="btn btn-primary btn-lg btn-block">
			          Rekisteröidy
			        </button>
			        <button id="login" className="btn btn-primary btn-lg btn-block">
			          Kirjaudu sisään
			        </button>
			          <div className="view">
			          
			          </div>
			      </signin>
			)
			
		}
	}


	class PrivateView extends React.Component{
		constructor(props)
		{
			super(props);
			this.state={
					//
			}
			this.logoutEventHadler = this.logoutEventHandler.bind(this);
			
		}
		componentDidMount(){
			this.logoutEventHandler('login');
			
		}
		
		logoutEventHandler(id){
			const loginToggler = document.getElementById(id);
			loginToggler.addEventListener('click', this.props.loginHandler); 
			
		}
		render(){
			return(
					<signin className="wrap">
			        <button id="login" className="btn btn-primary btn-lg btn-block">
			         Kirjaudu ulos
			        </button>
			          <div className="view">
			          
			          </div>
			      </signin>
			)
			
		}
	}


// APP COMPONENT
	class App extends React.Component {
	  
	  constructor(props){
	    super(props);
	    this.state={act: []};
	  }
	  
	  render() {
	    return (
	      <app id="app" className="Appcomponent">
	        <ControlPanel />
	        <Schedule />
	      </app>
	    );
	  }
	}

	class ControlPanel extends React.Component {
	  /*
		 * constructor(props){ super(props); }
		 */
	  render() {
	    return (
	      <div id="cpanel" className="controlpanelcomponent">
	        controlpaneeelli
	        <SportButton />
	      </div>
	    );
	  }
	}

	// Testaus metodi nappuloiden tekemisellä

	// mapataan listan tavarat luotaviin nappuloihin

	class SportButton extends React.Component {
		constructor(props){
			super(props);
			this.state={acts: []};
		}
	  componentDidMount() {
		  
		  callBookker(LOCALHOST+"sports/").then((data)=>{
				data = JSON.parse(data);
				console.log(data);				
				this.setState({acts: data});
		  });
	  }
	  render() {
	    const sports = [
	      "Icehockey",
	      "Football",
	      "Tennis",
	      "Poledance",
	      "Skateboarging",
	      "Skillskating",
	      "Golf",
	      "Swimming",
	      "Badmington"
	    ];
	    

	    
	    const sportsButtons = this.state.acts.map(item => <button key={item.id} id="button" className="btn btn-primary btn-block">{item.name}</button>);
	    console.log(sportsButtons);
	    
	    return (<div id="buttongroup" className="btn-group btn-group-lg">{sportsButtons}</div>);
	  }
	}
	                                     
	                                     
	class Schedule extends React.Component {
		constructor(props)
		{
			super(props);
			this.state={acts: []}
			
		}
		componentDidMount() {
			  
			  callBookker(LOCALHOST+"act/").then((data)=>{
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

	class Footer extends React.Component {
	  render() {
	    return (
	      <footer id="footer" className="footercomponent">
	        Footer
	      </footer>
	    );
	  }
	}

	class Main extends React.Component {
	  render() {
		  
	    return (
	      <main className="mainComponent">
	      <Header />
	       <ViewWrapper />
	        <App />
	        <Footer />
	      </main>
	    );
	  }
	}

	ReactDOM.render(<Main />, document.getElementById("react"));
