import React from 'react';

import './Experience.css';

import zohoLogo from '../images/zoho-logo.png';
import slusdLogo from '../images/slusd-logo.png';

class Experience extends React.Component{
    render(){
        return(
            <div className = "experience" id = "experience">
                <div className = "container">
                    <h1 id = "experience-title">Experience</h1>

                    <ul>
                        <li>
                            <img src = {zohoLogo} alt = "Zoho Corporation" id = "zoho"/>
                        </li>
                        <li>
                            <img src = {slusdLogo} alt = "San Leandro Unified School District" id = "slusd"/>
                        </li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default Experience;