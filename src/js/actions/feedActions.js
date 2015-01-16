/* jshint -W030 */
'use strict';

import Fluxxor from 'fluxxor';
import constants from '../helpers/constants';

var FeedActions = {
  addFeedItem: function(feedItem) {
    this.dispatch(constants.ADD_FEEDITEM, {feedItem: feedItem});
  },

  upVoteFeedItem: function(feedItem) {
    this.dispatch(constants.UPVOTE_FEEDITEM, {feedItem: feedItem});
  },

  downVoteFeedItem: function(feedItem) {
    this.dispatch(constants.DOWNVOTE_FEEDITEM, {feedItem: feedItem});
  }
};

export default FeedActions;