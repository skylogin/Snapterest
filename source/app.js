import React from 'react';
import ReactDOM from 'react-dom';
import { Application } from './components/Application.react';

ReactDOM.render(<Application />, document.getElementById('react-application'));




/*
//상태 값에 대한 예제
var ReactClass = React.createClass({
	getInitialState: function(){
		return{
			isHeaderHidden: false,
			count: 0
		};
	},

	handleClick: function(){
		this.setState({
			isHeaderHidden: !this.state.isHeaderHidden,
			count: this.state.count+1
		});
	},

	render: function(){
		var title = 'Stateful React Component';
		var headerElement = React.createElement('h1', { className: 'header', key: 'header' }, title);
		var countElement = React.createElement('h3', { className: 'counter', key: 'counter' }, this.state.count);
		var buttonElement = React.createElement('button', { className: 'btn btn-default', key: 'button', onClick: this.handleClick }, 'Toggle Header');

		if(this.state.isHeaderHidden){
			return React.createElement('div', null, [buttonElement, countElement]);
		}

		return React.createElement('div', null, [buttonElement, countElement, headerElement]);
	}
});

var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));
*/



/*
//React 기본
var listOfItems = <ul className="list-of-items">
										<li className="item-1">Item1</li>
										<li className="item-2">Item2</li>
										<li className="item-3">Item3</li>
									</ul>;


var createListItemElement = React.createFactory('li');

var listItemElement1 = createListItemElement({ className: 'item-1', key: 'item-1' }, 'Item1');
var listItemElement2 = createListItemElement({ className: 'item-2', key: 'item-2' }, 'Item2');
var listItemElement3 = createListItemElement({ className: 'item-3', key: 'item-3' }, 'Item3');

var reactFragment = [listItemElement1, listItemElement2, listItemElement3];

var listOfItems = React.createElement('ul', { className: 'list-items' }, reactFragment);


var listItemElement1 = React.createElement('li', { className: 'item-1', key: 'item-1' }, 'Item1');
var listItemElement2 = React.createElement('li', { className: 'item-2', key: 'item-2' }, 'Item2');
var listItemElement3 = React.createElement('li', { className: 'item-3', key: 'item-3' }, 'Item3');

var reactFragment = [listItemElement1, listItemElement2, listItemElement3];

var listOfItems = React.createElement('ul', { className: 'list-items' }, reactFragment);


var h1 = React.createElement('h1', { className: 'header' }, 'This is React');
var p  = React.createElement('p', { className: 'content' }, 'And that\'s how it works.');

var reactFragment = [h1, p];
var section = React.createElement('section', { className: 'container' }, reactFragment);

ReactDOM.render(listOfItems, document.getElementById('react-application'));
*/


