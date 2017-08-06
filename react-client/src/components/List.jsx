import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.gifs.length } gifs.
    { props.gifs.map(gif => <ListItem gif={gif}/>)}
  </div>
)

export default List;