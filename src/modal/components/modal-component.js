import React from 'react';
import './modal-component.css'
function ModalComponent(props){

    return(
            <div className="modal">
                {props.children}
                <button className = "Modal-close"
                onClick  = {props.handleClick}>
                ✕</button>   
            </div>
    );
}
export default ModalComponent;