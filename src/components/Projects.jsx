import React from 'react';

import './Projects.css';

import bagitoBag from '../images/bagito-bag.png';
import resistors from '../images/resistors.jpg';
import wrikexzoho from '../images/bidirectional-data-sync.jpg';

class Projects extends React.Component{
    render(){
        return(
            <div className = "projects" id = "projects">
                <h1 id = "projects-title">Projects</h1>
                <div className = "container">
                    <div className = "row">
                        <div className = "project shadow-large">
                            <div className = "project-image">
                                <img src = {bagitoBag} alt = "Bagito"/>
                            </div>
                            <div className = "project-info">
                                <h3>Bagito App</h3>
                                <h4>Android app to facilitate an organization's rental service and bag transfer process.</h4>
                                <p>
                                    This Android application was developed for a local non-profit organization, 
                                    <a href = "https://www.power2sustain.org/" target = "_blank" rel="noopener noreferrer"> Power2Sustain</a>, 
                                    and its sister company, 
                                    <a href = "https://www.bagito.co/" target = "_blank" rel="noopener noreferrer"> Bagito</a>,
                                        during my "Coding for Social Good" course.
                                    The main purpose of this app is to allow the user to scan the QR code on a Bagito bag in order to rent it, 
                                        and later scanning the QR code on a drop-off bin to return it.
                                    Working in a five-person team, we chronologically performed needfinding, prototyping, user feedback, and A/B testing
                                        to ensure that we constantly met our partner's expectations. 
                                    I implemented the QR code scanner functionality by using the ZXing library in Java. 
                                    At the end of the Spring 2019 quarter, my team and I presented our product to the CEO and other
                                        organizations. 
                                    

                                </p>
                            </div>
                        </div>

                        <div className = "project shadow-large">
                            <div className = "project-image">
                                <img src = {resistors} alt = "Resistors"/>
                            </div>
                            <div className = "project-info">
                                <h3>Resistor Calculator</h3>
                                <h4>VUI-based app that calculates the resistance and tolerance of resistors.</h4>
                                <p>
                                    This hack was developed at MLH Hackathon 
                                    <a href = "https://www.cruzhacks.com/" target = "_blank" rel="noopener noreferrer"> CruzHacks 2019</a>.
                                    I went into the hackathon with a couple friends, all of us not knowing what to expect
                                        and what we would do there.
                                    An hour later, we ideated a project that would use current technologies to make prototyping
                                        of electronics on breadboards a bit more fun. 
                                    With no prior experience, we dove into using Amazon Alexa and AWS Lambda.
                                    It was challenging trying to understand the Alexa skill functions given the 
                                        allotted time and lack of clear documentation. 
                                    I implemented the handling of the user input, coding the Boolean logic and calculations in NodeJS.
                                    In the end, we learned a lot and were able to demo our functional application alongside 90 other projects :)
                                    
                                </p>
                            </div>
                        </div>

                        <div className = "project shadow-large">
                            <div className = "project-image">
                                <img src = {wrikexzoho} alt = "Wrike and Zoho CRM"/>
                            </div>
                            <div className = "project-info">
                                <h3>Wrike &amp; Zoho CRM </h3>
                                <h4>CRM extension that allows data to be bidirectionally synced between two pieces of software.</h4>
                                <p>This is my final project that I developed towards the end of my internship at 
                                    <a href = "https://www.zohocorp.com/" target = "_blank" rel="noopener noreferrer"> Zoho Corporation</a>.
                                    The goal was to demonstrate what I learned throughout my time there and integrate it to 
                                        build an actual software component that can be published to the Zoho Marketplace. 
                                    While I applied my newfound knowledge of the CRM software's scripting language, Deluge, and 
                                        REST APIs to perform CRUD functions, I also learned JavaScript and how to run a local web server with NodeJS for the very first time.
                                    I presented the final application with my partner in front of fellow interns, our mentors, and the CEO.
                                </p>
                            </div>
                        </div>

                        {/* Insert more projects here */}

                    </div>
                        
                </div>
            </div>
            
        );
    }
}

export default Projects;

/* No copyright infringement intended for any of the images used above! 
   I just wanted to use them as a visual aid to get a better idea of what my project is about :) */