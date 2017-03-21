import React from 'react';

const SearchBar = (props) => (
	<form className="App-header" onSubmit={props.preventFormDefault}>
		<div className="form-row">
			<div className="form-label">
				<button onClick={props.switchBar}><b>Search </b></button>
			</div>
			<div className="form-input">
				<input type="text" onChange={props.search} />
			</div>
		</div>
	</form>
);

export default SearchBar;
