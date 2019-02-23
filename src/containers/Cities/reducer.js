import types from './types';

const initialState = {
    cityEntities: [],
    searchEntities: []
};

const cities = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.FETCH_CITY_SUCCESS:
      return {
        ...state,
        cityEntities: [
          ...state.cityEntities,
          payload,
        ],
      };
    case types.DELETE_CITY:
      return {
        ...state,
        cityEntities: state.cityEntities.filter(city => city.id !== payload),
      };
    default:
      return state;
  }
};

export default cities;
