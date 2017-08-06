import React from 'react';

const Search = (props) => (
  <div>
    <h2>What are you feeling?</h2>
    <input type="text" onChange={props.handleChange} />
    <button type="button" onClick={props.handleSearch}>Search GIFs</button>
  </div>
)

export default Search;