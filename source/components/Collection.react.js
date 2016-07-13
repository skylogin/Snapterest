import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CollectionControls from './CollectionControls.react';
import TweetList from './TweetList.react';
import Header from './Header.react';

class Collection extends React.Component{
	createHtmlMarkupStringOfTweetList(){
		var htmlString = ReactDOMServer.renderToStaticMarkup(
			<TweetList tweets={this.props.tweets} />
		);

		var htmlMarkup = {
			html: htmlString
		};

		return JSON.stringify(htmlMarkup);
	}

	getListOfTweetIds(){
		return Object.keys(this.props.tweets);
	}

	getNumberOfTweetsInCollection(){
		return this.getListOfTweetIds().length;
	}

	render(){
		var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

		if(numberOfTweetsInCollection > 0){
			var tweets = this.props.tweets;
			var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
			var removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
			var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

			return(
				<div>
					<CollectionControls htmlMarkup={htmlMarkup}
						numberOfTweetsInCollection={numberOfTweetsInCollection}
						onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection}
					/>

					<TweetList tweets={tweets}
						onRemoveTweetFromCollection={handleRemoveTweetFromCollection}
					/>

				</div>
			);
		}

		return(
			<Header text="Your collection is empty" />
		);
	}

}

export default Collection;
