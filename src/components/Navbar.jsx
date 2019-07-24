import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Matthew Ngor</Link>
                {/* changing the href to to */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className = "container">
                    <div className="collapse navbar-collapse" id="navbarsExample03">
                        <ul className="navbar-nav ml-auto">
                        {/* as opposed to mr-auto */}
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/abouts">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" to="/" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown03">
                                <a className="dropdown-item" to="/">Action</a>
                                <a className="dropdown-item" to="/">Another action</a>
                                <a className="dropdown-item" to="/">Something else here</a>
                            </div>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
