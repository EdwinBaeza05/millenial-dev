
import React from 'react';
import FooterLayout from './../components/footer-layout';
import CompanyData from './../components/company-data';
class Footer extends React.Component{

    render(){
        return (
            <FooterLayout>
                <CompanyData/>
            </FooterLayout>
            
        );
    }

}

export default Footer;