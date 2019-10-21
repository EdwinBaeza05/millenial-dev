import React from 'react';
import './styles/modal-state-send.css';
function ModalStateSend (props){
    return(
        <div className="modal-second">
            {props.children}
        </div>
    );
}

export default ModalStateSend;