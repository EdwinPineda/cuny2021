import React, {Component} from "react";
import "./SignUp.css";

class SignUp extends Component{
    render(){
        return(
            <div className="wrapper">
            <div className="form-wrapper">
                <h1>Register for Meet&Clean</h1>
                <form>
                    <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="" placeholder="First Name" type="text" name ="firstName" noValidate onChange={this.handleChange}/>
                    </div>

                    <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="" placeholder="Last Name" type="text" name ="lastName" noValidate onChange={this.handleChange}/>
                    </div>

                    <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="" placeholder="Email" type="text" name ="email" noValidate onChange={this.handleChange}/>
                    </div>

                    <div className="confirmEmail">
                            <label htmlFor="confirmEmail">Confirm Email</label>
                            <input type="text" className="" placeholder="Retype Email" type="text" name ="confirm Email" noValidate onChange={this.handleChange}/>
                    </div>

                    <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="text" className="" placeholder="Password" type="text" name ="Password" noValidate onChange={this.handleChange}/>
                    </div>

                    <div className="retypePassword">
                            <label htmlFor="retypePassword">Retype Password</label>
                            <input type="text" className="" placeholder="Retype Password" type="text" name ="retypePassword" noValidate onChange={this.handleChange}/>
                    </div>
                    <div className="createAccount">
                        <button type="submit">Create an account</button>
                        <small>Already have an account? Click here to sign in</small>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

export default SignUp