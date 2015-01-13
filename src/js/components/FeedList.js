import React from 'react';
import FeedItem from './FeedItem';

var FeedList = React.createClass({

  render: function() {

    var feedItems = this.props.items.map(function(item) {
      return <FeedItem key={item.key} title={item.title} desc={item.description} voteCount={item.voteCount} />;
    });

    return (
      <ul className="list-group container">
        {feedItems}
      </ul>
    );
  }
});

export default FeedList;