// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Containers
import Cities from '../Cities';

// Components
import Header from '../../components/Header';

// Store
import store from '../../store';

// Styles
import './App.css';

library.add(faSearch);

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
