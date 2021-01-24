import React, { Component } from 'react'
import NavBar from "../../NavBar/NavBar";
import './Events.css'
import Card from 'react-bootstrap/Card'

export class Events extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <div>
                    <h1>All Events</h1>
                    <Card>
                        <Card.Body>
                            <Card.Title>Coney Island Cleanup!</Card.Title>
                            <Card.Subtitle>1/24/2021, 10:00AM-7:00PM, at Coney Island</Card.Subtitle>
                            <Card.Text>Help clear up our beach together, you can stay as long as you can!</Card.Text>
                            <Card.Link href="#">Click to Join</Card.Link>
                        </Card.Body>
                    </Card>
                    
                    <Card>
                        <Card.Body>
                            <Card.Title>Party and Cleaning </Card.Title>
                            <Card.Subtitle>1/25/2021, 9:00AM-10:00PM, at Jones Beach</Card.Subtitle>
                            <Card.Text>Join us in cleaning up the beach with a bbq afterwards! Call for more details or questions</Card.Text>
                            <Card.Link href="#">Click to Join</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Swim and Clean</Card.Title>
                            <Card.Subtitle>1/27/2021, 2:00PM-8:00PM, at Coney Island</Card.Subtitle>
                            <Card.Text>Have fun while keeping the environment clean :)</Card.Text>
                            <Card.Link href="#">Click to Join</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}
export default Events
