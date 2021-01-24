import React, {Component} from "react";
import "./SignUp.css";

import { AuthContext } from "../../../context/authContext";
import NavBar from "../../NavBar/NavBar";
import * as API from '../../../util/api';


class SignUp extends Component{
    static contextType = AuthContext;

    state = {
        first_name: "",
        last_name: "",
        email: "",
        email2: "",
        password: "",
        password2: "",
        error: ""
    }

    handleChange = (e) =>{
        const {name,value} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {first_name, last_name, email, email2, password, password2} = this.state;
        console.log(first_name, last_name, email, email2, password, password2);

        if (first_name === "" || last_name === "" || email === "" || email2 === "" || password === "" || password2 === "" ) {
            console.log("Fill out all fields");
        }
        else if (email !== email2) {
            console.log("Emails are not the same")
        }
        else if (password !== password2) {
            console.log("Passwords are not the same")
        }
        else {
            API.registerUser({
                first_name, 
                last_name, 
                email, 
                password
            }).then((result) => {
                if( result.status === 200) {
                    this.props.history.push('/login')
                }
            }).catch((errors) => {
                console.log(errors);
            })
        }

    }


    render(){
        return(
            <div>
                <NavBar/>
            <div className="wrapper">
            <div className="form-wrapper">
                <h1>Register for Meet&Clean</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="" placeholder="First Name" type="text" name ="first_name" noValidate onChange={this.handleChange}/>
                    </div>

                    <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="" placeholder="Last Name" type="text" name ="last_name" noValidate onChange={this.handleChange}/>
                    </div>

                    <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="" placeholder="Email" type="text" name ="email" noValidate onChange={this.handleChange}/>
                    </div>

                    <div className="confirmEmail">
                            <label htmlFor="confirmEmail">Confirm Email</label>
                            <input type="text" className="" placeholder="Retype Email" type="text" name ="email2" noValidate onChange={this.handleChange}/>
                    </div>

                    <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="text" className="" placeholder="Password" type="text" name ="password" noValidate onChange={this.handleChange}/>
                    </div>

                    <div className="retypePassword">
                            <label htmlFor="retypePassword">Retype Password</label>
                            <input type="text" className="" placeholder="Retype Password" type="text" name ="password2" noValidate onChange={this.handleChange}/>
                    </div>
                
                    <div className="register">
                                    <form action="/" class="inline">
                                            <button class="float-left submit-button" >Register now</button>
                                    </form>
                                    <small>Already have an account? Click here to login</small>
                    </div>


                </form>
            </div>
            </div>
        </div>
        )
    }
}

export default SignUp