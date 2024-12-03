import { select, takeEvery } from "redux-saga/effects";
import { categorySelector } from "./categorySlice";
import { saveCategoryToLocalStorage } from "../../utils/localStorage";

function* saveCategoryToLocalStorageWorker(){
    const categories = yield select(categorySelector);

    yield call(saveCategoryToLocalStorage, categories)
};

export function* categoriesSaga(){
    yield takeEvery("*", saveCategoryToLocalStorageWorker);
}