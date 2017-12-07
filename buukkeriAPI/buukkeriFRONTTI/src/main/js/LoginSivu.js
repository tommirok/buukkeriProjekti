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
  }
  handleEmail(value){
    this.setState({email: value})
    console.log(value)
  }
  handlePass(value){
    this.setState({pass: value})
    console.log(value)
  }
  render(){
    return(
    <div>
      <ul className="list-group">
      <Input label="Nimi" type="text" onChange={this.handleEmail} />
      <Input label="Salasana:" type="password" onChange={this.handlePass} />
      <li className="list-group-item"><button className="btn btn-success">Kirjaudu</button>  </li>
      <li className="list-group-item"><Link to="/assets/Registration"><button className="btn btn-primary">Rekisteröidy</button></Link>  </li>
      </ul>
      
      
    </div>
    );
  }
}