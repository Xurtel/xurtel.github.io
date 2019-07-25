import React from 'react';

import './Hello.css';

class Hello extends React.Component{
    render(){
        return(
            <div className = "container">
                <header>
                <h1>
                    Hello!
                </h1>
                </header>
                <p>
                    My name is Matthew! I am currently a junior studying Computer Science at the University of California, Santa Cruz. 
                    I love learning, creating solutions to problems, and making an impact. 
                    ~ I will write more here ~

                </p>
            </div>
            
        );
    }
}

export default Hello;