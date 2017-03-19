import React from 'react';

const BookListAppTitle = (props) => (
	<div className="App-header">
		<h2>{ props.title }</h2>
		<p>{ props.author }</p>
	</div>
);

export default BookListAppTitle;
