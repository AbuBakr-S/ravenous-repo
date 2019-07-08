import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../components/BusinessList/BusinessList.js';
import SearchBar from '../components/SearchBar/SearchBar.';

class App extends Component {
  function App() {
    render() {
      return (
        <div className="App">
          <h1>ravenous</h1>
          <SearchBar />
          <BusinessList />
        </div>
      );
    }
  }
}

/*

# Default Code with no Component declaration for App.

function App() {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}
*/

export default App;
