import React, { useEffect, useState } from 'react';
import './App.css';

import groceryItems from './groceryItems';

function App() {
  // useState hook to update searchTerm state
  const [searchTerm, setSearchTerm] = useState('');
  // useState hook to update searchResults state
  const [searchResults, setSearchResults] = useState([]);

  // event handler to update state with input change
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  // useEffect hook to update searchResults when we have a new searchTerm
  // useEffect(() => {
  //   const results = groceryItems.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
  //   setSearchResults(results);
  // }, [searchTerm]);

  // alternative without useEffect re-rendering and saving search Results to state
  const results = !searchTerm
    ? groceryItems
    : groceryItems.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className='App'>
      <header>Grocery List</header>
      <input
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {results.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
