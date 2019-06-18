import React from 'react';
import ReactDOM from 'react-dom';

class ModalContainer extends React.Component{

    constructor(props){
        super(props);
        this.container = document.getElementById("modal-root");
    }
    render(){
        return(
            ReactDOM.createPortal(
                this.props.children,
                this.container
            )
        );
    }
}

export default ModalContainer;