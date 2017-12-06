import React from 'react';
import Input from './Components/Input';
import {callBookker} from "./ajaxGet";
import {strings} from "./LocalizationStrings";

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
      <ul className="list-group">
      <Input label="Nimi" type="text" onChange={this.handleEmail} />
      <Input label="Salasana:" type="password" onChange={this.handlePass} />
      <li className="list-group-item"><button className="btn btn-success">pena</button>  </li>
      </ul>
    );
  }
}
