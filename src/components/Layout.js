import React from 'react';
import Footer from './../footer/containers/footer';
import Header from './../header/containers/header';

function Layout (props){

    return(
    <React.Fragment>
        <Header/>
        {props.children}
        <Footer/>
    </React.Fragment>
    );
}
export default Layout;