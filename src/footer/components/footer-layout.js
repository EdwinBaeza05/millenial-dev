import React from 'react';

import './footer-layout.css';

function FooterLayout (props){

    return (
        <div className="footer" id="100">
            {props.children}
        </div>
    );

}

export default FooterLayout;