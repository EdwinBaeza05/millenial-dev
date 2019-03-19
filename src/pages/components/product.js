import React from 'react';
import './product.css'
function Product(props){

    return(
        <article className="product">
            <h3>{props.title}</h3>
            <ul>
                {props.items.map((item,index)=>{
                    return(
                        <li key={index}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        </article>
    );
}

export default Product;