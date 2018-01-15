import React, { Component } from 'react';
import './App.css';
import BarcaTeam from "./BarcaTeam"
import TransferList from "./TransferList"
import RealTeam from "./RealTeam"
import TransferListBox from "./TransferListBox"

class App extends Component {
  constructor() {
    super();
    this.getPlayer = this.getPlayer.bind(this);
    this.barcaTransfer = this.barcaTransfer.bind(this);
    this.madridTransfer = this.madridTransfer.bind(this);
    this.transferList = this.transferList.bind(this);
    this.restart = this.restart.bind(this);
    this.deleteFromTransferList = this.deleteFromTransferList.bind(this);

    this.state = {
      currentPlayer: '',
      transfers: ['ivan', 'ian', 'celio', 'oh', 'rafa'],
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
  handleClick =()=> {
    let playerArray = this.state.transfers;
    let currentPlayer = this.state.currentPlayer;

    if(currentPlayer === ""){
      alert("please enter a name");
    }else{
      playerArray.push(currentPlayer);
      this.setState({
        currentPlayer: '',
        transfers: playerArray,
      });
    }
  }

  //pushs to the team of Barca
  barcaTransfer(event)  {
    let barcaTransfer = event.target.value;
    let barcaTeam = this.state.barca;
    let playerArray = this.state.transfers;

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
  madridTransfer(event) {
    //  is called Destructuring assignment: madrid.state transfers.state
    const { madrid, transfers } = this.state;
    const madridTransfer = event.target.value;
    const i = transfers.indexOf(madridTransfer);
// if the one checked existed lets take him out of there
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
  transferList(event) {
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
    }
    else if (madridIndex > -1 ) {
       madrid.splice(madridIndex, 1);
      transfers.push(transferBack);
      }

    this.setState({
        transfers,
        madrid,
        barca,
    });
    // else if in other haystack remove and add to global transfers
  }

  deleteFromTransferList(event){
    const { transfers } = this.state;
    let removePlayer = event.target.value;
    let transferIndex = transfers.indexOf(removePlayer);
    if(transferIndex > -1){
      transfers.splice(transferIndex, 1);
    }

    this.setState({
      transfers
    })
  }

  restart =()=>{
    this.setState({
      currentPlayer: '',
      transfers: ['ivan', 'ian', 'celio', 'oh', 'rafa'],
      madrid: [],
      barca: []
    })
  }

  render() {
    // Calls a defined callback function on each element of an array,
    //and returns an array that contains the results.
    const contactList = this.state.transfers.map(function (person, i) {
      return(
        <TransferListBox
          value={person}
          key={i}
          person={person}
          barcaTransfer={this.barcaTransfer}
          MadridTransfer={this.madridTransfer}
          TransferList={this.transferList}
          deleteFromTransferList ={this.deleteFromTransferList}
        />
      )
    }, this)

    const madridList = this.state.madrid.map(function (person, i) {
      return(
        <RealTeam
          value={person}
          key={i}
          person={person}
          TransferList={this.transferList}
        />
      )
    }, this)

    const barcaList = this.state.barca.map(function (person, i) {
      return(
        <BarcaTeam
          value={person}
          key={i}
          person={person}
          TransferList={this.transferList}
        />
      )
    }, this)
    // end of the loops of teams / unassaign list i just call them by the varaible 
    return(
      <div>
        <div className="madrid">
           <h1 className="mad">MADRID</h1>
           {madridList}
        </div>
        <div className="barca">
          <h1 className="bar">BARCA</h1>
          {barcaList}
        </div>
        <div className="window">
          <TransferList
            getPlayer={this.getPlayer}
            currentPlayer={this.state.currentPlayer}
            handleClick={this.handleClick}
            Restart={this.restart}
          />
          {contactList}
        </div>
      </div>
    );
  }
}

export default App;

