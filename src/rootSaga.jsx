import { all } from "redux-saga/effects";
import { modalSaga } from "./common/PopupModal/modalSaga"
import { tasksSaga } from "./features/tasks/tasksSaga";


export default function* rootSaga() {
    yield all([
        modalSaga(),
        tasksSaga(),
    ])
}