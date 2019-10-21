import React from 'react';
import './styles/advantage.css';
function Advantage(){

    return(
        <section className="width advantage">
            <div>
                <i className="fas fa-map-marked-alt"></i>
                <p>Ubicación estratégica</p>
                </div>
            <div>
                <i className="fas fa-hands-helping"></i>
                <p>Asesoramos a nuestros clientes en la compraventa, alquiler o cesiones de viviendas</p>
            </div>
            <div>
                <i className="fas fa-file-signature"></i>
                <p>Escrituración inmediata a nuestros clientes</p>
            </div>
            <div>
                <i className="fas fa-file-invoice-dollar"></i>
                <p>Financiamientos de 6 a 18 meses</p>
            </div>
        </section>
    );
}

export default Advantage;