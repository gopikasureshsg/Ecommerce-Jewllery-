import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa'; 
import { useCart } from './CartContext'; 
import './Navigation.css'; 

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { getTotalItems } = useCart(); 

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">ORNA</div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <FaBars />
                </button>
                <ul className={`nav-links ${menuOpen ? 'nav-links-active' : ''}`}>
                    <li className="nav-item"><a href="/">HOME</a></li>
                    <li className="nav-item"><a href="/about">ABOUT US</a></li>
                    <li className="nav-item"><a href="/contact">CONTACT</a></li>
                    <li className="nav-item"><a href="/collect">COLLECTIONS</a></li>
                </ul>
                <div className="nav-icons">
                    <a href="/log" className="icon-link"><FaUser className="icon" /> LOGIN</a>
                    <a href="/cart" className="icon-link">
                        <FaShoppingCart className="icon" /> 
                        CART ({getTotalItems()}) 
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
