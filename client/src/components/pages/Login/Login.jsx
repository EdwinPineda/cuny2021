import React, { Component } from 'react'
import NavBar from "../../NavBar/NavBar";
export class Login extends Component {
    state={
        email:'',
        pwd:''
    }
    handleChange = (e) =>{
        const {name,value} = e.target;
        this.setState({[name]:value})
    }
    handleSubmit = (e) =>{

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