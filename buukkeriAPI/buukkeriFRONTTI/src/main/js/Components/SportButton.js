import React from 'react';


export default class SportButton extends React.Component {
  constructor(props){
    super(props);
      this.onClick= this.onClick.bind(this);

  }

  onClick(e){
    const sportid = e.target.value;


    this.props.onClick(sportid);
  }



  render() {
  // MAPATAAN SPORTTIEN NIMET NAPPULOIHIN JA TULOSTETAAN NÄYTÖLLE
    return (<div id="buttongroup" className="btn-group btn-group-lg">{this.props.sports.map((item)=> <button key={item.id} value={item.id} id="button" onClick={this.onClick} className="btn btn-primary btn-block ">{item.name}</button>)}</div>
    );
  }
}
