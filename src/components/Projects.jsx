import React from 'react';

import './Projects.css';

class Projects extends React.Component{
    render(){
        return(
            <div className = "projects" id = "projects">
                <div className = "container">
                    <h1 id = "projects-title">Projects</h1>
                    <ul>
                        <li>Resistor</li>
                        <li>Bagito</li>
                        <li>React applications</li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default Projects;