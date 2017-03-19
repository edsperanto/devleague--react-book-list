import React from 'react';

const SearchBar = (props) => (
	<form onSubmit={props.preventFormDefault}>
		<label>Search </label>
		<input type="text" onChange={props.search} />
	</form>
);

export default SearchBar;
