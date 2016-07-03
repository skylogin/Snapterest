var React = require('react');

var buttonStyle = {
	margin: '10px 10px 10px 0px'
};

var Button = React.createClass({
	render: function(){
		return(
			<button className="btn btn-default" styles={buttonStyle} onClick={this.props.handleClick}>
				{this.props.label}
			</button>
		);
	}
});

module.exports = Button;