// Core
import { put, call } from 'redux-saga/effects';

// Instruments
import citiesActions from '../../../../containers/Cities/actions';

export function* fetchCityWorker ({ payload: options }) {
    try {
        yield put(citiesActions.fetchCityStart());

        const response = yield call(
            fetch,
            `https://api.openweathermap.org/data/2.5/weather?units=metric&q=kyiv&appid=ecd63065bd25bdde07e45cd2f66852ce`,
            { method:  'GET' }
        );

        const city = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error('error get pets');
        }

        yield put(citiesActions.fetchCitySuccess(city));
    } catch (error) {
        yield put(citiesActions.fetchCityFail(error.message));
    } finally {
        yield put(citiesActions.fetchCityStop());
    }
}
