import { call, select, takeLatest } from "redux-saga/effects";
import { configurationStateSelector, toggleSortType } from "./configurationSlice";
import { saveConfigurationToLocalStorage } from "../../utils/localStorage";

function* saveConfigToLocalStorageWorker() {
    const configuration = yield select(configurationStateSelector);
    console.log(configuration);
    yield call(saveConfigurationToLocalStorage, configuration)
};

export function* configurationSaga() {
    yield takeLatest(toggleSortType.type, saveConfigToLocalStorageWorker);
};