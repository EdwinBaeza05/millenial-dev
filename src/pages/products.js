import React from 'react';
import ProductFilter from './../components/product-filter';
import ProductSaleList from './../components/product-sale-list';
import ModalContainer from './../modal/containers/modal-container';
import ModalComponent from './../modal/components/modal-component';
import ModalStateSend from '../components/ModalStateSend';
import ModalStateLoading from './../components/ModalStateLoading';
import ModalContact from './../components/modal-contact';
import './styles/products.css';

class Products extends React.Component{

    constructor(){
        super();
        this.state = {
            filterValue:"",
            viewModal: false,
            viewModalLoading: false,
            viewModalLoadingOk: false,
            viewModalLoadingError: false,
            apiProductsLoading: false,
            apiProductsError:null,
            products:[]
        };
        this.indexProduct = 0;
    }

    componentDidMount(){
      
        const $nav = document.getElementsByTagName("nav")[0];
        $nav.classList.add("nav-transparent");
        window.onscroll = null;
        this.setState({
            ...this.state, 
            apiProductsLoading:true
        });
        this.$root = document.getElementById("root");
        fetch('https://millennialinmobiliaria.com/millennial-backend/api/product',{
            method:"GET",
        }).then( (response)=> response.json())
        .then((response )=>{
            console.log(response," Respuesta");
            this.setState({
                ...this.state, 
                products:response.data,
                apiProductsLoading:false,
                
            });
        })
        .catch( (error)=>{
            console.log("error", error);
            this.setState({...this.state, apiProductsError:error, apiProductsLoading:false});
        })
        //window.removeEventListener("scroll",);
    }


    
    submitProuduct = (event) => {
        event.preventDefault();
        const $formProductFilter = new FormData(event.target);
        this.setState({
            ...this.state, 
            apiProductsLoading:true
        });
        fetch('https://millennialinmobiliaria.com/millennial-backend/api/product',{
            method:"POST",
            body:$formProductFilter
        }).then( (response)=> response.json())
        .then((response)=>{
            console.log(response," Respuesta");
            console.log(response.data.length);
            // this.setState({
            //     ...this.state, products:response.data
            // });

            this.setState({
                ...this.state, 
                products:response.data,
                apiProductsLoading:false,
                
            });
        })
        .catch( (error)=>{
            console.log("error", error);
            this.setState({...this.state, apiProductsError:error, apiProductsLoading:false});

        })
        //method="POST" action="http://127.0.0.1:8000/api/product
    }
    textProductHandle = (event) =>{
        this.setState({filterValue:event.target.value})
    }
    clickContactar = (event) => {
        this.setState({
            ...this.state,
            filterValue:this.state.filterValue,
            viewModal:true,
            viewModalLoading:false
        });
        this.$root.classList.add("blur");
        this.indexProduct = parseInt(event.target.dataset.productId,10);
    }
    handleClickClose = (event) =>{
        this.setState({
            ...this.state,
            filterValue:this.state.filterValue,
            viewModal:false,
            viewModalLoading:false,
            viewModalLoadingOk: false,
            viewModalLoadingError: false
        });
        this.$root.classList.remove("blur");
       
    };
    handleClickEnviar = (event) =>{
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch('https://millennialinmobiliaria.com/millennial-backend/api/contact', {
        method: 'POST',
        body: formData
        }).then(res => res.json())
        .catch(error => {
            console.error('Error:', error)
            alert(error);
            
            this.setState({
                ...this.state,
                filterValue:this.state.filterValue,
                viewModal:true,
                viewModalLoading:false,
                viewModalLodingOk: false,
                viewModalLoadingError: true
            });
        })
        .then(response => {
            console.log('Success:', response)
            if(!this.state.viewModalLoadingError){
                this.setState({
                    ...this.state,
                    viewModalLoading:false,
                    viewModalLoadingOk: true,
                viewModalLoadingError: false
                });
            }
        });
            this.setState({
                ...this.state,
                filterValue:this.state.filterValue,
                viewModal:true,
                viewModalLoading:true,
                viewModalLoadingOk: false,
                viewModalLoadingError: false
            });
    }

    render(){

        if(this.state.apiProductsLoading){
            return <ModalStateLoading classN="spinner-container2"/>;
        }
        if(this.state.apiProductsError){
            return (
                <div className="error">
                    <p>
                     Error: "{this.state.apiProductsError+""}", Intentelo mas tartde
                    </p>
                </div>
            );
        }
        return(
            <React.Fragment>
                <ProductFilter 
                submit={this.submitProuduct} 
                filterValue={this.state.filterValue}
                textProductHandle={this.textProductHandle} />

                <ProductSaleList 
                products={this.state.products}
                clickContactar={this.clickContactar} />

                {
                    this.state.viewModal &&
                    <ModalContainer>
                        <ModalComponent handleClick={this.handleClickClose}>
                            <ModalContact handleClickEnviar={this.handleClickEnviar}
                                name={this.state.products[this.indexProduct].name}/>
                        </ModalComponent>
                    </ModalContainer>            
                }
               {
                   this.state.viewModalLoading &&
                    <ModalContainer>
                        <ModalStateSend>
                            <ModalStateLoading classN="spinner-container"/>;
                            <h3 className="text-contact-modal-send">
                                Enviando...
                            </h3>
                        </ModalStateSend>
                    </ModalContainer>    
               }
                {
                   this.state.viewModalLoadingOk &&
                    <ModalContainer>
                        <ModalStateSend>
                            <i id="ok" class="fas fa-check-circle"></i>
                            <h3 className="text-contact-modal">
                            Mensaje enviado. Pronto se pondra en contacto uno de nuestros agentes.
                            </h3>
                        </ModalStateSend>
                    </ModalContainer>    
               }
                {
                   this.state.viewModalLoadingError &&
                    <ModalContainer>
                        <ModalStateSend>
                        <i id="error" class="fas fa-times-circle">
                        </i>
                        <h3 className="text-contact-modal">Ocurrio un error por favor intentalo mas tarde</h3>
                        </ModalStateSend>
                    </ModalContainer> 
               }
            </React.Fragment>
        );
    }
}
export default Products;