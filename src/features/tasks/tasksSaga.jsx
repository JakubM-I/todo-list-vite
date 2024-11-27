import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchEXampleTask, loadExampleTasks, taskSelector } from "./taskSlice";
import { saveTaskToLocalStorage } from "../../utils/localStorage";
import { fetchExampleTasksFile } from "../../utils/fetchExampleTasks";

function* saveTaskLocalStorageWorker(){
    const tasks = yield select(taskSelector);
    console.log(tasks)

    yield call(saveTaskToLocalStorage, tasks)
}

function* fetchExampleTasksWorker() {
    try{
        const tasks = yield call(fetchExampleTasksFile);
        yield put(loadExampleTasks(tasks))
    } catch (error) {
        yield call(alert, "Błąd wgrywania")
        yield console.log(error);
    }
}


export function* tasksSaga(){
    yield takeEvery("*", saveTaskLocalStorageWorker);
    yield takeLatest(fetchEXampleTask.type, fetchExampleTasksWorker)
}