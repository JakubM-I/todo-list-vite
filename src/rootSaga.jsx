import { all } from "redux-saga/effects";
import { modalSaga } from "./common/PopupModal/modalSaga"


export default function* rootSaga() {
    yield all([
        modalSaga(),
    ])
}