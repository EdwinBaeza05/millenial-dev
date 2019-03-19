
import React from 'react';
import Header from './../../header/containers/header'
import AboutComponent from './../components/about-component';
import ProductList from './../components/products-list';
import PalmaresList from './../components/palmares-list';
import Contact from './../components/contact';
import Footer from './../../footer/containers/footer';

class Home extends React.Component{
    
    render(){

        return(
            <div>
                <Header/>
                <AboutComponent/>
                <ProductList/>
                <PalmaresList/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default Home;