import { configureStore } from "@reduxjs/toolkit";
import tasksListReducer from "./features/tasks/taskSlice";
import modalReducer from "./common/PopupModal/modalSlice";
import categoriesReducer from "./features/categories/categorySlice";
import configurationReducer from "./features/configuration/configurationSlice";
import uiReducer from "./features/ui/uiSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        tasks: tasksListReducer,
        modal: modalReducer,
        categories: categoriesReducer,
        configuration: configurationReducer,
        ui: uiReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store