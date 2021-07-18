import React from 'react';

import './Education.css';

import ucscLogo from '../images/ucsc-logo.png';

class Education extends React.Component{
    render(){
        return(
            <div className = "education" id = "education">
                <div className = "container">
                    <h1 id = "education-title">Education</h1>

                    <div className = "education-block">
                        <img src = {ucscLogo} alt = "University of California, Santa Cruz"/>

                        <h3>University of California, Santa Cruz</h3>
                        <span className="education-date">Sept 2017 - June 2021</span>
                        <h4>Computer Science B.S. with Honors</h4>
                        <h5>Santa Cruz, California</h5>
                        
                        
                    </div>
                </div>
            </div>
           
        );
    }
}

export default Education;