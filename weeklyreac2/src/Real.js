import React from 'react';
import PropTypes from 'prop-types';


function Real(props) {


    return (
      <div className="people" >
        <div>
         <p>{props.person}</p>
          <button onClick={props.barcaTransfer} value={props.value}>Barca?</button>
          <button value={props.value} onClick={props.TransferList}>TransferList</button>  
        </div>
      </div>
    )
} 


 Real.propTypes = {
  MadridTransfer: PropTypes.func,
 barcaTransfer: PropTypes.func,
 TransferList:  PropTypes.func,

};
export default Real;
