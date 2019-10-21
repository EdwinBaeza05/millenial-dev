import React from 'react';
import {Link} from 'react-router-dom';
import './styles/product.css'
function Product(props){

    return(
        <article className="product">
            <h3>{props.title}</h3>
            <div className="text-product">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas saepe inventore aliquid doloremque itaque ad nulla, veritatis illum provident placeat odio incidunt ipsa omnis fugit eaque harum maxime natus velit!
                </p>
                <Link to={props.toLink}>
                    Ver Más
                </Link>
            </div>
        </article>
    );
}

export default Product;