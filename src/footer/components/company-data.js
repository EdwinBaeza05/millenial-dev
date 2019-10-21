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
                <p>9991118411</p>
            </div>
            <div>
                <i class="fas fa-envelope"></i>
                <p>millennialinmobiliaria@gmail.com</p>
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