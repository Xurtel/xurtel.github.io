import React from 'react';
import './Footer.css'

class Footer extends React.Component{
    render(){
        return(
            <footer className="footer mt-auto py-3">
                <div className="container">
                    <span className="text-muted">Place sticky footer content here. &#169; {new Date().getFullYear()}</span>
                </div>
            </footer>
        )
    }
}

export default Footer;