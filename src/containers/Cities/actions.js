import types from './types';

export default Object.freeze({
  fetchCity: () => ({
    type: types.FETCH_CITY
  }),
  fetchCitySuccess: (city) => ({
    type:    types.FETCH_CITY_SUCCESS,
    payload: city
  }),
  fetchCityFail: (error) => ({
    type:    types.FETCH_CITY_FAIL,
    payload: error,
    error:   true
  }),
  fetchCityStart: () => ({
    type: types.FETCH_CITY_START
  }),
  fetchCityStop: () => ({
    type: types.FETCH_CITY_STOP
  }),

  deleteCity: (id) => ({
    type: types.DELETE_CITY,
    payload: id
  }),
});
