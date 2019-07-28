import React from 'react';
import {Link} from 'react-router-dom';


class Intro extends React.Component{
    render(){
        return(
            <div className = "container">

                <h1 id = "intro">Matthew Ngor</h1>
                <p id = "occupation">Computer Science Undergraduate</p>
                
                <Link to ="/resume"> Route to resume </Link> 
                <Link to ="/linkedin"> Route to LinkedIn </Link> 
                <Link to ="/github"> Route to Github </Link> 
                

            </div>
        );
    }
}

export default Intro;