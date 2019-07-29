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

                <div class = "education-block">
                    <img src = {ucscLogo} alt = "University of California, Santa Cruz"/>

                    <h3>University of California, Santa Cruz</h3>
                    <span class="education-date">Sept 2017 - Present</span>
                    <h4>Bachelor of Science in Computer Science</h4>
                    <h5>Santa Cruz, California</h5>
                    
                    <p>Expected graduation date: June 2021.</p>
                </div>

                
            </div>
            
        );
    }
}

export default Education;