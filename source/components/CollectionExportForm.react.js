import React from 'react';

var formStyle = {
	display: 'inline-block'
};

class CollectionExportForm extends React.Component{
	render(){
		return(
			<form action="http://codepen.io/pen/define" method="POST" target="_blank" styles="{formstyle}">
				<input type="Hidden" name="data" defaultValue={this.props.htmlMarkup} />
				<button type="submit" className="btn btn-default">
					Export as HTML
				</button>
			</form>
		);
	}
}

export default CollectionExportForm;