
import React from 'react';
import AboutComponent from './../components/about-component';
import ProductList from './../components/products-list';
import PalmaresList from './../components/palmares-list';
import Contact from './../components/contact';
import Location from './../components/location'; 
import Advantage from './../components/advantage'; 
import CalltoAction from './../header/components/call-to-action'


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            viewModalLoading:false,
            viewModalLoadingOk: false,
            viewModalLoadingError: false
        };
    }

    componentDidMount(){
        if(window.onscroll == null){
            console.log(window.onscroll);
            window.onscroll = eval(sessionStorage.getItem('scrollNav'));
            window.onscroll();
            console.log(window.onscroll)
        }
    }
    cleanScreen(){
        setTimeout(() =>{
        this.setState({
                    viewModalLoading:false,
                    viewModalLoadingOk: false,
                    viewModalLoadingError: false
                });
        },10000)
    }
    handleClickEnviar = (event) =>{
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch('https://millennialinmobiliaria.com/millennial-backend/api/contact', {
        method: 'POST',
        body: formData
        }).then(res => res.json())
        .catch(error => {
            console.error('Error:', error)
            this.setState({
                viewModalLoading:false,
                viewModalLoadingOk: false,
                viewModalLoadingError: true
            });
            this.cleanScreen();
        })
        .then(response => {
            console.log('Success:', response)
            if(!this.state.viewModalLoadingError){
                this.setState({
                    viewModalLoading:false,
                    viewModalLoadingOk: true,
                viewModalLoadingError: false
                });
                this.cleanScreen();
            }
        });
            this.setState({
                viewModalLoading:true,
                viewModalLoadingOk: false,
                viewModalLoadingError: false
            });
       

    }

    render(){

        return(
            <React.Fragment>
                <CalltoAction/>
                <AboutComponent/>
                <Advantage/>
                <ProductList title="Proyectos" 
                  visibleDesarrollos
                  visibleTerrenos 
                  visibleCasas 
                  visibleTown  
                />
                {/* <PalmaresList/> */}
                <Contact handleClickEnviar ={this.handleClickEnviar}
                viewModalLoading = {this.state.viewModalLoading}
                viewModalLoadingOk = {this.state.viewModalLoadingOk}
                viewModalLoadingError = {this.state.viewModalLoadingError}
                />
                <Location/>
            </React.Fragment>
        );
    }
}

export default Home;