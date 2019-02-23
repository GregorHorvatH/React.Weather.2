// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import types from '../types';
import { fetchCityWorker } from './workers/fetchCity';
import { searchCityWorker } from './workers/searchCity';

export default Object.freeze({
    * fetchCityWatcher () {
        yield takeEvery(types.FETCH_CITY, fetchCityWorker);
        yield takeEvery(types.SEARCH_CITY, searchCityWorker);
    },
});
