import React from 'react';

const Header = () => (
  <header className="App-header">
    <h2>Weather</h2>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search" id="q" name="q" />
      <span class="input-group-btn">
        <button type="submit" class="btn btn-default">
          <i class="fa fa-search" />
        </button>
      </span>
    </div>
  </header>
);

export default Header;
