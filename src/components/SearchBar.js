import React from 'react';

const SearchBar = (props) => (
	<form className="App-header" onSubmit={props.preventFormDefault}>
		<button onClick={props.switchBar}><b>Search </b></button>
		<input type="text" onChange={props.search} />
	</form>
);

export default SearchBar;
