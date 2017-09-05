import React from 'react';
import PropTypes from 'prop-types';
import * as _ from 'Lodash';


function TransferListBox(props) {

  test = _get();

    return (
      <div className="people" >
        <div>
         <p>{props.person}</p><button onClick={props.barcaTransfer}>Barca?</button> <button>Madrid?</button>  
        </div>
      </div>
    )
} 


TransferListBox.propTypes = {
  MadridTransfer: PropTypes.func,
 barcaTransfer: PropTypes.func,
};
export default TransferListBox;
