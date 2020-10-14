import { put, call, select, delay } from "redux-saga/effects";
import STARTUPACTIONS from "../Stores/Startup/Actions";
import { push } from "connected-react-router";
import { HistoryWrapper } from "../Navigators/HostoryWrapper";

//Saga for business logic handling

export function* startup(api, action) {}

export function* signInGoogle(api, action) {
  try {
    const response = yield call(api.googleSignIn, action.token);
    console.log("acc", response);
    if (response.ok) {
      var resp = response.data.data;
      api.setAuthToken(resp.accessToken);
      yield put(STARTUPACTIONS.signInGoogleSuccess(resp));
    } else {
      yield put(STARTUPACTIONS.signInGoogleFailure(response.error));
    }
  } catch (err) {
    yield put(STARTUPACTIONS.signInGoogleFailure(err));
  }
}

export function* signUpGoogle(api, action) {
  try {
    const response = yield call(api.googleSignUp, action.token);

    console.log("acc", response);
    if (response.ok) {
      var resp = response.data.data;
      api.setAuthToken(resp.accessToken);
      yield put(STARTUPACTIONS.signUpGoogle(action.token));
    } else {
      yield put(STARTUPACTIONS.signInGoogleFailure(response.error));
    }
  } catch (err) {
    yield put(STARTUPACTIONS.signInGoogleFailure(err.message));
  }
}

export function* signInSuccess(api, action) {
  try {
    var role = "user";
    yield put(STARTUPACTIONS.setRole(role));
    yield put(push(`${role}/dashboard`));
    // HistoryWrapper.history.push('/user');
  } catch (err) {}
}

export function* logOutUser(api, action) {
  try {
    let state = yield select();
    console.log("sr", state);
    api.setUserIdHeader(state.startup.user.userId);
    const response = yield call(api.logOutUser, action.token);

    console.log("acc", response);
    if (response.ok) {
      var resp = response.data.data;
      api.removeUserHeader();
      api.removeAuthToken()
      localStorage.clear()
      yield put(STARTUPACTIONS.logOutSuccess(resp));
      yield put(push("/login"));
    } else {
      yield put(STARTUPACTIONS.logOutFailure(response.error));
      api.removeUserHeader();
    }
  } catch (err) {
    yield put(STARTUPACTIONS.logOutFailure(err.message));
    api.removeUserHeader();
  }
}

export function* loadData(api, action) {
  try {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      api.setAuthToken(user.accessToken);
      yield put(STARTUPACTIONS.loadDataSuccess())
    }
  } catch (err) {
    console.log(err);
  }
}
