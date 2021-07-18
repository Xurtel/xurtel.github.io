import React from 'react';

import './Hello.css';

import myPicture from '../images/my-picture.png';

class Hello extends React.Component{
    render(){
        return(
            <div className = "about" id = "about">
                <div className = "container">
                    <img src = {myPicture} alt = "Matthew Ngor" id = "photo"/> 
                    <h1 id = "hello">
                        HELLO THERE
                    </h1>
                    <p id = "paragraph">
                        My name is Matthew! I just graduated in Computer Science B.S. with Honors from the University of California, Santa Cruz.  
                        I got interested in software engineering and web development because of the impact
                           software and technology brings into our lives. 

                        My passions in life include learning, creating solutions to problems, and making a difference. 
                        I love seeing how much technology is evolving over the years, and the 
                            never-ending challenge to keep up with it inspires me to keep pushing forward along with it.

                        When I'm not at the desk, you can bet that I'll be playing a team-oriented sport like basketball and volleyball,
                            hiking, travelling, or simply hanging out with friends and family&nbsp;
                        <span role = "img" aria-label = "cheerful">😁</span>
                    </p>
                    <span>{<br/>}</span>
                 <p id = "quote">“If everyone is moving forward together, then success takes care of itself.” 
                    {<br/>}- Henry Ford
                 </p>
                    
                </div>
            </div>
           
            
        );
    }
}

export default Hello;