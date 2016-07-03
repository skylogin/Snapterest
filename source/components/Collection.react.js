var React = require('react');
var ReactDOMServer = require('react-dom/server');
var CollectionControls = require('./CollectionControls.react');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react');

var Collection = React.createClass({
	createHtmlMarkupStringOfTweetList: function(){
		var htmlString = ReactDOMServer.renderToStaticMarkup(
			<TweetList tweets={this.props.tweets} />
		);

		var htmlMartup = {
			html: htmlString
		};

		return JSON.stringify(htmlMarkup);
	},

	getListOfTweetIds: function(){
		return Object.keys(this.props.tweets);
	},

	getNumberOfTweetsInCollection: function(){
		return this.getListOfTweetIds().length;
	},

	render: function(){
		var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

		if(numberOfTweetsInCollection > 0){
			var tweets = this.props.tweets;
			var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
			var removeAllTweetsFromCollection = this.porps.onRemoveAllTweetsFromCollection;
			var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

			retrun(
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
});

module.exports = Collection;

/*
class Collection extends React.component{
	
	render(){
		return <div className="aa">aaa</div>;
	}
}

export default Collection;
*/