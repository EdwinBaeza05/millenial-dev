import React from 'react';
import './styles/location.css'


function Location(){

    return(

        <section className="width location" id="mapa">
            <h2 className="h2-center"> Ubicanos</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59597.28495950117!2d-89.65404254114884!3d20.999438151528643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56715334a60779%3A0x770c2989366a0b5f!2sCatedral+de+San+Ildefonso!5e0!3m2!1ses-419!2smx!4v1553789650184" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
        </section>
    );
}

export default Location;