import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    There are { props.gifs.length } gifs that match your mood.
    { props.gifs.map(
      gif => <ListItem gif={gif} handleFavoriteClick={props.handleFavoriteClick} handleComment={props.handleComment}/>
    )}
  </div>
)

export default List;