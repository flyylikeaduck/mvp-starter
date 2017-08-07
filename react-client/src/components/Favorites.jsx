import React from 'react';
import FavoriteItem from './FavoriteItem.jsx';

const Favorites = (props) => (
  <div>
  {props.favorites.length} GIFeelings in your list.

  {props.favorites.map(favorite => <FavoriteItem favorite={favorite} />
  )}

  </div>
)



export default Favorites;