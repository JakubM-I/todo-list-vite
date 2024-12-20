import { configureStore } from "@reduxjs/toolkit";
import tasksListReducer from "./features/tasks/taskSlice";
import modalReducer from "./common/PopupModal/modalSlice";
import categoriesReducer from "./features/categories/categorySlice";
import configurationReducer from "./features/configuration/configurationSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksListReducer,
        modal: modalReducer,
        categories: categoriesReducer,
        configuration: configurationReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export default store;