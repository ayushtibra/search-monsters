import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
  state = {
    monsters: [],
    searchField: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }

  handleChange = (e) =>
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state.searchField)
    );

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Search Monsters</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
        {/* <button onClick={() => this.setState({})}>Click ME</button> */}
      </div>
    );
  }
}

export default App;
