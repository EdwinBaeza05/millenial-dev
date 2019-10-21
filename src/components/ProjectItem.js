import React from 'react';
import './styles/project-item.css';
import {Link} from 'react-router-dom';
function ProjectItem(props){

    return(
        <article className="project-item">
             <figure>
                 <img src={props.imgItem} alt={props.titleItem}/>
                 <h3>
                 {props.titleItem}
             </h3>
             </figure>
             <p> {props.textoItem} </p>
             <Link to="#">
                 Conocer más
             </Link>
        </article>
    );
}

export default ProjectItem;