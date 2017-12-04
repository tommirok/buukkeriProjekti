const React = require ('react');
const ReactDOM = require ('react-dom');


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
