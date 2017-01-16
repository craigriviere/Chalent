// import react
import React from 'react';

const FeedItem = () => {
  return (
    <div className="feed-item">
      <a href="#"><div className="img-wrapper">
        <img src="http://placehold.it/600x400?text=Item" alt="Item"/>
      </div></a>
      <img src="http://placehold.it/40x40?" alt="Avatar"/>
      Feed Item
    </div>
  )
}

export default FeedItem;
