// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import citiesActions from '../Cities/actions';

// Components
import Search from '../../components/Search';

class Header extends Component {
  _handleSelectCity = (id) => {
    const { deleteSearchEntities, fetchCity } = this.props.actions;

    console.log('city id: ', id);
    fetchCity(id);
    deleteSearchEntities();
  }

  render() {
    const { searchCity } = this.props.actions;
    const { searchEntities, isLoading } = this.props.cities;

    return (
      <header className="App-header">
        <h2>Weather</h2>
        <Search
          entities = { searchEntities }
          isLoading = { isLoading }
          onSearch = { searchCity }
          onSelect = { this._handleSelectCity }
        />
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
