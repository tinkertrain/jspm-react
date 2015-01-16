/* jshint -W030 */
'use strict';

import React from 'react';
import FeedList from './FeedList.jsx!';
import FeedForm from './FeedForm.jsx!';
import ShowAddButton from './ShowAddButton.jsx!';

var Feed = React.createClass({

  render: function() {
    return (
      <div>
        <div className="container">
          <ShowAddButton />
        </div>

        <FeedForm />
        <br/>
        <br/>
        <FeedList items={this.props.feed} />
      </div>
    );
  }
});

export default Feed;