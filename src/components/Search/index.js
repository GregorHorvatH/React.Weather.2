// Core
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import './search.css';

class Search extends Component {
  state = {
    value: ''
  }

  componentDidMount() {
    this.input.focus();
  }

  _onChange = (event) => {
    const value = event.target.value;

    this.setState({ value });
  }

  _onSearch = () => {
    const { onSearch } = this.props;
    const { value } = this.state;

    onSearch(value);
  }

  render () {
    return (
      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Your city name"
          onChange = { this._onChange }
          ref = { (input) => this.input = input }
        />
        <FontAwesomeIcon icon="search" className="search-icon"  onClick = { this._onSearch } />
      </div>
    );
  }
}

export default Search;
