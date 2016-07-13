import React from 'react';

var buttonStyle = {
	margin: '10px 10px 10px 0px'
};


class Button extends React.Component{
	render(){
		return(
			<button className="btn btn-default" styles={buttonStyle} onClick={this.props.handleClick}>
				{this.props.label}
			</button>
		);
	}
}


module.exports = Button;