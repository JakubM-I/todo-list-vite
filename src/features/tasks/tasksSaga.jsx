import { call, select, takeEvery } from "redux-saga/effects";
import { taskSelector } from "./taskSlice";
import { saveTaskToLocalStorage } from "../../utils/localStorage";

function* saveTaskLocalStorageWorker(){
    const tasks = yield select(taskSelector);

    yield call(saveTaskToLocalStorage, tasks)
}

export function* tasksSaga(){
    yield takeEvery("*", saveTaskLocalStorageWorker);
}