import { takeLatest } from "redux-saga/effects";
import { closeModal, openModal } from "./modalSlice";

function* openModalWorker() {
};

function* closeModalWorker() {
};

export function* modalSaga() {
    yield takeLatest(openModal.type, openModalWorker);
    yield takeLatest(closeModal.type, closeModalWorker);
};