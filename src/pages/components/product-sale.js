import React from 'react';
import './product-sale.css';

function ProductSale(props) {
    
    return(
        <div className="product-card">
            <div className="product-header">
                <h2>{props.product.name}</h2>
                <div> En Venta</div>
            </div>
            <div className="product-sale">
                <div className="data-group">
                    <label> Dimesiones: </label>
                    <p>{props.product.size}</p>
                </div>
                <div className="data-group">
                    <label> Precio De Contado: </label>
                    <p>{props.product.priceCash}</p>
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
            <button>Contactar</button>
        </div>
    );
}

export default ProductSale;