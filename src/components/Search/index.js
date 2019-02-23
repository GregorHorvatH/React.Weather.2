// Core
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => (
  <div className="search-wrapper">
    <input type="text" className="search-input" placeholder="Your city name" />
    <button type="submit" className="search-button">
      <FontAwesomeIcon icon="search" className="search-icon" />
    </button>
  </div>
);

export default Search;
