import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { loadExampleTasks, taskSelector } from "./taskSlice";
import { saveTaskToLocalStorage } from "../../utils/localStorage";
import { fetchExampleDataFile } from "../../utils/fetchExampleTasks";
import { fetchExampleData } from "../configuration/configurationSlice";

function* saveTaskLocalStorageWorker(){
    const tasks = yield select(taskSelector);

    yield call(saveTaskToLocalStorage, tasks)
}

function* fetchExampleTasksWorker() {
    try{
        const tasks = yield call(fetchExampleDataFile);
        yield put(loadExampleTasks(tasks))
    } catch (error) {
        yield call(alert, "Błąd wgrywania")
        yield console.log(error);
    }
}


export function* tasksSaga(){
    yield takeEvery("*", saveTaskLocalStorageWorker);
    // yield takeLatest(fetchExampleData.type, fetchExampleTasksWorker)
}