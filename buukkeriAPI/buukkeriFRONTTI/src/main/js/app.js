/**
 * @author Tommi Rokolampi
 */
// Commit comment




const React = require ('react');
const ReactDOM = require ('react-dom');


// const client = require ('./client');

// endpoints
const LOCALHOST = 'http://localhost:8090/';


//muuttujat



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
	          <a id="headerlink" href=LOCALHOST>
	            <img href=LOCALHOST'src/main/img/vapaatvuorot.png'></img>
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


class Login extends React.Component{
	  constructor(props){
	    super(props);
	    this.state = {
	      modalVisble: 'hidden',
	    };
	    this.toggleModal = this.toggleModal.bind(this);
	    this.closeModal = this.closeModal.bind(this);
	  }
	  componentDidMount(){
	    //
	  }

	  toggleModal(){
	    this.setState({modalVisble: 'visible'});
	  }
	  closeModal(){
	    this.setState({modalVisble: 'hidden'});
	  }

	  render(){
		  //We replace these with column names from database
		  var inputs = [
			  <div className="form-group">
				<input key="forname" type="text" placeholder="forname" ref="Name" className="field" />
			</div>,
				<div className="form-group">
				<input key="lastname" type="text" placeholder="Name" ref="Name" className="field" />
			</div>,
				<div className="form-group">
				<input key="email" type="text" placeholder="Name" ref="Name" className="field" />
			</div>,
			<div className="form-group">
			<input key="phone" type="text" placeholder="Name" ref="Name" className="field" />
		</div>
				]
		return (
	      <signin className="modalDialog">
	        <button className="btn btn-primary btn-lg btn-block" onClick={(e) => this.toggleModal(e)} value="login" > Rekisteröidy </button>
	        <div className={"form-wrapper modal " + this.state.modalVisble }  >
	          <form className="form-inline" id="form-submit-data" action="/se mihin lähetetään" method="post">
	          	{inputs}
	          </form>
	          <button className="btn btn-primary" onClick={(e) => this.closeModal(e)} value="close modal"><small>Sulje</small></button>
	        </div>
	      </signin>
	    )
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
	      <Login />

	        <App />
	        <Footer />
	      </main>
	    );
	  }
	}

	ReactDOM.render(<Main />, document.getElementById("react"));
