import React from 'react';
import './styles/product-filter.css';

function ProductFilter(props){

    return(
            <form onSubmit={props.submit} className="filter">
                <div className="form-group">
                    <input type="text"  name="text" className="text" placeholder="Buscar por nombre o ubicación"/>
                    <div className="form-control">
                        <label htmlFor="type">Tipo de Operacion:</label>
                        <select name="state" id="type">
                            <option value="Venta" selected>Venta</option>
                            <option value="Renta">Renta</option>
                            <option value="Venta y Renta">Venta y Renta</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-control">
                        <label htmlFor="min">Valor Minimo:</label>
                        <select name="min" id="min">
                            <option value="25000" selected>25000</option>
                            <option value="50000">50000</option>
                            <option value="75000">75000</option>
                            <option value="150000">150000</option>
                            <option value="300000">300000</option>
                            <option value="500000">500000</option>
                            <option value="1000000">1000000</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="max">Valor Maximo:</label>
                        <select name="max" id="max">
                            <option value="25000">25000</option>
                            <option value="50000">50000</option>
                            <option value="75000">75000</option>
                            <option value="150000">150000</option>
                            <option value="300000">300000</option>
                            <option value="500000">500000</option>
                            <option value="1000000" selected>1000000</option>
                        </select>
                    </div>

                    <input type="submit" value="Buscar" className="btn-send"/>
                </div>
            </form>
    );
}

export default ProductFilter;