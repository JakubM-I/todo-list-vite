import { createSlice } from "@reduxjs/toolkit";
import { loadTaskFromLocalStorage } from "../../utils/localStorage";

const taskSlice = createSlice({
    name: "tasksList",
    initialState: {
        tasks: loadTaskFromLocalStorage(),
        addFormOpen: false,
    },
    reducers: {
        addTask: ({tasks}, {payload: newTask}) => {
            tasks.push(newTask)
        },

        toggleTaskDone: (state, {payload: taskId}) => {
            const index = state.tasks.findIndex(task => task.id === taskId);
            state.tasks[index].taskDone = !state.tasks[index].taskDone;
        },

        removeTask: (state, {payload: taskId}) => {
            const index = state.tasks.findIndex(task => task.id === taskId)
            state.tasks.splice(index, 1)
            // state.tasks = state.tasks.filter(task => task.id !== taskId )
        },

        openAddForm: state => {
            state.addFormOpen = true;
        },
        closeAddForm: state => {
            state.addFormOpen = false;
        }
    }
});

export const taskStateSelector = state => state.tasks;
export const taskSelector = state => taskStateSelector(state).tasks;
export const addFormState = state => taskStateSelector(state).addFormOpen;
export const {addTask, toggleTaskDone, removeTask, openAddForm, closeAddForm} = taskSlice.actions;
export default taskSlice.reducer;