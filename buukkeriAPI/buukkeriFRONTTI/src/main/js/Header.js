
//import logo from 'src/main/img/vapaatvuorot.png';

const React = require ('react');
import {strings} from "./LocalizationStrings";
import { Link } from 'react-router';

	
	
export default class Header extends React.Component {
	  render() {
	    return (
	      <header>
	  		<Link to="/assets/">
	  		<img src="/src/main/img/vapaatvuorot.png" alt="Vapaatvuorot.fi" className="logo"></img>
		</Link>
	      </header>
	    );
	  }
	}

