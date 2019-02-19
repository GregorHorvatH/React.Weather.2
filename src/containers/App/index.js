// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Containers
import Cities from '../Cities';

// Components
import Header from '../../components/Header';

// Store
import store from '../../store';

// Styles
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <div className="App">
          <Header />
          <div className="App-body">
            <Cities />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
