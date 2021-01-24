import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import './NavBar.css'

export class NavBar extends Component {
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
                    {MenuItems.map((item, index) => {
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
export default NavBar
