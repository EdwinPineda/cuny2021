import React, { Component } from 'react'
import NavBar from "../../NavBar/NavBar";
export class Home extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>Welcome to Meet&Clean!</h1>
                <h2>We are blah blah blah</h2>
                <h2>Our goals</h2>
            </div>
        )
    }
}

export default Home