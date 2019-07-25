import React from 'react';

import Navbar from '../components/Navbar.jsx';
import Intro from '../components/Intro.jsx';
import Hello from '../components/Hello.jsx';
import Education from '../components/Education.jsx';
import Experience from '../components/Experience.jsx';
import Projects from '../components/Projects.jsx';
import Activities from '../components/Activities.jsx';
import Skills from '../components/Skills.jsx';

import Footer from '../components/Footer.jsx';


class Home extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <Intro />
                <Hello />

                <Education />
                <Experience />
                <Projects />

                <Activities />

                <Skills />

                <Footer />
            </div>
        );
    }
}

export default Home;