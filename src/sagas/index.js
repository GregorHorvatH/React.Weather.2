// Core
import { all } from 'redux-saga/effects';

// Instruments
import cities from './cities';

export function* saga () {
  yield all([
    cities.fetchCityWatcher(),
  ]);
}
