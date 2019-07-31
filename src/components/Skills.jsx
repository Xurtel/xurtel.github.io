import React from 'react';

import './Skills.css';

class Skills extends React.Component{
    render(){
        return(
            <div className = "skills" id = "skills">
                <div className = "container">
                    <h1 id = "skills-title">Skills</h1>
                    <ul>
                        <li>Java</li>
                        <li>C</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                        <li>Node.js</li>
                        <li>Git</li>
                        <li>React</li>
                        <li>Android</li>
                        <li>Processing</li>
                        <li>Algorithms</li>
                        <li>Data Structures</li>
                        <li>AWS Lambda</li>
                        <li>CRM</li>
                        <li>Unix</li>
                        <li>Prototyping</li>
                        <li>Communication</li>
                        <li>Empathy</li>
                        <li>Collaboration</li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default Skills;