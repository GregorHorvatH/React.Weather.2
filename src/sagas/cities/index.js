// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import types from '../../containers/Cities/types';
import { fetchCityWorker } from './workers/fetchCity';

export default Object.freeze({
    * fetchCityWatcher () {
        yield takeEvery(types.FETCH_CITY, fetchCityWorker);
    },
});
