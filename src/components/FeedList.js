'use strict';

import React from 'react';

import FeedItem from './FeedItem.js!jsx';

export class FeedList extends React.Component {

  render() {
    return (
      <ul className="list-group container">
        { this.props.items.map(item => {
          return (
            <FeedItem
              key={ item.key }
              title={ item.title }
              desc={ item.description }
              voteCount={ item.voteCount } />
          );
        }) }
      </ul>
    );
  }
}

export default FeedList;
