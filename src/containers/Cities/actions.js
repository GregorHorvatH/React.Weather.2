import types from './types';

export default Object.freeze({
  fetchCity: () => ({
    type: types.FETCH_CITY,
  }),
  fetchCitySuccess: (city) => ({
    type:    types.FETCH_CITY_SUCCESS,
    payload: city,
  }),
  fetchCityFail: (error) => ({
    type:    types.FETCH_CITY_FAIL,
    payload: error,
    error:   true,
  }),

  searchCity: (city) => ({
    type:    types.SEARCH_CITY,
    payload: city,
  }),
  searchCitySuccess: (city) => ({
    type:    types.SEARCH_CITY_SUCCESS,
    payload: city,
  }),
  searchCityFail: (error) => ({
    type:    types.SEARCH_CITY_FAIL,
    payload: error,
    error:   true,
  }),

  fetchCityStart: () => ({
    type: types.FETCH_CITY_START,
  }),
  fetchCityStop: () => ({
    type: types.FETCH_CITY_STOP,
  }),

  deleteCity: (id) => ({
    type: types.DELETE_CITY,
    payload: id,
  }),
});
