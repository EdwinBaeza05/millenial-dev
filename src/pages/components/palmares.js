import React from 'react';
import TextPalmares from './text-palmares';
import Product from './../components/product';
import './palmares.css';

function Palmares(props){


    return(
        <article id={props.id}>
            <figure>
                <img src={props.img} alt=""/>
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