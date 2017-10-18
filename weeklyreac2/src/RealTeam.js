import React from 'react';
import PropTypes from 'prop-types';


function RealTeam(props) {
  return (
    <div className="people" >
      <div>
        <p>{props.person}</p>
         <button value={props.value} onClick={props.TransferList}>TransferList</button>  
      </div>
    </div>
  )
} 


 RealTeam.propTypes = {
  MadridTransfer: PropTypes.func,
 barcaTransfer: PropTypes.func,
 TransferList:  PropTypes.func,

};
export default RealTeam;
