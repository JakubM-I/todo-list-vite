import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { configStateSelector, errorFetchExampleData, fetchExampleData, successFetchExampeData, toggleSortType } from "./configurationSlice.ts";
import { saveConfigurationToLocalStorage } from "../../utils/localStorage.tsx";
import { fetchExampleDataFile } from "../../utils/fetchExampleTasks.tsx";
import { loadExampleTasks } from "../tasks/taskSlice.jsx";
import { loadExampleCategories } from "../categories/categorySlice.ts";
import { Configuration, ExampleData } from "../../types/interfaces.ts";

function* saveConfigToLocalStorageWorker() {
    const configuration: Configuration = yield select(configStateSelector);
    yield call(saveConfigurationToLocalStorage, configuration)
};

function* loadExampleDataWorker() {
    try {
        yield delay(1000);
        const exampleData: ExampleData = yield call(fetchExampleDataFile);
        yield put(loadExampleTasks(exampleData.tasks));
        yield put(loadExampleCategories(exampleData.categories));

        yield put(successFetchExampeData());
    } catch (error) {
        yield put(errorFetchExampleData());
        yield console.error(error);
    }
}

export function* configurationSaga() {
    yield takeLatest(toggleSortType.type, saveConfigToLocalStorageWorker);
    yield takeLatest(fetchExampleData.type, loadExampleDataWorker);
};