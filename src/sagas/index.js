// Core
import { all } from 'redux-saga/effects';

// Instruments
import cities from '../containers/Cities/saga';

export function* saga () {
  yield all([
    cities.fetchCityWatcher(),
  ]);
}
