import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

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
                                <Link className="nav-link" to="/intro">Introduction</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/education">Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/experience">Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/activities">Activities</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/skills">Skills</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
