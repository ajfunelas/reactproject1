import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';
import { async } from 'q';

const App = () => {

  const APP_ID = '797ce1b3';
  const APP_KEY = 'bae97fb6d6745d4fd78182ee4f42906d';
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [] );

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);

  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}
// https://www.edamam.com/
export default App;
