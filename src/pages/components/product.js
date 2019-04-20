import React from 'react';
import './product.css'
function Product(props){

    return(
        <article className="product">
            <h3>{props.title}</h3>
            <figure>
                <img src={props.img} alt=""/>
            </figure>
        </article>
    );
}

export default Product;