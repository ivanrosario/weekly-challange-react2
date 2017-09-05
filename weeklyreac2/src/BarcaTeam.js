import React from 'react';
import PropTypes from 'prop-types';


function BarcaTeam(props) {

    return (
      <div className="people" >
        <div>
         <p>{props.person}</p>
          <button value={props.value}  onClick={props.TransferList}>TransferList</button>  
          <button value={props.value}  onClick={props.MadridTransfer}>Madrid?</button>  
        </div>
      </div>
    )
} 


  BarcaTeam.propTypes = {
  MadridTransfer: PropTypes.func,
  barcaTransfer: PropTypes.func,
  TransferList:  PropTypes.func,

};
export default BarcaTeam;
