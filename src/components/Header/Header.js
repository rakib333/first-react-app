import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header-main'>
            <img src={logo} alt="this is a logo with name" />
            <nav>
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Order">Order</a></li>
                    <li><a href="/Review">Review</a></li>
                    <li><a href="/Inventory">Inventory</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;