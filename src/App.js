import { Header } from './components/Header';
import { Counter } from './components/Counter';
import { Search } from './components/Search';
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
		super(props);

		this.state = {
			// todoData: [
			// 	this.createTask('Drink Coffee'),
			// 	this.createTask('Make Awesome App'),
			// 	this.createTask('Have a lunch'),
			// ],
			search: '',
		};
	}

  onSearch = (search) => {
    this.setState({
			search,
		});
  }

  render() {
    return (
      <div className="App">
        <Header />

        <div className='container'>
          <Counter />

          <div className='search'>
            <Search onChangeSearch={this.onSearch} />
            <div>
              String for search: { this.state.search }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
