import React, { Component } from 'react'
import { AuthUsersMenu } from "./AuthUsersMenu"

export class AuthUsers extends Component {
    state = { on: false }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked })
    }
    
    render() {
        return (
            <nav className="NavBarItems">
                <h1 className="className-logo">Meet&Clean</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {AuthUsersMenu.map((item, index) => {
                        return(<li key={index}>
                                    <a className = {item.cName} href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default AuthUsers
