import React from 'react';

const SearchBar = (props) => (
	<form className="App-header" onSubmit={props.preventFormDefault}>
		<label><b>Search </b></label>
		<input type="text" onChange={props.search} />
	</form>
);

export default SearchBar;
