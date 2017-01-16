// Import Dependencies
import React from 'react';

// import feed item
import FeedItem from './feed_item';

// create feed component
const Feed = () => {
  return (
    <section className="feed__wrapper">
      <div className="feed">
        <FeedItem />
      </div>
    </section>
  );
};

// Export default
export default Feed;
