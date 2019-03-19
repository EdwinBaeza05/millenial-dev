import React from 'react';
import './contact.css';
function Contact (){


    return (

        <div className="form-comtainer">
            <div className="transparent">
                <h2 className="h2-center"> Contacto</h2>
                <form action="" className="form-contact">
                    <input type="text" name="" id="" placeholder="Nombre" required/>
                    <input type="tel" name="" id="" placeholder="Telefono" required/>
                    <input type="email" name="" id="" placeholder="Email" required/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje" required></textarea>
                    <button>
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;