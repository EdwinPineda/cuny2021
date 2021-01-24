import React, { Component } from 'react'
import NavBar from "../../NavBar/NavBar";
import './Home.css'
export class Home extends Component {
    render() {
        return (
            <div className="intro">
                <NavBar/>
                <body>
                    <h1>Welcome to Meet&Clean!</h1>
                </body>
                
                <h2>Our goals</h2>
                <p>Our goals for this orgnanization is to find likeminded individuals who care about our planet. We want to be a way to easily setup volunteer groups and events with people nearby us. On our website you will be able to easily host events at your local parks and beaches. In order to preserve our natural landscapes let's help the Earth together!</p>
                <h2>Contact Us</h2>
                <p>For more information or questions contact us at our email.</p>
            </div>
        )
    }
}

export default Home