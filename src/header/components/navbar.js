import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css';

function Navbar(props){
        return(
            <nav ref={props.navRef}>
                <div>                    
                    <Link to="/">Millennial Inmobiliaria</Link>
                    <i className="fas fa-bars" ref={props.menuRef}></i>
                </div>
                <ul ref={props.ulRef}> 
                    <li>
                        <Link to="/">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">Productos</Link>
                    </li>
                    <li>
                        <Link to="/#about">Quienes Somos</Link>
                    </li>
                    <li>
                        <Link to="/#contact">Contacto</Link>
                    </li>
                </ul>
            </nav>
        );
    }
export default Navbar;