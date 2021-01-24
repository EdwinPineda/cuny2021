import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import './Profile.css';
import * as API from "../../../util/api";
import { AuthContext } from "../../../context/authContext";
import NavBar from '../../NavBar/NavBar';

export class Profile extends Component {
    static contextType = AuthContext;
    
    state = {
        userID: null,
        first_name: null,
        last_name: null,
        bio: null,
        age: null,
        Neighborhood: null,
        myEvents: [],
        pastEvents: []

    }

    componentDidMount() {
        setTimeout(() => {
            const { userID } = this.context;

            this.setState({
                userID: userID
            }, () => {
                this.getProfileInfo(userID);
            });



        }, 10)

    }

    getProfileInfo = (id) => {

    }

    render() {
        const { first_name, last_name, bio, age, Neighborhood, myEvents, pastEvents } = this.state;
        return (
            <div className="custom-con">
                <NavBar />
                <div className="box">
                    <Row>
                        <div className="Info">
                            <div className="m-2">First Name: {first_name}</div>
                            <div className="m-2">Last Name: {last_name}</div>
                            <div className="m-2">Bio: {bio}</div>
                            <div className="m-2">Age: {age}</div>
                            <div className="m-2">Location: {Neighborhood}</div>
                        </div>
                        <div className="image">

                        </div>
                    </Row>
                </div>
                <div className="box2">
                    <div className="m-2">{myEvents}</div>
                </div>
                <div className="box3">
                    <div className="m-2">{pastEvents}</div>
                </div>
                <div className="box4">
                    <div className="m-2">{pastEvents}</div>
                </div>
            </div>
        )
    }
}

export default Profile;