import React from 'react';
import logo from "../../assets/homepage-images/home-jam-logo.png";
import basket from '../../assets/icons/Basket.png'

const Header = () => {
    return (
        <div className='header__wrapper'>
            <div className="header__logo">
                <img src={logo} alt="" className='logo' />
            </div>
            <nav className='desktop__view'>
                <span className="nav__search">
                    <i className="far fa-search"></i>
                    <span>Search</span>
                </span>
                <span>Help</span>
                <span>Account</span>
                <span>
                    <img src={basket} alt="" />
                </span>
            </nav>
            <nav className='mobile__view'>
                <i className="far fa-search"></i>
                <img src={basket} alt="" />
                <i class="far fa-bars"></i>
            </nav>
        </div>)
};

export default Header;
