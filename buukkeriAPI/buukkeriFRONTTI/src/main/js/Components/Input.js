const React = require ('react');


export default class Input extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    const value = e.target.value;


    this.props.onChange(value);
  }
	  render() {
	    return (
          <div className="col-md-4">
          <label>{this.props.label}</label>
          <input key="name" type={this.props.type}onChange={this.onChange} ></input>
          <label>{this.props.status}</label>
          </div>
	    );
	  }
	}
