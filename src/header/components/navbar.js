import React from 'react'
import './navbar.css';

function Navbar(props){
        return(
            <nav ref={props.navRef}>
                <a href="">Millenial Inmobiliaria</a>
                <ul> 
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Servicios</a></li>
                    <li><a href="">Quienes Somos</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </nav>
        );
    }


export default Navbar;