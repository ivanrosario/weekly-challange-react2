import React from 'react';
import PropTypes from 'prop-types';


function TransferListBox(props) {


    return (
      <div className="people" >
        <div>
         <p>{props.person}</p>
         <button value={props.value} onClick={props.MadridTransfer}>Madrid?</button>  
        <button onClick={props.barcaTransfer} value={props.value}>Barca?</button> 
        </div>
      </div>
    )
} 


TransferListBox.propTypes = {
  MadridTransfer: PropTypes.func,
 barcaTransfer:  PropTypes.func,
  TransferList:  PropTypes.func,
};
export default TransferListBox;
