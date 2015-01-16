/* jshint -W030 */
'use strict';

import React from 'react';
import FeedItem from './FeedItem.jsx!';

var FeedList = React.createClass({

  render: function() {
    var props = this.props;
    var feedItems = this.props.items.map(function(item) {
      return (
        <FeedItem
          key={item.key}
          title={item.title}
          desc={item.description}
          voteCount={item.voteCount}
          setVoteCount={props.setVoteCount} />
      );
    });

    return (
      <ul className="list-group container">
        {feedItems}
      </ul>
    );
  }
});

export default FeedList;