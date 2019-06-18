import React from 'react';
import './product-sale.css';

function ProductSale(props) {
    
    return(
        <div className="product-card" id={props.id}>
            <div className="product-header">
                <h2>{props.product.name}</h2>
                <div> En {props.product.state}</div>
            </div>
            <div className="product-sale">
                <div className="data-group">
                    <label> Dimesiones: </label>
                    <p>{props.product.size}</p>
                </div>
                <div className="data-group">
                    <label> Ubicacion:</label>
                    <p>{props.product.location}</p>
                </div>
                <div className="data-group">
                    <label> Tablaje: </label>
                    <p>{props.product.tablaje}</p>
                </div>
                <div className="data-group">
                    <label> Precio De Contado: </label>
                    <p>${props.product.price}</p>
                </div>
                <div className="data-group">
                    <label> Precio a 6 Meses: </label>
                    <p>{props.product.price6}</p>
                </div>
                <div className="data-group">
                    <label> Precio a 12 Meses: </label>
                    <p>{props.product.price12}</p>
                </div>
                <div className="data-group">
                    <label> Precio a 18 Meses: </label>
                    <p>{props.product.price18}</p>
                </div>
            </div>
            <button 
            data-product-id={props.id} 
            onClick={props.clickContactar}>
            Contactar
            </button>
        </div>
    );
}

export default ProductSale;