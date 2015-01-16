/* jshint -W030 */
'use strict';

import Fluxxor from 'fluxxor';
import React from 'react';

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var FeedItem = React.createClass({
  mixins: [FluxMixin],

  render: function() {
    return (
      <li className="list-group-item">
        <span className="badge">{this.props.voteCount}</span>
        <h4>{this.props.title}</h4>
        <span>{this.props.desc}</span>
        <span className="pull-right">
          <button id="up" className="btn btn-sm btn-primary" onClick={this.upVote}>&uarr;</button>
          <button id="up" className="btn btn-sm btn-primary">&darr;</button>
        </span>
      </li>
    );
  },

  upVote: function upVote() {
    this.getFlux().actions.upVoteFeedItem(this.props);

  }
});

export default FeedItem;