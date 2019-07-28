import React from 'react';

import './Experience.css';

import zohoLogo from '../images/zoho-logo.png';

class Experience extends React.Component{
    render(){
        return(
            <div className = "container">
                <header>
                    <h1 id = "experience">Experience</h1>
                </header>

                <img src = {zohoLogo} alt = "Zoho Corporation"/>

                <p>Insert internship details?</p>
            </div>
            
        );
    }
}

export default Experience;