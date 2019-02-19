// Core
import React, { Component } from 'react';
import { string, number, func } from 'prop-types';

// Styles
import './city.css';

class City extends Component {
  _onDelete = () => {
    const { onDelete, id } = this.props;

    onDelete(id);
  }

  render () {
    const { name, country, icon, description, wind, temperature } = this.props;

    return (
      <div className="city box effect2">
        <p className="close" onClick = { this._onDelete }>x</p>
        <h3>{ name }</h3>
        <h4>{ country }</h4>
        <img
          className="weather-icon" 
          src={ `https://openweathermap.org/img/w/${ icon }.png` }
          alt={ `"Weather ${ name }, ${ country }"` }
        />
        <p className="temperature">{ temperature } °C</p>
        <p>{ wind } m/s</p>
        <p>{ description }</p>
      </div>
    );
  }
}

City.propTypes = {
  id: number,
  name: string,
  country: string,
  icon: string,
  description: string,
  wind: number,
  temperature: number,
  onDelete: func
};

export default City;
