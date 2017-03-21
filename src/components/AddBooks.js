import React from 'react';

const AddBooks = (props) => (
	<form className="App-header" onSubmit={props.submitAddForm}>
		<table><tbody>
			<tr><td>
				<button onClick={props.switchBar}><b>Add</b></button>
			</td></tr>
			<tr><td className="form-content">
				<label>Title</label>
				<input type="text" onChange={props.updateTitle} />
				<label>Author</label>
				<input type="text" onChange={props.updateAuthor} />
				<button onClick={props.addNewBook}>Submit</button>
			</td></tr>
		</tbody></table>
	</form>
);

export default AddBooks;
