import React from 'react';
import FeedList from './FeedList.js!jsx';
import FeedForm from './FeedForm.js!jsx';
import ShowAddButton from './ShowAddButton.js!jsx';

var {Component} = React;

class Feed extends Component {
	constructor(...props) {
		super(...props);
		var FEED_ITEMS = [
			{key: '1', title: 'Item 1', description: 'So cool', voteCount: 49},
			{key: '2', title: 'Item 2', description: 'Meh', voteCount: 11},
			{key: '3', title: 'Item 3', description: 'Great', voteCount: 30}
		];
		this.state = {
			items : FEED_ITEMS
		};
	}

	render() {
		return (
			<div>
				<div className="container">
					<ShowAddButton />
				</div>

				<FeedForm />
				<br/>
				<br/>
				<FeedList items={this.state.items} />
			</div>
		)
	}
}

export default Feed;
