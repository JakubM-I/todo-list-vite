import { call, select, takeEvery } from "redux-saga/effects";
import { categorySelector } from "./categorySlice";
import { saveCategoryToLocalStorage } from "../../utils/localStorage";
import { Category } from "../../types/interfaces";

function* saveCategoryToLocalStorageWorker() {
    const categories: Category = yield select(categorySelector);

    yield call(saveCategoryToLocalStorage, categories)
};

export function* categoriesSaga() {
    yield takeEvery("*", saveCategoryToLocalStorageWorker);
}