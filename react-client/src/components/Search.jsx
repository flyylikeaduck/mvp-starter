import React from 'react';

const Search = (props) => (
  <div>
    <h3>What's on your mind?</h3>
    <input type="text" onChange={props.handleChange} />
    <button type="button" onClick={props.handleSearch}>Search GIFs</button>
  </div>
)

export default Search;