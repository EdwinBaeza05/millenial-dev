import React from 'react';
import './modal-contact.css';
function ModalContact(props){
    return(
        <div className="modal-contact">
        <div>
            <h2>Contactar</h2>
            <form method="post" onSubmit={props.handleClickEnviar}>
                <input type="text" value=
                {
                    props.name
                } name="product" />
                
                <input type="text" name="name" id="" placeholder="Nombre"  required/>
                <input type="tel" name="tel" id="" placeholder="Telefono" required/>
                <input type="email" name="email" id="" placeholder="Email" required/>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Mensaje" required></textarea>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    </div>
    );
}

export default ModalContact;