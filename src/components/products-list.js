import React from 'react';
import Product from './product';
import './styles/products-list.css';
import {NavLink} from 'react-router-dom';

function ProductsList (props){


    let data1 = {"title":"Casas y Terrenos","items":["Asesoramos a nuestros clientes en la compraventa, alquiler o cesiones de viviendas y otros bienes inmuebles"]}

    let data2 = {"title":"Proyectos Inmobiliarios de inversión ","items":["Brindan excelentes beneficios" ,"Escrituración inmediata a nuestros clientes","Certeza jurídica","Ubicación estratégica","Precios accesibles","Financiamientos de 6 a 18 meses","Sin buró de crédito","Sin aval"]}
    
    
    return (
        <section className="products" id="products">
            <h2 className="h2-center">{props.title}</h2>
            <div className="products-list">

                {
                    props.visibleDesarrollos && 
                    <Product title="Desarrollos" img="/img/product1.jpeg" toLink="/ProjectsMore/1" />    
                }
                {
                    props.visibleTerrenos && 
                    <Product title="Terrenos" img="/img/product1.jpeg" toLink="/ProjectsMore/2"/>
                }
                                
                {
                    props.visibleCasas && 
                    <Product title="Casas"img="https://www.millennialinmobiliaria.com/millennial-backend/storage/app/public/images/imageOK.png" toLink="/ProjectsMore/4"/>
                }
                {
                    props.visibleTown && 
                    <Product title="Town House" img="/img/product1.jpeg" toLink="/ProjectsMore/3"/>
                }

            </div>
        </section>
    );
}

export default ProductsList;