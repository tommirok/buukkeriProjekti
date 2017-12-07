import SportButton from './Components/SportButton';
import {callBookker} from "./ajaxGet";
const React = require ('react');


export default class App extends React.Component {

	  constructor(props){
	    super(props);
	    this.state={
	    		sportid: 420,
	    		sports:[],
	    		activities: []

	    };
	    this.handleState=this.handleState.bind(this);

	  }
	  componentDidMount() {
		  // HAETAAN KANNASTA SPORTTIEN NIMIÄ
		  callBookker("sports").then((data)=>{
				data = JSON.parse(data);
				this.setState({sports: data});

		  });

	  }

	  handleState(newState){
		  this.setState({sportid: newState });

		  callBookker("/act/sportID="+newState).then((data)=>{
				data = JSON.parse(data);
				this.setState({activities: data});


		  });

	  }
	  render() {
	    return (
	      <app id="app" className="Appcomponent">
	      	<SportButton sportid={this.state.sportid} onClick={this.handleState} sports={this.state.sports}/>

	      	<Schedule activities={this.state.activities} / >
	      </app>
	    );
	  }
	}

// SCHEDULE
	class Schedule extends React.Component {
		constructor(props)
		{
			super(props);
			this.state={sports: []}
			this.onClick = this.onClick.bind(this);
		}
		onClick(){
		//tähän toiminnalisuutta sitten
		}
	  render() {
		 const availableActivities = this.props.activities.map((item)=> <li key={item.id} value={item.id} id="lists"  className="act-list"><a>{item.name}</a>{"	"+item.location+"		" + item.description}<button onClick={this.onClick} className="btn btn-primary btn pull-right" >varaa</button> </li>)
	    return (
	        <app >
	        	<ul>
	        	{availableActivities}
	        	</ul>
	        </app>
	    );
	  }
	}
