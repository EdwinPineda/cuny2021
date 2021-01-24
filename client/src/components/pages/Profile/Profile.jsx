import React, { Component } from 'react';

import './Profile.css';

export class Profile extends Component {
    state = {
        name: 'Edwin',
        bio: 'Bio',
        age: 2,
        Neighborhood: "Place",
        myEvents: [],
        pastEvents: []

    }
    render() {
        const { name, bio, age, Neighborhood, myEvents, pastEvents } = this.state;
        return (
            <div>
                <div className="box">
                    <div className="m-2">{name}</div>
                    <div className="m-2">{bio}</div>
                    <div className="m-2">{age}</div>
                    <div className="m-2">{Neighborhood}</div>
                </div>
                <div className="box2">
                    <div className="m-2">{myEvents}</div>
                </div>
                <div className="box3">
                    <div className="m-2">{pastEvents}</div>
                </div>
            </div>
        )
    }
}

export default Profile;