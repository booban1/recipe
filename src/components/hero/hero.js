import React from 'react';
import './hero.css';
import logo from '../images/logo.png';

const Hero = props => {
    return(
        <div  className="heroLogo">
            <img src={logo} alt=""></img>
        </div>
    )
}

export default Hero;