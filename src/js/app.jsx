/* jshint -W030 */
'use strict';

import Fluxxor from 'fluxxor';
import React from 'react';
//import Feed from './components/Feed.jsx!';
import FeedList from './components/FeedList.jsx!';
import FeedForm from './components/FeedForm.jsx!';
import ShowAddButton from './components/ShowAddButton.jsx!';
import FeedStore from './stores/FeedStore';
import FeedActions from './actions/feedActions';

var stores = {
  FeedStore: new FeedStore()
};

var flux = new Fluxxor.Flux(stores, FeedActions);

window.flux = flux;

flux.on('dispatch', function(type, payload) {
  if(console && console.log) {
    console.log('[Dispatch]', type, payload);
  }
});

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Feed = React.createClass({

  mixins: [FluxMixin, StoreWatchMixin('FeedStore')],

  getInitialState: function() {
    return {newFeedItemText: ''};
  },

  getStateFromFlux: function() {
    var flux = this.getFlux();

    return flux.store('FeedStore').getState();
  },

  render: function() {
    return (
      <div>
        <div className="container">
          <ShowAddButton />
        </div>

        <FeedForm />
        <br/>
        <br/>
        <FeedList items={this.state.feed} setVoteCount={this.setVoteCount} />
      </div>
    );
  },

  setVoteCount: function setVoteCount() {
    console.log('setting');
  }
});


React.render(<Feed flux={flux} />, document.getElementById('app'));

////////////////
