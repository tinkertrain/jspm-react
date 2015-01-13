import React from 'react';

var FeedItem = React.createClass({
  render: function() {
    return (
      <li className="list-group-item">
        <span className="badge badge-success">{this.props.voteCount}</span>
        <h4>{this.props.title}</h4>
        <span>{this.props.desc}</span>
        <span className="pull-right">
          <button id="up" className="btn btn-sm btn-primary">&uarr;</button>
          <button id="up" className="btn btn-sm btn-primary">&darr;</button>
        </span>
      </li>
    );
  }
});

export default FeedItem;