import React from 'react';

import './Projects.css';

class Projects extends React.Component{
    render(){
        return(
            <div className = "projects" id = "projects">
                <h1 id = "projects-title">Projects</h1>
                <div className = "container">
                    <div className = "row">
                        <div className = "project shadow-large">
                            <div className = "project-image">

                            </div>
                            <div className = "project-info">
                                <h3>Bagito App</h3>
                                <h4>Android app to facilitate an organization's rental service and bag transfer process.</h4>
                            </div>

                            <div className = "project-image">

                            </div>
                            <div className = "project-info">
                                <h3>Resistor Calculator</h3>
                                <h4>VUI-based app that calculates the resistance and tolerance of resistors.</h4>
                            </div>

                            <div className = "project-image">

                            </div>
                            <div className = "project-info">
                                <h3>Wrike &amp; Zoho CRM </h3>
                                <h4>CRM extension that allows data to be bidirectionally synced between two pieces of software.</h4>
                            </div>

                            {/* Insert more projects here */}
                        </div>
                    </div>
                        
                </div>
            </div>
            
        );
    }
}

export default Projects;