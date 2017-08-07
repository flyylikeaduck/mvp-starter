import React from 'react';

const ListItem = (props) => (
  <div>
   <iframe src={props.gif.embed_url} width="480" height="320" frameBorder="0" className="giphy-embed" id={props.gif.id} ></iframe>
   <input type="text" />
   <button type="button" onClick={props.handleFavoriteGif}>Favorite</button>
  </div>
)


export default ListItem;