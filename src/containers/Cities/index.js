// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import citiesActions from './actions';

// Components
import City from '../../components/City';

class Cities extends Component {
  componentDidMount() {
    const { fetchCity } = this.props.actions;

    fetchCity();
  }

  _onDelete = (id) => {
    const { deleteCity } = this.props.actions;
    
    deleteCity(id);
  }

  render () {
    const { entities } = this.props.cities;

    return (
      <div className="cities-wrapper">
        {
          entities.map(city => {
            const { id, name, sys, wind, main} = city;
            const { icon, description } = city.weather[0];
            const { speed } = wind;
            const { temp } = main;

            return (
              <City
                key = { id }
                id = { id }
                name = { name }
                country = { sys.country }
                icon = { icon }
                description = { description }
                wind = { speed }
                temperature = { temp }
                onDelete = { this._onDelete }
              />
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = ({ cities }) => ({
  cities,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...citiesActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
