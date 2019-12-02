import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import authSagas from './auth/saga';

const loadDashboardAsync = async () => {
    console.log('loadDashboardAsync');
		//const contacts = contactsData.data;
		//const currentUser = contacts[0];
		//return await new Promise((success, fail) => {
			//setTimeout(() => {
				//success({ contacts, currentUser });
			//}, 1000);
		//})
			//.then(response => response)
			//.catch(error => error);
}
function* loadDashboard() {
	try {
    console.log('loadDashboard');
		//const response = yield call(loadDashboardAsync);
		//const { contacts, currentUser } = response;
		//yield put(getContactsSuccess(contacts, currentUser));
  } catch (error) {
    console.log('error:loadDashboard');
    //yield put(getContactsError(error));
	}
}
export function* watchGetDashboard() {
  console.log('watchGetDashboard');
	//yield takeEvery(DASHBOARD_GET_DATA, loadDashboard);
}

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    fork(watchGetDashboard),
  ]);
}

