import { delay, put, takeLatest } from "redux-saga/effects";
import { closeModal, closingModal, openModal, successModal } from "./modalSlice";

function* openModalWorker() {
};

function* closeModalWorker() {
    yield delay(1000);
    yield put(successModal());
    yield delay(1000);
    yield put(closeModal());
};

export function* modalSaga() {
    yield takeLatest(openModal.type, openModalWorker);
    yield takeLatest(closingModal.type, closeModalWorker);
};