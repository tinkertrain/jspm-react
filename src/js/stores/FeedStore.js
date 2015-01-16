/* jshint -W030 */
'use strict';

import Fluxxor from 'fluxxor';
import constants from '../helpers/constants';

var FeedStore = Fluxxor.createStore({

  initialize: function() {

    this.feed = [
      {key: '1', title: 'Item 1', description: 'So cool', voteCount: 49},
      {key: '2', title: 'Item 2', description: 'Meh', voteCount: 11},
      {key: '3', title: 'Item 3', description: 'Great', voteCount: 30}
    ];

    this.bindActions(
      constants.ADD_FEEDITEM, this.onAddFeedItem,
      constants.UPVOTE_FEEDITEM, this.onUpVoteFeedItem,
      constants.DOWNVOTE_FEEDITEM, this.onDownVoteFeedItem
    );
  },

  onAddFeedItem: function onAddTodo(payload) {
    this.feed = this.feed.concat([payload]);
    this.emit('change');
  },

  onUpVoteFeedItem: function onUpVoteFeedItem(payload) {
    console.log(payload);
    payload.feedItem.voteCount++;
    this.emit('change');
  },

  onDownVoteFeedItem: function onDownVoteFeedItem(payload) {
    payload.feedItem.voteCount--;
    this.emit('change');
  },

  getState: function() {
    return {
      feed: this.feed
    };
  }

});

export default FeedStore;