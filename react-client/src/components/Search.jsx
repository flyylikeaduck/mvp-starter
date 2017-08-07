import React from 'react';
import * as rb from 'react-bootstrap';

const Search = (props) => (
  <div>
    <h3>What's on your mind?</h3>
    <input id="queryInput" type="text" onChange={props.handleChange} />
    <rb.Button bsStyle="primary"onClick={props.handleSearch}>Search GIFs</rb.Button>
  </div>
)

export default Search;