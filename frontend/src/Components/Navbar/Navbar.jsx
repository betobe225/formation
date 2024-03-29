import React, { useState } from 'react';
import logo from '../../Assets/logo.png';
import { Link } from 'react-scroll';

function Navbar() {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? "nav active" :"nav"}>
            <Link to='main' className='logo'  smooth={true} duration={2000}>
                <img src={logo} alt="logo" />
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='/main' smooth={true} duration={1000}>Header</Link></li>
                <li><Link to='/formation'  smooth={true} duration={1000}>Formations</Link></li>
                <li><Link to='/features'  smooth={true} duration={1000}>features</Link></li>
                <li><Link to='/blog' smooth={true} duration={1000}>blog</Link></li>
                <li><Link to='/home' smooth={true} duration={1000}>home</Link></li>
                <li><Link to='/login' smooth={true} duration={1000}>login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
