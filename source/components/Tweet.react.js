import React from 'react';

var tweetStyle = {
	position: 'relative',
	display: 'inline-block',
	width: '200px',
	height: '300px',
	margin: '10px'
};

var imageStyle = {
	width: '200px',
	maxHeight: '300px',
	boxShadow: '0px 1px 1px 0px #aaa',
	border: '1px solid #fff'
};



class Tweet extends React.Component{
	handleImageClick(){
		var tweet = this.props.tweet;
		var onImageClick = this.props.onImageClick;

		if(onImageClick){
			onImageClick(tweet);
		}
	}

	render(){
		var tweet = this.props.tweet;
		var tweetMediaUrl = tweet.media[0].url;

		return(
			<div style={tweetStyle}>
				<img src={tweetMediaUrl} onClick={this.handleImageClick} style={imageStyle} />
			</div>
		);
	}

}

Tweet.propTypes = {
	tweet(properties, propertyName, componentName){
		var tweet = properties[propertyName];

		if(!tweet){
			return new Error('Tweet must be set.');
		}

		if(!tweet.media){
			return new Error('Tweet must have an image.');
		}
	},

	onImageClick: React.PropTypes.func
};


export default Tweet;