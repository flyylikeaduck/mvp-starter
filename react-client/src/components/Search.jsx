import React from 'react';

const Search = (props) => (
  <div>
    <h3>Search your emotional state:</h3>
    <input type="text" onChange={props.handleChange} />
    <button type="button" onClick={props.handleSearch}>Search GIFs</button>
  </div>
)

export default Search;