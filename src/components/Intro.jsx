import React from 'react';

import resume from '../images/resume.pdf';

class Intro extends React.Component{
    render(){
        return(
            <div className = "container">

                <h1 id = "intro">Matthew Ngor</h1>
                <p id = "occupation">Computer Science Undergraduate</p>
                
                { /* Using anchor tag (HTML) instead of Link (React Router) */ }          
                <a id = "resume" rel="noopener noreferrer"
                    href = {resume} target = "_blank">View Resume</a>

                <a id = "linkedin" rel="noopener noreferrer" 
                    href="https://linkedin.com/in/matthewngor" target="_blank">View LinkedIn</a>
                
                <a id = "github" rel="noopener noreferrer" 
                    href="https://github.com/Xurtel" target="_blank">View Github</a>
                

            </div>
        );
    }
}

export default Intro;