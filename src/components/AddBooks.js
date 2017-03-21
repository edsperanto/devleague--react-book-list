import React from 'react';

const AddBooks = (props) => (
	<form className="App-header" onSubmit={props.submitAddForm}>
		<div>
			<button onClick={props.switchBar}><b>Add</b></button>
		</div>
		<div className="form-content">
			<div className="form-row">
				<div className="form-label"><label>Title</label></div>
				<div className="form-input"><input type="text" onChange={props.updateTitle} /></div>
			</div>
			<div className="form-row">
				<div className="form-label"><label>Author</label></div>
				<div className="form-input"><input type="text" onChange={props.updateAuthor} /></div>
			</div>
			<div className="form-row">
				<div className="form-submit"><button onClick={props.addNewBook}>Submit</button></div>
			</div>
		</div>
	</form>
);

export default AddBooks;
