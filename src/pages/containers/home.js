
import React from 'react';
import AboutComponent from './../components/about-component';
import ProductList from './../components/products-list';
import PalmaresList from './../components/palmares-list';
import Contact from './../components/contact';
import Location from './../components/location'; 
import Advantage from './../components/advantage'; 
import CalltoAction from './../../header/components/call-to-action'
class Home extends React.Component{

    render(){

        return(
            <div>
                <CalltoAction/>
                <AboutComponent/>
                <Advantage/>
                <ProductList/>
                <PalmaresList/>
                <Contact/>
                <Location/>
            </div>
        );
    }
}

export default Home;