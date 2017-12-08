import {strings} from "./LocalizationStrings";
//import logo from 'src/main/img/vapaatvuorot.png';

const React = require ('react');




export default class NoMatch extends React.Component {
	  render() {
	    return (

	      <header>
	        <h1>
	        {strings.nomatch}

	        </h1>
	      </header>
	    );
	  }
	}
