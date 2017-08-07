import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    There are { props.gifs.length } gifs that match your mood.
    { props.gifs.map(gif => <div key={gif.id}> <ListItem gif={gif} handleFavoriteGif={props.handleFavoriteGif}/> </div>)}
  </div>
)

export default List;