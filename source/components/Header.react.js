import React from 'react';

var headerStyle = {
	fontSize: '14px',
	fontWeight: '300',
	display: 'inline-block',
	margin: '20px 10px'
};

class Header extends React.Component{

	render(){
		return(
			<h2 styles={headerStyle}>
				{this.props.text}
			</h2>
		);
	}
}

Header.defaultProps = {
	text: 'Default header'
}


export default Header;