import React, { Component } from 'react';
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
	}
	doClick = () => {
		console.log(this.title);
	}
  render() {
    return (
      <div className="App">
				{this.books.map(({id, title, author}) => (
					<BookListAppTitle
						key={id}
						title={title}
						author={author}
						doClick={this.doClick}
					/>
				))}
      </div>
    );
  }
}

export default App;
