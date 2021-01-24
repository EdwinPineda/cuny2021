import React, { Component } from 'react'
import jwt_decode from "jwt-decode";

import { AuthContext } from "../../../context/authContext";
import NavBar from "../../NavBar/NavBar";
import * as API from '../../../util/api';


export class Login extends Component {
    state={
        email:'',
        password:'',
        errors: []
    }

    handleChange = (e) =>{
        const {name,value} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {email, password} = this.state;
        console.log(email, password);
        var newState = Object.assign({}, this.state);
        newState.errors = [];

        if (email === "" || password === "") {
            newState.errors.push("Please Fill out all fields. ");
        }
        else {
            
        }

    }
    render() {
        return (
            <div>
                <NavBar/>
                <h3>Meet&Clean Login</h3>
                <div>
                <form>
                    <div>
                        <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                    </div>

                    <div>
                    <input type='password' name='pwd' placeholder='password' required onChange={this.handleChange}/>
                    </div>

                    <button onSubmit={this.handleSubmit}>Login</button>
                </form>
                </div>
            </div>
        )
    }
}
export default Login