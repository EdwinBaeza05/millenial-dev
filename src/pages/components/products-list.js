import React from 'react';
import Product from './product'
import './products-list.css'


function ProductsList (){

    let data1 = {"title":"Casas y Terrenos","items":["Asesoramos a nuestros clientes en la compraventa, alquiler o cesiones de viviendas y otros bienes inmuebles"]}

    let data2 = {"title":"Proyectos Inmobiliarios de inversión ","items":["Brindan excelentes beneficios" ,"Escrituración inmediata a nuestros clientes","Certeza jurídica","Ubicación estratégica","Precios accesibles","Financiamientos de 6 a 18 meses","Sin buró de crédito","Sin aval"]}
    
    
return (
    
    <section className="products">
        <h2 className="h2-center">Productos</h2>
        <div className="products-list">
            <Product className="product" title={data1["title"]} items={data1["items"]}/>
            <Product className="product" title={data2["title"]} items={data2["items"]}/>
            
        </div>
    </section>
)

}

export default ProductsList;