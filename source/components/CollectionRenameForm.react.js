var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Button = require('./Button.react');

var inputstyle = {
	marginRight: '5px'
};

var CollectionRenameFrom = React.createClass({
	getInitialState: function(){
		return{
			inputValue: this.props.name
		};
	},

	setInputValue: function(inputValue){
		this.setState({
			inputValue: inputValue
		});
	},

	handleInputValueChange: function(event){
		var inputValue = event.target.value;
		this.setInputValue(inputValue);
	},

	handleFormSubmit: function(event){
		event.preventDefault();
		var collectionName = this.state.inputValue;
		this.props.onChangeCollectionName(collectionName);
	},

	handleFormCancel: function(event){
		event.preventDefault();
		var collectionName = this.props.name;
		this.setInputValue(collectionName);
		this.props.onCancelCollectionNameChange();
	},

	componentDidMount: function(){
		this.refs.collectionName.focus();
	},

	render: function(){
		return(
			<form className="form-inline" onSubmit={this.handleSubmit}>
				<Header text="Collection name:" />
				<div className="form-group">
					<input className="form-control"
						styles={inputstyle}
						onChange={this.handleInputValueChange}
						defaultValue={this.state.inputValue}
						ref="collectionName"
					/>
				</div>

				<Button label="Change" handleClick={this.handleFormSubmit} />
				<Button label="Cancel" handleClick={this.handleFormCancel} />
			</form>
		);
	}
});

module.exports = CollectionRenameFrom;