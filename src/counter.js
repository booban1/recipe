import React, { useState, useEffect } from 'react';
import './App.css';

const counter =() => {

    const APP_ID = "d13acb1c";
    const APP_KEY = "af395194963fbb0db59395e01f61bd0e";
  
    const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
    const [counter, setCounter] = useState(0);
  
    useEffect( () => {  //the parameters of this function is a punction that return that...
          console.log("Effects has been run");
        } , []  //this empty array makes the useEffect funtion render only once after a page refresh
    );
  
    return(
      <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button className="search-Button" type="submit">search</button>
        </form>
        <h1 onClick={() => setCounter(counter+1)}>
          {counter}
        </h1>
      </div>
    );
  };

  export default counter;