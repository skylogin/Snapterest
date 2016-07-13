import React from 'react';
import SnapkiteStreamClient from 'snapkite-stream-client';
import StreamTweet from './StreamTweet.react';
import Header from './Header.react';


class Stream extends React.Component{
	constructor(){
		super();
		this.state = {
			tweet: null
		};
	}

	componentDidMount(){
		SnapkiteStreamClient.initializeStream(this.handleNewTweet);
	}

	componentWillUnmount(){
		SnapkiteStreamClient.destroyStream();
	}

	handleNewTweet(tweet){
		this.setState({
			tweet: tweet
		});
	}

	render(){
		var tweet = this.state.tweet;
		if(tweet){
			return (
				<StreamTweet tweet={tweet}
					onAddTweetToCollection={this.props.onAddTweetToCollection}
				/>
			);
		}

		return(
			<Header text="Waiting for public photo from Twitter...." />
		);
	}
}


export default Stream;
