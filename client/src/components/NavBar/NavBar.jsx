import React, { Component } from 'react'
import './NavBar.css'

import { AuthContext } from "../../context/authContext";
import AuthUsers from './AuthUsers';
import NonUsers from './NonUsers'

export class NavBar extends Component {
    static contextType = AuthContext;
    
    state = { on: false }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked })
    }

    render() {
        const { isAuthenicated } = this.context
        return (
            <div>
                { isAuthenicated ? <AuthUsers />: <NonUsers />}
            </div>
        )
    }
}
export default NavBar
