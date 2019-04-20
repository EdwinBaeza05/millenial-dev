import React from 'react';
import ProductSale from './product-sale';

function ProductSaleList(props){

    return(
        <div className="products-sale-list">
            {props.products.map((item, index) =>{
               
               return (<ProductSale key={index} product={item} />);
                }
            )
            }
        </div>
    );
}
export default ProductSaleList;
