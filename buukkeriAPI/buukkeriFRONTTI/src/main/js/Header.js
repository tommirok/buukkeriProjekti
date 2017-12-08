
//import logo from 'src/main/img/vapaatvuorot.png';

const React = require ('react');
import {strings} from "./LocalizationStrings";
import { Link } from 'react-router';

export default class Header extends React.Component {
	  render() {
	    return (
	      <header>

	      </header>
	    );
	  }
	}

	function onSetLanguageToFinnish() {
	  strings.setLanguage('fin');
	}

	function onSetLanguageToEnglish() {
	  strings.setLanguage('en');
	}

	window.onload = function() {
		if(strings.getInterfaceLanguage() == "fi-FI" || strings.getInterfaceLanguage() == "fi") {
			onSetLanguageToFinnish()
		}
		else {
			onSetLanguageToEnglish()
		}
	}
