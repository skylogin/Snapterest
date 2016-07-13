import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.react';
import Button from './Button.react';

var inputstyle = {
	marginRight: '5px'
};

class CollectionRenameFrom extends React.Component{
	constructor(){
		super();

		this.state = {
			inputValue: this.props.name
		}
	}

	setInputValue(inputValue){
		this.setState({
			inputValue: inputValue
		});
	}

	handleInputValueChange(event){
		var inputValue = event.target.value;
		this.setInputValue(inputValue);
	}

	handleFormSubmit(event){
		event.preventDefault();
		var collectionName = this.state.inputValue;
		this.props.onChangeCollectionName(collectionName);
	}

	handleFormCancel(event){
		event.preventDefault();
		var collectionName = this.props.name;
		this.setInputValue(collectionName);
		this.props.onCancelCollectionNameChange();
	}

	componentDidMount(){
		this.refs.collectionName.focus();
	}

	render(){
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
}

export default CollectionRenameFrom;