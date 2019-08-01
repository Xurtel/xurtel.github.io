import React from 'react';
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component{
    render(){
        const linkedinIcon = <FontAwesomeIcon icon = {faLinkedinIn} />
        const githubIcon = <FontAwesomeIcon icon = {faGithub} />
        return(
            //<span className="text-muted">Place sticky footer content here. &#169; {new Date().getFullYear()}</span>
            <footer className="footer mt-auto py-3">
            {/*<footer className = "footer">*/}
                <div className="container">
                    <div className = "row">
                        <div className = "col-sm-5 copyright">
                            <p>
                                Made with 
                                <span role = "img" aria-label = "love">&nbsp;❤️</span> 
                                by Matthew Ngor.
                            </p>
                        </div>
                        <div className = "col-sm-7 social">
                            <ul>
                                <li>
                                    <a id = "github" rel="noopener noreferrer"
                                        href="https://github.com/Xurtel" target="_blank">
                                        <i className = "fa fa-github" aria-hidden = "true">{githubIcon}</i>
                                    </a>
                                </li>
                                <li>
                                    <a id = "linkedin" rel="noopener noreferrer"
                                        href="https://linkedin.com/in/matthewngor" target="_blank">
                                        <i className = "fa fa-linkedin-square" aria-hidden = "true">{linkedinIcon}</i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </footer>
        )
    }
}

export default Footer;