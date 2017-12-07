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
		let status="";
    this.state = {
			id: 0,
			fname:"",
			lname:"",
	    email: "",
	    pass: "",
			phone: "",
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
		
  }
  handleEmail(value){
    this.setState({email: value})
  }
  handlePass(value){
    this.setState({pass: value})
  }
	handleLogin(){
		let promise = callBookker("users/"+this.state.email+"&"+this.state.pass).then((data)=>{
			if(data!=""){
				data = JSON.parse(data);
				let user=data;
				status="";
				this.setState({id: user.id,
				fname: user.fname,
				lname: user.lname,
				email: user.email,
				pass: user.password,
				phone: user.phone
				})
			}else{
				status=strings.loginstatus;
			}


		});
	}
  render(){
    return(
    <app>
      <ul className="list-group">
       <Input label={strings.email} type="text" onChange={this.handleEmail} />
      <Input label={strings.password} type="password" onChange={this.handlePass} />
      <li className="list-group-item"><button className="btn btn-success" onClick={this.handleLogin}>{strings.login}</button>  </li>
      <li className="list-group-item"><Link to="/assets/Registration"><button className="btn btn-primary">{strings.register}</button></Link>  </li>
      <li className="list-group-item"><Link to="/assets"><button className="btn btn-default btn-small">{strings.close}</button></Link>  </li>

      </ul>
      
      
    </app>
    );
  }
}
