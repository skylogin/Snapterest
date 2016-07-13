import React from 'react';
import Stream from './Stream.react';
import Collection from './Collection.react';

class Application extends React.Component{
	constructor() {
    super();
    this.state = {
        collectionTweets: {}
    };
  }

	addTweetToCollection(tweet){
		const {collectionTweets} = this.state;
		collectionTweets[tweet.id] = tweet;

		this.setState({
			collectionTweets
		});
	}

	removeTweetFromCollection(tweet){
		const {collectionTweets} = this.state;
		delete collectionTweets[tweet.id];

		this.setState({
			collectionTweets
		});
	}

	removeAllTweetsFromCollection(){
		this.setState({
			collectionTweets: {}
		});
	}

	render(){
		return(
			<div className="continer-fluid">
				<div className="row">
					<div className="col-md-4 text-center">
						<Stream onAddTweetToCollection={this.addTweetToCollection} />
					</div>
					<div className="col-md-8">
						<Collection tweets={this.state.collectionTweets}
							onRemoveTweetFromCollection={this.removeTweetFromCollection}
							onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection}
						/>
					</div>
				</div>
			</div>
		);
	}

}

export default Application;