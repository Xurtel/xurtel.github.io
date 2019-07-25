import React from 'react';
import {Link} from 'react-router-dom';


class Intro extends React.Component{
    render(){
        return(
            <div className = "container">

                <h1>Matthew Ngor</h1>
                <p>Computer Science Undergraduate</p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <Link to ="/resume"> Route to resume </Link> 
                
            </div>
        );
    }
}

export default Intro;