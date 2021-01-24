import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import './Host.css';

export class Host extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>    
                <div class="p-5 mb-2 bg-info text-white"><font size = "6">Host Event</font></div>
                <font size = "4">Event Name</font>
                <ListGroup variant = "flush" className="margin">
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>
                <font size = "4">Address</font>
                <ListGroup variant = "flush">
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>
                <font size = "4">City</font>
                <ListGroup variant = "flush">
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Finalize Event Details</Button>
            </Card>
        )
    }
}

export default Host
