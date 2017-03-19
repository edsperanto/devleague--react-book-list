import React from 'react';

const BookListAppTitle = (props) => (
	<div className="entries">
		<h2>{ props.title }</h2>
		<p>{ props.author }</p>
	</div>
);

export default BookListAppTitle;
