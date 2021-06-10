import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

class Header extends Component {
    static propTypes = {

    }

    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink to='/' exact>Home</NavLink></li>
                    <li><NavLink to='/blog' exact>Achivements</NavLink></li>
                    <li><NavLink to='/projects' exact>Projects</NavLink></li>
                    <li><NavLink to='/resume' exact>Resume</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Header
