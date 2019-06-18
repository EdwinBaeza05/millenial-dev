import React from 'react';
import './modal-loading.css';
function ModalLoading (props){
    return(
        <div className="modal-second">
            {props.children}
        </div>
    );
}

export default ModalLoading;