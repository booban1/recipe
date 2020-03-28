import React from 'react';
import './searchBar.css';
import { useState, useEffect, Fragment } from 'react';



const SearchBar = props => {
   
    // var updateSearch; 

    const updateSearch  = e => {
        setSearch(e.target.value);
       }

    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');
    
    
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
      }

    return(
        <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" value = {search} onChange={updateSearch}/>
            <button className="search-button" type="submit" >search</button>
          </form>

    );
}

export default SearchBar;
