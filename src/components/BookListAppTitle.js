import React from 'react';

const BookListAppTitle = (props) => (
	<div className="App-header">
		<h2>{ props.title }</h2>
		<p>{ props.author }</p>
		<button onClick={props.doClick}>DO CLICK</button>
	</div>
);

export default BookListAppTitle;
