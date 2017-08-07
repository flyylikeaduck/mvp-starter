import React from 'react';

const ListItem = (props) => (

  <div>
   <iframe src={props.gif.embed_url} width="480" height="320" frameBorder="0" className="giphy-embed" id={props.gif.id}></iframe>
   <input type="text" onChange={props.handleComment} />
   <button type="button" onClick={props.handleFavoriteClick}>Favorite</button>
  </div>
)


export default ListItem;