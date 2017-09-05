import React from 'react';
import PropTypes from 'prop-types';
//adds players to the transfer List
function TransferList(props) {

    return (
      <div className="Transfer">
        <input type="text" id="TransferList" name="TransferList" onChange={props.getPlayer} value={props.currentPlayer} />
        <button id="addBtn" onClick={props.handleClick}>Add</button>
      </div>
    
    )
   
}
TransferList.propTypes = {
  getPlayer: PropTypes.func,
  handleClick: PropTypes.func,
  currentPlayer: PropTypes.string,
};


export default TransferList;





