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

    this.state = {
      currentPlayer: '',
      transfers: ['ivan', 'ian', 'celio', 'juan', 'rafa'],
      madrid: [],
      barca: []
    }
  }

  getPlayer(props) {
    const player = props.target.value;
    this.setState({
      currentPlayer: player,
    });
  }

  handleClick() {
    var playerArray = this.state.transfers;
    playerArray.push(this.state.currentPlayer);
    this.setState({
      currentPlayer: '',
      transfers: playerArray,
    });
  }

  barcaTransfer(props) {
    var Transfer = props.target.value;
    var barcaTeam = this.state.barca;
    barcaTeam.push(Transfer);
    this.setState({
      barca: barcaTeam
    })
  }
  
  MadridTransfer() {
    var madridTransfer =  this.state.transfers;
    var madridTeam = this.state.madrid;
    madridTeam.push(madridTransfer);
    this.setState({
      madrid: madridTeam
    })
  }

  render() {
    const contactList = this.state.transfers.map(function (person, i) {
    return (
      <TransferListBox 
        key={i}
        person={person}

      />
    )
  })

  return (
    <div className="rm-shield">
      <div className="barca">
        <Real />
        <BarcaTeam />
      </div>
      <TransferList
        getPlayer={this.getPlayer}
        currentPlayer={this.state.currentPlayer}
        handleClick={this.handleClick}
      />
      {contactList}
    </div>
    );
  }
}

export default App;

