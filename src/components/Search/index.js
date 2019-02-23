// Core
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import './search.css';

function debounce(delay) {
  let timer;

  return function(fn) {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  }
}

class Search extends Component {
  state = {
    value: ''
  }

  componentDidMount() {
    this.input.focus();
  }

  _debounce = debounce(300)

  _handleChange = (event) => {
    const { onSearch } = this.props;
    const value = event.target.value;

    this._debounce(() => onSearch(value));
    this.setState({ value });
  }

  _handleSearch = () => {
    const { onSearch } = this.props;
    const { value } = this.state;

    onSearch(value);
  }

  _handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this._handleSearch();
    }
  }

  _handleSelectCity = (id) => {
    const { onSelect } = this.props;

    onSelect(id);
    this.setState({ value: '' });
  }

  _getSearchItems = (entities) => (
    <ul className="search-entities">
      {
        entities.map((city) => {
          const { id, name, sys, main } = city;
          const { country } = sys;
          let { temp } = main;
          temp = temp < 0 ? temp : `+${ temp }`

          return (
            <li key = { id } onClick = { () => this._handleSelectCity(id) }>
              { `${ name } (${ country }) °C ${ temp }` }
            </li>
          );
        })
      }
    </ul>
  )

  render () {
    const { value } = this.state;
    const { entities, isLoading } = this.props;

    return (
      <div className="search-wrapper">
        <div className="input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Your city name"
            ref = { (input) => this.input = input }
            onKeyPress = { this._handleKeyPress }
            onChange = { this._handleChange }
            value = { value }
          />
          <FontAwesomeIcon
            icon={ isLoading ? 'spinner' : 'search' }
            className="search-icon"
            onClick = { this._onSearch }
          />
        </div>
        {
          entities.length
            ? this._getSearchItems(entities)
            : null
        }
      </div>
    );
  }
}

export default Search;
