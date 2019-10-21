import React from 'react';
import './styles/about-component.css';

function AboutComponent (props){

    return(
        <section className="about" id="about">
            <div className="contenedor">
                <div className="logo" >
                    <div className="text-logo toggle-b">
                        <p className="texto-logo-deactivate">
                        <a href="#mapa"><i class="fas fa-map-marker-alt"></i></a>    
                        </p>  
                    </div>
                </div>
            </div>
            <article>
                <p>
                Millennial Servicios Inmobiliarios es una empresa yucateca, ubicada en Mérida, en una de las
ciudades más seguras, con mayor crecimiento económico y calidad de vida de nuestro país.
                </p>
                <p>
                Somos un equipo de agentes que brindamos servicios de consultoría y asesoría en la adquisición de
tus inversiones inmobiliarias y patrimoniales.
                </p>
            </article>
        </section>
    );
}
export default AboutComponent;