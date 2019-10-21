import React from 'react';
import TextPalmares from './text-palmares';
import Product from './../components/product';
import './styles/palmares.css';

function Palmares(props){


    return(
        <article id={props.id}>
            <figure>
                <img src={props.img} alt="Palmares"/>
            </figure>
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
export default Palmares;