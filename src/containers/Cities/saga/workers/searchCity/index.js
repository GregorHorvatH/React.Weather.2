// Core
import { put, call } from 'redux-saga/effects';

// Instruments
import citiesActions from '../../../actions';

export function* searchCityWorker ({ payload: city }) {
    try {
        yield put(citiesActions.fetchCityStart());

        const response = yield call(
            fetch,
            `https://api.openweathermap.org/data/2.5/find?q=${ city }&appid=ecd63065bd25bdde07e45cd2f66852ce`,
            { method:  'GET' }
        );

        if (response.status !== 200) {
            throw new Error('error search city');
        }

        const result = yield call([response, response.json]);
        const { list: cities } = result

        yield put(citiesActions.searchCitySuccess(cities));
    } catch (error) {
        yield put(citiesActions.searchCityFail(error.message));
    } finally {
        yield put(citiesActions.fetchCityStop());
    }
}
