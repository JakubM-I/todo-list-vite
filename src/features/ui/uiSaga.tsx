import { put, takeLatest } from "redux-saga/effects";
import { setWindowSize } from "./uiSlice";
import { resizeWindow } from "./actions/uiAction";

function* setWindowSizeWorker() {
    yield put(setWindowSize(window.innerWidth));
}

export function* uiSaga() {
    yield takeLatest(resizeWindow().type, setWindowSizeWorker);
};