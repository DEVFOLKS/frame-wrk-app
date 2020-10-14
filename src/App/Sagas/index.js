import {takeLatest, all} from 'redux-saga/effects';
import {STARTUP} from '../Stores/Startup/Actions';
import {startup, signInGoogle , signUpGoogle,logOutUser, signInSuccess, loadData} from './startupSaga';
import API from '../Services/Api';


const api = API.create();


export default function* root() {
  yield all([takeLatest(STARTUP.LOAD_DATA, startup, api)]);
  yield all([takeLatest(STARTUP.SIGN_IN_GOOGLE, signInGoogle, api)]);
  yield all([takeLatest(STARTUP.SIGN_UP_GOOGLE, signUpGoogle, api)]);
  yield all([takeLatest(STARTUP.SIGN_IN_GOOGLE_SUCCESS, signInSuccess, api)]);
  yield all([takeLatest(STARTUP.LOG_OUT, logOutUser, api)]);
  yield all([takeLatest(STARTUP.LOAD_DATA, loadData, api)]);
}
