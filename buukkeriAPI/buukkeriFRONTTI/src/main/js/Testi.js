import React from'react';
import ReactDOM from'react-dom';
import BasicExample from './BasicExample';
import Input from './Components/Input';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    email: "",
    };
    this.handleEmail = this.handleEmail.bind(this);
  }
  handleEmail(value){
    this.setState({email: value})
    console.log(value)
  }
  render(){
    return(
      <ul className="list-group">
      <Input label="Nimi" type="text" onChange={this.handleEmail} />
      <Input label="Salasana:" type="password" onChange={this.handleEmail} />
      </ul>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById("react"));
