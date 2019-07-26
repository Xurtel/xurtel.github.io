import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

// TODO: confirm navigation to a specific part of the page through <a href></a>

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                { /* <Link className="navbar-brand" to="/">Matthew Ngor</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
        </button> */ }

                <div className = "container">
                    <div className="collapse navbar-collapse" id="navbarsExample">
                        <ul className="navbar-nav mx-auto">
                            {/* as opposed to mr-auto */}
                            { /* <li className="nav-item active"> */ }
                            <li className="nav-item">
                                { /* <Link className="nav-link" to="/intro">Introduction</Link> */}
                                <a href = "#intro">Introduction</a>
                            </li>
                            <li className="nav-item">
                                { /*  <Link className="nav-link" to="/education">Education</Link> */ }
                                <a href = "#education">Education</a>
                            </li>
                            <li className="nav-item">
                                { /* <Link className="nav-link" to="/experience">Experience</Link>  */}
                                <a href = "#experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                { /* <Link className="nav-link" to="/projects">Projects</Link>*/ }
                                <a href = "#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                { /* <Link className="nav-link" to="/activities">Activities</Link>*/ }
                                <a href = "#activities">Activities</a>
                            </li>
                            <li className="nav-item">
                                { /* <Link className="nav-link" to="/skills">Skills</Link> */}
                                <a href = "#skills">Skills</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
