import React from 'react'
import { useState } from 'react';

const SearchBar = ({onFilter}) => {

  const [input, setInput] = useState("");
  const handleClick = () => {
    onFilter(input); // pass search term to parent
  };

  return (
    <div>
      Search Name:{' '}
      <input type="text" placeholder='search here' value={input} 
      onChange={(e) => setInput(e.target.value)}></input>
     <button onClick={handleClick} style={{ marginLeft: "10px" }}>Search</button>
    </div>
  )
}

export default SearchBar
