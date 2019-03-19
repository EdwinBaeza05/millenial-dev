import React from 'react';
import './about-component.css';

function AboutComponent (props){

    return(
        <section className="about">

            <div className="contenedor">
                <div className="logo" >
                    <div className="text-logo toggle-b">
                        <p className="texto-logo-deactivate">
                        <a href="">Ver en el Mapa</a>    
                        </p>  
                    </div>
                </div>
            </div>
            <article>
                <h2>¿Que es Millennial Servicios Inmobiliarios?</h2>
                <p>
                Millennial Servicios Inmobiliarios es una empresa yucateca, ubicada en Mérida, en una de las
ciudades más seguras, con mayor crecimiento económico y calidad de vida de nuestro país.
                </p>
            </article>
        </section>
    );
}

export default AboutComponent;