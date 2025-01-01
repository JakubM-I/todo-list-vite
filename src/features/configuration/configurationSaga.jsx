import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { configStateSelector, errorFetchExampleData, fetchExampleData, setWindowSize, successFetchExampeData, toggleSortType } from "./configurationSlice";
import { saveConfigurationToLocalStorage } from "../../utils/localStorage";
import { fetchExampleDataFile } from "../../utils/fetchExampleTasks";
import { loadExampleTasks } from "../tasks/taskSlice";
import { loadExampleCategories } from "../categories/categorySlice";
import { resizeWindow } from "./actions/uiAction";

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

function* setWindowSizeWorker() {
    yield put(setWindowSize(window.innerWidth));
}

export function* configurationSaga() {
    yield takeLatest(toggleSortType.type, saveConfigToLocalStorageWorker);
    yield takeLatest(fetchExampleData.type, loadExampleDataWorker);
    yield takeLatest(resizeWindow().type, setWindowSizeWorker);
};