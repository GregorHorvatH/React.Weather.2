import types from './types';

const initialState = {
    cityEntities: [],
    searchEntities: [],
    isLoading: false,
};

const cities = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.FETCH_CITY_SUCCESS:
      return {
        ...state,
        cityEntities: [
          ...state.cityEntities.filter(city => city.id !== payload.id),
          payload,
        ],
      };
    case types.SEARCH_CITY_SUCCESS:
      return {
        ...state,
        searchEntities: payload,
      };
    case types.DELETE_SEARCH_ENTITIES:
      return {
        ...state,
        searchEntities: [],
      };
    case types.FETCH_CITY_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_CITY_STOP:
      return {
        ...state,
        isLoading: false,
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
