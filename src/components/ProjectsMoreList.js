import React from 'react';
import './styles/projectsmore-layout.css';
function ProjectsMoreList(props){

    return(
        <div className="projects-layout">
            {props.children}
        </div>
    );
}

export default ProjectsMoreList;