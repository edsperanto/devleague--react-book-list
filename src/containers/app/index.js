import React, { Component } from 'react';
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
			showBooks: this.books
		};
	}
	preventFormDefault(event) {
		event.preventDefault();
	}
	search = (event) => {
		let query = event.target.value.toLowerCase().trim();
		this.setState({
			showBooks: this.books
				.filter(({title, author}) =>
					title.toLowerCase().indexOf(query) > -1 ||
					author.toLowerCase().indexOf(query) > -1
				)
		});
	}
  render() {
    return (
      <div className="App">
				<SearchBar
					preventFormDefault={this.preventFormDefault}
					search={this.search}
				/>
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
