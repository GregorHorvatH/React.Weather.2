// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import citiesActions from '../Cities/actions';

// Components
import Search from '../../components/Search';

class Header extends Component {
  render() {
    const { searchCity } = this.props.actions;
    const { searchEntities } = this.props.cities;

    return (
      <header className="App-header">
        <h2>Weather</h2>
        <Search onSearch = { searchCity } entities = { searchEntities } />
      </header>
    );
  }
}

const mapStateToProps = ({ cities }) => ({
  cities,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...citiesActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
