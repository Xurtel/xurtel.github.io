import React from 'react';

import './Activities.css';

import csaLogo from '../images/csa-logo.png';
import tech4goodLogo from '../images/tech4good-logo.png';
import keyClubLogo from '../images/keyClub-logo.png';


class Activities extends React.Component{
    render(){
        return(
            <div className = "activities" id = "activities">
                <h1 id = "activities-title">Activities</h1>
                <div className = "container-fluid">
                    <div className = "row">
                        <div className = "col">
                            <div class = "activity-image">
                                <img src = {tech4goodLogo} alt = "Tech4Good Lab"/>
                            </div>
                            <div class = "activity-header">
                                <h4>Research Volunteer</h4>
                                <h5>Tech4Good Lab</h5>
                            </div>
                            <div class = "activity-info">
                                <p>
                                    I built software components while learning HTML and CSS for the very first time
                                    to contribute toward developing more complex projects, like building a 
                                    website or app. This was implemented under the Causeway platform, whose 
                                    goal is to crowdsource web development for nonprofits. 
                                </p>
                            </div>
                            
                        </div>
                        <div className = "col">
                            <div class = "activity-image">
                                <img src = {csaLogo} alt = "Chinese Student Association"/>
                            </div>
                            <div class = "activity-header">
                                <h4>House Head</h4>
                                <h5>Chinese Student Association</h5>
                            </div>
                            <div class = "activity-info">
                                <p>
                                    I led and represented one of the five subgroups, which was comprised of 
                                    40 students, within the bigger organization. I made an effort to organize
                                    social events and hangouts in order for members to have a more comfortable
                                    environment to meet one another and create memorable experiences in college.
                                </p>
                            </div>
                        </div>
                        <div className = "col">
                            <div class = "activity-image">
                                <img src = {keyClubLogo} alt = "Castro Valley Key Club"/>
                            </div>
                            <div class = "activity-header">
                                <h4>Fundraising Chair</h4>
                                <h5>Castro Valley Key Club</h5>
                            </div>
                            <div class = "activity-info">
                                <p>
                                    I raised over $4000 in one term and donated most of the funds to
                                    the organization's preferred charities. I also volunteered over
                                    100 hours of community service throughout the Bay Area. I made sure
                                    to attend weekly club and board meetings, as well as communicate
                                    often with the other officers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            
        );
    }
}

export default Activities;