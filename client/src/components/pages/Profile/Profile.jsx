import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import './Profile.css';
import starter from '../../../images/starter.png'
import * as API from "../../../util/api";
import { AuthContext } from "../../../context/authContext";
import NavBar from '../../NavBar/NavBar';

export class Profile extends Component {
    static contextType = AuthContext;
    
    state = {
        userID: null,
        first_name: null,
        last_name: null,
        bio: "Love Cleaning stuff up",
        age: 23,
        Neighborhood: "New York",
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
        API.getProfile(id).then((result) => {
            if (result.status === 200) {
                console.log(result.data);
                this.setState({
                    first_name: result.data.user.first_name,
                    last_name: result.data.user.last_name,
                })
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        const { first_name, last_name, bio, age, Neighborhood, myEvents, pastEvents } = this.state;
        return (
            <>
                <NavBar />
                <div className="custom-con">
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
                            <Image src={starter} height='450' width='450' className="image-spacing"/>
                        </div>
                    </Row>
                </div>
                {/* <div className="box2">
                    <div className="m-2">{myEvents}</div>
                </div>
                <div className="box3">
                    <div className="m-2">{pastEvents}</div>
                </div>
                <div className="box4">
                    <div className="m-2">{pastEvents}</div>
                </div> */}
                </div>
            </>
        )
    }
}

export default Profile;