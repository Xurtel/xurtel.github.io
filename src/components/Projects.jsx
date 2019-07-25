import React from 'react';

import './Projects.css';

class Projects extends React.Component{
    render(){
        return(
            <div className = "container">
                <header>
                    <h1> Projects Component </h1>
                </header>
                <ul>
                    <li>Resistor</li>
                    <li>Bagito</li>
                    <li>Asteroids/Pong</li>
                </ul>
            </div>
            
        );
    }
}

export default Projects;