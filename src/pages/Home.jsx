import React from 'react';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className = "container">

                    <h2>Welcome</h2>
                    <p>Beep boop</p>
                    <p>Meep moop</p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;