import React from 'react';
import Header from './Header.react';
import Button from './Button.react';
import CollectionRenameForm from './CollectionRenameForm.react';
import CollectionExportForm from './CollectionExportForm.react';

class CollectionControls extends React.Component{
	constructor(){
		super();
		this.state = {
			name: 'new',
			isEditingName: false
		};
	}

	getHeaderText(){
		var numberOfTweetsInCollection = this.props.numberOfTweetsInCollection;
		var text = numberOfTweetsInCollection;

		if(numberOfTweetsInCollection === 1){
			text = text + ' tweet in your';
		} else{
			text = text + ' tweets in your';
		}

		return(
			<span>
				{text} <strong>{this.state.name}</strong> collection
			</span>
		);
	}

	toggleEditCollectionName(){
		this.setState({
			isEditingName: !this.state.isEditingName
		});
	}

	setCollectionName(){
		this.setState({
			name: name,
			isEditingName: false
		});
	}


	render(){
		if(this.state.isEditingName){
			return(
				<CollectionRenameForm name={this.state.name}
					onChangeCollectionName={this.setCollectionName}
					onCancelCollectionNameChange={this.toggleEditCollectionName}
				/>
			);
		}

		return(
			<div>
				<Header text={this.getHeaderText()} />

				<Button label="Rename Collection"
					handleClick={this.toggleEditCollectionName}
				/>

				<Button label="Empty Collection"
					handleClick={this.props.onRemoveAllTweetsFromCollection}
				/>

				<CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
			</div>
		);
	}

}


export default CollectionControls;