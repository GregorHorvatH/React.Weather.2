import types from './types';

const initialState = {
    entities: []
};

const cities = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.FETCH_CITY_SUCCESS:
      return {
        ...state,
        entities: [
          ...state.entities,
          payload,
        ],
      };
    case types.DELETE_CITY:
      return {
        ...state,
        entities: state.entities.filter(city => city.id !== payload),
      };
    default:
      return state;
  }
};

export default cities;
