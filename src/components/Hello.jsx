import React from 'react';

import './Hello.css';

import myPicture from '../images/my-picture.png';

class Hello extends React.Component{
    render(){
        return(
            <div className = "container">

                <img src = {myPicture} alt = "me" id = "photo"/>
                <header>
                <h1 id = "hello">
                    Hello there
                </h1>
                </header>
                <p id = "paragraph">
                    My name is Matthew! I am currently a junior studying Computer Science at the University of California, Santa Cruz. 
                    I got interested in software engineering and web development because of how much 
                        positive change and great convenience software and technology brings into our lives. 

                    My passions in life include learning, creating solutions to problems, and making an impact. 
                    I love seeing how much technology is evolving over the years, and the 
                        never-ending challenge to keep up with it inspires me to keep pushing forward along with it.

                    When I'm not at the desk, you can bet that I'll be playing a team-oriented sport like basketball and volleyball,
                        hiking, travelling, or simply hanging out with friends and family&nbsp;
                    <span role = "img" aria-label = "cheerful">😁</span>
                </p>
                <p id = "quote">“If you want to go fast, go alone. If you want to go far, go together.” </p>
            </div>
            
        );
    }
}

export default Hello;