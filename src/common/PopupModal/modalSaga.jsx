import { delay, put, takeLatest } from "redux-saga/effects";
import { closeModal, closingModal, openModal, successModal } from "./modalSlice";

function* openModalWorker() {
};

function* closeModalWorker() {
    try {
        yield delay(1000);
        yield put(successModal());
        yield delay(1000);
        yield put(closeModal());
    } catch (error) {
        yield console.error(error);
    }
};

export function* modalSaga() {
    yield takeLatest(openModal.type, openModalWorker);
    yield takeLatest(closingModal.type, closeModalWorker);
};