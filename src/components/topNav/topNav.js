import React from "react";
import './topNav.css';
import Hero from "../hero/hero";
import searchBar from "../search/searchBar";

const Header = props => {
    return(
        <div className="header">
                <Hero/>
                <p>Your recipe at hand</p>
                
            <nav className="headerMenu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
            </nav>
        </div>
            );
    
}

export default Header;