import React from 'react';

import './Intro.css';

import resume from '../images/resume.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


class Intro extends React.Component{
    
    render(){
        const fileIcon = <FontAwesomeIcon icon = {faFileDownload} />
        const linkedinIcon = <FontAwesomeIcon icon = {faLinkedin} />
        const githubIcon = <FontAwesomeIcon icon = {faGithub} />
        return(
            <div className = "intro">
                <h1 id = "name">Matthew Ngor</h1>
                <h2 id = "occupation">CS Undergraduate</h2>
                <h4 id = "links">
                    { /* Using anchor tag (HTML) instead of Link (React Router) */ }          
                    <a id = "resume" rel="noopener noreferrer" className = "btn-rounded" role = "button"
                        href = {resume} target = "_blank">
                        <i className = "fa fa-download" aria-hidden = "true">{fileIcon}</i>
                        &nbsp;View Resume
                    </a>
                    &nbsp;&nbsp;&nbsp;

                    <a id = "linkedin" rel="noopener noreferrer" className = "btn-rounded" role = "button"
                        href="https://linkedin.com/in/matthewngor" target="_blank">
                        <i className = "fa fa-linkedin-square" aria-hidden = "true">{linkedinIcon}</i>
                        &nbsp;View LinkedIn
                    </a>
                    &nbsp;&nbsp;&nbsp;

                    <a id = "github" rel="noopener noreferrer" className = "btn-rounded" role = "button"
                        href="https://github.com/Xurtel" target="_blank">
                        <i className = "fa fa-github" aria-hidden = "true">{githubIcon}</i>
                        &nbsp;View Github</a>
                </h4>
            </div>
        );
    }
}

export default Intro;