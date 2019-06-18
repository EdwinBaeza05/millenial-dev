import React from 'react';
import ProductSale from './product-sale';
import './product-sale-list.css';
function ProductSaleList(props){

    return(
        <div className="products-sale-list">
            {
                props.products.length!=0?
            props.products.map((item, index) =>{
               
               return (
               <ProductSale 
               key={index} 
               id={index} 
               product={item} 
               clickContactar={props.clickContactar}/>
               );
            }) :
                <div className="not-found">
                    <h2>¡No Se Encontraron Productos!</h2>
                </div>
            }
        </div>
    );
}
export default ProductSaleList;
