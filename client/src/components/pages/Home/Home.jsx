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
                    <p>We are weeeee</p>
                </body>
                
                <h2>We are blah blah blah</h2>
                <h2>Our goals</h2>
            </div>
        )
    }
}

export default Home