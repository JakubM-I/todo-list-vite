import { call, select, takeLatest } from "redux-saga/effects";
import { configStateSelector, fetchExampleData, toggleSortType } from "./configurationSlice";
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
        const exampleData = yield call(fetchExampleDataFile);
        yield put(loadExampleTasks(exampleData.tasks));
        yield put(loadExampleCategories(exampleData.categories));
    } catch (error) {
        yield call(alert, "Błąd wgrywania")
        yield console.log(error);
    }
}

export function* configurationSaga() {
    yield takeLatest(toggleSortType.type, saveConfigToLocalStorageWorker);
    yield takeLatest(fetchExampleData.type, loadExampleDataWorker);
};