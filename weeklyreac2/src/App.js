import React, { Component } from 'react';
import './App.css';
import BarcaTeam from "./BarcaTeam"
import TransferList from "./TransferList"
import Real from "./Real"
import TransferListBox from "./TransferListBox"

class App extends Component {
  constructor() {
    super();
    this.getPlayer = this.getPlayer.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.barcaTransfer = this.barcaTransfer.bind(this);
    this.MadridTransfer = this.MadridTransfer.bind(this);
    this.TransferList = this.TransferList.bind(this);
    this.Restart = this.Restart.bind(this);
    this.state = {
      currentPlayer: '',
      transfers: ['ivan', 'ian', 'celio', 'juan', 'rafa'],
      madrid: [],
      barca: []
    }
  }
  // grabs player info
  getPlayer(props) {
    const player = props.target.value;
    this.setState({
      currentPlayer: player,
    });
  }
  // pushs info to transfers(avalaibe players)
  handleClick() {
    var playerArray = this.state.transfers;
    playerArray.push(this.state.currentPlayer);
    this.setState({
      currentPlayer: '',
      transfers: playerArray,
    });
  }
  //pushs to the team of Barca
  barcaTransfer(event) {
    var barcaTransfer = event.target.value;
    var barcaTeam = this.state.barca;
    var playerArray = this.state.transfers;
    if( playerArray.indexOf(playerArray,  barcaTransfer)){
     playerArray.splice(barcaTransfer, 1)
     barcaTeam.push(barcaTransfer);

   }
    this.setState({
      transfers: playerArray,
      barca: barcaTeam
    })
  }
  //pushs to madrid team
  MadridTransfer(event) {
    var madridTransfer = event.target.value;
    var madridTeam = this.state.madrid;
    var playerArray = this.state.transfers;
   if( playerArray.indexOf(playerArray,  madridTransfer)){
     playerArray.splice(madridTransfer, 1)
      madridTeam.push(madridTransfer);

   }
    this.setState({
      transfers: playerArray,
      madrid: madridTeam
    })
  }
  //sends back to unassaign list 
  TransferList(event) {
    var transferBack = event.target.value;
    var playerArray = this.state.transfers;
    if( playerArray.indexOf(playerArray, transferBack)){
     playerArray.splice(transferBack, 1)
         playerArray.push(transferBack);

   }
    this.setState({
      transfers: playerArray
    })
  }
  Restart(){
    this.setState({
      currentPlayer: '',
      transfers: ['ivan', 'ian', 'celio', 'juan', 'rafa'],
      madrid: [],
      barca: []

    })
  }


  render() {
    //all of these are  used to loop thru each one 
    const contactList = this.state.transfers.map(function (person, i) {
      return (
        <TransferListBox
          value={person}
          key={i}
          person={person}
          barcaTransfer={this.barcaTransfer}
          MadridTransfer={this.MadridTransfer}
          TransferList={this.TransferList}

        />
      )
    }, this)
    const madridList = this.state.madrid.map(function (person, i) {
      return (
        < Real
          value={person}
          key={i}
          person={person}
          barcaTransfer={this.barcaTransfer}
          MadridTransfer={this.MadridTransfer}
          TransferList={this.TransferList}

        />
      )
    }, this)
    const barcaList = this.state.barca.map(function (person, i) {
      return (
        < BarcaTeam
          value={person}
          key={i}
          person={person}
          barcaTransfer={this.barcaTransfer}
          MadridTransfer={this.MadridTransfer}
          TransferList={this.TransferList}

        />
      )
    }, this)
    // end of the loops of teams / unassaign list i just call them by the varaible 
    return (
      <div>
        <div className="madrid">
          {madridList}
        </div>
        <div className="window">
          <TransferList
            getPlayer={this.getPlayer}
            currentPlayer={this.state.currentPlayer}
            handleClick={this.handleClick}
            Restart={this.Restart}
          />
          {contactList}
        </div>
        <div className="barca">
          {barcaList}
        </div>
      </div>
    );
  }
}

export default App;

