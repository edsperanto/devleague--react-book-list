import React, { Component } from 'react';
import AddBooks from '../../components/AddBooks';
import SearchBar from '../../components/SearchBar';
import BookListAppTitle from '../../components/BookListAppTitle';
import './styles.css';

class App extends Component {
	constructor() {
		super();
		this.title = 'Book List App';
		this.count = 3;
		this.books = [
			{
				id: 1,
				title: '1984',
				author: 'George Orwell'
			},
			{
				id: 2,
				title: 'Brave New World',
				author: 'Aldous Huxley'
			},
			{
				id: 3,
				title: 'I have no mouth, and I must scream',
				author: 'Harlan Ellison'
			}
		];
		this.state = {
			showBooks: this.books,
			addBooks: true,
			titleQuery: '',
			authorQuery: ''
		};
	}
	preventFormDefault(event) {
		event.preventDefault();
	}
	search = (event) => {
		let query = '';
		if(event)
			query = event.target.value.toLowerCase().trim();
		this.setState({
			showBooks: this.books
				.filter(({title, author}) =>
					title.toLowerCase().indexOf(query) > -1 ||
					author.toLowerCase().indexOf(query) > -1
				)
		});
	}
	updateTitle = (event) => {
		let title = event.target.value.trim();
		this.setState({
			titleQuery: title
		});
	}
	updateAuthor = (event) => {
		let author = event.target.value.trim();
		this.setState({
			authorQuery: author
		});
	}
	submitAddForm = (event) => {
		event.preventDefault();
		this.books.push({
			id: ++this.count,
			title: this.state.titleQuery,
			author: this.state.authorQuery
		});
		this.search();
	}
	switchBar = (event) => {
		event.preventDefault();
		this.setState({
			addBooks: !this.state.addBooks
		});
	}
  render() {
    return (
      <div className="App">
				{this.state.addBooks ? (
					<AddBooks
						switchBar={this.switchBar}
						updateTitle={this.updateTitle}
						updateAuthor={this.updateAuthor}
						submitAddForm={this.submitAddForm}
					/>
				) : (
					<SearchBar
						switchBar={this.switchBar}
						preventFormDefault={this.preventFormDefault}
						search={this.search}
					/>
				)}
				{this.state.showBooks.map(({id, title, author}) => (
					<BookListAppTitle
						key={id}
						title={title}
						author={author}
					/>
				))}
      </div>
    );
  }
}

export default App;
