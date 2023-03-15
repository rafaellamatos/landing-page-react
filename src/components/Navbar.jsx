import React from 'react'
import "./Navbar.modules.css"
import Logo from "../img/logo.png"

const Navbar = () => {
    return (
        <header className='navbar'>
            <div className='container'>
                <img src={Logo} alt="brand" className='navbar-brand' />

                <ul className='navbar-nav'>
                    <li className='nav-item'><p className='nav-link active'>Home</p></li>
                    <li className='nav-item'><p className='nav-link'>Features</p></li>
                    <li className='nav-item'><p className='nav-link'>Pricing</p></li>
                    <li className='nav-item'><p className='nav-link disabled'>Disabled</p></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar