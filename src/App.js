import React from 'react';
import './App.css';
import Header from './components/topNav/topNav';
import Hero from './components/hero/hero'; //hero for logo
import Card from './components/card/card';
import SearchBar from './components/search/searchBar';
import { useState, useEffect, Fragment } from 'react';
import Recipe from './recipe';
 
function App(){
        const APP_ID = "d13acb1c";
        const APP_KEY = "af395194963fbb0db59395e01f61bd0e";

        const [recipes, setRecipes] = useState([]);
        const [search, setSearch] = useState("");
        const [query, setQuery] = useState('chicken');

        const getRecipes = async  () => {
          const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
          
          const data = await response.json();
          setRecipes(data.hits);
          console.log(data.hits);
          }

          

          useEffect( () => { 
            getRecipes();
          } , [query]  
          );
      
          
      
          // const updateSearch  = e => {
          //   setSearch(e.target.value);
          //  }

  
 
  return(
    <div className="App"> 
    <Header/>
    <SearchBar/>

    <div className="recipes">
        {recipes.map(recipe=>(
        
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            
            />
        ))}

      </div>
    </div>

    
    
  );  
}

export default App;
