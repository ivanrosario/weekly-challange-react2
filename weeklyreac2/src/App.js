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
      barca: [],
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
    let playerArray = this.state.transfers;

    playerArray.push(this.state.currentPlayer);
    this.setState({
      currentPlayer: '',
      transfers: playerArray,
    });
  }
  //pushs to the team of Barca
  barcaTransfer(event) {
    let barcaTransfer = event.target.value;
    let barcaTeam = this.state.barca;
    let playerArray = this.state.transfers;
    let i = playerArray.indexOf(barcaTransfer);

    if(i > -1) {
        playerArray.splice(i, 1);
        barcaTeam.push(barcaTransfer);

        this.setState({
          transfers: playerArray,
          barca: barcaTeam
        });
    }
  }
  //pushs to madrid team
  MadridTransfer(event) {
    const { madrid, transfers } = this.state;
    const madridTransfer = event.target.value;
    const i = transfers.indexOf(madridTransfer);

    if(i > -1) {
      transfers.splice(i, 1);
      madrid.push(madridTransfer);

      this.setState({
        transfers,
        madrid
      });
    }
  }
  //sends back to unassaign list 
  TransferList(event) {
    const { barca, madrid, transfers } = this.state;
    let transferBack = event.target.value;
    // event has player to be searched aka needle
    // TEMP check each list
    const barcaIndex = barca.indexOf(transferBack);
    const madridIndex = madrid.indexOf(transferBack);
    // two haystacks (barca, madrid)
    // look in one haystack

    if (barcaIndex > -1) {
      barca.splice(barcaIndex, 1);
      transfers.push(transferBack);
    } else if (madridIndex > -1 ) {
        madrid.splice(madridIndex, 1);
        transfers.push(transferBack)
      }

    this.setState({
        transfers,
        madrid,
        barca,
    });
    // else if in other haystack remove and add to global transfers
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
          TransferList={this.TransferList}

        />
      )
    }, this)
    // end of the loops of teams / unassaign list i just call them by the varaible 
    return (
      <div>
        <div className="madrid">
           <h1 className="mad">MADRID</h1>
           {madridList}
        </div>
        <div className="barca">
          <h1 className="bar">  BARCA</h1>
          {barcaList}
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
      </div>
    );
  }
}

export default App;

