import React from 'react'
import './call-to-action.css';
import {NavLink} from 'react-router-dom';

function CallToAction(){
        return(
            <div className="container-action">
                <div className="call-to-action">
                    <h1>Servicios Inmobiliarios</h1>
                    <p>Proyectos Inmobiliarios de inversión Brindan excelentes beneficios a nuestros clientes.</p>
                    <NavLink className="btn-cotizar" to="/products">
                        Cotizar
                    </NavLink>
                </div>
            </div>
        );
    }


export default CallToAction;