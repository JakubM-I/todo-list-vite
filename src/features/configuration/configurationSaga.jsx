import { call, select, takeLatest } from "redux-saga/effects";
import { configStateSelector, toggleSortType } from "./configurationSlice";
import { saveConfigurationToLocalStorage } from "../../utils/localStorage";

function* saveConfigToLocalStorageWorker() {
    const configuration = yield select(configStateSelector);
    console.log(configuration);
    yield call(saveConfigurationToLocalStorage, configuration)
};

export function* configurationSaga() {
    yield takeLatest(toggleSortType.type, saveConfigToLocalStorageWorker);
};