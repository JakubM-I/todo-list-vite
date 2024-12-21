import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { configStateSelector, errorFetchExampleData, fetchExampleData, successFetchExampeData, toggleSortType } from "./configurationSlice";
import { saveConfigurationToLocalStorage } from "../../utils/localStorage";
import { fetchExampleDataFile } from "../../utils/fetchExampleTasks";
import { loadExampleTasks } from "../tasks/taskSlice";
import { loadExampleCategories } from "../categories/categorySlice";

function* saveConfigToLocalStorageWorker() {
    const configuration = yield select(configStateSelector);
    console.log(configuration);
    yield call(saveConfigurationToLocalStorage, configuration)
};

function* loadExampleDataWorker() {
    try {
        yield delay(1000);
        const exampleData = yield call(fetchExampleDataFile);
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