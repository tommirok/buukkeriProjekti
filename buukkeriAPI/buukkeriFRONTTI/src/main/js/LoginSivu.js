import React from 'react';
import Input from './Components/Input';
import {callBookker} from "./ajaxGet";
import {strings} from "./LocalizationStrings";
import Registration from "./Registration";
import {
	  BrowserRouter as Router,
	  Route,
	  Link,
		Switch
	} from 'react-router-dom';


export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    email: "",
    pass: ""
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
		this.handleLogin =this.handleLogin.bind(this);
  }
  handleEmail(value){
    this.setState({email: value})
  }
  handlePass(value){
    this.setState({pass: value})
  }
	handleLogin(){
		let user = callBookker("users/"+this.state.email+"&"+this.state.pass).then((data)=>{
			console.log(data);
			if(data!=""){
				data = JSON.parse(data);
				console.log(data);
			}


		});
	}
  render(){
    return(
    <div>
      <ul className="list-group">
      <Input label="Nimi" type="text" onChange={this.handleEmail} />
      <Input label="Salasana:" type="password" onChange={this.handlePass} />
      <li className="list-group-item"><button className="btn btn-success" onClick={this.handleLogin}>Kirjaudu</button>  </li>
      <li className="list-group-item"><Link className="btn btn-primary" to="/assets/Registration">Rekisteröidy</Link>  </li>
      </ul>


    </div>
    );
  }
}
