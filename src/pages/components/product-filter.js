import React from 'react';
import './product-filter.css';

function ProductFilter(props){

    return(
            <form onSubmit={props.submit} className="filter">
                <input type="text" value={props.filterValue} onChange={props.textProductHandle} className="text"/>
                <input type="submit" value="Buscar" className="btn-send"/>
            </form>
    );
}

export default ProductFilter;