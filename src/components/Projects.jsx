import React from 'react';

import './Projects.css';

class Projects extends React.Component{
    render(){
        return(
            <div className = "container">
                <header>
                    <h1 id = "projects"> Projects Component </h1>
                </header>
                <ul>
                    <li>Resistor</li>
                    <li>Bagito</li>
                    <li>React applications</li>
                </ul>
            </div>
            
        );
    }
}

export default Projects;