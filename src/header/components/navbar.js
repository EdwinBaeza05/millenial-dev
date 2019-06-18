import React from 'react'
import './navbar.css';

function Navbar(props){
        return(
            <nav ref={props.navRef}>
                <div>                    
                    <a href="/">Millennial Inmobiliaria</a>
                    <i className="fas fa-bars" ref={props.menuRef}></i>
                </div>
                <ul ref={props.ulRef}> 
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/products">Productos</a></li>
                    <li><a href="/#about">Quienes Somos</a></li>
                    <li><a href="/#contact">Contacto</a></li>
                </ul>
            </nav>
        );
    }
export default Navbar;