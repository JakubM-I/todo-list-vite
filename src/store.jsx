import { configureStore } from "@reduxjs/toolkit";
import tasksListReducer from "./features/tasks/taskSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksListReducer,
    }
})