import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import NavBar from "../../NavBar/NavBar";
import * as API from '../../../util/api';
import { AuthContext } from "../../../context/authContext";

import './Host.css';

export class Host extends Component {
        static contextType = AuthContext;

        state = {
                name: "",
                address: "",
                city: "",
                state: "",
                date: "2021-11-20",
                time: "",
                desc: "",
                owner: null
        }

        componentDidMount() {
                setTimeout(() => {
                    const { userID } = this.context;
        
                    this.setState({
                        owner: userID
                    });
        
                }, 10)
        
            }
        

        handleChange = (e) =>{
                const {name,value} = e.target;
                this.setState({[name]: value})
        }

        handleSubmit = (e) =>{
                e.preventDefault();
                const {name, address, city, state, time, desc, owner, date} = this.state;
                const location = `${address} ${city}, ${state}`

                API.createEvent({
                        name,
                        location,
                        time,
                        desc,
                        owner,
                        date
                }).then((result) => {
                        if (result.status === 200) {
                                console.log(result.data);
                                this.props.history.push('/events')
                        }
                }).catch((error) => {
                        console.log(error);
                })
                
        
        }


    render() {
        return (
            <div>
                <NavBar/>
                
                <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Host an Event!</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="eventtName">
                              <label htmlFor="eventName">Event Name</label>
                                <input type="text" className="" placeholder="Event Name" type="text" name ="name" noValidate onChange={this.handleChange}/>
                        </div>
    
                        <div className="address">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="" placeholder="Address" type="text" name ="address" noValidate onChange={this.handleChange}/>
                        </div>
    
                        <div className="city">
                                <label htmlFor="city">City</label>
                                <input type="text" className="" placeholder="City" type="text" name ="city" noValidate onChange={this.handleChange}/>
                        </div>
    
                        <div className="state">
                                <label htmlFor="state">State</label>
                                <input type="text" className="" placeholder="State" type="text" name ="state" noValidate onChange={this.handleChange}/>
                        </div>
    
                        <div className="date">
                                <label htmlFor="date">Date</label>
                                <input type="text" className="" placeholder="Enter date." type="text" name ="date" noValidate onChange={this.handleChange}/>
                        </div>
    
                        <div className="time">
                                <label htmlFor="time">Time</label>
                                <input type="text" className="" placeholder="Enter time." type="text" name ="time" noValidate onChange={this.handleChange}/>
                        </div>
    
                        <div className="description">
                                <label htmlFor="description">Description</label>
                                <input type="text" className="" placeholder="Briefly describe your event." type="text" name ="desc" noValidate onChange={this.handleChange}/>
                        </div>
    
                        <button className="float-left submit-button" >Host Event</button>
    
                    </form>
                </div>
                </div>
            </div>
            
        )
    }
}

export default Host
