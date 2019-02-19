// Core
import { combineReducers } from 'redux';

import cities from '../containers/Cities/reducer';

const rootReducer = combineReducers({
  cities,
});

export default rootReducer;
