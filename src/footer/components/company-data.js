import React from 'react';
import './company-data.css';
function CompanyData(){

    return (
        <div className="text-footer">
            <div>
                <i class="fas fa-map-marker-alt"></i>
                <p> Merida Yuc. Mex</p>
            </div>
            <div>
                <i class="fas fa-phone"></i>
                <p>(999) 0000000 </p>
            </div>
            <div>
                <i class="fas fa-envelope"></i>
                <p>contacto@millenial.com </p>
            </div>
            <div>
                <a href="https://www.facebook.com/Millennial-servicios-inmobiliarios-294370911424118/"><i class="fab fa-facebook-f"></i></a>
                <p>Millennial servicios inmobiliarios</p>
            </div>
            <p> <small>2019 &copy;</small></p>
        </div>
    );

}

export default CompanyData;