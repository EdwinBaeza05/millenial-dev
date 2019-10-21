import React from 'react';
import './styles/contact.css';
import ModalContainer from './../modal/containers/modal-container';
import ModalLoading from './ModalStateSend';
import ModalStateLoading from './../components/ModalStateLoading';
function Contact (props){

    return (
        <div className="form-comtainer width">
            <div className="transparent">
                <h2 className="h2-center" id="contact"> Contacto</h2>
                <form className="form-contact" onSubmit={props.handleClickEnviar}>
                    <input type="text" name="name" id="" placeholder="Nombre" required/>
                    <input type="tel" name="tel" id="" placeholder="Telefono" required/>
                    <input type="email" name="email" id="" placeholder="Email" required/>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Mensaje" required></textarea>
                    <input type="submit" value="Enviar"/>
                </form>
                {
                   props.viewModalLoading &&
                    <ModalContainer>
                        <ModalLoading>
                            <ModalStateLoading classN="spinner-container"/>;
                            <h3 className="text-contact-modal-send">
                            Enviando...
                            </h3>
                        </ModalLoading>
                    </ModalContainer>    
               }
                {
                   props.viewModalLoadingOk &&
                    <ModalContainer>
                        <ModalLoading>
                            <i id="ok" class="fas fa-check-circle"></i>
                            <h3 className="text-contact-modal">
                            Mensaje enviado. Pronto se pondra en contacto uno de nuestros agentes.
                            </h3>
                        </ModalLoading>
                    </ModalContainer>    
               }
                {
                   props.viewModalLoadingError &&
                    <ModalContainer>
                        <ModalLoading>
                        <i id="error" class="fas fa-times-circle">
                        </i>
                        <h3 className="text-contact-modal">Ocurrio un error por favor intentalo mas tarde</h3>
                        </ModalLoading>
                    </ModalContainer>    
               }
            </div>
        </div>
    );
}

export default Contact;