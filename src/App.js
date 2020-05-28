import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFile: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(response => this.setState({ monsters: response }));
  }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       console.log(response);
  //       return response.json()
  //     })
  //     .then((response) => {
  //       console.log(response)
  //       return this.setState({ monsters: response })
  //     });
  // }

  handleChange = e => {
    this.setState({ searchFile: e.target.value });
  };

  filterMonsters = () => {
    return this.state.monsters.filter(monster =>
      monster.name.toLowerCase().includes(this.state.searchFile.toLowerCase())
    );
  };

  render() {
  
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={this.filterMonsters()} />
      </div>
    );
  }
}

export default App;
