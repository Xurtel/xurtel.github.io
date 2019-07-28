import React from 'react';

import './Education.css';

import ucscLogo from '../images/ucsc-logo.png';

class Education extends React.Component{
    render(){
        return(
            <div className = "container">
                <header>
                    <h1 id = "education">Education</h1>
                </header>

                <img src = {ucscLogo} alt = "University of California, Santa Cruz"/>

                <p>(IN PROGRESS) B.S. in Computer Science</p>
            </div>
            
        );
    }
}

export default Education;