import React from 'react';

import './footer-layout.css';

function FooterLayout (props){

    return (
        <footer className="footer" id="footer">
            {props.children}
            <figure>
                <img src="./img/logo.png" alt="logo"/>
            
            </figure>
        </footer>
    );
}
export default FooterLayout;