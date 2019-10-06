import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = '797ce1b3';
  const APP_KEY = 'bae97fb6d6745d4fd78182ee4f42906d';
  
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Effect has been run');
  });

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}
// https://www.edamam.com/
export default App;
